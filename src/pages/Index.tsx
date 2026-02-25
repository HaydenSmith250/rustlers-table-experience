import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import FoodShowcase from "@/components/FoodShowcase";
import SpecialsSection from "@/components/SpecialsSection";
import QualitySection from "@/components/QualitySection";
import RanchSection from "@/components/RanchSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FoodShowcase />
      <SpecialsSection />
      <QualitySection />
      <RanchSection />
      <CTASection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
