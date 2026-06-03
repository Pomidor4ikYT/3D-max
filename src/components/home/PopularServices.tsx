'use client';
import { servicesList } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const popularIndices = [0, 1, 3, 5];
const popular = servicesList.filter((_, idx) => popularIndices.includes(idx));

export default function PopularServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="py-20 bg-darker">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-6 gradient-text"
        >
          Популярні послуги
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 mb-12"
        >
          Найзатребуваніші рішення від наших клієнтів
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popular.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-red">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
              <Button href="/services" variant="secondary">Детальніше</Button>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/services" variant="primary">Всі послуги</Button>
        </div>
      </div>
    </section>
  );
}