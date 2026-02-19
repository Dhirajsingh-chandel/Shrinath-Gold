import { motion } from "framer-motion";
import { HandCoins, ArrowRightLeft, RefreshCw, Repeat } from "lucide-react";

const services = [
  { icon: HandCoins, label: "SELL GOLD" },
  { icon: ArrowRightLeft, label: "CLOSE GOLD LOAN" },
  { icon: RefreshCw, label: "RE-PLEDGE GOLD" },
  { icon: Repeat, label: "TRANSFER GOLD LOAN" },
];

const ServicesBar = () => {
  return (
    <section className="section-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
          <div className="md:w-1/5 md:border-r md:border-gold/30 pr-6">
            <h2 className="text-2xl font-bold text-gold">OUR SERVICES :</h2>
          </div>
          <div className="flex-1 flex flex-wrap justify-around gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon-wrapper">
                  <service.icon size={40} className="text-gold group-hover:text-gold-light transition-colors" />
                </div>
                <span className="text-xs font-semibold tracking-wider" style={{ color: "hsl(0,0%,90%)" }}>
                  {service.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBar;
