'use client';
import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { id: 1, title: 'Заявка', desc: 'Ви заповнюєте форму з описом і завантажуєте 3D-модель (STL, OBJ, 3MF).', icon: '📄' },
  { id: 2, title: 'Розрахунок', desc: 'Ми оцінюємо вартість, терміни та погоджуємо всі деталі.', icon: '📊' },
  { id: 3, title: 'Друк', desc: 'Запускаємо друк з контролем якості на кожному етапі.', icon: '🖨️' },
  { id: 4, title: 'Готово', desc: 'Ви отримуєте готовий виріб або доставку по Україні.', icon: '📦' },
];

export default function HowWeWork() {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-[#1a3c34]">Як ми працюємо</h2>
          <p className="text-[#5a5a5a] text-lg">Натисніть на крок, щоб дізнатися деталі</p>
        </motion.div>

        <div className="relative">
          {/* Вертикальна лінія */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#c9a84c]/30 hidden md:block transform -translate-x-1/2" />

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <button
                    onClick={() => setActive(active === step.id ? null : step.id)}
                    className="w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 font-medium hover:shadow-lg group"
                    style={{
                      borderColor: active === step.id ? '#c9a84c' : '#d0d0d0',
                      backgroundColor: active === step.id ? '#f5f0eb' : 'transparent'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{step.icon}</span>
                      <span className="text-xl font-heading font-bold text-[#1a3c34]">
                        {step.id}. {step.title}
                      </span>
                    </div>
                    <AnimatePresence>
                      {active === step.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-[#5a5a5a] border-t border-[#c9a84c]/30 pt-3">
                            {step.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#c9a84c] text-white font-bold text-lg shadow-lg z-10 flex-shrink-0">
                  {step.id}
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}