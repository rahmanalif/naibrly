import CaptainRooterProfile from '@/components/User/Plumber-Profile/CaptainRooterProfile';
import ServicesOffered from '@/components/User/Plumber-Profile/ServicesOffered';
import ReviewsSection from "@/components/User/Plumber-Profile/ReviewsSection";
import StickyForm from '@/components/User/Plumber-Profile/StickyForm';

export default function RepairsAndMaintenance() {
    return (
      <div>
        <CaptainRooterProfile />
        <ServicesOffered />
        <ReviewsSection />
        {/* <StickyForm /> */}
      </div>
    )

}