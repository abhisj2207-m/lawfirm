import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Clients from '@/components/Clients';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <Hero />
      <Expertise />
      <Clients />
      <WhyChooseUs />
      <CTA />
      <Contact />
    </main>
  );
}
