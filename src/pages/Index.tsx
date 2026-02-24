import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoodShowcase from "@/components/FoodShowcase";
import QualitySection from "@/components/QualitySection";
import RanchSection from "@/components/RanchSection";
import SocialProof from "@/components/SocialProof";
import BrunchSection from "@/components/BrunchSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FoodShowcase />
      <QualitySection />
      <RanchSection />
      <SocialProof />
      <BrunchSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
