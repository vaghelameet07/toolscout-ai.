import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6 animate-in fade-in">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} /> Back
      </button>
      
      <h2 className="text-4xl font-black italic uppercase text-white mb-8">Terms of <span className="text-blue-600">Service</span></h2>
      
      <div className="space-y-6 text-gray-400 leading-relaxed">
        <p>By using ToolScout AI, you agree to these terms. Please read them carefully.</p>
        
        <section>
          <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">1. Use of Service</h3>
          <p>Our platform provides a directory of AI tools. We are not responsible for the content or performance of third-party tools listed here.</p>
        </section>

        <section>
          <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">2. Content Accuracy</h3>
          <p>While we strive for accuracy, we do not warrant that tool descriptions or AI-generated responses are always up-to-date or error-free.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
