
import React from 'react';
import { X, User, Settings, CreditCard, Award, History, LogOut } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import Logo from './Logo';

type UserSidebarProps = {
  open: boolean;
  onClose: () => void;
};

const UserSidebar = ({ open, onClose }: UserSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-[300px] sm:w-[400px] px-6 py-8" side="right">
        <SheetHeader className="text-left mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-regeni-light rounded-full flex items-center justify-center">
                <User className="text-regeni-teal" size={24} />
              </div>
              <div>
                <SheetTitle className="text-xl">John Doe</SheetTitle>
                <SheetDescription className="text-sm">Eco Level: Silver</SheetDescription>
              </div>
            </div>
            <SheetClose className="rounded-full p-2 hover:bg-gray-100">
              <X size={18} />
            </SheetClose>
          </div>
        </SheetHeader>
        
        <div className="bg-regeni-light/50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-regeni-dark">Your EcoPoints</h3>
            <span className="font-bold text-regeni-teal">1,250</span>
          </div>
          <div className="w-full bg-white rounded-full h-2">
            <div className="bg-gradient-to-r from-regeni-teal to-regeni-green h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-xs text-regeni-dark/70 mt-2">750 more points to reach Gold level</p>
        </div>
        
        <nav className="space-y-1">
          <UserSidebarLink icon={User} text="Profile" />
          <UserSidebarLink icon={Award} text="Achievements" badge="3 new" />
          <UserSidebarLink icon={CreditCard} text="Eco Wallet" />
          <UserSidebarLink icon={History} text="Recycling History" />
          <UserSidebarLink icon={Settings} text="Settings" />
          <div className="pt-4 mt-4 border-t">
            <UserSidebarLink icon={LogOut} text="Sign Out" />
          </div>
        </nav>
        
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

const UserSidebarLink = ({ icon: Icon, text, badge }: { icon: React.ElementType, text: string, badge?: string }) => (
  <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-regeni-light/70 transition-colors">
    <div className="flex items-center gap-3">
      <Icon size={18} className="text-regeni-teal" />
      <span>{text}</span>
    </div>
    {badge && (
      <span className="bg-regeni-teal/10 text-regeni-teal text-xs px-2 py-1 rounded-full">
        {badge}
      </span>
    )}
  </button>
);

export default UserSidebar;
