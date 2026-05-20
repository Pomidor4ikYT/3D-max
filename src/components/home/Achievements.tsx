'use client';
import { achievements, festivalList } from '@/lib/constants';

export default function Achievements() {
  return (
    <section className="py-20 bg-darker">
      <div className="container-custom">
        <div>
          <h2 className="text-center mb-6 gradient-text">Наші досягнення та фестивалі</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            30-річний організаційний досвід, втілений у 380+ успішних проєктах
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">🏆 Ключові проєкти</h3>
              <div className="space-y-3">
                {achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red/5 transition">
                    <span className="text-red text-xl">✦</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">🎡 Фестивалі та рекорди</h3>
              <div className="space-y-4">
                {festivalList.map((fest, i) => (
                  <div key={i} className="bg-black/40 p-5 rounded-xl neon-border hover:border-red transition-all group">
                    <h4 className="text-xl font-bold text-red group-hover:scale-105 transition">{fest.name}</h4>
                    <p className="text-gray-400 text-sm">{fest.year}</p>
                    <p className="text-gray-300 mt-2">{fest.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}