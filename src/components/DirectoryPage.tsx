      import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import toolsData from '../data/directoryData.json';
import { Tool } from '../types';

interface DirectoryPageProps {
  onToolClick: (tool: Tool) => void;
}

const DirectoryPage: React.FC<DirectoryPageProps> = ({ onToolClick }) => {
  const [search, setSearch] = useState('');
  const tools: Tool[] = toolsData as Tool[];

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.desc.toLowerCase().includes(search.toLowerCase()) ||
    tool.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Hero Section */}
      <div className="text-center mb-16 pt-16">
        <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white mb-8 leading-[0.85]">
          Find the Perfect <br />
          <span className="text-blue-600 outline-text">AI Companion</span>
        </h1>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium tracking-tight">
          The ultimate directory for content creators. Find the best AI tools to scale your game.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-24">
        <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500" size={28} />
        <input 
          type="text"
          placeholder="Search for tools, categories, or niches..."
          className="w-full bg-[#0c0c0c] border-2 border-white/5 rounded-full py-8 px-20 text-2xl focus:outline-none focus:border-blue-600 transition-all shadow-2xl placeholder:text-gray-700 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredTools.map(tool => (
          <div 
            key={tool.id}
            onClick={() => onToolClick(tool)}
            className="group bg-[#0c0c0c] border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-600/50 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-5 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Sparkles size={28} />
                </div>
                {tool.pro && <span className="text-[10px] font-black bg-blue-600 text-white px-4 py-1.5 rounded-full tracking-widest uppercase shadow-lg">PRO</span>}
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">{tool.name}</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">{tool.desc}</p>
              <div className="flex justify-between items-center">
                <div className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">{tool.category}</div>
                <ArrowRight className="text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={20} />
              </div>
            </div>
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectoryPage;
