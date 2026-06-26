'use client';

import { useEffect } from 'react';
import Navbar from '@/components/nav/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import WorkflowBuilderSection from '@/components/features/WorkflowBuilderSection';
import PerformanceStatsSection from '@/components/features/PerformanceStatsSection';
import PricingSection from '@/components/pricing/PricingSection';
import SocialProof from '@/components/social/SocialProof';
import ArticlesSection from '@/components/social/ArticlesSection';
import FaqSection from '@/components/cta/FaqSection';
import CtaSection from '@/components/cta/CtaSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  // Scroll-reveal observer (IntersectionObserver, no library)
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <WorkflowBuilderSection />
        <PerformanceStatsSection />
        <PricingSection />
        <SocialProof />
        <ArticlesSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
