import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="pt-40 pb-20 container-custom text-center">
      <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">Сторінку не знайдено</p>
      <Button href="/">На головну</Button>
    </div>
  );
}