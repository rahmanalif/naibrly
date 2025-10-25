import Hero from '@/components/Global/Search/Hero';
import Middle from '@/components/Global/Search/Middle';
import Mobileapp from '@/components/User/LandingPage/Mobileapp';
import TopProsSectionBlured from '@/components/User/FindArea/TopProsSectionBlured';
import AboutUs from '@/components/Global/Home/AboutUs';

export default function SearchPage() {
    return (
        <div>
            <Hero/>
            <Middle/>
            <TopProsSectionBlured showPagination={true} />
            <AboutUs/>
            <Mobileapp/>
        </div>
    );
}