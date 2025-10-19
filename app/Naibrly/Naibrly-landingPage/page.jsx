import Hero from '@/components/Naibrly-landingPage/Hero';
import Provider from '@/components/Naibrly-landingPage/Provider';

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <div className="flex justify-center">
      <Provider/>
      </div>
    </div>
  );
}