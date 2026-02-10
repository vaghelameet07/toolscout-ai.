import React, { useState, useEffect } from 'react';
import { Search, Sparkles, MoreHorizontal, ArrowRight } from 'lucide-react';
import toolsData from '../data/directoryData.json';
import { Tool } from '../types';

const DirectoryPage: React.FC<{onToolClick: (t: Tool) => void}> = ({ onToolClick }) => {
  const [search, setSearch] = useState('');
  const [text, setText] = useState('AI COMPANION');
  
  useEffect(() => {
    const words = ["AI COMPANION", "CONTENT TOOL", "CREATIVE PARTNER"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % words.length;
      setText(words[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tools = (toolsData as Tool[]).filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          <Sparkles size={12} className="text-blue-600" />
          <span>The World's #1 AI Directory</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.9] mb-6">
          Find the Perfect <br />
          <span className="text-blue-600 outline-text">{text}</span>
        </h1>
      </div>

      <div className="relative max-w-2xl mx-auto mb-20">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600" size={24} />
        <input 
          className="w-full bg-[#0c0c0c] border border-white/10 rounded-full py-6 px-16 text-xl text-white focus:outline-none focus:border-blue-600 transition-all"
          placeholder="Search for tools..." value={search} onChange={(e) => setSearch(e.target.value)}
        />
        <MoreHorizontal className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600" size={24} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map(t => (
          <div key={t.id} onClick={() => onToolClick(t)} className="bg-[#0c0c0c] border border-white/5 p-8 rounded-[2rem] hover:border-blue-600/50 transition-all cursor-pointer">
            <div className="flex justify-between mb-6">
              <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500"><Sparkles size={24} /></div>
              {t.pro && <span className="text-[10px] font-black bg-blue-600 px-3 py-1 rounded-full uppercase">PRO</span>}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
            <p className="text-gray-500 text-sm mb-6">{t.desc}</p>
            <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <span>{t.category}</span>
              <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DirectoryPage;
        
