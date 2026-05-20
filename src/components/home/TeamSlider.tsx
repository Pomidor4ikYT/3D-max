import Image from 'next/image';
import { team } from '@/lib/constants';

export default function TeamSlider() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="text-center mb-12 gradient-text">Наша команда</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center bg-darker p-6 rounded-xl neon-border hover:scale-105 transition group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-red mb-4 relative">
                <Image src={member.img} alt={member.name} width={128} height={128} className="object-cover" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-red transition">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
              {member.bio && <p className="text-gray-500 text-xs mt-2">{member.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}