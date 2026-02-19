
import AboutUsSection from "@/components/AboutUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const Aboutus = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="pt-24">
                <AboutUsSection />
            </div>
            <Footer />
        </>
    );
};

export default Aboutus;