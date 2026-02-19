import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial1.jpg";
import testimonial2 from "@/assets/testimonial2.jpg";
import testimonial3 from "@/assets/testimonial3.jpg";

const testimonials = [
  {
    name: "Sarah Mondal",
    location: "Kolkata",
    text: "Excellent service with complete transparency. My gold was tested accurately in front of me and I received the best market price. The entire process was quick, smooth, and stress-free.",
    image: testimonial1,
  },
  {
    name: "Shalu Ghosh",
    location: "Kolkata",
    text: "I was worried about releasing my pledged gold, but Shrinath Gold Testing Centre handled everything smoothly. Truly stress-free service.",
    image: testimonial2,
  },
  {
    name: "Gurdeep Singh",
    location: "Delhi",
    text: "They helped me close my gold loan without any complications. Professional staff and quick settlement.",
    image: testimonial3,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gold font-semibold tracking-wider uppercase mb-2">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Loved by Our <span className="text-gold">Guests</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote size={40} className="text-gold/30 mx-auto mb-6" />
              <p className="text-lg leading-relaxed mb-8" style={{ color: "hsl(30,15%,75%)" }}>
                "{testimonials[current].text}"
              </p>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gold"
              />
              <h4 className="font-bold text-gold-light">{testimonials[current].name}</h4>
              <p className="text-sm" style={{ color: "hsl(30,15%,55%)" }}>
                From - {testimonials[current].location}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors"
            >
              <ChevronLeft size={20} className="text-gold" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors"
            >
              <ChevronRight size={20} className="text-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
