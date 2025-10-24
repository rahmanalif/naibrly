import Hero from '@/components/Global/Home/Hero';
import UpperMiddle from '@/components/Global/Home/UpperMiddle';
import MiddleMiddle from '@/components/Global/Home/MiddleMiddle';
import LowerMiddle from '@/components/Global/Home/LowerMiddle';
import UpperLower from '@/components/Global/Home/UpperLower';
import AboutUs from '@/components/Global/Home/AboutUs';
import Frequently from '@/components/Global/Home/Frequently';
import Mobileapp from '@/components/User/LandingPage/Mobileapp';

export default function HomePage() {
    return (
        <div>
            <Hero/>
            <UpperMiddle/>
            <MiddleMiddle/>
            <LowerMiddle/>
            <UpperLower/>
            <AboutUs/>
            <Frequently/>
            <Mobileapp/>
        </div>
    );
}