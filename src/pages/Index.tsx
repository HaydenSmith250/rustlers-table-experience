import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import TodaysSpecial from "@/components/TodaysSpecial";
import FoodShowcase from "@/components/FoodShowcase";
import SpecialsSection from "@/components/SpecialsSection";
import QualitySection from "@/components/QualitySection";
import RanchSection from "@/components/RanchSection";
import SocialProof from "@/components/SocialProof";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <TodaysSpecial />
      <FoodShowcase />
      <SpecialsSection />
      <QualitySection />
      <RanchSection />
      <SocialProof />
      <CTASection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
