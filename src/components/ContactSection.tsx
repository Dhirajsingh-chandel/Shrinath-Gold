import { motion } from "framer-motion";
import { useState } from "react";

const branches = [
  {
    name: "Shirwal – Satara",
    value: "shirwal",
    map: "https://www.google.com/maps?q=Ganesh%20Mandir%20Shirwal%20Satara&output=embed",
  },
  {
    name: "Pune – Balajinagar",
    value: "pune",
    map: "https://www.google.com/maps?q=Balajinagar%20Pune&output=embed",
  },
];

const ContactSection = () => {

  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (

    <section
      id="contact-us"
      className="pt-32 pb-20 bg-[#a91517] mb-40 mt-20"
    >

      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - MAP */}
          <motion.div
            key={selectedBranch.value}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden border-4 border-yellow-400 shadow-[0_0_40px_rgba(255,204,0,0.6)]"
          >

            <iframe
              src={selectedBranch.map}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Branch Location"
            ></iframe>

          </motion.div>


          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="text-center lg:text-left mb-10">

              <p className="text-white/80 text-lg mb-2">
                Contact Shrinath Gold Testing Center
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold text-white">
                Reach Out to Us Today!
              </h2>

            </div>


            <form className="space-y-6">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-6 py-4 rounded-full bg-gray-200 text-black outline-none"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-6 py-4 rounded-full bg-gray-200 text-black outline-none"
                />

              </div>


              {/* Subject + Branch Select */}
              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-6 py-4 rounded-full bg-gray-200 text-black outline-none"
                />

                <select
                  className="w-full px-6 py-4 rounded-full bg-gray-200 text-black outline-none"
                  value={selectedBranch.value}
                  onChange={(e) => {
                    const branch = branches.find(
                      b => b.value === e.target.value
                    );
                    setSelectedBranch(branch);
                  }}
                >

                  {branches.map(branch => (
                    <option key={branch.value} value={branch.value}>
                      {branch.name}
                    </option>
                  ))}

                </select>

              </div>


              {/* Message */}
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full px-6 py-4 rounded-3xl bg-gray-200 text-black outline-none resize-none"
              ></textarea>


              {/* Submit */}
              <button
                type="submit"
                className="px-10 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all"
              >
                Submit
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>

  );

};

export default ContactSection;
