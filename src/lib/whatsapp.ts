/**
 * WhatsApp Business API Integration
 * Send messages via WhatsApp Cloud API
 */

interface WhatsAppTextMessage {
  messaging_product: 'whatsapp';
  recipient_type: 'individual';
  to: string;
  type: 'text';
  text: {
    body: string;
    preview_url?: boolean;
  };
}

interface WhatsAppErrorResponse {
  error: {
    code: number;
    message: string;
    type: string;
    error_data?: {
      details: string;
    };
  };
}

const ERROR_MESSAGES: Record<number, string> = {
  400: 'Bad request - invalid message format',
  401: 'Unauthorized - invalid access token',
  403: 'Forbidden - app not allowed to send messages',
  404: 'Phone number not found',
  429: 'Rate limited - too many requests',
  500: 'WhatsApp server error - try again later',
};

/**
 * Send a text message via WhatsApp Business API
 * @param recipientPhoneNumber - Phone number with country code (e.g., 919876543210)
 * @param messageText - Text message to send
 * @param phoneNumberId - WhatsApp phone number ID (optional, uses env variable)
 * @returns Success status
 */
export async function sendWhatsAppMessage(
  recipientPhoneNumber: string,
  messageText: string,
  phoneNumberId: string = process.env.WHATSAPP_PHONE_NUMBER_ID!
): Promise<boolean> {
  try {
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

    if (!accessToken || !phoneNumberId) {
      console.error('❌ WhatsApp credentials not configured');
      console.error('Missing:', {
        accessToken: !accessToken,
        phoneNumberId: !phoneNumberId,
      });
      return false;
    }

    // Prepare message payload
    const payload: WhatsAppTextMessage = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: recipientPhoneNumber,
      type: 'text',
      text: {
        body: messageText,
        preview_url: true, // Enable URL previews
      },
    };

    // Send via WhatsApp Cloud API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const error: WhatsAppErrorResponse = await response.json();
      const errorMessage = ERROR_MESSAGES[error.error.code] || error.error.message;
      
      console.error('WhatsApp API error:', {
        code: error.error.code,
        message: errorMessage,
        details: error.error.error_data?.details,
      });
      
      return false;
    }

    const data = await response.json();
    console.log('✅ WhatsApp message sent:', {
      messageId: data.messages?.[0]?.id,
      to: recipientPhoneNumber,
    });

    return true;
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return false;
  }
}

/**
 * Send WhatsApp message with retry logic
 * @param recipientPhoneNumber - Phone number with country code
 * @param messageText - Text message to send
 * @param maxRetries - Maximum number of retry attempts
 * @returns Success status
 */
export async function sendWhatsAppMessageWithRetry(
  recipientPhoneNumber: string,
  messageText: string,
  maxRetries: number = 3
): Promise<boolean> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const success = await sendWhatsAppMessage(recipientPhoneNumber, messageText);
      
      if (success) {
        return true;
      }
      
      // Wait before retrying (exponential backoff)
      if (attempt < maxRetries - 1) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error) {
      console.error(`Retry attempt ${attempt + 1} failed:`, error);
      
      if (attempt === maxRetries - 1) {
        return false;
      }
    }
  }
  
  return false;
}

/**
 * Format phone number to WhatsApp format (remove spaces, dashes, plus)
 * @param phoneNumber - Phone number in any format
 * @returns Cleaned phone number
 */
export function formatPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/[\s\-\+\(\)]/g, '');
}

/**
 * Validate phone number format
 * @param phoneNumber - Phone number to validate
 * @returns True if valid
 */
export function isValidPhoneNumber(phoneNumber: string): boolean {
  const cleaned = formatPhoneNumber(phoneNumber);
  // Should be 10-15 digits (international format)
  return /^\d{10,15}$/.test(cleaned);
}
