
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
import { User } from "lucide-react";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showUserSidebar, setShowUserSidebar] = useState(false);
  
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <Navbar 
        onProfileClick={() => setShowUserSidebar(true)}
      />
      <BackButton />
      
      <Hero />
      
      <section id="scan-now" className="py-12 bg-regeni-light/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">Scan Your Waste Now</h2>
            <p className="text-muted-foreground mt-2">
              Try our demo scanner and see how RegeniScan identifies recyclable items
            </p>
          </div>
          <DemoScanner />
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
        className="fixed right-6 top-24 z-40 bg-white/80 backdrop-blur-sm text-regeni-teal border border-regeni-teal/20 p-2 rounded-full shadow-lg hover:bg-regeni-light transition-all"
        aria-label="User profile"
        title="Open user profile"
      >
        <User size={24} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default Index;
