import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Paperclip, Sparkles } from 'lucide-react';

interface ToolDetailPageProps {
  tool: any;
  onBack: () => void;
}

const ToolDetailPage: React.FC<ToolDetailPageProps> = ({ tool, onBack }) => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: `Bhai, main aapka ${tool.name} AI hoon. Batao aaj kya viral banana hai?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ toolId: tool.id, prompt: input })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', content: data.data || "AI busy hai, thodi der baad try karo!" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: "Backend connect nahi ho pa raha. API Key check karein!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] bg-[#0c0c0c] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4">
      {/* Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/40">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-white/5 rounded-full transition-all">
            <ArrowLeft size={20} className="text-gray-400 hover:text-white" />
          </button>
          <div>
            <h2 className="font-black uppercase italic text-sm tracking-widest text-blue-500">{tool.name}</h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">AI Powered Agent</p>
          </div>
        </div>
        <Sparkles size={20} className="text-blue-600 animate-pulse" />
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-3xl text-sm ${
              msg.role === 'user' 
              ? 'bg-blue-600 text-white rounded-tr-none' 
              : 'bg-white/5 text-gray-200 rounded-tl-none border border-white/5'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-blue-500 text-[10px] font-bold italic animate-pulse px-2 uppercase tracking-widest">
            ToolScout AI is generating...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="p-6 bg-black/40 border-t border-white/5">
        <div className="relative flex items-center gap-3">
          <button type="button" className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-colors">
            <Paperclip size={20} />
          </button>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask anything to ${tool.name}...`} 
            className="flex-1 bg-[#121212] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-600/50 text-sm text-white transition-all"
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="p-4 bg-blue-600 rounded-2xl hover:bg-blue-700 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] disabled:opacity-50"
          >
            <Send size={20} className="text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToolDetailPage;
                           
