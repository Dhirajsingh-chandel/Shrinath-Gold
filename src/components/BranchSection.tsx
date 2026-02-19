import branchBg from "@/assets/hero-bg.jpg";

const branches = [
    {
        name: "SHIRWAL – SATARA",
        phone: "+91 98509 05466",
        address:
            "Ganesh Mandir, Chhatrapati Shivaji Maharaj Chowk, Shirwal, Tal. Khandala, Dist. Satara",
        map: "https://maps.google.com",
    },
    {
        name: "PUNE – BALAJINAGAR",
        phone: "+91 98509 05466",
        address: "Balajinagar, Pune",
        map: "https://maps.google.com",
    },
];

const BranchesSection = () => {
    return (
        <section
            className="py-20 bg-cover bg-center"
            style={{
                backgroundImage: `url(${branchBg})`,
            }}
        >
            {/* overlay */}
            <div className="bg-white/90 py-20">

                <div className="container mx-auto px-4">

                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center text-[#8B1E1E] mb-16">
                        Our Branches
                    </h2>

                    {/* Branch Cards */}
                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                        {branches.map((branch, index) => (

                            <div
                                key={index}
                                className="bg-[#e9dfcf] border-2 border-red-600 rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition"
                            >

                                {/* Branch Name */}
                                <h3 className="text-xl font-bold text-red-700 mb-3">
                                    {branch.name}
                                </h3>

                                <div className="w-16 h-[2px] bg-yellow-500 mx-auto mb-6" />

                                {/* Phone */}
                                <p className="mb-4">
                                    Contact No:{" "}
                                    <span className="text-red-600 font-semibold">
                                        {branch.phone}
                                    </span>
                                </p>

                                {/* Address */}
                                <p className="mb-6 text-gray-700">
                                    <span className="text-red-600 font-semibold">
                                        Address:
                                    </span>{" "}
                                    {branch.address}
                                </p>

                                {/* Button */}
                                <a
                                    href={branch.map}
                                    target="_blank"
                                    className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
                                >
                                    Google Location
                                </a>

                            </div>

                        ))}

                    </div>

                    {/* Contact Section */}
                    <div className="mt-20 text-center max-w-xl mx-auto">

                        <h3 className="text-2xl font-bold text-[#8B1E1E] mb-4">
                            Contact Us
                        </h3>

                        <p className="mb-2">
                            📞 Phone:{" "}
                            <span className="text-red-600 font-semibold">
                                +91 98509 05466
                            </span>
                        </p>

                        <p className="mb-2">
                            📧 Email:{" "}
                            <span className="text-red-600 font-semibold">
                                info@shrinathgold.com
                            </span>
                        </p>

                        <p className="mt-6 font-semibold text-gray-800">
                            Shrinath Gold Testing Center
                        </p>

                        <p className="text-gray-600">
                            Transparent Gold Testing | Fair Price | Customer First
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default BranchesSection;
