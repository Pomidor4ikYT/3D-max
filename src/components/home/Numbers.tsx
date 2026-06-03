'use client';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: 5, label: 'Проєктів', suffix: '+' },
  { value: 4, label: 'Років досвіду', suffix: '' },
  { value: 25, label: 'Гостей подій', suffix: '+' },
  { value: 3, label: 'Рекламних кампаній', suffix: '+' },
];

export default function Numbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="py-20 bg-dark">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 gradient-text"
        >
          Досвід, який працює на результат
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              {isInView && <AnimatedCounter value={stat.value} duration={1500} />}
              <p className="text-gray-400 mt-2 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}