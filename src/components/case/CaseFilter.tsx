'use client';
import { useState } from 'react';

const categories = ['Всі', 'Фестивалі', 'Бізнес', 'Книги', 'Бренди'];

export default function CaseFilter({ onFilterChange }: { onFilterChange: (cat: string) => void }) {
  const [active, setActive] = useState('Всі');
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setActive(cat);
            onFilterChange(cat === 'Всі' ? '' : cat);
          }}
          className={`px-5 py-2 rounded-full transition ${active === cat ? 'bg-neonBlue text-dark' : 'bg-darker text-gray-300 hover:bg-gray-800'}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}