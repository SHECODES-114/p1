
import React from "react";
import { Home, Warehouse, Tractor, Stethoscope } from "lucide-react";

const Sectors = () => {
  const sectorsList = [
    {
      icon: <Home className="h-12 w-12 text-regeni-teal" />,
      title: "Household",
      description: "Transform everyday household waste into resources with smart scanning, AR-guided upcycling ideas, and recycling optimization.",
      benefits: [
        "Personalized recycling guides",
        "Creative reuse ideas for common items",
        "Household waste reduction tracking"
      ]
    },
    {
      icon: <Warehouse className="h-12 w-12 text-regeni-teal" />,
      title: "Industrial",
      description: "Streamline industrial waste management with AI classification, material recovery insights, and circular economy integration.",
      benefits: [
        "Byproduct repurposing opportunities",
        "Compliance documentation automation",
        "Supply chain waste reduction"
      ]
    },
    {
      icon: <Tractor className="h-12 w-12 text-regeni-teal" />,
      title: "Agricultural",
      description: "Optimize agricultural waste handling through composting guidance, biomass utilization, and soil health recommendations.",
      benefits: [
        "Organic matter decomposition tracking",
        "Fertilizer conversion calculations",
        "Sustainable farming practices"
      ]
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-regeni-teal" />,
      title: "Medical",
      description: "Ensure safe and compliant medical waste management with specialized classification, handling protocols, and disposal tracking.",
      benefits: [
        "Regulatory compliance assistance",
        "Safe disposal route optimization",
        "Hazardous material identification"
      ]
    }
  ];

  return (
    <section id="sectors" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Multi-Sector Solutions</h2>
          <p className="section-subtitle">
            RegeniScan provides specialized waste management across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectorsList.map((sector, index) => (
            <div 
              key={index} 
              className="sector-card"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-regeni-light p-4 rounded-lg">
                  {sector.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{sector.title}</h3>
                  <p className="text-muted-foreground mb-4">{sector.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Benefits:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {sector.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
