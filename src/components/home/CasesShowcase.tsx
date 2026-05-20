import { cases } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function CasesShowcase() {
  return (
    <section className="py-20 bg-darker">
      <div className="container-custom">
        <h2 className="text-center mb-12">Реальні кейси та результати</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {cases.map((c, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden bg-black border border-red/30 hover:border-red transition-all group">
              <div className="h-48 bg-red/20 relative">
                <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red transition">{c.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
                <Button href={`/cases/${c.slug}`} variant="secondary">Детальніше</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center"><Button href="/cases" variant="primary">Всі кейси</Button></div>
      </div>
    </section>
  );
}