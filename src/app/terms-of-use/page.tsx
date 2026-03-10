import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-6 md:p-10 lg:p-12 border border-border">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Terms of Use
            </h1>
            <p className="text-muted-foreground text-sm mb-8">
              Last Updated: November 12, 2025
            </p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed text-muted-foreground">
                  By accessing and using the Finvision website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services. Finvision reserves the right to modify these terms at any time, and continued use of the website constitutes acceptance of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Services</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Finvision provides financial trading education including but not limited to offline classes, live trading sessions, recorded lectures, mentorship programs, certification courses, and study materials. Our courses cover forex trading, currency markets, technical analysis, fundamental analysis, risk management, and trading psychology.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Eligibility</h2>
                <p className="leading-relaxed text-muted-foreground">
                  You must be at least 18 years of age to enroll in our courses and use our services. By using our platform, you represent that you meet this age requirement and have the legal capacity to enter into binding agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Course Enrollment & Payment</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All course fees must be paid in full before access is granted, unless otherwise specified.</li>
                  <li>Payments are processed through secure UPI and bank transfer methods.</li>
                  <li>Course prices are subject to change without prior notice, but enrolled students will not be affected.</li>
                  <li>A valid UTR number and payment screenshot are required for enrollment verification.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Intellectual Property</h2>
                <p className="leading-relaxed text-muted-foreground">
                  All content on this website, including but not limited to course materials, videos, text, graphics, logos, images, and software, is the property of Finvision and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. User Conduct</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You agree not to share, distribute, or resell any course materials or recorded lectures.</li>
                  <li>You shall not use the platform for any unlawful or unauthorized purpose.</li>
                  <li>You agree not to disrupt or interfere with the security or proper functioning of the website.</li>
                  <li>Sharing login credentials with others is strictly prohibited.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Disclaimer</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Trading in financial markets involves substantial risk of loss. Finvision provides education and training only. We do not guarantee profits or specific trading results. Past performance of strategies discussed in our courses does not guarantee future results. All trading decisions are solely your responsibility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Limitation of Liability</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Finvision shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of our services or courses. This includes, but is not limited to, financial losses incurred through trading activities based on knowledge gained from our courses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Mentorship & Support</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Lifetime free mentorship and future assistance are provided as part of our commitment to student success. The scope and availability of mentorship may vary and is subject to Finvision&apos;s operational capacity. Mentorship is for educational guidance only and does not constitute investment advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Contact</h2>
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
