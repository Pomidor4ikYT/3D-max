'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const works = [
  { src: '/images/gallery/1.jpg', title: 'Фігурка дракона', desc: 'Деталізація 0.1 мм, PLA' },
  { src: '/images/gallery/2.jpg', title: 'Прототип шестерні', desc: 'ABS, міцність' },
  { src: '/images/gallery/3.jpg', title: 'Ваза для квітів', desc: 'PETG, прозорість' },
  { src: '/images/gallery/4.jpg', title: 'Шахові фігури', desc: 'Набір із 32 фігур' },
];

export default function WorkExamples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-[#1a3c34]">Наші роботи</h2>
          <p className="text-[#5a5a5a] text-lg">Реальні приклади виробів, які ми створили</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              <div className="aspect-square relative">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif text-xl font-bold">{work.title}</h3>
                  <p className="text-[#7ec8a3] text-sm">{work.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/gallery" variant="secondary">Всі роботи</Button>
        </div>
      </div>
    </section>
  );
}