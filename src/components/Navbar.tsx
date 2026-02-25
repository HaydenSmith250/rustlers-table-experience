import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import rustlersLogo from "@/assets/rustlers-logo.png";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
  { label: "Hours", href: "/hours" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-[hsl(30,14%,3%)] backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-callout text-2xl tracking-[0.2em] uppercase transition-colors ${
                      location.pathname === link.href ? "text-gold" : "text-primary-foreground/80 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
                className="mt-4"
              >
                <Link
                  to="/reservations"
                  onClick={() => setMobileOpen(false)}
                  className="font-callout text-lg tracking-[0.2em] uppercase bg-primary text-primary-foreground px-10 py-4 text-center hover:bg-burgundy/80 transition-colors"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen ? "bg-near-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1.5 md:py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={rustlersLogo} alt="Rustlers' Table" className="h-16 md:h-36 w-auto brightness-0 invert" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-callout text-sm tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === link.href ? "text-gold" : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="font-callout text-sm tracking-widest uppercase bg-primary text-primary-foreground px-5 py-2.5 hover:bg-burgundy/80 transition-colors duration-300"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-foreground p-3 -mr-2 active:opacity-70 transition-opacity relative z-50"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-[2px] bg-current my-[5px] transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
