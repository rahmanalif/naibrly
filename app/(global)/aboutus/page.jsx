import UpperLower from '@/components/Global/Home/UpperLower';
import AboutUs from '@/components/Global/Home/AboutUs';
import Frequently from '@/components/Global/Home/Frequently';
import Mobileapp from '@/components/User/LandingPage/Mobileapp';
import Hero from '@/components/Global/AboutUs/Hero';
export default function aboutus() {
    return (
        <div className="bg-[linear-gradient(to_bottom,#0E7A6000_0%,#0E7A601A_10%)]">
            <Hero/>
            <UpperLower/>
            <AboutUs/>
            <Frequently/>
            <Mobileapp/>
        </div>
    );
}