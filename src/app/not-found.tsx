import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="pt-40 pb-20 container-custom text-center">
      <h1 className="text-9xl font-heading font-bold text-[#1a3c34] mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-8">Сторінку не знайдено</p>
      <Button href="/">На головну</Button>
    </div>
  );
}