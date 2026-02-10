import React from 'react';

const Footer = () => (
  <footer className="mt-20 py-12 px-6 border-t border-white/5 bg-[#080808]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-white font-black italic uppercase text-xl">TOOL<span className="text-blue-600">SCOUT</span></div>
      <div className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
        SITE CREATED BY <span className="text-white">MEET</span>
      </div>
    </div>
  </footer>
);
export default Footer;
