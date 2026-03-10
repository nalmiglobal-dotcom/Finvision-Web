/**
 * OpenAI Integration for finvision WhatsApp Bot
 * Generates AI responses about The Trading Institute
 */

export async function generateAIResponse(userMessage: string): Promise<string> {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      console.error('❌ OPENAI_API_KEY not configured');
      return 'Hello! I\'m finvision, your assistant for The Trading Institute. I\'m currently being set up. Please try again later or call us at 9109275374.';
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are finvision, a helpful and friendly AI assistant for The Trading Institute (TTI), India's leading financial education institute.

ABOUT THE TRADING INSTITUTE:
- Location: Indore, Madhya Pradesh, India
- Contact: 9109275374, +91 731-4088970
- Email: info@thetradinginstitute.in
- Website: thetradinginstitute.in
- Timing: Monday-Friday 10 AM-7 PM, Saturday 10 AM-5 PM, Sunday Closed

OUR MISSION: To democratize financial knowledge and empower individuals to achieve financial independence through expert guidance, innovative teaching methodologies, and practical application.

OUR VISION: To foster financial growth by empowering individuals to become successful investors and create a financially stable society.

COURSES OFFERED:
1. Security Market Module - Comprehensive stock market training
2. Technical Charter Module - Advanced technical analysis and charting
3. International Market Module - Global trading strategies

KEY FEATURES:
- 15+ years of experience
- 14,000+ certified traders
- 20+ expert team members
- Both online and offline classes
- Lifetime free mentorship
- 100% practical and live trading
- Risk management training
- Psychology build-up classes
- Certification course
- Mock tests and study materials
- 85%+ trading strategy accuracy
- Recorded lectures available

INSTRUCTOR: Experienced mentor with 15+ years in financial markets, specializing in both domestic and international trading.

YOUR ROLE:
- Answer questions about courses, admissions, fees, and institute details
- Be concise (under 1000 characters for WhatsApp)
- Be professional yet friendly
- Guide users to contact the institute for enrollment: 9109275374
- Promote the institute's unique selling points
- Always sign off as "finvision, The Trading Institute"

IMPORTANT:
- Keep responses brief and conversational
- Use Indian English and context
- Include emojis occasionally for friendliness
- For specific pricing, direct to phone: 9109275374
- For enrollment, encourage visiting website or calling
- Mention lifetime mentorship and practical training as key benefits`,
          },
          { role: 'user', content: userMessage },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      throw new Error(`OpenAI error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    
    // Fallback response
    return `Hello! I'm finvision from The Trading Institute. 

We offer expert-led trading courses with 15+ years of experience and 14,000+ certified traders.

📚 Courses: Security Market, Technical Charter, International Market
✨ Features: Lifetime mentorship, 100% practical training, risk management

For details, call: 9109275374
Or visit: thetradinginstitute.in

How can I help you today?

- finvision, The Trading Institute`;
  }
}
