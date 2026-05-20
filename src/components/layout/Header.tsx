'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/', label: 'Головна' },
  { href: '/services', label: 'Послуги' },
  { href: '/cases', label: 'Кейси' },
  { href: '/ai-solutions', label: 'AI-рішення' },
  { href: '/about', label: 'Про нас' },
  { href: '/blog', label: 'Блог' },
  { href: '/contacts', label: 'Контакти' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-red/30">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-black gradient-text">PR.тут</Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => <Link key={link.href} href={link.href} className="hover:text-red transition">{link.label}</Link>)}
        </nav>
        <div className="hidden md:block"><Button href="/contacts" variant="primary">Консультація</Button></div>
        <button className="md:hidden text-white text-2xl" onClick={() => setMobileMenuOpen(true)}>☰</button>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} links={navLinks} />
    </header>
  );
}