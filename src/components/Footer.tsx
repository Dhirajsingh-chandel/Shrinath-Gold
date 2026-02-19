import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/LOGO.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#7a0c0c] text-white pt-16 mt-20">
      <div className="container mx-auto px-6">

        {/* Top Row - Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14">

          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img
              src={logo}
              alt="Shrinath Gold"
              className="w-32 rounded-2xl border-2 border-yellow-400 p-3 bg-white"
            />
          </div>

        </div>

        {/* Middle Grid */}
        <div className="grid md:grid-cols-4 gap-10 pb-14">

          {/* Address */}
          <div className="space-y-5">

            <p className="leading-7">
              <span className="font-bold text-yellow-400">
                SHIRWAL – SATARA :
              </span>
              <br />
              Ganesh Mandir,
              <br />
              Chhatrapati Shivaji Maharaj Chowk,
              <br />
              Shirwal, Tal. Khandala,
              <br />
              Dist. Satara
            </p>

            <p className="leading-7">
              <span className="font-bold text-yellow-400">
                PUNE – BALAJINAGAR :
              </span>
              <br />
              Balajinagar,
              <br />
              Pune, Maharashtra
            </p>

            <p>
              <span className="font-bold text-yellow-400">
                EMAIL :
              </span>{" "}
              info@shrinathgold.com
            </p>

            <p>
              <span className="font-bold text-yellow-400">
                PHONE :
              </span>{" "}
              +91 98509 05466
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-semibold text-xl mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li className="hover:text-yellow-400 cursor-pointer">Home</li>
              <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-400 cursor-pointer">Services</li>
              <li className="hover:text-yellow-400 cursor-pointer">Branches</li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
            </ul>

          </div>

          {/* Services */}
          <div>
            <h4 className="text-yellow-400 font-semibold text-xl mb-6">
              Services
            </h4>

            <ul className="space-y-3">
              <li>Transparent Gold Testing</li>
              <li>Gold Buying</li>
              <li>Gold Selling</li>
              <li>Gold Purity Testing</li>
              <li>Instant Payment</li>
            </ul>

          </div>

          {/* Business Info */}
          <div>

            <h4 className="text-yellow-400 font-semibold text-xl mb-6">
              Shrinath Gold
            </h4>

            <p className="leading-7">
              Shrinath Gold Testing Center
              <br />
              Transparent Gold Testing
              <br />
              Fair Price
              <br />
              Customer First
            </p>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm">

          <p>
            © 2026 Shrinath Gold Testing Center | All Rights Reserved
          </p>

          <div className="flex gap-5 mt-4 md:mt-0">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
