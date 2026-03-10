import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { pdfBase64, phoneNumber, courseName, studentName } = await req.json();

    if (!pdfBase64 || !phoneNumber) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

    if (!accessToken || !phoneNumberId) {
      console.error('WhatsApp API credentials not configured');
      return NextResponse.json({ error: 'WhatsApp API not configured' }, { status: 500 });
    }

    // 1. Convert base64 to Blob for upload
    const byteCharacters = atob(pdfBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });

    // 2. Upload media to WhatsApp
    const formData = new FormData();
    formData.append('file', blob, `Invoice_${studentName.replace(/\s+/g, '_')}.pdf`);
    formData.append('type', 'application/pdf');
    formData.append('messaging_product', 'whatsapp');

    const uploadResponse = await fetch(
      `https://graph.facebook.com/v21.0/${phoneNumberId}/media`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      }
    );

    const uploadData = await uploadResponse.json();

    if (!uploadResponse.ok) {
      console.error('WhatsApp Media Upload Error:', uploadData);
      return NextResponse.json({ error: 'Failed to upload invoice to WhatsApp' }, { status: 500 });
    }

    const mediaId = uploadData.id;

    // 3. Send document message
    const sendResponse = await fetch(
      `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: phoneNumber.startsWith('91') ? phoneNumber : `91${phoneNumber}`,
          type: 'document',
          document: {
            id: mediaId,
            filename: `Finvision_Invoice_${courseName.replace(/\s+/g, '_')}.pdf`,
            caption: `Hello ${studentName}! Here is your invoice for the ${courseName}. Welcome to Finvision!`,
          },
        }),
      }
    );

    const sendData = await sendResponse.json();

    if (!sendResponse.ok) {
      console.error('WhatsApp Message Send Error:', sendData);
      return NextResponse.json({ error: 'Failed to send invoice via WhatsApp' }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: sendData.messages[0].id });
  } catch (error) {
    console.error('Invoice send error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
