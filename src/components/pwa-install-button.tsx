'use client';

import { useState, useEffect } from 'react';
import { Download, X, Smartphone, CheckCircle2 } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Android/Chrome install prompt handler
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      
      // Show banner after 3 seconds
      setTimeout(() => {
        setShowBanner(true);
      }, 3000);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      setShowBanner(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      if (isIOS) {
        setShowIOSInstructions(true);
      }
      return;
    }

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setShowBanner(false);
      }
      
      setDeferredPrompt(null);
      setIsInstallable(false);
    } catch (error) {
      console.error('Install prompt error:', error);
    }
  };

  // Don't show anything if already installed
  if (isInstalled) {
    return null;
  }

  // iOS Instructions Modal
  if (showIOSInstructions) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-[floatIn_0.3s_ease-out]">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
          <button
            onClick={() => setShowIOSInstructions(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center mb-6">
            <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Install on iOS</h3>
            <p className="text-gray-600 text-sm">Add FINVISION to your home screen for quick access</p>
          </div>

          <div className="space-y-4 text-left">
            <div className="flex gap-3">
              <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Tap the Share button</p>
                <p className="text-gray-600 text-sm">Look for the share icon in Safari (square with arrow)</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Select "Add to Home Screen"</p>
                <p className="text-gray-600 text-sm">Scroll down and tap this option</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Tap "Add"</p>
                <p className="text-gray-600 text-sm">Confirm to add the app to your home screen</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowIOSInstructions(false)}
            className="w-full mt-6 bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Got it!
          </button>
        </div>
      </div>
    );
  }

  // Install Banner (appears after delay)
  if (showBanner && !showIOSInstructions) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-[9998] animate-[floatIn_0.5s_ease-out]">
        <div className="bg-gradient-to-r from-primary to-accent p-1 rounded-2xl shadow-2xl">
          <div className="bg-white rounded-xl p-4">
            <button
              onClick={() => setShowBanner(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl flex-shrink-0">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-1">Install FINVISION App</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Get quick access to courses and trading tools from your home screen
                </p>
                
                <button
                  onClick={handleInstallClick}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Install Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Header Install Button (always visible if installable or iOS)
  if (isInstallable || isIOS) {
    return (
      <button
        onClick={handleInstallClick}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-semibold px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
        title={isIOS ? 'Install App (iOS)' : 'Install App'}
      >
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">Install App</span>
      </button>
    );
  }

  return null;
};

export default PWAInstallButton;
