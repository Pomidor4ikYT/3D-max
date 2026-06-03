'use client';
import Button from '@/components/ui/Button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-red-600 to-red-800">
      <div className="container-custom text-center max-w-2xl">
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          className="mb-6 text-white"
        >
          Готові отримати більше клієнтів?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/90 mb-8 text-lg"
        >
          Розкажіть про свій бізнес — ми запропонуємо рішення для росту.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Button href="/contacts" variant="primary" className="text-lg px-8 py-4 bg-white text-red-700 hover:bg-gray-100">
            Отримати консультацію
          </Button>
        </motion.div>
      </div>
    </section>
  );
}