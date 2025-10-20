import Hero from "@/components/User/LandingService/Hero";
import PlumberProfile from "@/components/User/LandingService/PlumberProfile";
import PlumberReviews from "@/components/User/LandingService/PlumberReviews";


export default function landingService() {
    return (
    <div>
      <Hero/>
      <PlumberProfile/>
      <PlumberReviews/>
      
    </div>
  );
}