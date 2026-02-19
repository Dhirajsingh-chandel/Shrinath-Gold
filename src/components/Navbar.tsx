import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/LOGO.jpeg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about_us" },
  { name: "Branches", path: "/branches" },
  { name: "Contact Us", path: "/blog" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-2" : "bg-background/80 backdrop-blur-sm py-4"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-white">
            <img
              src={logo}
              alt="Shrinath Gold Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="font-display font-bold text-lg text-foreground">SHRINATH</span>
            <p className="text-[10px] text-muted-foreground leading-none">GOLD TESTING CENTRE</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-sm font-medium transition-colors text-foreground"
              activeClassName="text-primary"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <a
          href="#contact-us"
          className="hidden lg:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Enquiry
        </a>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-sm font-medium text-foreground py-2"
                  activeClassName="text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href="#contact-us"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold text-center"
              >
                Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;