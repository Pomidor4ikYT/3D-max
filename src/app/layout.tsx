import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/PageTransition';
import AIConsultant from '@/components/ui/AIConsultant';

export const metadata: Metadata = {
  title: '3D-друк на замовлення | Сучасні вироби з пластику',
  description: 'Професійний 3D-друк іграшок, прототипів, деталей для ЗСУ. Розрахунок за 15 хвилин. Доставка по всій Україні.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <AIConsultant />
      </body>
    </html>
  );
}