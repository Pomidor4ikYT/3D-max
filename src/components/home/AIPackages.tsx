'use client';
import { useState } from 'react';
import { packages1, packages2 } from '@/lib/constants';
import Button from '@/components/ui/Button';
import ServiceModal from '@/components/ServiceModal';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AIPackages() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section ref={ref} className="py-20 bg-darker">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-6 gradient-text"
          >
            Готові продукти
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center text-gray-400 mb-12"
          >
            Фіксована ціна, чіткий термін виконання
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packages1.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 p-6 rounded-2xl neon-border flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold gradient-text mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{pkg.desc}</p>
                <div className="text-2xl font-bold text-red mt-auto mb-4">{pkg.price}</div>
                <Button onClick={() => setSelectedPackage(pkg)} variant="primary" className="w-full text-center">
                  Замовити
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center mb-6 gradient-text"
          >
            Регулярні послуги (супровід)
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="text-center text-gray-400 mb-12"
          >
            Щомісячна стабільність
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages2.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 p-6 rounded-2xl neon-border flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold gradient-text mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{pkg.desc}</p>
                <div className="text-2xl font-bold text-red mt-auto mb-4">{pkg.price}</div>
                <Button onClick={() => setSelectedPackage(pkg)} variant="primary" className="w-full text-center">
                  Підключити
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {selectedPackage && <ServiceModal service={selectedPackage} onClose={() => setSelectedPackage(null)} />}
    </>
  );
}