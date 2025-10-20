import CaptainRooterProfile from '@/components/User/repairesMaintanens/CaptainRooterProfile';
import ServicesOffered from '@/components/User/repairesMaintanens/ServicesOffered';
import ReviewsSection from "@/components/User/repairesMaintanens/ReviewsSection";

export default function repairesMaintanens() {
    return (
      <div>
        <CaptainRooterProfile />
        <ServicesOffered />
        <ReviewsSection />
      </div>
    )

}