import Hero from '@/components/User/Plumber-list/Hero';
import Provider from '@/components/User/Plumber-list/Provider';

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