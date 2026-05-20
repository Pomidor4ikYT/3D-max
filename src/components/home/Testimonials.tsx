'use client';
import { useEffect, useRef, useState } from 'react';
import { testimonials } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section className="py-20 bg-darker">
      <div className="container-custom">
        <h2 className="text-center mb-12 gradient-text">Що говорять клієнти</h2>
        <div
          className="max-w-3xl mx-auto cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-black p-8 rounded-2xl border-l-8 border-red shadow-xl"
            >
              <p className="text-gray-300 italic mb-4 text-lg">“{testimonials[index].text}”</p>
              <p className="font-bold text-red">— {testimonials[index].author}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition ${i === index ? 'bg-red w-4' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}