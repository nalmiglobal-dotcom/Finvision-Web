'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, LineChart, QrCode, Smartphone, CheckCircle2, Upload, ArrowRight, User, MapPin, Phone, Briefcase, UserCircle, Sparkles, Users, Gift, Award, Clock, FileText, ShieldCheck, Zap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import { toast } from 'sonner';
import { useSpotsRemaining } from '@/hooks/use-spots-remaining';
import { jsPDF } from 'jspdf';

const courses = [
    {
      icon: Sparkles,
      title: 'FREE STARTER COURSE',
      price: 'FREE',
      originalPrice: '₹1,999',
      discount: '100% OFF',
      isFree: true
    },
    {
      icon: BookOpen,
      title: 'BASIC COURSE',
      price: '₹9,999',
      originalPrice: '₹19,999',
      discount: '50% OFF',
      isFree: false
    },
    {
      icon: LineChart,
      title: 'ADVANCE COURSE',
      price: '₹14,999',
      originalPrice: '₹29,999',
      discount: '50% OFF',
      isFree: false
    },
    {
      icon: Zap,
      title: 'COMBO (BASIC + ADVANCE)',
      price: '₹19,999',
      originalPrice: '₹39,999',
      discount: '50% OFF',
      isFree: false
    },
  ];

  // Marketing Bull Sound URL
  const BULL_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2281/2281-preview.mp3';


interface PurchaseFormData {
  name: string;
  phone: string;
  address: string;
  fatherName: string;
  profession: string;
}

