import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AboutJack from '@/components/AboutJack';
import Pricing from '@/components/Pricing';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <TrustBar />
      <AboutJack />
      <Pricing />
      <Courses />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
