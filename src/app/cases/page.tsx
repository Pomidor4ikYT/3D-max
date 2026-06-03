'use client';
import { useState } from 'react';
import { cases } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const ITEMS_PER_PAGE = 3;

export default function CasesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cases.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCases = cases.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="pt-32 pb-20 container-custom">
      <h1 className="text-center mb-6 gradient-text">Наші кейси</h1>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Реальні результати, якими ми пишаємося</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {paginatedCases.map((c, idx) => (
          <Link key={idx} href={`/cases/${c.slug}`} className="group block rounded-xl overflow-hidden bg-black border border-red/30 hover:border-red transition-all">
            <div className="h-48 bg-red/20 relative">
              <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 group-hover:text-red transition">{c.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
              <Button variant="secondary" className="pointer-events-none">Детальніше</Button>
            </div>
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-8">
          <button onClick={() => setCurrentPage(p => Math.max(1, p-1))} disabled={currentPage === 1} className="px-4 py-2 rounded-lg border border-red/50 disabled:opacity-50">←</button>
          {Array.from({ length: totalPages }, (_, i) => i+1).map(p => (
            <button key={p} onClick={() => setCurrentPage(p)} className={`w-10 h-10 rounded-full ${p === currentPage ? 'bg-red text-white' : 'border border-red/50 hover:bg-red/20'}`}>{p}</button>
          ))}
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} disabled={currentPage === totalPages} className="px-4 py-2 rounded-lg border border-red/50 disabled:opacity-50">→</button>
        </div>
      )}
    </div>
  );
}