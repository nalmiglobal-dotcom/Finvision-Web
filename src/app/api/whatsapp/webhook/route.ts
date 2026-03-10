import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { generateAIResponse } from '@/lib/openai';
import { sendWhatsAppMessage } from '@/lib/whatsapp';

// Types
interface WebhookMessage {
  from: string;
  id: string;
  timestamp: string;
  type: 'text' | 'image' | 'document' | 'audio' | 'video' | 'interactive';
  text?: { body: string };
  image?: { id: string; mime_type: string };
  interactive?: { type: string; button_reply?: { id: string; title: string } };
}

interface WebhookPayload {
  object: string;
  entry: Array<{
    id: string;
    changes: Array<{
      value: {
        messaging_product: string;
        metadata: { display_phone_number: string; phone_number_id: string };
        messages?: WebhookMessage[];
        statuses?: Array<{
          id: string;
          status: 'sent' | 'delivered' | 'read' | 'failed';
          timestamp: string;
          recipient_id: string;
        }>;
      };
      field: string;
    }>;
  }>;
}

// Verify webhook signature
function verifyWebhookSignature(payload: string, signature: string): boolean {
  const appSecret = process.env.WHATSAPP_APP_SECRET || '';
  if (!appSecret) return true; // Skip verification in development

  const expectedSignature = `sha256=${crypto
    .createHmac('sha256', appSecret)
    .update(payload)
    .digest('hex')}`;

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(signature)
    );
  } catch {
    return false;
  }
}

// GET: Webhook verification (required by WhatsApp)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  console.log('Webhook verification request:', { mode, token: token?.substring(0, 10) });

  if (mode === 'subscribe' && token === process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN) {
    console.log('✅ Webhook verified successfully');
    return new NextResponse(challenge);
  }

  console.error('❌ Webhook verification failed');
  return new NextResponse('Forbidden', { status: 403 });
}

// POST: Receive messages from WhatsApp
export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get('x-hub-signature-256') || '';
    const payload = await request.text();

    // Verify signature if app secret is configured
    if (process.env.WHATSAPP_APP_SECRET && !verifyWebhookSignature(payload, signature)) {
      console.error('❌ Invalid webhook signature');
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body: WebhookPayload = JSON.parse(payload);

    // Process webhook asynchronously (WhatsApp requires 200 response within 30 seconds)
    processWebhook(body).catch(error => {
      console.error('Error processing webhook:', error);
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ success: true }, { status: 200 }); // Still return 200 to avoid retries
  }
}

async function processWebhook(body: WebhookPayload): Promise<void> {
  if (body.object !== 'whatsapp_business_account') return;

  for (const entry of body.entry) {
    for (const change of entry.changes) {
      const { messages, statuses } = change.value;
      const phoneNumberId = change.value.metadata.phone_number_id;

      // Process incoming messages
      if (messages) {
        for (const message of messages) {
          await handleIncomingMessage(message, phoneNumberId);
        }
      }

      // Log message delivery status
      if (statuses) {
        for (const status of statuses) {
          console.log(`📊 Message ${status.id} status: ${status.status}`);
        }
      }
    }
  }
}

async function handleIncomingMessage(
  message: WebhookMessage,
  phoneNumberId: string
): Promise<void> {
  try {
    let messageText = '';

    // Extract text from different message types
    if (message.type === 'text' && message.text) {
      messageText = message.text.body;
    } else if (message.type === 'interactive' && message.interactive?.button_reply) {
      messageText = message.interactive.button_reply.title;
    } else if (message.type === 'image') {
      messageText = 'I received your image. How can I help you with The Trading Institute?';
    } else {
      console.log(`⚠️ Unsupported message type: ${message.type}`);
      return;
    }

    console.log(`📨 Message from ${message.from}: ${messageText}`);

    // Show typing indicator (optional - implement if needed)
    // await sendTypingIndicator(message.from, phoneNumberId);

    // Generate AI response as finvision
    const aiResponse = await generateAIResponse(messageText);

    // Send response back via WhatsApp
    const success = await sendWhatsAppMessage(message.from, aiResponse, phoneNumberId);

    if (success) {
      console.log(`✅ Response sent to ${message.from}`);
    } else {
      console.error(`❌ Failed to send response to ${message.from}`);
    }
  } catch (error) {
    console.error('Error handling incoming message:', error);
    
    // Send fallback error message
    try {
      await sendWhatsAppMessage(
        message.from,
        'Sorry, I encountered a technical issue. Please try again in a moment.',
        phoneNumberId
      );
    } catch (fallbackError) {
      console.error('Failed to send error message:', fallbackError);
    }
  }
}
