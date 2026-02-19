import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroModel from "@/assets/hero-model.png";

const steps = [
  {
    title: "Visit Our Nearest Branch",
    desc: "Walk into your nearest branch. Our staff will guide you through the process.",
  },
  {
    title: "KYC Verification",
    desc: "Submit basic KYC documents for secure and legal transactions.",
  },
  {
    title: "Gold Purity Evaluation",
    desc: "Gold is tested using accurate and transparent testing methods.",
  },
  {
    title: "Weight Verification",
    desc: "Weight measured using certified digital machines.",
  },
  {
    title: "Free Quotation",
    desc: "Quotation based on purity, weight, and market rate.",
  },
  {
    title: "Agreement Confirmation",
    desc: "Clear agreement before final confirmation.",
  },
  {
    title: "Instant Payment",
    desc: "Receive instant cash or bank transfer securely.",
  },
];

export default function StepsSection() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleStep = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <section className="bg-[#A61D22] py-10">

      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT IMAGE (SMALLER) */}
          <div className="border-2 border-yellow-400 rounded-lg overflow-hidden max-w-sm mx-auto">

            <img
              src={heroModel}
              alt="Gold Representative"
              className="w-full h-[380px] object-cover"
            />

          </div>


          {/* RIGHT CONTENT */}
          <div>

            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 leading-snug">

              Sell or Release Your Gold in Simple Steps

            </h2>


            <div className="space-y-2">

              {steps.map((step, index) => {

                const isOpen = openIndex === index;

                return (

                  <motion.div
                    key={index}
                    layout
                    transition={{ duration: 0.25 }}
                    className="rounded-md overflow-hidden border border-white/40"
                  >

                    {/* HEADER */}
                    <button
                      onClick={() => toggleStep(index)}
                      className={`
                        w-full flex justify-between items-center px-4 py-3 text-sm font-semibold transition

                        ${isOpen
                          ? "bg-yellow-400 text-red-700"
                          : "bg-[#A61D22] text-white hover:bg-red-800"
                        }
                      `}
                    >

                      {step.title}

                      {isOpen
                        ? <Minus size={18} />
                        : <Plus size={18} />
                      }

                    </button>


                    {/* CONTENT */}
                    <AnimatePresence>

                      {isOpen && (

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="bg-yellow-400"
                        >

                          <div className="px-4 py-3 text-sm text-black">

                            {step.desc}

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </motion.div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}
