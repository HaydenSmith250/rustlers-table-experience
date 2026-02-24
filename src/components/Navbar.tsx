import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rustlersLogo from "@/assets/rustlers-logo.png";

const navLinks = [
  { label: "Menu", href: "https://www.rustlerstable.ca/menu" },
  { label: "Events", href: "https://www.rustlerstable.ca/events" },
  { label: "Reservations", href: "https://www.rustlerstable.ca/reservations" },
  { label: "Hours", href: "https://www.rustlerstable.ca/hours" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-near-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={rustlersLogo} alt="Rustlers' Table" className="h-10 md:h-12 w-auto brightness-0 invert" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-callout text-sm tracking-widest uppercase text-primary-foreground/80 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.rustlerstable.ca/reservations"
            className="font-callout text-sm tracking-widest uppercase bg-primary text-primary-foreground px-5 py-2.5 hover:bg-burgundy/80 transition-colors duration-300"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-near-black/95 backdrop-blur-md"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-callout text-sm tracking-widest uppercase text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.rustlerstable.ca/reservations"
                className="font-callout text-sm tracking-widest uppercase bg-primary text-primary-foreground px-5 py-3 text-center hover:bg-burgundy/80 transition-colors"
              >
                Book a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
