'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Вітаю! Я AI-консультант. Запитайте про ціни, терміни, матеріали або доставку.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;
    
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      
      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'bot', text: 'Вибачте, сталася помилка. Спробуйте пізніше.' }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: `Помилка з'єднання. Перевірте інтернет.` }]);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b89a3e] shadow-2xl shadow-[#c9a84c]/40 hover:scale-105 transition-all duration-300 group"
        aria-label="Відкрити AI-консультанта"
      >
        <span className="absolute inset-0 rounded-full animate-pulse-ring"></span>
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#7ec8a3] rounded-full border-2 border-[#1a3c34] animate-pulse"></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              ...(isExpanded ? {
                x: 0,
                width: '560px',
                height: '70vh',
                maxHeight: '700px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                bottom: 'auto',
                right: 'auto',
              } : {
                x: 0,
                width: '384px',
                height: 'auto',
                maxHeight: '80vh',
                left: 'auto',
                right: '2rem',
                bottom: '7rem',
                top: 'auto',
                transform: 'none',
              })
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-[#c9a84c]/20 overflow-hidden"
            style={{
              width: isExpanded ? '560px' : '384px',
              maxWidth: isExpanded ? 'calc(100vw - 2rem)' : 'calc(100vw - 2rem)',
              left: isExpanded ? '50%' : 'auto',
              top: isExpanded ? '50%' : 'auto',
              bottom: isExpanded ? 'auto' : '7rem',
              right: isExpanded ? 'auto' : '2rem',
              transform: isExpanded ? 'translate(-50%, -50%)' : 'none',
              height: isExpanded ? '70vh' : 'auto',
              maxHeight: isExpanded ? '700px' : '80vh',
            }}
          >
            <div className="flex justify-between items-center p-4 border-b border-[#d0c8c0] bg-[#f5f0eb]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#c9a84c] flex items-center justify-center text-white text-xs font-bold">
                  AI
                </div>
                <h3 className="font-heading font-bold text-[#1a3c34]">AI-консультант</h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={toggleExpand}
                  className="text-gray-400 hover:text-[#1a3c34] transition p-1 rounded-full hover:bg-gray-200"
                  title={isExpanded ? "Зменшити" : "Збільшити"}
                >
                  {isExpanded ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0h5M4 4v5m11 11l5-5m0 0h-5m5 0v5" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-[#1a3c34] transition p-1 rounded-full hover:bg-gray-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div 
              className="overflow-y-auto p-4 space-y-3 bg-[#f5f0eb]"
              style={{ height: isExpanded ? 'calc(70vh - 130px)' : '320px' }}
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-[#1a3c34] text-white'
                        : 'bg-white text-[#1a3c34] border border-[#d0c8c0]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-2 rounded-2xl border border-[#d0c8c0] text-gray-400 flex items-center gap-1">
                    <span>Друкує</span>
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-[#d0c8c0] flex gap-2 bg-white">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !loading && handleSend()}
                placeholder="Напишіть питання..."
                className="flex-1 p-2 rounded-full border border-[#d0c8c0] bg-[#f5f0eb] focus:border-[#c9a84c] outline-none text-[#1a3c34] placeholder-gray-400 text-sm"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className={`p-2 rounded-full transition font-bold ${
                  loading || !input.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#c9a84c] text-white hover:bg-[#b89a3e]'
                }`}
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}