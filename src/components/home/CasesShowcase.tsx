'use client';
import { cases } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CasesShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 gradient-text"
        >
          Реальні кейси та результати
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/cases/${c.slug}`} className="group block rounded-xl overflow-hidden glass-card hover:border-red transition-all">
                <div className="h-48 bg-red/20 relative">
                  <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red transition">{c.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
                  <Button variant="secondary" className="pointer-events-none">Детальніше</Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/cases" variant="primary">Всі кейси</Button>
        </div>
      </div>
    </section>
  );
}