import Middle from '@/components/Provider/Business/Middle.jsx';
import LowerMiddle from '@/components/Provider/Business/LowerMiddle.jsx';
import Hero from '@/components/Global/Join-Provider/Hero.jsx';
import UpperFooter from '@/components/Provider/Business/UpperFooter.jsx';
import Frequently from '@/components/Global/Home/Frequently';
import Mobileapp from '@/components/User/LandingPage/Mobileapp';

export default function joinProvider() {
    return (
        <div>
            <Hero/>
            <Middle/>
            <LowerMiddle/>
            <UpperFooter/>
            <Frequently/>
            <Mobileapp/>
        </div>
    );
}


