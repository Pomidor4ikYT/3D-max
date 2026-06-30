'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ChatPage() {
  const router = useRouter();
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
    inputRef.current?.focus();
  }, []);

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

  return (
    <div className="min-h-screen bg-[#f5f0eb] flex flex-col">
      {/* Шапка */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-[#d0c8c0] px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="text-gray-600 hover:text-[#1a3c34] transition p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-white text-sm font-bold">
            AI
          </div>
          <h1 className="text-xl font-heading font-bold text-[#1a3c34]">AI-консультант</h1>
        </div>
        <Button
          onClick={() => router.push('/')}
          variant="secondary"
          className="text-sm px-4 py-2"
        >
          На сайт
        </Button>
      </header>

      {/* Чат */}
      <div className="flex-1 max-w-3xl w-full mx-auto p-4 overflow-y-auto">
        <div className="space-y-3">
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
      </div>

      {/* Поле вводу */}
      <div className="sticky bottom-0 bg-white/90 backdrop-blur-md border-t border-[#d0c8c0] p-4">
        <div className="max-w-3xl mx-auto flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !loading && handleSend()}
            placeholder="Напишіть питання..."
            className="flex-1 p-3 rounded-full border border-[#d0c8c0] bg-[#f5f0eb] focus:border-[#c9a84c] outline-none text-[#1a3c34] placeholder-gray-400 text-sm"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className={`p-3 rounded-full transition font-bold ${
              loading || !input.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#c9a84c] text-white hover:bg-[#b89a3e]'
            }`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}