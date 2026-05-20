'use client';
import { useState } from 'react';
import { packages1, packages2 } from '@/lib/constants';
import Button from '@/components/ui/Button';
import ServiceModal from '@/components/ServiceModal';

export default function AIPackages() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  return (
    <>
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-center mb-6 gradient-text">Готові продукти</h2>
          <p className="text-center text-gray-400 mb-12">Фіксована ціна, чіткий термін виконання</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packages1.map((pkg, idx) => (
              <div key={idx} className="bg-darker p-6 rounded-2xl neon-border hover:scale-[1.02] transition-all flex flex-col h-full">
                <h3 className="text-2xl font-bold gradient-text mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{pkg.desc}</p>
                <div className="text-2xl font-bold text-red mt-auto mb-4">{pkg.price}</div>
                <Button onClick={() => setSelectedPackage(pkg)} variant="primary" className="w-full text-center">
                  Замовити
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-center mb-6 gradient-text">Регулярні послуги (супровід)</h2>
          <p className="text-center text-gray-400 mb-12">Щомісячна стабільність</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages2.map((pkg, idx) => (
              <div key={idx} className="bg-darker p-6 rounded-2xl neon-border hover:scale-[1.02] transition-all flex flex-col h-full">
                <h3 className="text-2xl font-bold gradient-text mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{pkg.desc}</p>
                <div className="text-2xl font-bold text-red mt-auto mb-4">{pkg.price}</div>
                <Button onClick={() => setSelectedPackage(pkg)} variant="primary" className="w-full text-center">
                  Підключити
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPackage && (
        <ServiceModal service={selectedPackage} onClose={() => setSelectedPackage(null)} />
      )}
    </>
  );
}