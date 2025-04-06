
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-regeni-light/50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Revolutionizing</span> Waste Management with <span className="gradient-text">AI & AR</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              RegeniScan transforms how we handle waste using cutting-edge AI, AR, and blockchain technology across all sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#features" className="btn-primary flex items-center justify-center gap-2">
                Explore Features <ArrowRight size={16} />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                How It Works
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-white rounded-xl shadow-xl overflow-hidden transform rotate-3 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-regeni-teal/10 to-regeni-green/10 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="AI scanning waste" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-white rounded-xl shadow-xl overflow-hidden transform -rotate-2 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-full h-full bg-gradient-to-br from-regeni-blue/10 to-regeni-teal/10 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="AR visualization" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-white rounded-xl shadow-xl overflow-hidden z-10 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-full h-full bg-gradient-to-br from-regeni-green/10 to-regeni-blue/10 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1550060607-3d37956abde5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Blockchain EcoNFTs" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
