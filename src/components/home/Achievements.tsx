'use client';
import { achievements, festivalList } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-6 gradient-text"
        >
          Наші досягнення та фестивалі
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          4-річний досвід, 48+ успішних проєктів
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red">🏆 Ключові проєкти</h3>
            <div className="space-y-3">
              {achievements.slice(0,6).map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red/10 transition">
                  <span className="text-red text-xl">✦</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red">🎡 Фестивалі та рекорди</h3>
            <div className="space-y-4">
              {festivalList.map((fest, i) => (
                <div key={i} className="bg-black/40 p-5 rounded-xl border-l-4 border-red-500 hover:bg-black/60 transition">
                  <h4 className="text-xl font-bold text-red">{fest.name}</h4>
                  <p className="text-gray-400 text-sm">{fest.year}</p>
                  <p className="text-gray-300 mt-2">{fest.result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}