import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import directoryData from '../data/directoryData.json';

interface DirectoryPageProps {
  onToolClick: (tool: any) => void;
}

const DirectoryPage: React.FC<DirectoryPageProps> = ({ onToolClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Video Editor', 'Script Writer', 'SEO Expert', 'Thumbnail Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const filteredTools = directoryData.tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tool.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="text-center mb-16 pt-10">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic uppercase text-white">
          Find the perfect <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            AI {words[wordIndex]}
          </span>
        </h1>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mt-12 px-4">
          <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text" 
            placeholder="Search 1000+ AI tools..." 
            className="w-full bg-[#0e0e0e] border border-white/10 rounded-3xl py-6 px-16 focus:outline-none focus:border-blue-600/50 text-white shadow-2xl"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 px-4">
          {directoryData.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat 
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredTools.map(tool => (
          <div 
            key={tool.id} 
            onClick={() => onToolClick(tool)}
            className="group bg-[#0c0c0c] border border-white/5 rounded-[32px] p-8 hover:bg-[#111] hover:border-blue-600/50 transition-all cursor-pointer relative overflow-hidden"
          >
            {tool.pro && (
              <div className="absolute top-4 right-4 bg-blue-600/10 text-blue-500 text-[10px] font-black px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-widest">
                Pro Tool
              </div>
            )}
            <div className="mb-6 p-3 bg-blue-600/10 w-fit rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl font-black mb-2 italic uppercase text-white group-hover:text-blue-500 transition-colors">
              {tool.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {tool.desc}
            </p>
            <div className="flex items-center text-blue-500 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              Try Now <ArrowRight size={16} className="ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectoryPage;
                                                   
