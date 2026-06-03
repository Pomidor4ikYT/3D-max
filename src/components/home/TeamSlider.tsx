'use client';
import Image from 'next/image';
import { team } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TeamSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 gradient-text"
        >
          Наша команда
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-red-500 mb-4 relative">
                <Image src={member.img} alt={member.name} width={128} height={128} className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
              {member.bio && <p className="text-gray-500 text-xs mt-2">{member.bio}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}