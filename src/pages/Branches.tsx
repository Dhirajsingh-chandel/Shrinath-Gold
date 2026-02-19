import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchesSection from "@/components/BranchSection";

const Branches = () => {
    return (
        <>
            <Navbar />
            <div className="pt-24">
                <BranchesSection />
            </div>

            <Footer />
        </>
    );
};

export default Branches;
