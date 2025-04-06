
import React from "react";
import { Shield, Gift, TreePine, Recycle } from "lucide-react";

const EcoNFT = () => {
  const nftBenefits = [
    {
      icon: <Shield className="h-8 w-8 text-regeni-teal" />,
      title: "Verified Impact",
      description: "Blockchain-verified proof of your environmental actions and contributions."
    },
    {
      icon: <Gift className="h-8 w-8 text-regeni-teal" />,
      title: "Exchangeable Rewards",
      description: "Redeem your EcoNFTs for sustainable products, services, and experiences."
    },
    {
      icon: <TreePine className="h-8 w-8 text-regeni-teal" />,
      title: "Environmental Funding",
      description: "NFT transactions contribute to real-world impact initiatives like reforestation."
    },
    {
      icon: <Recycle className="h-8 w-8 text-regeni-teal" />,
      title: "Circular Economy",
      description: "Participate in a sustainable economic model that values environmental stewardship."
    }
  ];

  const nftExamples = [
    {
      name: "Eco Pioneer",
      image: "https://images.unsplash.com/photo-1612287590724-ccdf0c833662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Awarded for early adoption and consistent use of RegeniScan technologies."
    },
    {
      name: "Upcycle Creator",
      image: "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Earned by submitting original upcycling ideas that get implemented by others."
    },
    {
      name: "Zero Waste Champion",
      image: "https://images.unsplash.com/photo-1611792198334-cdce1dce52b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Achieved by maintaining minimal waste statistics over consecutive months."
    }
  ];

  return (
    <section id="econft" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">EcoNFT Rewards</h2>
          <p className="section-subtitle">
            Earn blockchain-powered digital tokens that recognize and incentivize environmental action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {nftBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border-t border-regeni-light text-center"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10">Featured EcoNFT Collections</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nftExamples.map((nft, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-regeni-light transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={nft.image} 
                    alt={nft.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">{nft.name}</h4>
                    <span className="bg-regeni-light text-regeni-teal text-xs px-2 py-1 rounded-full">Limited</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{nft.description}</p>
                  <button className="w-full gradient-bg text-white py-2 rounded-lg font-medium transition-all hover:opacity-90">
                    View Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoNFT;
