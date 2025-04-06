
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Sectors from "@/components/Sectors";
import EcoNFT from "@/components/EcoNFT";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
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
