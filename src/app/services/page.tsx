'use client';
import { useState } from 'react';
import { servicesList, services, packages1, packages2 } from '@/lib/constants';
import Button from '@/components/ui/Button';
import ServiceModal from '@/components/ServiceModal';
import { motion, AnimatePresence } from 'framer-motion';

// Маппінг: назва головної послуги -> категорія детальних послуг
const serviceCategoryMap: Record<string, keyof typeof services> = {
  'AI Маркетинг': 'aiServices',
  'SMM': 'promotion',
  'Google Ads': 'promotion',
  'SEO': 'promotion',
  'Відео та Reels': 'aiServices',
  'Брендинг': 'packaging',
  'Створення сайтів': 'packaging',
  'AI-Аватари': 'aiServices',
  '3D Мерч': 'manual',
};

function parsePrice(priceStr: string): number {
  const match = priceStr.match(/(\d[\d\s]*)/);
  if (!match) return 0;
  return parseInt(match[1].replace(/\s/g, ''), 10);
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [modalService, setModalService] = useState<any>(null);
  const [selectedSubServices, setSelectedSubServices] = useState<any[]>([]);

  const handleBack = () => {
    setSelectedService(null);
    setSelectedSubServices([]);
  };

  const handleSelectService = (service: any) => {
    setSelectedService(service);
    setSelectedSubServices([]);
  };

  const getDetailedServices = (serviceTitle: string) => {
    const category = serviceCategoryMap[serviceTitle];
    if (category && services[category]) return services[category];
    return [];
  };

  const toggleSubService = (item: any) => {
    setSelectedSubServices(prev =>
      prev.some(i => i.title === item.title)
        ? prev.filter(i => i.title !== item.title)
        : [...prev, item]
    );
  };

  const handleOrder = () => {
    if (selectedService) {
      const items = [selectedService, ...selectedSubServices];
      setModalService({ ...selectedService, items });
    }
  };

  const mainPrice = selectedService ? parsePrice(selectedService.price) : 0;
  const subTotal = selectedSubServices.reduce((sum, item) => sum + parsePrice(item.price), 0);
  const total = mainPrice + subTotal;

  // Детальний перегляд вибраної послуги
  if (selectedService) {
    const detailed = getDetailedServices(selectedService.title);
    return (
      <div className="pt-32 pb-20 container-custom">
        <AnimatePresence mode="wait">
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-7xl mb-4"
              >
                {selectedService.icon}
              </motion.div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {selectedService.title}
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {selectedService.desc}
              </p>
              <p className="text-red text-xl font-bold mt-2">{selectedService.price}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-darker rounded-2xl p-6 neon-border mb-8"
            >
              <h3 className="text-2xl font-bold text-red mb-4 text-center">
                Оберіть додаткові послуги (можна кілька)
              </h3>
              {detailed.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {detailed.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className={`bg-black/50 p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedSubServices.some(i => i.title === item.title)
                          ? 'border-red bg-red/10'
                          : 'border-red/20 hover:border-red'
                      }`}
                      onClick={() => toggleSubService(item)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-lg text-white">{item.title}</h4>
                          <p className="text-red text-sm font-semibold mt-1">{item.price}</p>
                        </div>
                        <motion.div
                          animate={{ scale: selectedSubServices.some(i => i.title === item.title) ? 1.1 : 1 }}
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            selectedSubServices.some(i => i.title === item.title)
                              ? 'bg-red border-red'
                              : 'border-gray-500'
                          }`}
                        >
                          {selectedSubServices.some(i => i.title === item.title) && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center">Немає додаткових пакетів. Зв'яжіться з нами для індивідуального розрахунку.</p>
              )}

              {(selectedSubServices.length > 0 || selectedService) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 bg-black/40 rounded-xl"
                >
                  <h4 className="font-bold text-white mb-2">Ви обрали:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• {selectedService.title} – {selectedService.price}</li>
                    {selectedSubServices.map((item, i) => (
                      <li key={i}>• {item.title} – {item.price}</li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-2 border-t border-red/30">
                    <p className="text-lg font-bold text-red">Загалом: {total.toLocaleString()} ₴</p>
                  </div>
                </motion.div>
              )}

              <div className="mt-6 text-center flex gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button onClick={handleOrder} variant="primary" className="inline-flex items-center gap-2">
                    🛒 Замовити {selectedSubServices.length > 0 ? `(${selectedSubServices.length} додаткових)` : ''}
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <div className="text-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={handleBack} variant="secondary" className="px-8">
                  ← Назад до всіх послуг
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        {modalService && <ServiceModal service={modalService} onClose={() => setModalService(null)} />}
      </div>
    );
  }

  // Стан сітка (всі послуги) + готові продукти та регулярні послуги
  return (
    <div className="pt-32 pb-20 container-custom">
      <motion.div
        key="grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center mb-6 gradient-text">Наші послуги</h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Комплексний маркетинг для вашого бізнесу
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-darker p-6 rounded-xl border border-red/30 hover:border-red hover:shadow-xl hover:shadow-red/10 transition-all group flex flex-col h-full"
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-red transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-gray-400 mb-4 flex-grow">{service.desc}</p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={() => handleSelectService(service)} variant="secondary" className="w-full">
                  Детальніше
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Готові продукти */}
        <div className="mt-20">
          <h2 className="text-center mb-6 gradient-text">Готові продукти</h2>
          <p className="text-center text-gray-400 mb-12">Фіксована ціна, чіткий термін виконання</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packages1.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-darker p-6 rounded-2xl neon-border hover:scale-[1.02] transition-all flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold gradient-text mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{pkg.desc}</p>
                <div className="text-2xl font-bold text-red mt-auto mb-4">{pkg.price}</div>
                <Button onClick={() => setModalService(pkg)} variant="primary" className="w-full text-center">
                  Замовити
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Регулярні послуги */}
          <h2 className="text-center mb-6 gradient-text">Регулярні послуги (супровід)</h2>
          <p className="text-center text-gray-400 mb-12">Щомісячна стабільність</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages2.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-darker p-6 rounded-2xl neon-border hover:scale-[1.02] transition-all flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold gradient-text mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{pkg.desc}</p>
                <div className="text-2xl font-bold text-red mt-auto mb-4">{pkg.price}</div>
                <Button onClick={() => setModalService(pkg)} variant="primary" className="w-full text-center">
                  Підключити
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {modalService && <ServiceModal service={modalService} onClose={() => setModalService(null)} />}
    </div>
  );
}