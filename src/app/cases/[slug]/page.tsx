'use client';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function CaseDetail({ params }: { params: { slug: string } }) {
  const router = useRouter();
  return (
    <div className="pt-32 pb-20 container-custom max-w-3xl mx-auto">
      <Button onClick={() => router.back()} variant="secondary" className="mb-6">← Назад до кейсів</Button>
      <h1 className="mb-6">Кейс: {params.slug}</h1>
      <div className="bg-darker p-6 rounded-xl">
        <p className="text-gray-300">Тут буде детальний опис кейсу з цифрами, фото та відео.</p>
      </div>
    </div>
  );
}