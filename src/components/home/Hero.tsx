'use client';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container-custom text-center py-20"
      >
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          Ми приводимо <span className="gradient-text">клієнтів</span><br />які купують.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          AI-маркетинг, PR, брендинг та реклама для бізнесу, стартапів і подій.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button href="/contacts" variant="primary">Отримати консультацію</Button>
          <Button href="/cases" variant="secondary">Переглянути кейси</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}