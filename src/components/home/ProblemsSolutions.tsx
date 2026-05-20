'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { problem: '❌ Недостатня кількість клієнтів', solution: '✅ Щоденний притік потенційних клієнтів' },
  { problem: '❌ Відсутність впізнаваності', solution: '✅ Швидке створення унікального бренду' },
  { problem: '❌ Малий бюджет на контент та рекламу', solution: '✅ Професійний контент за ціною підписки' },
  { problem: '❌ Злив бюджету на рекламу', solution: '✅ Кожна гривня витрачається на цільового ліда' },
];

export default function ProblemsSolutions() {
  const [flipped, setFlipped] = useState<boolean[]>(new Array(items.length).fill(false));

  const handleHover = (idx: number) => {
    setFlipped(prev => {
      const newState = [...prev];
      if (!newState[idx]) newState[idx] = true;
      return newState;
    });
  };

  return (
    <section className="py-20 bg-darker">
      <div className="container-custom">
        <h2 className="text-center mb-12 gradient-text">Перетворюємо проблеми бізнесу у продажі</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative h-40 cursor-pointer perspective"
              onMouseEnter={() => handleHover(idx)}
            >
              <motion.div
                className="w-full h-full rounded-xl bg-black/40 neon-border preserve-3d"
                animate={{ rotateY: flipped[idx] ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 backface-hidden flex items-center justify-center p-4 text-center">
                  <p className="text-lg font-semibold text-gray-300">{item.problem}</p>
                </div>
                <div className="absolute inset-0 backface-hidden flex items-center justify-center p-4 text-center rotate-y-180 bg-red/10 rounded-xl">
                  <p className="text-xl font-bold text-green-400">{item.solution}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}