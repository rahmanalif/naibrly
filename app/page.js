import Hero from '@/components/Sections/Hero';
import Mobileapp from '@/components/Sections/Mobileapp';
import Servics from '@/components/Sections/Servics';
import Review from '@/components/Sections/Review';
import Footer from '@/components/Sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Mobileapp/>
      <Servics/>
      <Review/>
      <Footer/>
    </main>
  );
}
