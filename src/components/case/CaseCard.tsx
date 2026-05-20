import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface CaseCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function CaseCard({ title, description, image, slug }: CaseCardProps) {
  return (
    <div className="bg-darker rounded-xl overflow-hidden border border-gray-800 hover:border-neonBlue transition-all group">
      <Image src={image} alt={title} width={600} height={400} className="w-full h-48 object-cover group-hover:scale-105 transition" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link href={`/cases/${slug}`}>
          <Button variant="secondary">Детальніше</Button>
        </Link>
      </div>
    </div>
  );
}