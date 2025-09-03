import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StudyTracks from '@/components/StudyTracks';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const headerHeight = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <StudyTracks />
          <Features />
          <Testimonials />
          <Pricing />
          <About />
          <FAQ />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;