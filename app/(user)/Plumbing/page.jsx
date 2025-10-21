import Hero from "@/components/User/Plumbing/Hero";
import PlumberInfo from "@/components/User/Plumbing/PlumberInfo";
import Review from "@/components/User/Plumbing/Review";

export default function LandingPageAfterLogin() {
    return (
        <div>
            <Hero />
            <PlumberInfo />
            <Review />
        </div>
    );
}
