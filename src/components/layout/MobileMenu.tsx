'use client';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function MobileMenu({ isOpen, onClose, links }: { isOpen: boolean; onClose: () => void; links: { href: string; label: string }[] }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center space-y-6">
      <button className="absolute top-4 right-4 text-3xl" onClick={onClose}>✕</button>
      {links.map(link => <Link key={link.href} href={link.href} onClick={onClose} className="text-2xl hover:text-red">{link.label}</Link>)}
      <Button href="/contacts" variant="primary" onClick={onClose}>Консультація</Button>
    </div>
  );
}