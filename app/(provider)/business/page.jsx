import Hero from '@/components/Provider/Business/Hero.jsx';
import Middle from '@/components/Provider/Business/Middle.jsx';
import LowerMiddle from '@/components/Provider/Business/LowerMiddle.jsx';
import UpperFooter from '@/components/Provider/Business/UpperFooter.jsx';
import ProCommunity from '@/components/Provider/Business/ProCommunity.jsx';

export default function Business() {
  return (
    <div>
        <Hero/>
        <Middle/>
        <LowerMiddle/>
        <UpperFooter/>
        <ProCommunity/>
    </div>
  );
}