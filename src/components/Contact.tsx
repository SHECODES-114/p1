
import React from "react";
import { ArrowRight, Mail, PhoneCall, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-regeni-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Join the Revolution</h2>
          <p className="section-subtitle">
            Be part of the global movement transforming waste management with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-regeni-teal/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-regeni-teal/50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="sector" className="block text-sm font-medium text-muted-foreground mb-2">
                  Sector of Interest
                </label>
                <select
                  id="sector"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-regeni-teal/50 bg-white"
                >
                  <option value="" disabled selected>Select your sector</option>
                  <option value="household">Household</option>
                  <option value="industrial">Industrial</option>
                  <option value="agricultural">Agricultural</option>
                  <option value="medical">Medical</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-regeni-teal/50"
                  placeholder="Tell us about your waste management challenges..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Request Demo <ArrowRight size={16} />
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail className="h-5 w-5 text-regeni-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@regeniscan.com" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                      contact@regeniscan.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <PhoneCall className="h-5 w-5 text-regeni-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+11234567890" className="text-muted-foreground hover:text-regeni-teal transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <MapPin className="h-5 w-5 text-regeni-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <address className="not-italic text-muted-foreground">
                      123 EcoTech Avenue<br />
                      San Francisco, CA 94105<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border border-regeni-light shadow-md">
              <h4 className="font-semibold mb-3">Ready to get started?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Download the RegeniScan mobile app for your device and start transforming waste management today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="btn-primary flex-1">App Store</button>
                <button className="btn-secondary flex-1">Google Play</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
