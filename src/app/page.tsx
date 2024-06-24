import FeauturedCourses from "@/components/FeauturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialsk from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    
        <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
          <HeroSection/>
          <FeauturedCourses/>
          <WhyChooseUs/>
          <MusicSchoolTestimonialsk/>
          <UpcomingWebinars/>
          <Instructors/>
        </main>
      
  );
}
