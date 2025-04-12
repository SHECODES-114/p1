
import React from 'react';
import { X, User, Settings, CreditCard, Award, History, LogOut, Info, Leaf, Recycle } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Logo from './Logo';

type UserSidebarProps = {
  open: boolean;
  onClose: () => void;
};

type SidebarLinkInfo = {
  icon: React.ElementType;
  text: string;
  badge?: string;
  info: string;
  href: string;
};

const UserSidebar = ({ open, onClose }: UserSidebarProps) => {
  const sidebarLinks: SidebarLinkInfo[] = [
    {
      icon: User,
      text: "Profile",
      info: "View and edit your profile information",
      href: "/profile"
    },
    {
      icon: Award,
      text: "Achievements",
      badge: "3 new",
      info: "See your eco-achievements and badges",
      href: "/achievements"
    },
    {
      icon: CreditCard,
      text: "Eco Wallet",
      info: "Manage your eco-points and rewards",
      href: "/eco-wallet"
    },
    {
      icon: History,
      text: "Recycling History",
      info: "View your recycling activity and impact",
      href: "/history"
    },
    {
      icon: Leaf,
      text: "Sustainability Tips",
      info: "Learn how to reduce your carbon footprint",
      href: "/tips"
    },
    {
      icon: Recycle,
      text: "Recycling Centers",
      info: "Find recycling centers near you",
      href: "/centers"
    },
    {
      icon: Settings,
      text: "Settings",
      info: "Customize your app preferences",
      href: "/settings"
    },
    {
      icon: LogOut,
      text: "Sign Out",
      info: "Log out of your account",
      href: "/logout"
    }
  ];

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-[300px] sm:w-[400px] px-6 py-8 bg-gradient-to-b from-white to-regeni-light/30" side="right">
        <SheetHeader className="text-left mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-regeni-light rounded-full flex items-center justify-center border-2 border-regeni-teal/20">
                <User className="text-regeni-teal" size={24} />
              </div>
              <div>
                <SheetTitle className="text-xl">SHECODES</SheetTitle>
                <SheetDescription className="text-sm">Eco Level: Silver</SheetDescription>
              </div>
            </div>
            <SheetClose className="rounded-full p-2 hover:bg-gray-100">
              <X size={18} />
            </SheetClose>
          </div>
        </SheetHeader>
        
        <div className="bg-regeni-light/50 rounded-lg p-4 mb-6 border border-regeni-teal/20 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-regeni-dark">Your EcoPoints</h3>
            <span className="font-bold text-regeni-teal">1,250</span>
          </div>
          <div className="w-full bg-white rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-regeni-teal to-regeni-green h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-xs text-regeni-dark/70 mt-2">750 more points to reach Gold level</p>
        </div>
        
        <TooltipProvider>
          <nav className="space-y-1">
            {sidebarLinks.map((link, index) => (
              <div key={index} className={index === sidebarLinks.length - 1 ? "pt-4 mt-4 border-t" : ""}>
                <UserSidebarLink 
                  icon={link.icon} 
                  text={link.text} 
                  badge={link.badge} 
                  info={link.info}
                  href={link.href}
                />
              </div>
            ))}
          </nav>
        </TooltipProvider>
        
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="flex items-center justify-center gap-2">
            <Logo size={20} variant="elegant" />
            <span className="text-sm text-muted-foreground">RegeniScan © 2025</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const UserSidebarLink = ({ 
  icon: Icon, 
  text, 
  badge, 
  info,
  href
}: SidebarLinkInfo) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a 
        href={href}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-regeni-light/70 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <Icon size={18} className="text-regeni-teal" />
          <span>{text}</span>
        </div>
        <div className="flex items-center">
          {badge && (
            <span className="bg-regeni-teal/10 text-regeni-teal text-xs px-2 py-1 rounded-full mr-2">
              {badge}
            </span>
          )}
          <Info size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>
    </TooltipTrigger>
    <TooltipContent>
      <p>{info}</p>
    </TooltipContent>
  </Tooltip>
);

export default UserSidebar;
