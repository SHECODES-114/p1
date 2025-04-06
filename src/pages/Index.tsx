
import React from "react";
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50" id="logo-animation">
        <Logo size={150} animated={true} />
      </div>
      <BackButton />
      <Hero />
      <Features />
      <HowItWorks />
      <Sectors />
      <EcoNFT />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
