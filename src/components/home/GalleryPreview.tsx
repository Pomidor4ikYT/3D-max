// components/home/GalleryPreview.tsx
'use client';
import Button from '@/components/ui/Button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const previewImages = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg', 
];

export default function GalleryPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-28 bg-[#f5f0eb]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-[#1a3c34]">Наші роботи</h2>
          <p className="text-[#5a5a5a] text-lg">Реальні приклади виробів</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4 mb-10"
        >
          {/* Перше фото – велике (на 2 ряди) */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group md:row-span-2"
          >
            <Image
              src={previewImages[0]}
              alt="Робота 1"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white font-heading font-bold text-lg">Фігурка дракона</p>
            </div>
          </motion.div>

          {/* Друге фото */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image
              src={previewImages[1]}
              alt="Робота 2"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white font-heading font-bold text-lg">Колекція іграшок</p>
            </div>
          </motion.div>

          {/* Третє фото */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image
              src={previewImages[2]}
              alt="Робота 3"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white font-heading font-bold text-lg">Прототип деталі</p>
            </div>
          </motion.div>

          {/* Четверте фото */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image
              src={previewImages[3]}
              alt="Робота 4"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white font-heading font-bold text-lg">Коробка передач</p>
            </div>
          </motion.div>

          {/* П'яте фото (замість блоку "Більше робіт") */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image
              src={previewImages[4]}
              alt="Робота 5"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white font-heading font-bold text-lg">Масажні ролери</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="text-center">
          <Button href="/gallery" variant="secondary">Всі роботи</Button>
        </div>
      </div>
    </section>
  );
}