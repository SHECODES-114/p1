
import React, { useState } from "react";
import { Camera, Check, RefreshCcw, Package, ShoppingBag, Leaf } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

type ScanResult = {
  name: string;
  item: string;
  recyclable: boolean;
  rewardPoints: number;
  ecoNFT?: string;
  arVisualization?: string;
};

type RewardProduct = {
  name: string;
  description: string;
  points: number;
  image: string;
  tag: "popular" | "new" | "biodegradable" | "";
};

const DemoScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const demoItems = [
    {
      name: "Plastic Bottle (PET)",
      item: "Plastic Bottle",
      recyclable: true,
      rewardPoints: 25,
      ecoNFT: "Recycling Pioneer",
      arVisualization: "https://images.unsplash.com/photo-1598541264502-84dc6aa2fb87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Plastic Bag",
      item: "Plastic Bag",
      recyclable: true,
      rewardPoints: 15,
      ecoNFT: "Plastic Reducer",
      arVisualization: "https://images.unsplash.com/photo-1571727153934-b9e0cabd9bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Glass Bottle",
      item: "Glass Bottle",
      recyclable: true,
      rewardPoints: 30,
      ecoNFT: "Glass Guardian",
      arVisualization: "https://images.unsplash.com/photo-1615486511483-92833bdad35e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cardboard Box",
      item: "Cardboard Box",
      recyclable: true,
      rewardPoints: 20,
      ecoNFT: "Paper Protector",
      arVisualization: "https://images.unsplash.com/photo-1607349913338-fca47890d196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Aluminum Can",
      item: "Aluminum Can",
      recyclable: true,
      rewardPoints: 35,
      ecoNFT: "Metal Master",
      arVisualization: "https://images.unsplash.com/photo-1587161584760-f32bd855bcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const rewardProducts: RewardProduct[] = [
    {
      name: "Bamboo Cutlery Set",
      description: "Reusable biodegradable bamboo utensils for on-the-go meals",
      points: 150,
      image: "https://images.unsplash.com/photo-1584346133934-a3044b0e05e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tag: "popular"
    },
    {
      name: "Compostable Food Containers",
      description: "Plant-based food containers that decompose naturally",
      points: 200,
      image: "https://images.unsplash.com/photo-1610546190208-d56b13d5861d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tag: "biodegradable"
    },
    {
      name: "Hemp Tote Bag",
      description: "Durable, sustainable shopping bag made from hemp fibers",
      points: 120,
      image: "https://images.unsplash.com/photo-1591822218899-0919ef3dd0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tag: "biodegradable"
    },
    {
      name: "Biodegradable Plant Pots",
      description: "Plant directly in these pots that break down in soil",
      points: 100,
      image: "https://images.unsplash.com/photo-1621489358334-8a8bfb2563d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tag: "new"
    },
    {
      name: "Cornstarch Garbage Bags",
      description: "Fully compostable trash bags made from cornstarch",
      points: 90,
      image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tag: "biodegradable"
    },
    {
      name: "Bamboo Toothbrush Set",
      description: "Eco-friendly bamboo toothbrushes with biodegradable bristles",
      points: 80,
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tag: "biodegradable"
    },
    {
      name: "Beeswax Food Wraps",
      description: "Reusable food wraps made from organic cotton and beeswax",
      points: 110,
      image: "https://images.unsplash.com/photo-1611675745374-225638a45d56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tag: "new"
    },
    {
      name: "Organic Cotton Produce Bags",
      description: "Reusable mesh bags for fruits and vegetables shopping",
      points: 85,
      image: "https://images.unsplash.com/photo-1610375461249-83edb4e16ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tag: "biodegradable"
    },
    {
      name: "Cork Yoga Mat",
      description: "Natural, biodegradable yoga mat made from sustainable cork",
      points: 250,
      image: "https://images.unsplash.com/photo-1605296866985-43335a7ad4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tag: "biodegradable"
    }
  ];
  
  const handleScan = (item = null) => {
    setIsScanning(true);
    
    // Simulate scanning delay
    setTimeout(() => {
      setIsScanning(false);
      if (item) {
        setScanResult(item);
      } else {
        // Pick a random item if none specified
        const randomItem = demoItems[Math.floor(Math.random() * demoItems.length)];
        setScanResult(randomItem);
      }
    }, 2000);
  };
  
  const resetScan = () => {
    setScanResult(null);
  };

  const closeDrawer = () => {
    // This function uses DOM to find and click the close button
    const closeButton = document.querySelector('[data-drawer-close]');
    if (closeButton instanceof HTMLElement) {
      closeButton.click();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-regeni-teal to-regeni-green"></div>
      <h3 className="text-xl font-semibold mb-4 gradient-text">Waste Scanner</h3>
      
      {!scanResult ? (
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden border-2 border-regeni-light hover:border-regeni-teal transition-colors">
            {isScanning ? (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-regeni-teal border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Scanning item...</p>
              </div>
            ) : (
              <div className="text-center">
                <Camera size={48} className="text-muted-foreground mx-auto animate-pulse" />
                <p className="mt-2 text-muted-foreground">Ready to scan</p>
                <p className="text-xs text-muted-foreground mt-1">Tap the button below to open camera</p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-regeni-teal/10"></div>
              </div>
            )}
          </div>
          
          <Drawer>
            <DrawerTrigger asChild>
              <button 
                className="w-full gradient-bg text-white py-3 rounded-lg font-medium transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                disabled={isScanning}
              >
                <Camera size={20} />
                {isScanning ? "Scanning..." : "Open Camera to Scan Waste"}
              </button>
            </DrawerTrigger>
            <DrawerContent className="p-6">
              <DrawerHeader>
                <DrawerTitle>Scan Waste Item</DrawerTitle>
                <DrawerDescription>
                  Position your camera to scan the waste item. For demo purposes, select an item below.
                </DrawerDescription>
              </DrawerHeader>
              <div className="mt-4">
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                  <Camera size={64} className="text-muted-foreground mx-auto animate-pulse" />
                  <div className="absolute inset-0 animate-scan"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {demoItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleScan(item);
                        closeDrawer();
                      }}
                      className="text-sm py-3 px-3 bg-regeni-light text-regeni-teal rounded-lg hover:bg-regeni-light/80 transition-colors flex flex-col items-center gap-1 hover:shadow-md"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs">+{item.rewardPoints} points</span>
                    </button>
                  ))}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
          
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Or try a demo item:</p>
            <div className="grid grid-cols-2 gap-2">
              {demoItems.slice(0, 4).map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScan(item)}
                  disabled={isScanning}
                  className="text-sm py-2 px-3 bg-regeni-light text-regeni-teal rounded-lg hover:bg-regeni-light/80 transition-colors hover:shadow-md"
                >
                  {item.name} (+{item.rewardPoints} pts)
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-regeni-light p-3 rounded-lg">
              <Check size={24} className="text-regeni-green" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">{scanResult.name}</h4>
              <p className="text-sm text-muted-foreground">
                {scanResult.recyclable ? "Recyclable" : "Not recyclable"} • {scanResult.rewardPoints} points earned
              </p>
            </div>
          </div>
          
          {scanResult.arVisualization && (
            <div>
              <p className="font-medium mb-2">AR Visualization</p>
              <div className="relative rounded-lg overflow-hidden animate-scan shadow-md">
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
            <div className="bg-regeni-light/50 p-4 rounded-lg border border-regeni-teal/20">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">NFT Reward Available</h4>
                <span className="text-xs bg-regeni-teal text-white px-2 py-1 rounded-full">
                  New
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                You've earned the "{scanResult.ecoNFT}" EcoNFT!
              </p>
              <button className="w-full bg-white border border-regeni-teal text-regeni-teal py-2 rounded-lg font-medium transition-all hover:bg-regeni-light shadow-sm hover:shadow-md">
                Claim NFT
              </button>
            </div>
          )}
          
          <div className="flex gap-2">
            <button 
              onClick={resetScan}
              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 bg-gray-50 text-gray-700 py-2 rounded-lg font-medium transition-all hover:bg-gray-100 shadow-sm hover:shadow-md"
            >
              <RefreshCcw size={16} />
              Scan Another
            </button>
            
            <Sheet>
              <SheetTrigger asChild>
                <button className="flex-1 flex items-center justify-center gap-2 gradient-bg text-white py-2 rounded-lg font-medium transition-all hover:opacity-90 shadow-sm hover:shadow-md">
                  <Package size={16} />
                  Redeem Points
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Redeem Your Points</SheetTitle>
                  <SheetDescription>
                    You have earned {scanResult.rewardPoints} points. Explore biodegradable products you can redeem.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                  {rewardProducts.map((product, index) => (
                    <div key={index} className="border border-border rounded-lg p-3 hover:border-regeni-teal transition-all hover:shadow-md">
                      <div className="flex gap-3">
                        <div className="w-20 h-20 rounded-md overflow-hidden bg-muted">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-medium text-sm">{product.name}</h4>
                            {product.tag && (
                              <span 
                                className={`text-[10px] px-1.5 py-0.5 rounded-full uppercase font-medium ${
                                  product.tag === 'biodegradable' ? 'bg-regeni-light text-regeni-teal' :
                                  product.tag === 'new' ? 'bg-blue-100 text-blue-700' :
                                  'bg-orange-100 text-orange-700'
                                }`}
                              >
                                {product.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{product.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs font-semibold">{product.points} points</span>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="h-7 text-xs"
                              disabled={scanResult.rewardPoints < product.points}
                            >
                              {scanResult.rewardPoints >= product.points ? "Redeem" : "Not enough points"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoScanner;
