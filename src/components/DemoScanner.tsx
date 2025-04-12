
import React, { useState } from "react";
import { Camera, Check, RefreshCcw } from "lucide-react";

type ScanResult = {
  item: string;
  recyclable: boolean;
  rewardPoints: number;
  ecoNFT?: string;
  arVisualization?: string;
};

const DemoScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  
  const handleScan = () => {
    setIsScanning(true);
    
    // Simulate scanning delay
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        item: "Plastic Bottle (PET)",
        recyclable: true,
        rewardPoints: 25,
        ecoNFT: "Recycling Pioneer",
        arVisualization: "https://images.unsplash.com/photo-1598541264502-84dc6aa2fb87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
      });
    }, 2000);
  };
  
  const resetScan = () => {
    setScanResult(null);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 gradient-text">Demo Scanner</h3>
      
      {!scanResult ? (
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
            {isScanning ? (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-regeni-teal border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Scanning item...</p>
              </div>
            ) : (
              <div className="text-center">
                <Camera size={48} className="text-muted-foreground mx-auto" />
                <p className="mt-2 text-muted-foreground">Ready to scan</p>
              </div>
            )}
          </div>
          <button 
            onClick={handleScan}
            disabled={isScanning}
            className="w-full gradient-bg text-white py-3 rounded-lg font-medium transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center"
          >
            {isScanning ? "Scanning..." : "Scan Plastic Item"}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-regeni-light p-3 rounded-lg">
              <Check size={24} className="text-regeni-green" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">{scanResult.item}</h4>
              <p className="text-sm text-muted-foreground">
                {scanResult.recyclable ? "Recyclable" : "Not recyclable"} • {scanResult.rewardPoints} points earned
              </p>
            </div>
          </div>
          
          {scanResult.arVisualization && (
            <div>
              <p className="font-medium mb-2">AR Visualization</p>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={scanResult.arVisualization} 
                  alt="AR visualization" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                  <p className="text-sm">Tap to view in AR</p>
                </div>
              </div>
            </div>
          )}
          
          {scanResult.ecoNFT && (
            <div className="bg-regeni-light/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">NFT Reward Available</h4>
                <span className="text-xs bg-regeni-teal text-white px-2 py-1 rounded-full">
                  New
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                You've earned the "{scanResult.ecoNFT}" EcoNFT!
              </p>
              <button className="w-full bg-white border border-regeni-teal text-regeni-teal py-2 rounded-lg font-medium transition-all hover:bg-regeni-light">
                Claim NFT
              </button>
            </div>
          )}
          
          <button 
            onClick={resetScan}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-gray-50 text-gray-700 py-2 rounded-lg font-medium transition-all hover:bg-gray-100"
          >
            <RefreshCcw size={16} />
            Scan Another Item
          </button>
        </div>
      )}
    </div>
  );
};

export default DemoScanner;
