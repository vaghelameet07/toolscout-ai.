import React from 'react';
import { Zap, Menu } from 'lucide-react';

interface NavbarProps {
  onLogoClick: () => void;
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick, onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-xl border-b border-white/5 h-16 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={onLogoClick}>
        <div className="bg-blue-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          <Zap size={18} fill="white" className="text-white" />
        </div>
        <span className="text-xl font-black tracking-tighter italic uppercase">
          TOOL<span className="text-blue-600">SCOUT</span>
        </span>
      </div>
      <button onClick={onMenuClick} className="p-2 hover:bg-white/5 rounded-full">
        <Menu className="text-gray-400" />
      </button>
    </nav>
  );
};

export default Navbar;
