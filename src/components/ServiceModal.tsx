'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

function parsePrice(priceStr: string): number {
  const match = priceStr.match(/(\d[\d\s]*)/);
  if (!match) return 0;
  return parseInt(match[1].replace(/\s/g, ''), 10);
}

export default function ServiceModal({ service, onClose }: { service: any; onClose: () => void }) {
  const items = service.items || [service];
  const total = items.reduce((sum: number, item: any) => sum + parsePrice(item.price), 0);

  const [form, setForm] = useState({ name: '', phone: '', email: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Замовлення:', { items, form });
    setSubmitted(true);
    setTimeout(() => onClose(), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-darker p-8 rounded-2xl max-w-md w-full mx-4 border border-red/30 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {!submitted ? (
            <>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Оформлення замовлення</h3>
              <div className="bg-black/50 p-4 rounded-lg mb-4 neon-border">
                <p className="font-semibold text-white mb-2">Ви обрали:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {items.map((item: any, idx: number) => (
                    <li key={idx}>• {item.title} – {item.price}</li>
                  ))}
                </ul>
                <div className="mt-2 pt-2 border-t border-red/30">
                  <p className="text-lg font-bold text-red">Загалом: {total.toLocaleString()} ₴</p>
                </div>
              </div>
              <div className="bg-black/50 p-3 rounded-lg mb-4 text-center neon-border">
                <p className="text-gray-300 text-sm">
                  📞 Після оформлення заявки ми зателефонуємо або напишемо в Telegram протягом 12 годин.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше ім'я *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full p-3 bg-black rounded-lg border border-gray-700 focus:border-red outline-none"
                />
                <input
                  type="tel"
                  placeholder="Телефон *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full p-3 bg-black rounded-lg border border-gray-700 focus:border-red outline-none"
                />
                <input
                  type="email"
                  placeholder="Email (необов'язково)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full p-3 bg-black rounded-lg border border-gray-700 focus:border-red outline-none"
                />
                <textarea
                  placeholder="Коментар"
                  rows={3}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="w-full p-3 bg-black rounded-lg border border-gray-700 focus:border-red outline-none"
                />
                <Button type="submit" variant="primary" className="w-full">
                  Підтвердити замовлення
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">Дякуємо!</h3>
              <p className="text-gray-300">Ваше замовлення прийнято. Ми зв'яжемося з вами протягом 12 годин.</p>
            </div>
          )}
          <button onClick={onClose} className="mt-6 text-gray-400 text-sm block w-full text-center hover:text-white transition">
            Закрити
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}