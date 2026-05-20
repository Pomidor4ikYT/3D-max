import AICapabilities from '@/components/home/AICapabilities';
import AIPackages from '@/components/home/AIPackages';

export default function AISolutionsPage() {
  return (
    <div className="pt-32">
      <div className="container-custom text-center mb-12">
        <h1>AI-рішення для вашого бізнесу</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Використовуйте штучний інтелект для автоматизації маркетингу,
          створення контенту та залучення клієнтів.
        </p>
      </div>
      <AICapabilities />
      <AIPackages />
    </div>
  );
}