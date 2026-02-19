import sellGold from "@/assets/services/hero-bg.jpg";
import closeLoan from "@/assets/services/hero-bg.jpg";
import repledge from "@/assets/services/hero-bg.jpg";
import transferLoan from "@/assets/services/hero-bg.jpg";
import releaseGold from "@/assets/services/hero-bg.jpg";

const services = [
    {
        id: "sell-gold",
        title: "Sell Your Gold at the Best Value with Complete Transparency",
        description: "...",
        points: [
            "Fear of incorrect gold testing",
            "Unclear pricing methods",
            "Hidden deductions",
            "Lack of trust",
        ],
        conclusion:
            "At Shrinath Gold Testing Center, we remove these concerns with a clear and customer-first process.",
        image: sellGold,
    },
    {
        id: "close-loan",
        title: "Close Your Gold Loan Quickly & Safely",
        description: "...",
        points: [
            "High interest burden",
            "Long waiting periods",
            "Confusing settlement process",
            "Lack of guidance",
        ],
        conclusion: "We make this process simple and hassle-free.",
        image: closeLoan,
    },
    {
        id: "repledge-gold",
        title: "Re-Pledge Your Gold Safely with Better Financial Control",
        description: "...",
        points: [
            "Loan tenure is expiring",
            "Full repayment not immediately possible",
            "Continued financial support required",
            "Avoid selling family gold",
        ],
        conclusion:
            "We guide you through this process clearly and safely.",
        image: repledge,
    },
    {
        id: "transfer-loan",
        title: "Transfer Your Gold Loan Easily & Save on Interest",
        description: "...",
        points: [
            "High interest rates",
            "Unfavorable loan terms",
            "Long loan duration burden",
            "Need for better guidance",
        ],
        conclusion:
            "We help you understand and complete this process without confusion.",
        image: transferLoan,
    },
    {
        id: "release-gold",
        title: "Get Your Pledged Gold Released Safely & Smoothly",
        description: "...",
        points: [
            "Unclear settlement amounts",
            "High accumulated interest",
            "Delays in gold release",
            "Lack of proper guidance",
        ],
        conclusion:
            "Our expert assistance ensures a smooth and informed gold release process.",
        image: releaseGold,
    },
];

const ServicesSection = () => {

    return (
        <section className="bg-[#f4f4f4] py-20">

            <div className="container mx-auto px-4 space-y-32">

                {services.map((service, index) => {

                    const reverse = index % 2 !== 0;

                    return (

                        <div
                            id={service.id}
                            key={service.id}
                            className={`flex flex-col lg:flex-row items-center gap-16 scroll-mt-40 ${reverse ? "lg:flex-row-reverse" : ""
                                }`}
                        >

                            {/* IMAGE */}
                            <div className="lg:w-1/2 flex justify-center">

                                <div className="w-[320px] h-[420px] rounded-[160px] overflow-hidden shadow-lg">

                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                            </div>

                            {/* CONTENT */}
                            <div className="lg:w-1/2">

                                <h2 className="text-3xl lg:text-4xl font-semibold text-[#8B1E1E] mb-6">
                                    {service.title}
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6 text-gray-700">
                                    {service.points.map((point, i) => (
                                        <li key={i}>• {point}</li>
                                    ))}
                                </ul>

                                <p className="text-gray-700 mb-8">
                                    {service.conclusion}
                                </p>

                                <a
                                    href="#contact-us"
                                    className="bg-[#f4c400] hover:bg-[#e0b000] px-8 py-3 rounded-lg font-semibold"
                                >
                                    Contact Now
                                </a>

                            </div>

                        </div>

                    );

                })}

            </div>

        </section>
    );
};

export default ServicesSection;
