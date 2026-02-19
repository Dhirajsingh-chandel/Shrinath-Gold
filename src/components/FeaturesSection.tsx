import { motion } from "framer-motion";

const features = [
  {
    image: "https://cdn.sanity.io/images/1va2rov0/production/393d98c43b2bd5937f9c15d33aaf62aa619795dd-600x338.png",
    title: "BEST ANALYTICAL TESTING",
    desc: "Advanced Technology, Swiss-engineered XRF technology (X-Ray Fluorescence Technology), is used to determine the exact gold content in your old gold.",
  },
  {
    image: "https://pnn-news.com/wp-content/uploads/2025/11/gg-1.jpg",
    title: "Instant Bank Transfer",
    desc: "Evaluating your Gold Purity and making the Payment. Go cashless and receive instant bank payment.",
  },
  {
    image: "https://media.istockphoto.com/id/2148961230/photo/financial-advisor-stock-photo.jpg?s=612x612&w=0&k=20&c=SMUBGfkG90bzffDrlUds3J5b54AHSzIIbDJpupvF9vY=",
    title: "Close Gold Loan",
    desc: "Looking to close your gold loan? We make it easy. End-to-end assistance, Fast processing, Secure handling of gold.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#efefef]">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#a91517] mb-4">
            Unlock the True Value of Your Gold
          </h2>
          <p className="text-gray-700 text-lg">
            100% Accurate Gold Testing, Quick & Hassle-Free Service, Safe & Secure Transactions
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl overflow-hidden shadow-md bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Top Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-72 object-cover"
              />

              {/* Yellow Bottom Content */}
              <div className="bg-[#f2c400] p-8 text-center">
                <h3 className="font-bold text-lg mb-4 uppercase">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6">
                  {feature.desc}
                </p>

                <a
                  href="#contact-us"
                  className="inline-block px-8 py-3 rounded-full border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition"
                >
                  Click Here
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
