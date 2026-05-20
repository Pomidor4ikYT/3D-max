'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faq } from '@/lib/constants';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20">
      <div className="container-custom max-w-3xl">
        <h2 className="text-center mb-12 gradient-text">Часті запитання</h2>
        <div className="space-y-4">
          {faq.map((item, idx) => (
            <div key={idx} className="border border-gray-800 rounded-xl overflow-hidden">
              <button
                className="w-full text-left p-5 font-semibold flex justify-between items-center hover:bg-darker transition"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                {item.q}
                <span className="text-red text-2xl">{open === idx ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-gray-400">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}