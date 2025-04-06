
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-border">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold gradient-text mb-4 inline-block">
              RegeniScan
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Leveraging AI, Augmented Reality, and Blockchain to Revolutionize Waste Management Across All Sectors
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#sectors" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Sectors
                </a>
              </li>
              <li>
                <a href="#econft" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  EcoNFTs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Developer API
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} RegeniScan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-regeni-teal transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-regeni-teal transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-regeni-teal transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
