import React from 'react';
import { Mail, Github, Twitter } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
  onSubmitClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick, onSubmitClick }) => {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white font-black italic uppercase mb-4 text-xl">Tool<span className="text-blue-600">Scout</span></h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            The ultimate directory for content creators. Find the best AI tools to scale your content game.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><button onClick={onPrivacyClick} className="hover:text-blue-500 transition-colors">Privacy Policy</button></li>
            <li><button onClick={onTermsClick} className="hover:text-blue-500 transition-colors">Terms of Service</button></li>
            <li><button onClick={onSubmitClick} className="hover:text-blue-500 transition-colors">Submit a Tool</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all"><Github size={18} /></a>
            <a href="mailto:contact@toolscout.ai" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-white/5 text-gray-600 text-xs font-medium">
        © 2026 TOOLSCOUT AI. BUILT FOR CREATORS.
      </div>
    </footer>
  );
};

export default Footer;
