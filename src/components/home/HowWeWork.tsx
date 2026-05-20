'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { id: 1, title: 'Аналіз', description: 'Вивчаємо ваш бізнес, конкурентів, аудиторію. Проводимо глибинне інтерв\'ю та збираємо дані.' },
  { id: 2, title: 'Стратегія', description: 'Розробляємо унікальну стратегію просування, визначаємо канали та бюджети.' },
  { id: 3, title: 'Упаковка', description: 'Створюємо бренд, логотип, сайт, контент — все, що формує імідж.' },
  { id: 4, title: 'Реклама', description: 'Запускаємо таргетовану рекламу, SEO, SMM, Google Ads.' },
  { id: 5, title: 'Оптимізація', description: 'Аналізуємо результати, покращуємо ефективність щодня.' },
  { id: 6, title: 'Результат', description: 'Отримуєте стабільний потік клієнтів і зростання продажів.' },
];

export default function HowWeWork() {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const handleStepClick = (id: number) => {
    // Активуємо всі кроки до id включно
    const newActive = Array.from({ length: id }, (_, i) => i + 1);
    setActiveSteps(newActive);
    setSelectedStep(id);
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="text-center mb-12 gradient-text">Простий процес — сильний результат</h2>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => handleStepClick(step.id)}
                className={`w-12 h-12 rounded-full border-2 font-bold text-lg transition-all duration-300 hover:scale-110 ${
                  activeSteps.includes(step.id)
                    ? 'bg-red border-red text-white'
                    : 'border-red/50 text-red/70 bg-transparent'
                }`}
              >
                {step.id}
              </button>
              {idx < steps.length - 1 && (
                <span className="ml-2 md:ml-4 text-red/50 text-xl font-bold animate-pulse-red">→</span>
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
              className="max-w-2xl mx-auto text-center p-6 bg-black/50 rounded-2xl neon-border"
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