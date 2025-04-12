
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
      className={`fixed inset-0 z-50 bg-gradient-to-br from-black to-regeni-dark flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <Logo size={150} animated={true} variant="elegant" />
        <h1 className="text-white text-4xl font-bold mt-6">RegeniScan</h1>
        <p className="text-white/70 mt-2">Revolutionizing Waste Management</p>
      </div>
    </div>
  );
};

export default SplashScreen;
