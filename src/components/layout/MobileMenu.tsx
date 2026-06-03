'use client';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu({ isOpen, onClose, links }: { isOpen: boolean; onClose: () => void; links: { href: string; label: string }[] }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center space-y-6"
        >
          <button className="absolute top-4 right-4 text-3xl text-white hover:text-red transition" onClick={onClose}>✕</button>
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={onClose} className="text-2xl hover:text-red transition">
              {link.label}
            </Link>
          ))}
          <Button href="/contacts" variant="primary" onClick={onClose}>Консультація</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}