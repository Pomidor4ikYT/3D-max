import { servicesList } from '@/lib/constants';

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-darker">
      <div className="container-custom">
        <h2 className="text-center mb-12 gradient-text">Все для просування бізнесу в одному місці</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div key={idx} className="group bg-black/50 p-6 rounded-xl neon-border hover:scale-[1.02] transition-all">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red transition">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}