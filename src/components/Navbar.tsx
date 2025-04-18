
import React, { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

type NavbarProps = {
  onProfileClick?: () => void;
};

const Navbar = ({ onProfileClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold gradient-text inline-flex items-center gap-2">
            <Logo size={28} variant="elegant" />
            RegeniScan
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#scan-now" className="text-foreground hover:text-regeni-teal transition-colors">
            Scan Now
          </a>
          <a href="#features" className="text-foreground hover:text-regeni-teal transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-regeni-teal transition-colors">
            How It Works
          </a>
          <a href="#sectors" className="text-foreground hover:text-regeni-teal transition-colors">
            Sectors
          </a>
          <a href="#econft" className="text-foreground hover:text-regeni-teal transition-colors">
            EcoNFTs
          </a>
          
          <button 
            onClick={onProfileClick}
            className="flex items-center gap-2 bg-regeni-light/80 text-regeni-teal px-4 py-2 rounded-lg hover:bg-regeni-light transition-all"
          >
            <User size={18} />
            <span>My Account</span>
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onProfileClick}
            className="text-regeni-teal hover:bg-regeni-light/50 p-2 rounded-full"
          >
            <User size={24} />
          </button>
          
          <button
            onClick={toggleMenu}
            className="text-foreground focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg p-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a
              href="#scan-now"
              onClick={toggleMenu}
              className="text-foreground hover:text-regeni-teal transition-colors"
            >
              Scan Now
            </a>
            <a
              href="#features"
              onClick={toggleMenu}
              className="text-foreground hover:text-regeni-teal transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={toggleMenu}
              className="text-foreground hover:text-regeni-teal transition-colors"
            >
              How It Works
            </a>
            <a
              href="#sectors"
              onClick={toggleMenu}
              className="text-foreground hover:text-regeni-teal transition-colors"
            >
              Sectors
            </a>
            <a
              href="#econft"
              onClick={toggleMenu}
              className="text-foreground hover:text-regeni-teal transition-colors"
            >
              EcoNFTs
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="btn-primary inline-block text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
