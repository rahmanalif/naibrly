import Hero from '@/components/LandingPage/Hero';
import Mobileapp from '@/components/LandingPage/Mobileapp';
import Servics from '@/components/LandingPage/Servics';
import Review from '@/components/LandingPage/Review';
import Footer from '@/components/LandingPage/Footer';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Mobileapp/>
      <Servics/>
      <Review/>
    </main>
  );
}
