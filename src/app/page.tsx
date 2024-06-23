import FeauturedCourses from "@/components/FeauturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    
        <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
          <HeroSection/>
          <FeauturedCourses/>
          <WhyChooseUs/>
        </main>
      
  );
}
