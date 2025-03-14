import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CallToActionSection />
    </div>
  );
}
