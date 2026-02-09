import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6 animate-in fade-in">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} /> Back
      </button>
      
      <h2 className="text-4xl font-black italic uppercase text-white mb-8">Privacy <span className="text-blue-600">Policy</span></h2>
      
      <div className="space-y-6 text-gray-400 leading-relaxed">
        <section>
          <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">1. Information We Collect</h3>
          <p>We only collect information that you voluntarily provide to us when you submit a tool or contact us via email.</p>
        </section>
        
        <section>
          <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">2. How We Use Information</h3>
          <p>The information is used solely to improve the directory and provide a better experience for our users.</p>
        </section>

        <section>
          <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">3. Cookies</h3>
          <p>We use essential cookies to ensure the website functions correctly and to analyze our traffic.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
