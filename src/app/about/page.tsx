'use client';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { achievements, festivalList } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 container-custom max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="mb-6 gradient-text">Про агенцію PR.тут</h1>
        <p className="text-gray-300 mb-6 text-lg">Ми — команда креативників, маркетологів та AI-спеціалістів з більш ніж 25-річним досвідом. Наша місія — допомагати локальному бізнесу та стартапам швидко зростати через доступні технології та нестандартний підхід.</p>
        <p className="text-gray-300 mb-6">30-річний організаційний досвід у креативних та маркетингових програмах і кампаніях, втілений у 380+ успішних проєктах.</p>

        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-darker p-5 rounded-xl neon-border">
            <h3 className="text-xl font-bold text-red mb-3">🏆 Ключові досягнення</h3>
            <ul className="space-y-2">
              {achievements.slice(0,4).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300"><span className="text-red">✦</span> {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-darker p-5 rounded-xl neon-border">
            <h3 className="text-xl font-bold text-red mb-3">🎡 Головні фестивалі</h3>
            <ul className="space-y-2">
              {festivalList.map((fest, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300"><span className="text-red">✦</span> {fest.name} ({fest.year}) – {fest.result}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-xl neon-border my-10">
          <h3 className="text-2xl font-bold gradient-text mb-4">Медіа та творчість</h3>
          <p className="text-gray-300">Робота в телекомпаніях «Опр», «Хвилі Стрия», створення рекламних газет, просування фільму «СтрийЛегенда», вистав, муралів, пісень, 3D-дизайн та друк мерчів.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-10">
          <div className="bg-darker p-5 rounded-xl neon-border">
            <h3 className="text-xl font-bold text-red mb-2">🎯 Наша ціль</h3>
            <p>Зробити маркетинг доступним, прозорим і результативним для малого та середнього бізнесу.</p>
          </div>
          <div className="bg-darker p-5 rounded-xl neon-border">
            <h3 className="text-xl font-bold text-red mb-2">💡 Цінності</h3>
            <p>Креатив, технології, чесність, відповідальність за результат.</p>
          </div>
        </div>
        <Button href="/contacts" variant="primary" className="mt-4">Зв'язатися з нами</Button>
      </motion.div>
    </div>
  );
}