'use client';
import { useState } from 'react';

interface DeliverySelectorProps {
  value: { city: string; warehouse: string; deliveryType: 'nova' | 'ukr' | 'pickup' };
  onChange: (value: { city: string; warehouse: string; deliveryType: 'nova' | 'ukr' | 'pickup' }) => void;
}

export default function DeliverySelector({ value, onChange }: DeliverySelectorProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: 'nova', label: 'Нова Пошта', icon: '📦' },
          { value: 'ukr', label: 'Укрпошта', icon: '📬' },
          { value: 'pickup', label: 'Самовивіз', icon: '🏠' },
        ].map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange({ ...value, deliveryType: option.value as any })}
            className={`p-3 rounded-xl border-2 transition-all ${
              value.deliveryType === option.value
                ? 'border-[#c9a84c] bg-[#c9a84c]/10 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-2xl">{option.icon}</div>
            <div className="text-sm font-medium mt-1">{option.label}</div>
          </button>
        ))}
      </div>

      {value.deliveryType !== 'pickup' && (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Місто *</label>
            <input
              type="text"
              placeholder="Наприклад: Львів"
              value={value.city}
              onChange={(e) => onChange({ ...value, city: e.target.value })}
              className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Відділення *</label>
            <input
              type="text"
              placeholder="Наприклад: №1 (вул. Стрийська, 30)"
              value={value.warehouse}
              onChange={(e) => onChange({ ...value, warehouse: e.target.value })}
              className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30 outline-none transition"
            />
          </div>
        </div>
      )}

      {value.deliveryType === 'pickup' && (
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <p className="text-gray-600 text-sm">📍 Самовивіз: м. Львів, вул. Прикладна, 3</p>
          <p className="text-gray-400 text-xs mt-1">Графік роботи: Пн–Пт 9:00–18:00</p>
        </div>
      )}
    </div>
  );
}