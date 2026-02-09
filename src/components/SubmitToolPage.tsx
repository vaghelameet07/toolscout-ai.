import React from 'react';
import { ArrowLeft, Send } from 'lucide-react';

interface SubmitToolPageProps {
  onBack: () => void;
}

const SubmitToolPage: React.FC<SubmitToolPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-4">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} /> Back to Directory
      </button>
      
      <h2 className="text-4xl font-black italic uppercase text-white mb-2">Submit Your <span className="text-blue-600">AI Tool</span></h2>
      <p className="text-gray-500 mb-10">Get your tool in front of thousands of content creators.</p>

      <form className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Tool Name</label>
          <input type="text" className="w-full bg-[#0c0c0c] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-600 text-white" placeholder="e.g. MagicEdit AI" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Website URL</label>
          <input type="url" className="w-full bg-[#0c0c0c] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-600 text-white" placeholder="https://..." />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Description</label>
          <textarea className="w-full bg-[#0c0c0c] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-600 text-white h-32" placeholder="Tell us what your tool does..."></textarea>
        </div>
        <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
          SUBMIT TOOL <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default SubmitToolPage;
