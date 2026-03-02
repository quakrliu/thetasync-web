'use client';

import { I18nProvider } from '@/i18n/context';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MeditationPreview from '@/components/MeditationPreview';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <Features />
        <MeditationPreview />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </I18nProvider>
  );
}
