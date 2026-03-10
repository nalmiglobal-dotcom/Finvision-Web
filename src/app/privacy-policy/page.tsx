import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-6 md:p-10 lg:p-12 border border-border">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-text-secondary text-sm mb-8">
              Last Updated: November 12, 2025
            </p>

            <div className="space-y-8 text-text-primary">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  Welcome to Finvision ("we," "our," or "us"). Finvision is a premier institute dedicated to financial training and emerging skills development, empowering individuals to achieve financial independence through expert guidance in securities markets, technical analysis, international trading, and comprehensive investment education. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, enroll in our courses, or engage with our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      1.1 Personal Information
                    </h3>
                    <p className="leading-relaxed mb-2">
                      When you interact with Finvision, we may collect personal information that you voluntarily provide to us, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Contact Information:</strong> Full name, email address, phone number, mailing address</li>
                      <li><strong>Account Credentials:</strong> Username, password, and security questions</li>
                      <li><strong>Educational Background:</strong> Prior trading experience, educational qualifications, professional background</li>
                      <li><strong>Financial Information:</strong> Payment details, billing address, transaction history for course enrollment</li>
                      <li><strong>Identity Verification:</strong> Government-issued ID, date of birth, photographs for certification purposes</li>
                      <li><strong>Communication Records:</strong> Course inquiries, support tickets, feedback, testimonials</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      1.2 Automatically Collected Information
                    </h3>
                    <p className="leading-relaxed mb-2">
                      When you access our website or online learning platform, we automatically collect certain information through cookies, web beacons, and similar technologies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                      <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, click patterns, course progress, video viewing statistics</li>
                      <li><strong>Location Data:</strong> Approximate geographic location based on IP address</li>
                      <li><strong>Performance Metrics:</strong> Quiz scores, assignment submissions, mock test results, certification achievements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      1.3 Third-Party Information
                    </h3>
                    <p className="leading-relaxed">
                      We may receive information about you from third-party sources such as social media platforms (if you choose to connect your account), payment processors, marketing partners, and publicly available databases to enhance our services and verify information.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-3">
                  Finvision uses the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Course Delivery & Education:</strong> Providing access to online and offline courses, live trading sessions, recorded lectures, study materials, and certification programs</li>
                  <li><strong>Personalized Learning:</strong> Customizing course recommendations, tracking progress, adapting teaching methodologies to individual learning styles</li>
                  <li><strong>Mentorship Services:</strong> Facilitating lifetime free mentorship, connecting students with expert instructors, providing 24/7 assistance</li>
                  <li><strong>Communication:</strong> Sending course updates, class schedules, market insights, newsletters, promotional offers, and important announcements</li>
                  <li><strong>Payment Processing:</strong> Processing enrollment fees, managing subscriptions, issuing refunds according to our refund policy</li>
                  <li><strong>Platform Improvement:</strong> Analyzing user behavior to enhance website functionality, improve course content, and optimize learning experiences</li>
                  <li><strong>Certification & Verification:</strong> Issuing course completion certificates, verifying credentials, maintaining student records</li>
                  <li><strong>Legal Compliance:</strong> Meeting regulatory requirements, responding to legal requests, protecting against fraud and security threats</li>
                  <li><strong>Research & Development:</strong> Developing new courses, trading strategies, and educational tools based on student performance and market trends</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Information Sharing and Disclosure
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Finvision respects your privacy and does not sell your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      3.1 Service Providers
                    </h3>
                    <p className="leading-relaxed">
                      We engage trusted third-party service providers to assist with payment processing, email communications, cloud hosting, analytics, customer support, and marketing services. These providers are contractually obligated to protect your information and use it only for specified purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      3.2 Educational Partners
                    </h3>
                    <p className="leading-relaxed">
                      We may share information with accredited certification bodies, financial institutions (for demat account opening assistance), and industry partners to enhance your educational experience and provide additional opportunities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      3.3 Legal Requirements
                    </h3>
                    <p className="leading-relaxed">
                      We may disclose your information if required by law, court order, government investigation, or to protect the rights, property, and safety of Finvision, our students, or the public.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      3.4 Business Transfers
                    </h3>
                    <p className="leading-relaxed">
                      In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction, subject to the same privacy protections.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      3.5 With Your Consent
                    </h3>
                    <p className="leading-relaxed">
                      We may share your information for purposes not described in this policy with your explicit consent, such as featuring your testimonial or success story in our marketing materials.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Data Security
                </h2>
                <p className="leading-relaxed mb-3">
                  Finvision implements industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission, encrypted storage for sensitive information</li>
                  <li><strong>Access Controls:</strong> Role-based access restrictions, multi-factor authentication for administrative accounts</li>
                  <li><strong>Regular Audits:</strong> Periodic security assessments, vulnerability testing, and compliance reviews</li>
                  <li><strong>Employee Training:</strong> Staff education on data privacy best practices and confidentiality obligations</li>
                  <li><strong>Secure Infrastructure:</strong> Protected servers, firewall protection, intrusion detection systems</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but remain committed to maintaining robust protective measures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Your Privacy Rights
                </h2>
                <p className="leading-relaxed mb-3">
                  As a Finvision student or website visitor, you have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications while continuing to receive essential course-related messages</li>
                  <li><strong>Data Portability:</strong> Request your information in a structured, machine-readable format</li>
                  <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:privacy@finvision.in" className="text-primary hover:underline font-semibold">privacy@finvision.in</a>. We will respond to your request within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="leading-relaxed mb-3">
                  Finvision uses cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality, authentication, and security</li>
                  <li><strong>Performance Cookies:</strong> Collect anonymous data about site usage to improve performance</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences, language settings, and customization choices</li>
                  <li><strong>Marketing Cookies:</strong> Track effectiveness of promotional campaigns and deliver relevant advertisements</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality and your learning experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Third-Party Links
                </h2>
                <p className="leading-relaxed">
                  Our website and course materials may contain links to third-party websites, trading platforms, financial tools, or resources. Finvision is not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Children's Privacy
                </h2>
                <p className="leading-relaxed">
                  Finvision's courses are designed for individuals aged 18 and above. We do not knowingly collect personal information from minors under 18. If we discover that we have inadvertently collected information from a minor, we will promptly delete it. Parents or guardians who believe their child has provided information to us should contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Data Retention
                </h2>
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Duration of your course enrollment and lifetime mentorship commitment</li>
                  <li>Legal, accounting, and regulatory compliance requirements</li>
                  <li>Legitimate business purposes such as fraud prevention and dispute resolution</li>
                  <li>Certificate verification and alumni services</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  After the retention period expires, we securely delete or anonymize your information unless longer retention is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  International Data Transfers
                </h2>
                <p className="leading-relaxed">
                  Finvision primarily operates in India and stores data on servers located within the country. If we transfer your information internationally, we ensure appropriate safeguards are in place, including standard contractual clauses, adequacy decisions, or your explicit consent, to protect your privacy rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="leading-relaxed">
                  Finvision reserves the right to update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or service offerings. We will notify you of material changes through email, website announcements, or in-app notifications. The "Last Updated" date at the top of this policy indicates the most recent revision. Your continued use of our services after changes take effect constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Contact Us
                </h2>
                <p className="leading-relaxed mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted p-6 rounded-lg space-y-2">
                    <p className="font-semibold text-primary text-lg">Finvision</p>
                    <p>Institute of Financial Training and Emerging Skills</p>
                    <p><strong>Email:</strong> <a href="mailto:privacy@finvision.in" className="text-primary hover:underline">privacy@finvision.in</a></p>
                    <p><strong>Phone:</strong> +91 9630065800 | +91 8889199977 | +91 8889199933</p>
                    <p><strong>Address:</strong> Office 3024, Currency Tower, VIP Chowk, Raipur (C.G.)-492001</p>
                    <p className="pt-2"><strong>Office Hours:</strong> Monday - Saturday: 10:00 AM - 6:00 PM | Sunday: Closed</p>
                </div>
              </section>

              <section className="border-t-2 border-border pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                  Your Trust Matters
                </h2>
                <p className="leading-relaxed">
                  At Finvision, we are committed to empowering individuals with financial knowledge while maintaining the highest standards of privacy and data protection. Your trust is fundamental to our mission of creating a financially independent India. We continuously strive to safeguard your information and provide transparent, secure services that support your journey toward trading mastery and financial success.
                </p>
                <p className="leading-relaxed mt-4 font-semibold text-primary">
                  Thank you for choosing Finvision as your partner in financial education.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
