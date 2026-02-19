import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import heroBg from "@/assets/hero-bg.jpg";
import heroModel from "@/assets/hero-model.png";

const slides = [
    {
        title: "Sell Your Gold for Instant Cash",
        subtitle:
            "Get the highest market value for your gold with accurate testing, transparent pricing, and instant payment.",
        cta: "Sell Gold Now",
        link: "#sell-gold",
    },
    {
        title: "Close Your Gold Loan Easily",
        subtitle:
            "Close your existing gold loan quickly with our simple, secure, and hassle-free process.",
        cta: "Close Loan",
        link: "#close-loan",
    },
    {
        title: "Re-Pledge Your Gold for Better Value",
        subtitle:
            "Re-pledge your gold and receive higher loan value with lower interest rates and fast approval.",
        cta: "Re-Pledge Now",
        link: "#repledge-gold",
    },
    {
        title: "Transfer Your Gold Loan & Save More",
        subtitle:
            "Transfer your gold loan to us and benefit from lower interest rates and trusted service.",
        cta: "Transfer Loan",
        link: "#transfer-loan",
    },
    {
        title: "Release Your Pledged Gold Safely",
        subtitle:
            "We assist you in releasing your pledged gold securely with full transparency.",
        cta: "Release Gold",
        link: "#release-gold",
    },
];

const ServiceHeroSection = () => {

    const [current, setCurrent] = useState(0);
    const location = useLocation();

    /* auto slide */
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    /* scroll when URL has hash */
    useEffect(() => {

        if (location.hash) {

            const element = document.querySelector(location.hash);

            if (element) {

                setTimeout(() => {

                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });

                }, 200);
            }
        }

    }, [location]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, hsla(20,40%,15%,0.85) 0%, hsla(30,50%,25%,0.7) 50%, hsla(40,60%,35%,0.5) 100%)",
                    }}
                />
            </div>

            {/* pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                    <pattern id="pattern-lines" width="200" height="200">
                        <line x1="0" y1="0" x2="200" y2="200" stroke="hsl(40,80%,50%)" strokeWidth="0.5" />
                        <line x1="200" y1="0" x2="0" y2="200" stroke="hsl(40,80%,50%)" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern-lines)" />
                </svg>
            </div>

            {/* content */}
            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center pt-24">

                {/* LEFT */}
                <div className="lg:w-1/2">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                        >

                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                                {slides[current].title}
                            </h1>

                            <p className="text-gray-200 mb-8 max-w-lg">
                                {slides[current].subtitle}
                            </p>

                            {/* BUTTON */}
                            <Link
                                to={`/services${slides[current].link}`}
                                className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90"
                            >
                                {slides[current].cta}
                            </Link>

                        </motion.div>

                    </AnimatePresence>

                    {/* dots */}
                    <div className="flex gap-3 mt-6">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-3 rounded-full ${i === current ? "bg-primary w-8" : "bg-white/40 w-3"
                                    }`}
                            />
                        ))}
                    </div>

                </div>

                {/* RIGHT */}
                <div className="lg:w-1/2 flex justify-end">

                    <motion.img
                        src={heroModel}
                        className="h-[500px] object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />

                </div>

            </div>

        </section>
    );
};

export default ServiceHeroSection;
