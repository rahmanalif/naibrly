import Hero from '@/components/User/LandingPage/Hero';
import Mobileapp from '@/components/User/LandingPage/Mobileapp';
import Services from '@/components/User/LandingPage/Services';
import Review from '@/components/User/LandingPage/Review';
import Footer from '@/components/User/LandingPage/Footer';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Mobileapp/>
      <Services/>
      <Review/>
    </main>
  );
}
