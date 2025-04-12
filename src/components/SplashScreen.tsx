
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-gradient-to-br from-black via-regeni-dark to-regeni-teal/90 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center px-6 relative z-10">
        <div className="mb-8 relative">
          <div className="absolute inset-0 animate-pulse rounded-full bg-regeni-teal/20 -m-6"></div>
          <Logo size={180} animated={true} variant="elegant" />
        </div>
        <h1 className="text-white text-5xl font-bold mt-6 animate-fade-in">RegeniScan</h1>
        <p className="text-white/70 mt-2 animate-fade-in">Revolutionizing Waste Management</p>
        
        <div className="mt-12 animate-fade-in">
          <div className="flex justify-center gap-2">
            <span className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-100"></span>
            <span className="w-2 h-2 bg-white/70 rounded-full animate-pulse delay-200"></span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-regeni-teal/10 rounded-full backdrop-blur-xl"></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-32 bg-regeni-green/10 rounded-full backdrop-blur-xl"></div>
        <div className="absolute top-[50%] right-[20%] w-16 h-16 bg-regeni-blue/10 rounded-full backdrop-blur-xl"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
