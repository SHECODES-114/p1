
import React from "react";
import { Recycle } from "lucide-react";

type LogoProps = {
  size?: number;
  animated?: boolean;
};

const Logo = ({ size = 24, animated = false }: LogoProps) => {
  return (
    <div 
      className={`inline-flex items-center ${animated ? 'animate-logo-appear' : ''}`}
      style={{ 
        fontSize: `${size * 0.75}px`,
        height: size,
        width: size,
      }}
    >
      <Recycle 
        size={size} 
        className="text-regeni-teal"
      />
    </div>
  );
};

export default Logo;
