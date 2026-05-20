import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red/10 to-black">
      <div className="container-custom text-center max-w-2xl">
        <h2 className="mb-6">Готові отримати більше клієнтів?</h2>
        <p className="text-gray-300 mb-8">Розкажіть про свій бізнес — ми запропонуємо рішення для росту.</p>
        <Button href="/contacts" variant="primary" className="text-lg px-8 py-4 animate-pulse-red">Отримати консультацію</Button>
      </div>
    </section>
  );
}