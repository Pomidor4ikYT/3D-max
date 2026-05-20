'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ROICalculator() {
  const [budget, setBudget] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const b = Number(budget);
    if (b > 0) {
      const estimatedLeads = Math.floor(b / 300) * 10; // спрощена формула
      setResult(estimatedLeads);
    }
  };

  return (
    <div className="bg-darker p-6 rounded-2xl border border-neonBlue/20">
      <h3 className="text-xl font-bold mb-4">Скільки клієнтів ви можете отримати?</h3>
      <div className="flex gap-3 mb-4">
        <input type="number" placeholder="Ваш бюджет (грн)" value={budget} onChange={(e) => setBudget(e.target.value)} className="flex-1 p-3 bg-dark rounded-lg border border-gray-700 focus:border-neonBlue outline-none" />
        <Button onClick={calculate} variant="primary">Розрахувати</Button>
      </div>
      {result !== null && (
        <p className="text-neonCyan">Орієнтовно <strong>{result}</strong> потенційних клієнтів на місяць.</p>
      )}
    </div>
  );
}