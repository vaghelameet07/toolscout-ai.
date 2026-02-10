import React from 'react';
import { Search, Menu } from 'lucide-react';

interface HeaderProps {
  onLogoClick: () => void;
  onSubmitClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onSubmitClick }) => {
  return (
    <nav className="flex justify-between items-center py-8 px-6 max-w-7xl mx-auto border-b border-white/5">
      <div onClick={onLogoClick} className="cursor-pointer group">
        <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
          TOOL<span className="text-blue-600 group-hover:text-blue-400 transition-colors">SCOUT</span>
        </h1>
      </div>
      <div className="flex items-center gap-8">
        <button 
          onClick={onSubmitClick}
          className="bg-white text-black px-8 py-3 rounded-full font-black italic uppercase text-sm hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
        >
          Submit Tool
        </button>
      </div>
    </nav>
  );
};

export default Header;
