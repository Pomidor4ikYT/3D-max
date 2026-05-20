'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMsg = { role: 'user' as const, content: message };
    setChat((prev) => [...prev, userMsg]);
    setMessage('');
    setLoading(true);
    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setChat((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setChat((prev) => [...prev, { role: 'assistant', content: 'Помилка, спробуйте пізніше.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-neonBlue to-neonPurple p-4 rounded-full shadow-lg hover:opacity-90 transition"
      >
        💬
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 bg-darker rounded-2xl border border-neonBlue/30 shadow-2xl flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="font-bold">AI-помічник PR.тут</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {chat.map((msg, idx) => (
              <div key={idx} className={`${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg max-w-[80%] ${msg.role === 'user' ? 'bg-neonBlue/20' : 'bg-gray-700'}`}>
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && <div className="text-left">Друкує...</div>}
          </div>
          <div className="p-4 border-t border-gray-700 flex gap-2">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Задайте питання..." className="flex-1 p-2 bg-dark rounded-lg border border-gray-600 focus:border-neonBlue outline-none" />
            <Button onClick={sendMessage} variant="primary">→</Button>
          </div>
        </div>
      )}
    </>
  );
}