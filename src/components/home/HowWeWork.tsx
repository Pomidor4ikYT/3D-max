'use client';
import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { id: 1, title: 'Аналіз', description: 'Вивчаємо ваш бізнес, конкурентів, аудиторію.' },
  { id: 2, title: 'Стратегія', description: 'Розробляємо унікальну стратегію просування.' },
  { id: 3, title: 'Упаковка', description: 'Створюємо бренд, логотип, сайт, контент.' },
  { id: 4, title: 'Реклама', description: 'Запускаємо таргетовану рекламу, SEO, SMM.' },
  { id: 5, title: 'Оптимізація', description: 'Аналізуємо результати, покращуємо ефективність.' },
  { id: 6, title: 'Результат', description: 'Отримуєте стабільний потік клієнтів.' },
];

export default function HowWeWork() {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleStepClick = (id: number) => {
    setActiveSteps(Array.from({ length: id }, (_, i) => i + 1));
    setSelectedStep(id);
  };

  return (
    <section ref={ref} className="py-20 bg-darker">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 gradient-text"
        >
          Простий процес — сильний результат
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStepClick(step.id)}
                className={`w-12 h-12 rounded-full border-2 font-bold text-lg transition-all duration-300 ${
                  activeSteps.includes(step.id)
                    ? 'bg-red border-red text-white'
                    : 'border-red/50 text-red/70 bg-transparent'
                }`}
              >
                {step.id}
              </motion.button>
              {idx < steps.length - 1 && (
                <motion.span className="ml-2 md:ml-4 text-red/50 text-xl font-bold">→</motion.span>
              )}
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {selectedStep && (
            <motion.div
              key={selectedStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto text-center p-6 glass-card"
            >
              <h3 className="text-2xl font-bold text-red mb-2">
                {steps.find(s => s.id === selectedStep)?.title}
              </h3>
              <p className="text-gray-300">
                {steps.find(s => s.id === selectedStep)?.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}