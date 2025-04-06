
import React from "react";
import { 
  Cpu, 
  GraduationCap, 
  BarChartHorizontal, 
  Recycle, 
  Route, 
  Layers 
} from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Cpu className="h-8 w-8 text-regeni-teal" />,
      title: "AI-Powered Recognition",
      description: "Advanced machine learning models trained to identify and classify diverse waste materials with precision."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-regeni-teal" />,
      title: "AR Visualization",
      description: "Visualize upcycling concepts in your real-world environment before implementation."
    },
    {
      icon: <BarChartHorizontal className="h-8 w-8 text-regeni-teal" />,
      title: "Blockchain EcoNFTs",
      description: "Earn digital tokens for verified recycling efforts and creative upcycling submissions."
    },
    {
      icon: <Recycle className="h-8 w-8 text-regeni-teal" />,
      title: "Creative Reuse",
      description: "Access a database of creative ways to repurpose materials that would otherwise become waste."
    },
    {
      icon: <Route className="h-8 w-8 text-regeni-teal" />,
      title: "Optimized Recycling",
      description: "Calculate the most efficient recycling routes to reduce carbon emissions."
    },
    {
      icon: <Layers className="h-8 w-8 text-regeni-teal" />,
      title: "Multi-Sector Support",
      description: "Designed for household, agricultural, industrial, and medical waste management needs."
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Cutting-Edge Features</h2>
          <p className="section-subtitle">
            RegeniScan combines powerful technologies to transform waste management across all sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
