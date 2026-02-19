import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroModel from "@/assets/hero-model.png";

const slides = [
  {
    title: "Welcome to Shrinath Gold Testing Center",
    subtitle: "Looking to sell your old, pledged, or unused gold? We offer 100% transparent gold testing, fair market prices, and instant cash payment. Gold purity testing is done right in front of you using modern and advanced technology.",
    cta: "Know More",
  },
  {
    title: "Sell Your Old Gold for Instant Cash",
    subtitle: "Get the best value for your gold with complete transparency and trust.",
    cta: "Know More",
  },
  {
    title: "Instant Evaluation, Instant Payment",
    subtitle: "Visit us today and walk out with cash in minutes.",
    cta: "Visit Now",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(20,40%,15%,0.85) 0%, hsla(30,50%,25%,0.7) 50%, hsla(40,60%,35%,0.5) 100%)" }} />
      </div>

      {/* Geometric lines */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="lines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="200" y2="200" stroke="hsl(40,80%,50%)" strokeWidth="0.5" />
            <line x1="200" y1="0" x2="0" y2="200" stroke="hsl(40,80%,50%)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(40,80%,50%)" strokeWidth="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center pt-24">
        <div className="lg:w-1/2 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "hsl(0,0%,100%)" }}>
                {slides[current].title}
              </h1>
              <p className="text-lg mb-8 max-w-lg" style={{ color: "hsl(30,20%,80%)" }}>
                {slides[current].subtitle}
              </p>
              <a
                href="#about-us"
                className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                {slides[current].cta}
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-2 mt-8 justify-center lg:justify-start">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-muted/50"
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.img
            src={heroModel}
            alt="Gold jewelry model"
            className="h-[400px] md:h-[500px] lg:h-[600px] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;