import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg mb-10">
              We are here to support you every step of the way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Office Address</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Office 3024, Currency Tower, VIP Chowk, Raipur (C.G.)-492001
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Phone Numbers</h2>
                </div>
                  <div className="space-y-1 text-muted-foreground">
                    <p><a href="tel:+919630065800" className="hover:text-primary transition-colors">+91-9630065800</a></p>
                    <p><a href="tel:+918889199977" className="hover:text-primary transition-colors">+91-8889199977</a></p>
                    <p><a href="tel:+918889199933" className="hover:text-primary transition-colors">+91-8889199933</a></p>
                  </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Email</h2>
                </div>
                  <div className="space-y-1 text-muted-foreground">
                    <p><a href="mailto:support@myfinvision.com" className="hover:text-primary transition-colors">support@myfinvision.com</a></p>
                    <p><a href="mailto:info@myfinvision.com" className="hover:text-primary transition-colors">info@myfinvision.com</a></p>
                    <p><a href="mailto:ceo@myfinvision.com" className="hover:text-primary transition-colors">ceo@myfinvision.com</a></p>
                    <p><a href="mailto:coo@myfinvision.com" className="hover:text-primary transition-colors">coo@myfinvision.com</a></p>
                  </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Office Hours</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Monday - Saturday: 10:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
