import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import IntroSection from "@/components/intro-section";
import FoundationsSection from "@/components/foundations-section";
import JourneySection from "@/components/journey-section";
import ToolkitSection from "@/components/toolkit-section";
import ResourcesSection from "@/components/resources-section";
import Footer from "@/components/footer";
import ToolsSection from "@/components/tools-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-cyber-dark text-white scroll-smooth">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <FoundationsSection />
      <JourneySection />
      <ToolkitSection />
      <ToolsSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
}
