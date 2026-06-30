import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Materials from '@/components/home/Materials';
import Process from '@/components/home/Process';
import Pricing from '@/components/home/Pricing';
import GalleryPreview from '@/components/home/GalleryPreview';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Materials />
      <Process />
      <Pricing />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
    </div>
  );
}