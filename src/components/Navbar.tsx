
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navbar = () => {
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

  useEffect(() => {
    // Hide logo animation after 3 seconds
    const logoAnimation = document.getElementById('logo-animation');
    if (logoAnimation) {
      setTimeout(() => {
        logoAnimation.style.display = 'none';
      }, 3000);
    }
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
            <Logo size={28} />
            RegeniScan
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
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
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
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
