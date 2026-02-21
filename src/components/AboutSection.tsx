import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.webp";


const AboutSection = () => {
  return (
    <section id="about-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-5/12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="About Shrinath Gold"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome To <span className="text-gold">Shrinath Gold</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shrinath Gold Testing Center is a trusted gold testing and gold buying service provider in Maharashtra and nearby regions.
              We are committed to offering our customers accurate valuation, transparent processes, and reliable pricing using the latest technology.
            </p>

            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>✅ To ensure every customer receives the right market value</li>
              <li>✅ To maintain complete transparency in gold testing</li>
              <li>✅ To help customers overcome financial difficulties with honest guidance</li>
            </ul>

            <p className="font-semibold text-foreground">
              We don’t just buy gold — we earn our customers’ trust.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We offer instant spot cash for gold and silver. Selling gold at Shrinath Gold company is fast, simple and easy.
            </p>
            <p className="font-semibold text-foreground mb-6">Owner: Mr. Ravindra Tapre</p>
            <a
              href="#services"
              className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Know More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