const PurchaseDialog = ({ 
  open, 
  onOpenChange, 
  course 
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
  course: { title: string; price: string; isFree?: boolean } | null;
}) => {
    const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
    const [formData, setFormData] = useState<PurchaseFormData>({
      name: '',
      phone: '',
      address: '',
      fatherName: '',
      profession: ''
    });
    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [screenshotPreview, setScreenshotPreview] = useState<string>('');
    const [utrNumber, setUtrNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [generatedPdf, setGeneratedPdf] = useState<string>('');

    useEffect(() => {
      if (!open) {
        setStep('form');
        setFormData({
          name: '',
          phone: '',
          address: '',
          fatherName: '',
          profession: ''
        });
        setScreenshot(null);
        setScreenshotPreview('');
        setUtrNumber('');
        setIsSubmitting(false);
        setGeneratedPdf('');
      }
    }, [open]);

    if (!course) return null;

    const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (course.isFree) {
        handleFinalSubmit(true);
      } else {
        setStep('payment');
      }
    };

    const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          toast.error('File size too large (max 5MB)');
          return;
        }
        setScreenshot(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setScreenshotPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };

    const generateInvoicePDF = (data: PurchaseFormData, courseInfo: { title: string, price: string }, utr: string) => {
        const doc = new jsPDF();
        
        doc.setFontSize(24);
        doc.setTextColor(0, 212, 255); 
        doc.text('FinVision', 105, 20, { align: 'center' });
        
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text('Institute of Training', 105, 28, { align: 'center' });
        doc.text('Office no 3024, Currency Tower, Vip Chowk, Raipur (C.G.)- 492001', 105, 34, { align: 'center' });
        doc.text('CONTACT NO. 96300-65800', 105, 40, { align: 'center' });
        
        doc.setDrawColor(200);
        doc.line(20, 45, 190, 45);
        
        doc.setFontSize(16);
        doc.setTextColor(0);
        doc.text('INVOICE', 20, 58);
        
        doc.setFontSize(10);
        doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, 140, 58);
        doc.text(`Invoice No: FIN-${Math.floor(Math.random() * 1000000)}`, 140, 65);
      
      doc.setFontSize(12);
      doc.text('STUDENT DETAILS', 20, 80);
      doc.setFontSize(10);
      doc.text(`Name: ${data.name}`, 20, 90);
      doc.text(`Father's Name: ${data.fatherName}`, 20, 97);
      doc.text(`Phone: +91-${data.phone}`, 20, 104);
      doc.text(`Address: ${data.address}`, 20, 111);
      doc.text(`Profession: ${data.profession}`, 20, 118);
      
      doc.setFontSize(12);
      doc.text('COURSE & PAYMENT DETAILS', 20, 140);
      
      doc.setFillColor(240);
      doc.rect(20, 145, 170, 10, 'F');
      doc.setFontSize(10);
      doc.text('Description', 25, 152);
      doc.text('Amount', 160, 152);
      
      doc.text(courseInfo.title, 25, 165);
      doc.text(courseInfo.price, 160, 165);
      
      doc.line(20, 170, 190, 170);
      
      doc.setFontSize(12);
      doc.text('TOTAL', 130, 180);
      doc.text(courseInfo.price, 160, 180);
      
      doc.setFontSize(10);
      doc.text('Payment Reference (UTR):', 20, 200);
      doc.setFont('courier', 'bold');
      doc.text(utr || 'N/A (FREE)', 70, 200);
      doc.setFont('helvetica', 'normal');
      
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text('Thank you for choosing Finvision!', 105, 260, { align: 'center' });
      doc.text('This is an electronically generated invoice.', 105, 265, { align: 'center' });
      
      return doc.output('datauristring');
    };

    const handleDownload = () => {
      if (generatedPdf) {
        const link = document.createElement('a');
        link.href = generatedPdf;
        link.download = `Finvision_Invoice_${formData.name.replace(/\s+/g, '_')}.pdf`;
        link.click();
      }
    };

    const handleFinalSubmit = async (isFree = false) => {
      if (!isFree && !screenshot) {
        toast.error('Please upload payment screenshot');
        return;
      }

      if (!isFree && (!utrNumber || utrNumber.length < 6)) {
        toast.error('Please enter a valid UTR number');
        return;
      }

      setIsSubmitting(true);
      
      try {
        const pdfDataUri = generateInvoicePDF(formData, course, utrNumber);
        setGeneratedPdf(pdfDataUri);
        const pdfBase64 = pdfDataUri.split(',')[1];

        // Immediate API trigger for invoice
        fetch('/api/invoice/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pdfBase64,
            phoneNumber: formData.phone,
            courseName: course.title,
            studentName: formData.name,
          }),
        }).catch(err => console.error('WhatsApp API background error:', err));

        setStep('success');
        toast.success(isFree ? 'Enrollment successful!' : 'Payment details submitted!');

        const adminMessage = `*New Course Enrollment - FINVISION*
📚 *Course:* ${course.title}
💰 *Amount:* ${course.price}
👤 *Student:* ${formData.name}
👨‍👦 *Father's Name:* ${formData.fatherName}
📱 *Phone:* +91-${formData.phone}
🏠 *Address:* ${formData.address}
💼 *Profession:* ${formData.profession}
💳 *UTR:* ${utrNumber || 'N/A (FREE)'}
✅ Verification requested via WhatsApp.`;

        const encodedMessage = encodeURIComponent(adminMessage);
        const adminWhatsappNumber = '919630065800';
        const url = `https://wa.me/${adminWhatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp
        setTimeout(() => {
          window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
        }, 2000);

      } catch (error) {
        console.error('Error in purchase submission:', error);
        toast.error('An error occurred. Please contact support.');
      } finally {
        setIsSubmitting(false);
      }
    };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto glass-card border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold gradient-text flex items-center gap-2">
            {step === 'form' && <><User className="w-5 h-5 text-primary" />Student Details</>}
            {step === 'payment' && <><QrCode className="w-5 h-5 text-primary" />Payment & Verification</>}
            {step === 'success' && <><CheckCircle2 className="w-5 h-5 text-green-500" />Submission Successful</>}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2">
            {step === 'form' && 'Please fill in your details to proceed'}
            {step === 'payment' && 'Scan QR to pay and upload proof with UTR'}
            {step === 'success' && 'Your details have been submitted. Redirecting to WhatsApp for confirmation...'}
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center gap-2 pb-4">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'form' ? 'bg-primary text-background' : 'bg-green-500 text-background'}`}>
            {step === 'form' ? '1' : <CheckCircle2 className="w-5 h-5" />}
          </div>
          <div className={`w-12 h-1 rounded ${step === 'form' ? 'bg-muted' : 'bg-green-500'}`} />
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'payment' ? 'bg-primary text-background' : step === 'success' ? 'bg-green-500 text-background' : 'bg-muted text-muted-foreground'}`}>
            {step === 'success' ? <CheckCircle2 className="w-5 h-5" /> : '2'}
          </div>
        </div>

        <div className="glass-card-light p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Selected Course</p>
              <p className="text-lg font-bold text-foreground">{course.title}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground font-medium">Final Amount</p>
              <p className="text-2xl font-black gradient-text-orange">{course.price}</p>
            </div>
          </div>
        </div>

        {step === 'form' && (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <UserCircle className="w-4 h-4 text-primary" />
                  Full Name *
                </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 bg-foreground/5 border-border/50 text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fatherName" className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <User className="w-4 h-4 text-primary" />
                    Father's Name *
                  </Label>
                  <Input
                    id="fatherName"
                    type="text"
                    placeholder="Father's Name"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    className="h-11 bg-foreground/5 border-border/50 text-foreground"
                    required
                  />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  WhatsApp Number *
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                    className="h-11 pl-[75px] bg-foreground/5 border-border/50 text-foreground"
                    pattern="[0-9]{10}"
                    required
                  />
                  <div className="absolute left-0 top-0 h-full flex items-center border-r border-border/50 bg-foreground/5 rounded-l-md px-2">
                    <span className="text-sm font-medium text-foreground/80">+91</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profession" className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Profession *
                </Label>
                <Input
                  id="profession"
                  type="text"
                  placeholder="e.g. Student"
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  className="h-11 bg-foreground/5 border-border/50 text-foreground"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Complete Address *
              </Label>
              <Textarea
                id="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="min-h-[80px] resize-none bg-foreground/5 border-border/50 text-foreground"
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1 border-white/10">Cancel</Button>
              <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-accent">
                {course.isFree ? 'Enroll Now' : 'Proceed to Payment'} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        )}

        {step === 'payment' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card-light p-4 rounded-xl text-center">
                <div className="relative w-full aspect-square max-w-[200px] mx-auto bg-white rounded-lg overflow-hidden border-2 border-primary/20">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-19-at-11.30.04-AM-1766124062428.jpeg?width=8000&height=8000&resize=contain"
                    alt="UPI Payment QR Code"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2 font-bold">
                  Scan to pay {course.price}
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Upload className="w-4 h-4 text-primary" />
                    Upload Screenshot *
                  </Label>
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                    <input type="file" accept="image/*" onChange={handleScreenshotUpload} className="hidden" id="screenshot-upload" />
                    <label htmlFor="screenshot-upload" className="cursor-pointer flex flex-col items-center gap-1">
                      {screenshotPreview ? (
                        <div className="relative w-full h-[100px]">
                          <Image src={screenshotPreview} alt="Preview" fill className="object-contain" />
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-primary" />
                          <p className="text-[10px] text-muted-foreground">Click to upload screenshot</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="utr" className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    UTR Number *
                  </Label>
                  <Input
                    id="utr"
                    type="text"
                    placeholder="12-digit UTR"
                    value={utrNumber}
                    onChange={(e) => setUtrNumber(e.target.value)}
                    className="h-10 font-mono bg-white/5 border-white/10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setStep('form')} className="flex-1 border-white/10" disabled={isSubmitting}>Back</Button>
              <Button
                onClick={() => handleFinalSubmit(false)}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500"
                disabled={isSubmitting || !screenshot || !utrNumber}
              >
                {isSubmitting ? 'Processing...' : 'Submit & Confirm'}
              </Button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="space-y-8 py-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Request Submitted!</h3>
              <p className="text-muted-foreground max-w-sm">
                We are redirecting you to WhatsApp to confirm your payment and enrollment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button 
                onClick={handleDownload}
                className="h-14 bg-gradient-to-r from-primary to-accent text-lg font-bold shadow-lg shadow-primary/20"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Invoice
              </Button>
            </div>

            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="w-full border-white/10"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<{ title: string; price: string; isFree?: boolean } | null>(null);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const { spotsLeft } = useSpotsRemaining();

    const handlePurchaseClick = (course: { title: string; price: string; isFree?: boolean }) => {
      try {
        const audio = new Audio(BULL_SOUND_URL);
        audio.play().catch(err => console.log('Audio play failed:', err));
      } catch (err) {}
      
      setSelectedCourse(course);
      setIsPurchaseDialogOpen(true);
    };

  return (
    <section id="courses" className="relative overflow-hidden">
      <div className="section-dark py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-3 font-heading gradient-text glow-text">Our Courses</h2>
          <p className="text-muted-foreground text-[clamp(0.9rem,1.5vw,1rem)]">
            Professional Trading Education with Unbeatable Discounts
          </p>
        </div>
      </div>
      
      <div className="relative py-16 lg:py-24 overflow-hidden section-cyan">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-20 right-[10%] w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <div key={index} className={`flex flex-col items-center text-center p-6 glass-card rounded-2xl hover-lift hover-glow transition-all duration-300 gradient-border relative overflow-hidden group ${course.title.includes('COMBO') ? 'border-accent/50' : ''}`}>
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent rounded-full blur-lg opacity-50" />
                    <div className="relative bg-gradient-to-br from-accent to-orange-600 text-white font-black text-[10px] px-3 py-1.5 rounded-full border-2 border-accent/50 transform rotate-12">
                      {course.discount}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col w-full">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl w-[70px] h-[70px] flex items-center justify-center mb-4 mx-auto transition-all duration-500 group-hover:scale-110 glow-box">
                    <course.icon className="text-primary w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="gradient-text font-bold text-sm mb-4 min-h-[40px] flex items-center justify-center uppercase">
                    {course.title}
                  </h3>
                  
                  <div className="mt-auto pt-2 space-y-4">
                    <div>
                      <div className="text-muted-foreground text-[10px] uppercase tracking-wider mb-1 font-semibold">Free Bonus Course Included</div>
                      <div className="text-sm font-bold text-muted-foreground line-through opacity-50">
                        {course.originalPrice}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="relative bg-white/5 border border-white/10 p-4 rounded-xl">
                        <div className="text-[10px] uppercase tracking-wider mb-1 text-primary font-bold">Offer Price</div>
                        <div className="text-2xl font-black tracking-tight gradient-text-orange">{course.price}</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handlePurchaseClick(course)}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group/btn uppercase text-xs tracking-wide"
                    >
                      <Gift className="w-4 h-4" />
                      <span>{course.isFree ? 'Get For Free' : 'Buy Course Now'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-medium">
                      <ShieldCheck className="w-3 h-3 text-green-500" />
                      Secure Admission Flow
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PurchaseDialog 
        open={isPurchaseDialogOpen} 
        onOpenChange={setIsPurchaseDialogOpen}
        course={selectedCourse}
      />
    </section>
  );
};

export default Courses;
