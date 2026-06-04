import PageSplash from '@/components/PageSplash';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PlatformsSection from '@/components/PlatformsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import IncomeChartSection from '@/components/IncomeChartSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <PageSplash />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PlatformsSection />
        <TestimonialsSection />
        <IncomeChartSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
