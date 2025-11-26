"use client";
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
}

