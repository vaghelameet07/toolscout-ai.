import React from 'react';
import { Zap } from 'lucide-react';

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-white/5 h-16 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={onLogoClick}>
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <Zap size={18} fill="white" className="text-white" />
        </div>
        <span className="text-xl font-black tracking-tighter italic uppercase text-white">
          TOOL<span className="text-blue-600">SCOUT</span>
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Directory</a>
        <a href="/submit" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Submit Tool</a>
      </nav>
    </header>
  );
};

export default Header;
