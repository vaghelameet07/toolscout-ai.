import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ArrowRight, MoreHorizontal } from 'lucide-react';
import toolsData from '../data/directoryData.json';
import { Tool } from '../types';

interface DirectoryPageProps { onToolClick: (tool: Tool) => void; }

const DirectoryPage: React.FC<DirectoryPageProps> = ({ onToolClick }) => {
  const [search, setSearch] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const words = ["AI COMPANION", "CONTENT TOOL", "CREATIVE PARTNER"];

  useEffect(() => {
    const interval = setInterval(() => { setTextIndex((prev) => (prev + 1) % words.length); }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredTools = (toolsData as Tool[]).filter(tool => 
    tool.name.toLowerCase().includes(search.toLowerCase()) || tool.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">
          <Sparkles size={14} className="text-blue-600" />
          <span>The World's #1 AI Directory</span>
        </div>
        <h1 className="text-7xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none mb-6">
          Find the Perfect <br />
          <span className="text-blue-600 outline-text transition-all duration-500">{words[textIndex]}</span>
        </h1>
      </div>

      <div className="relative max-w-2xl mx-auto mb-20 group">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-600 transition-colors" size={24} />
        <input 
          type="text" placeholder="Search 100+ AI tools..."
          className="w-full bg-[#0c0c0c] border border-white/10 rounded-full py-6 px-16 text-xl text-white focus:outline-none focus:border-blue-600 transition-all shadow-2xl"
          value={search} onChange={(e) => setSearch(e.target.value)}
        />
        <MoreHorizontal className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500" size={24} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTools.map(tool => (
          <div key={tool.id} onClick={() => onToolClick(tool)} className="group bg-[#0c0c0c] border border-white/5 p-8 rounded-[2rem] hover:border-blue-600/50 transition-all cursor-pointer relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all"><Sparkles size={24} /></div>
              {tool.pro && <span className="text-[10px] font-black bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-tighter">PRO</span>}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{tool.name}</h3>
            <p className="text-gray-500 text-sm mb-6">{tool.desc}</p>
            <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <span>{tool.category}</span>
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DirectoryPage;
                
