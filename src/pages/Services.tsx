import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ServiceHeroSection from "@/components/ServiceHeroSection";

const Services = () => {
    return (
        <>
            <Navbar />
            <ServiceHeroSection />
            <div className="pt-24">
                <ServicesSection />
            </div>
            <Footer />
        </>
    );
};

export default Services;
