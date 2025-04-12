
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Sectors from "@/components/Sectors";
import EcoNFT from "@/components/EcoNFT";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import Logo from "@/components/Logo";
import SplashScreen from "@/components/SplashScreen";
import DemoScanner from "@/components/DemoScanner";
import UserSidebar from "@/components/UserSidebar";
import { User, ArrowDown, Camera } from "lucide-react";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showUserSidebar, setShowUserSidebar] = useState(false);
  
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const scrollToScanner = () => {
    const scannerSection = document.getElementById('scan-now');
    if (scannerSection) {
      scannerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <Navbar 
        onProfileClick={() => setShowUserSidebar(true)}
      />
      <BackButton />
      
      <Hero />
      
      {/* Floating Scan Button */}
      <button 
        onClick={scrollToScanner}
        className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-30 gradient-bg text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 animate-bounce"
      >
        <Camera size={20} />
        <span>Scan Waste Now</span>
        <ArrowDown size={16} />
      </button>
      
      <section id="scan-now" className="py-16 bg-gradient-to-b from-white to-regeni-light/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-3">Scan Your Waste</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI identifies recyclable items and rewards you with points. 
              Try our demo scanner below and see RegeniScan in action!
            </p>
          </div>
          <div className="max-w-md mx-auto relative">
            <div className="absolute -top-3 -right-3 bg-regeni-teal text-white text-xs px-3 py-1 rounded-full shadow-md z-10">
              Try it now!
            </div>
            <DemoScanner />
          </div>
        </div>
      </section>
      
      <Features />
      
      <HowItWorks />
      <Sectors />
      <EcoNFT />
      <Contact />
      <Footer />
      
      <UserSidebar 
        open={showUserSidebar}
        onClose={() => setShowUserSidebar(false)}
      />
      
      <button 
        onClick={() => setShowUserSidebar(true)}
        className="fixed right-6 top-24 z-40 bg-white/90 backdrop-blur-sm text-regeni-teal border border-regeni-teal/20 p-2 rounded-full shadow-lg hover:bg-regeni-light transition-all"
        aria-label="User profile"
        title="Open user profile"
      >
        <User size={24} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default Index;
