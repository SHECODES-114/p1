
import React, { useState, useEffect } from "react";
import { Recycle, Sparkles, Shield, Leaf } from "lucide-react";

type LogoProps = {
  size?: number;
  animated?: boolean;
  variant?: "default" | "unique" | "elegant";
};

const Logo = ({ size = 24, animated = false, variant = "default" }: LogoProps) => {
  const [isAnimating, setIsAnimating] = useState(animated);
  
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [animated]);

  return (
    <div 
      className={`inline-flex items-center justify-center relative ${isAnimating ? 'animate-logo-appear' : ''}`}
      style={{ 
        fontSize: `${size * 0.75}px`,
        height: size,
        width: size,
      }}
    >
      {variant === "elegant" ? (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-regeni-teal to-regeni-green rounded-full opacity-20"></div>
          <Shield 
            size={size} 
            className="text-regeni-teal z-10 relative"
            strokeWidth={1.5}
          />
          <Leaf 
            size={size * 0.6} 
            className="text-regeni-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            strokeWidth={1.5}
          />
          {isAnimating && (
            <div className="absolute -inset-4 border-2 border-regeni-light rounded-full animate-ping"></div>
          )}
        </div>
      ) : variant === "unique" ? (
        <div className="relative">
          <Recycle 
            size={size} 
            className="text-regeni-teal z-10 relative"
          />
          <Sparkles 
            size={size * 0.6} 
            className="text-regeni-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ) : (
        <Recycle 
          size={size} 
          className="text-regeni-teal"
        />
      )}
    </div>
  );
};

export default Logo;
