import Hero from '@/components/home/Hero';
import Numbers from '@/components/home/Numbers';
import ProblemsSolutions from '@/components/home/ProblemsSolutions';
import PopularServices from '@/components/home/PopularServices';
import Achievements from '@/components/home/Achievements';
import AIPackages from '@/components/home/AIPackages';
import CasesShowcase from '@/components/home/CasesShowcase';
import HowWeWork from '@/components/home/HowWeWork';
import AICapabilities from '@/components/home/AICapabilities';
import TeamSlider from '@/components/home/TeamSlider';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Numbers />
      <ProblemsSolutions />
      <PopularServices />
      <Achievements />
      <AIPackages />
      <CasesShowcase />
      <HowWeWork />
      <AICapabilities />
      <TeamSlider />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}