'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/', label: 'Головна' },
  { href: '/services', label: 'Послуги' },
  { href: '/printer', label: 'Принтер' },   // Нова сторінка
  { href: '/gallery', label: 'Галерея' },
  { href: '/contacts', label: 'Контакти' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#d0c8c0] shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-heading font-bold text-[#1a3c34]">3D-друк</Link>
        <nav className="hidden md:flex space-x-8 text-gray-700">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-base font-medium hover:text-[#c9a84c] transition duration-300">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/order" variant="primary">Замовити</Button>
        </div>
        <button
          className="md:hidden text-gray-700 text-3xl focus:outline-none hover:text-[#c9a84c] transition"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} links={navLinks} />
    </header>
  );
}