
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

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <Navbar />
      <BackButton />
      
      <Hero />
      <Features />
      
      <section id="demo-scanner" className="py-20 bg-regeni-light/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Try Our Demo Scanner</h2>
            <p className="section-subtitle">
              Experience how RegeniScan identifies recyclable items and rewards eco-friendly actions
            </p>
          </div>
          <DemoScanner />
        </div>
      </section>
      
      <HowItWorks />
      <Sectors />
      <EcoNFT />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
