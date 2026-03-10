import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-6 md:p-10 lg:p-12 border border-border">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Refund Policy
            </h1>
            <p className="text-muted-foreground text-sm mb-8">
              Last Updated: November 12, 2025
            </p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  At Finvision, we strive to provide the highest quality financial trading education. We understand that circumstances may arise where you need to request a refund. This policy outlines the conditions and procedures for refund requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Refund Eligibility</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Within 24 Hours:</strong> Full refund is available if requested within 24 hours of payment, provided no course material has been accessed.</li>
                  <li><strong>Within 7 Days:</strong> A partial refund (50%) may be considered if requested within 7 days of enrollment, subject to review.</li>
                  <li><strong>After 7 Days:</strong> No refund will be issued after 7 days of enrollment or once significant course material has been accessed.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Non-Refundable Items</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Free courses and promotional offers</li>
                  <li>Certification fees once the certification process has been initiated</li>
                  <li>Study materials once downloaded or accessed</li>
                  <li>Courses where more than 25% of content has been consumed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Refund Process</h2>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Contact our support team via WhatsApp at +91-9630065800 or email support@myfinvision.com</li>
                  <li>Provide your enrollment details, payment UTR number, and reason for refund</li>
                  <li>Our team will review your request within 3-5 business days</li>
                  <li>If approved, the refund will be processed to your original payment method within 7-10 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Course Transfer</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Instead of a refund, you may request a one-time course transfer to another person. The transfer must be requested within 7 days of enrollment and is subject to approval. Course upgrades (e.g., Basic to Advance) are available by paying the difference in course fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Technical Issues</h2>
                <p className="leading-relaxed text-muted-foreground">
                  If you experience technical issues that prevent you from accessing course content, please contact our support team immediately. We will work to resolve the issue. If the issue cannot be resolved within a reasonable timeframe, a full refund may be issued.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Disputes</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Any disputes regarding refunds shall be resolved through direct communication with our support team. If a resolution cannot be reached, the matter will be subject to the jurisdiction of courts in Raipur, Chhattisgarh, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Contact for Refunds</h2>
                <div className="bg-muted p-6 rounded-lg space-y-2 text-muted-foreground">
                  <p className="font-semibold text-primary text-lg">Finvision</p>
                  <p>Institute of Financial Training and Emerging Skills</p>
                  <p><strong>Address:</strong> Office 3024, Currency Tower, VIP Chowk, Raipur (C.G.)-492001</p>
                  <p><strong>Phone:</strong> +91 9630065800 | +91 8889199977 | +91 8889199933</p>
                  <p><strong>Email:</strong> support@myfinvision.com</p>
                  <p><strong>Office Hours:</strong> Monday - Saturday: 10:00 AM - 6:00 PM | Sunday: Closed</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
