'use client';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useEffect, useRef } from 'react';

const stats = [
  { value: 380, label: 'Проєктів', suffix: '+' },
  { value: 25, label: 'Років досвіду', suffix: '' },
  { value: 3500, label: 'Гостей подій', suffix: '+' },
  { value: 120, label: 'Рекламних кампаній', suffix: '+' },
];

export default function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('animate-fade-up');
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-20 bg-darker opacity-0 translate-y-10 transition-all duration-700">
      <div className="container-custom">
        <h2 className="text-center mb-12 gradient-text">Досвід, який працює на результат</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl neon-border bg-black/50">
              <AnimatedCounter value={stat.value} duration={1500} />
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}