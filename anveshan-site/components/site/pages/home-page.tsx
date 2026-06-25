import CTA from '@/components/site/CTA';
import Features from '@/components/site/Features';
import Hero from '@/components/site/Hero';
import Pipeline from '@/components/site/Pipeline';
import UavSection from '@/components/site/UavSection';
import VideoSection from '@/components/site/VideoSection';

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <UavSection />
      <VideoSection />
      <Pipeline />
      <CTA />
    </main>
  );
}
