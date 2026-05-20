'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const aiCapabilities = [
  { title: 'Генерація контенту', desc: 'Тексти, ідеї, сценарії за секунди' },
  { title: 'Дизайн та візуал', desc: 'Створення графіки та логотипів' },
  { title: 'Відео та анімація', desc: 'AI-ролики та аватари' },
  { title: 'Персоналізація реклами', desc: 'Таргетинг під кожного клієнта' },
  { title: 'Аналітика', desc: 'Оптимізація кампаній в реальному часі' },
  { title: 'Автоматизація', desc: 'Чат-боти та email-розсилки' },
  { title: 'Моніторинг репутації', desc: 'Відстеження відгуків' },
];

export default function AICapabilities() {
  const [flipped, setFlipped] = useState<number | null>(null);
  return (
    <section className="py-20 bg-darker">
      <div className="container-custom">
        <h2 className="text-center mb-12 gradient-text">Можливості ШІ в нашій роботі</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {aiCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="relative h-40 cursor-pointer perspective"
              onMouseEnter={() => setFlipped(idx)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div
                className="w-full h-full rounded-xl bg-black neon-border relative preserve-3d"
                animate={{ rotateY: flipped === idx ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-red text-3xl mb-2">✨</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <div className="absolute inset-0 backface-hidden flex items-center justify-center p-4 text-center rotate-y-180 bg-red/10 rounded-xl">
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}