import { motion } from "framer-motion";
import modelImage from "@/assets/hero-model.png"; // Assuming this shows the namaste pose clearly

const AboutUsSection = () => {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-b from-amber-50 to-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl border-2 border-yellow-500/30 bg-white">

                    {/* Left: Compact Prominent Image */}
                    <motion.div
                        className="lg:w-5/12 relative min-h-[400px] md:min-h-[450px] lg:min-h-[420px]"
                        initial={{ opacity: 0, scale: 1.03 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={modelImage}
                            alt="Shrinath Gold Representative in Namaste Pose"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent" />
                    </motion.div>

                    {/* Right: Compact Text Content */}
                    <motion.div
                        className="lg:w-7/12 p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-yellow-50 via-white to-amber-50"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-5 text-red-800">
                            The Future of Gold Buying:<br />
                            <span className="text-yellow-600">Transparency</span>,{" "}
                            <span className="text-yellow-600">Technology</span>,<br />
                            & <span className="text-yellow-600">Trust</span>.
                        </h2>

                        <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
                            <p>
                                Shrinath Gold Testing Centre is rapidly growing into one of India’s{" "}
                                <strong className="text-red-700">fastest-expanding organizations</strong>, specializing in the buying, selling, and liberation of pledged gold. We were pioneers in introducing the concept of buying gold at{" "}
                                <strong className="text-yellow-700">today’s live online price</strong>, ensuring unmatched transparency and fairness.
                            </p>

                            <p>
                                Our core strength is providing{" "}
                                <strong className="text-red-700">instant cash</strong> solutions, enabling customers to swiftly release their pledged gold. We buy your gold and pay you immediately, making the selling process simple, quick, and rewarding.
                            </p>

                            <p>
                                When selling your gold, choosing a reliable partner is paramount. We caution customers to avoid crude purity testing methods like gold rubbing, which can damage assets and reduce value. At Shrinath Gold Testing Centre, we guarantee{" "}
                                <strong className="text-red-700">no hidden fees</strong> and the{" "}
                                <strong className="text-yellow-700">best rate</strong> based on current market price.
                            </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-yellow-400/40">
                            <p className="font-semibold text-lg text-gray-900">
                                Committed to Trust & Transparency – Shrinath Gold Testing Centre
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;