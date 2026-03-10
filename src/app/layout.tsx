import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
  themeColor: "#00B4CC",
};

export const metadata: Metadata = {
  title: "FINVISION - The Trading Institute | Transform Your Portfolio in 16 Weeks",
  description: "Professional trading education and certification from The Trading Institute. Learn stock market trading, technical analysis, and investment strategies with expert guidance.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FINVISION",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "FINVISION - The Trading Institute",
    title: "Transform Your Portfolio in 16 Weeks",
    description: "Professional trading education and certification from The Trading Institute.",
  },
  twitter: {
    card: "summary",
    title: "FINVISION - The Trading Institute",
    description: "Professional trading education and certification.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Blue-Modern-Innovating-Online-Learning-Logo-1762796155464.png?width=32&height=32&resize=contain" />
        <link rel="apple-touch-icon" href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Blue-Modern-Innovating-Online-Learning-Logo-1762796155464.png?width=180&height=180&resize=contain" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Script
            id="orchids-browser-logs"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="afterInteractive"
            data-orchids-project-id="2bdd73bf-3e8f-43f2-83bc-63455ef55ee6"
          />
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <Toaster />
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}
