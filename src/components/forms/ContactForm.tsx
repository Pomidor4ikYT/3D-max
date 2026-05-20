'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Надсилання...');
    setTimeout(() => {
      setStatus('');
      setForm({ name: '', phone: '', email: '', message: '' });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5 bg-darker p-6 rounded-2xl">
        <div className="mb-2 text-center text-gray-400 text-sm">📞 Після відправки ми зателефонуємо або напишемо в Telegram протягом 12 годин.</div>
        <input type="text" placeholder="Ім’я *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full p-3 bg-black rounded-lg border border-gray-700 focus:border-red outline-none" />
        <input type="tel" placeholder="Телефон *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="w-full p-3 bg-black rounded-lg border border-gray-700 focus:border-red outline-none" />
        <input type="email" placeholder="Email (необов'язково)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-3 bg-black rounded-lg border border-gray-700 focus:border-red outline-none" />
        <textarea placeholder="Ваше повідомлення" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full p-3 bg-black rounded-lg border border-gray-700 focus:border-red outline-none" />
        <Button type="submit" variant="primary" className="w-full">Надіслати</Button>
        {status && <p className="text-center text-red text-sm">{status}</p>}
      </form>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-red text-white px-6 py-3 rounded-lg shadow-lg"
          >
            ✅ Дякуємо! Ми зв’яжемося з вами протягом 12 годин.
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}