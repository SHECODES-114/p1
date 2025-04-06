
import React from "react";
import { 
  ScanText, 
  Lightbulb,
  Brush,
  Award,
  RefreshCw,
  CheckCircle
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <ScanText className="h-10 w-10 text-white" />,
      title: "Scan Waste",
      description: "Use the RegeniScan app to scan waste materials with your smartphone camera."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Get Insights",
      description: "AI analyzes materials and provides recycling options or creative reuse ideas."
    },
    {
      icon: <Brush className="h-10 w-10 text-white" />,
      title: "Visualize with AR",
      description: "Use augmented reality to preview how materials can be transformed and reused."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-white" />,
      title: "Take Action",
      description: "Follow optimized recycling routes or implement creative reuse solutions."
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: "Earn EcoNFTs",
      description: "Receive blockchain-verified tokens for your environmental contributions."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Track Impact",
      description: "Monitor your environmental impact metrics and collective achievements."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-regeni-light to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">How RegeniScan Works</h2>
          <p className="section-subtitle">
            A seamless process that transforms waste management through technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-regeni-teal to-regeni-green transform -translate-x-10"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
