import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'PR.тут – маркетингова агенція | Приводимо клієнтів, які купують',
  description: 'AI-маркетинг, реклама, брендинг, SMM, SEO, 3D-друк. Допомагаємо бізнесу зростати через креатив та новітні технології.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className="bg-black">
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}