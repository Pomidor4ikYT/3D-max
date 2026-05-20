'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: '', phone: '', business: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Надсилання...');
    setTimeout(() => {
      setStatus('Дякуємо! Ми зателефонуємо вам найближчим часом.');
      setForm({ name: '', phone: '', business: '' });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-darker p-6 rounded-2xl">
      <input type="text" placeholder="Ваше ім’я" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full p-3 bg-dark rounded-lg border border-gray-700 focus:border-neonBlue outline-none" />
      <input type="tel" placeholder="Телефон" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="w-full p-3 bg-dark rounded-lg border border-gray-700 focus:border-neonBlue outline-none" />
      <input type="text" placeholder="Ваш бізнес" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className="w-full p-3 bg-dark rounded-lg border border-gray-700 focus:border-neonBlue outline-none" />
      <Button type="submit" variant="primary" className="w-full">Надіслати</Button>
      {status && <p className="text-center text-neonCyan text-sm">{status}</p>}
    </form>
  );
}