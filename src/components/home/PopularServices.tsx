import { servicesList } from '@/lib/constants';
import Button from '@/components/ui/Button';

const popularIndices = [0, 1, 3, 5]; // AI Маркетинг, SMM, SEO, Брендинг

export default function PopularServices() {
  const popular = servicesList.filter((_, idx) => popularIndices.includes(idx));
  return (
    <section className="py-20 bg-darker">
      <div className="container-custom">
        <h2 className="text-center mb-6 gradient-text">Популярні послуги</h2>
        <p className="text-center text-gray-400 mb-12">Найзатребуваніші рішення від наших клієнтів</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popular.map((service, idx) => (
            <div key={idx} className="bg-black/50 p-6 rounded-xl neon-border hover:scale-[1.02] transition-all group flex flex-col h-full">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red transition">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{service.desc}</p>
              <Button href="/services" variant="secondary">Детальніше</Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/services" variant="primary">Всі послуги</Button>
        </div>
      </div>
    </section>
  );
}