import Hero from '@/components/User/Naibrly-landingPage/Hero';
import Provider from '@/components/User/Naibrly-landingPage/Provider';

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