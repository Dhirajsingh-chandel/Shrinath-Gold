import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesBar from "@/components/ServicesBar";
import AboutSection from "@/components/AboutSection";
import StepsSection from "@/components/StepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesBar />
      <AboutSection />
      <StepsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
