import Hero from '@/components/Provider/Business/Hero.jsx';
import Middle from '@/components/Provider/Business/Middle.jsx';
import LowerMiddle from '@/components/Provider/Business/LowerMiddle.jsx';
import UpperFooter from '@/components/Provider/Business/UpperFooter.jsx';
import Foo from '@/components/Provider/Business/Foo.jsx';

export default function business() {
  return (
    <div>
        <Hero/>
        <Middle/>
        <LowerMiddle/>
        <UpperFooter/>
        <Foo/>
    </div>
  );
}