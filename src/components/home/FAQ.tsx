'use client';
import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { faq } from '@/lib/constants';
import { useRef } from 'react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="py-20 bg-darker">
      <div className="container-custom max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 gradient-text"
        >
          Часті запитання
        </motion.h2>
        <div className="space-y-4">
          {faq.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="border border-red/30 rounded-xl overflow-hidden glass-card"
            >
              <button
                className="w-full text-left p-5 font-semibold flex justify-between items-center hover:bg-red/10 transition"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="text-white">{item.q}</span>
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
                    <div className="p-5 pt-0 text-gray-400 border-t border-red/20">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}