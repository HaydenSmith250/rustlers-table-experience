import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/food-burger.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Rustlers' Table signature burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-near-black/80 via-near-black/50 to-near-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-near-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-4">
            At the Historic O'Keefe Ranch
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-primary-foreground mb-6">
            Eat Now,<br />
            <span className="text-gradient-gold">Shoot Later.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-8 leading-relaxed">
            Bold flavours, smoky favourites, and hearty meals with a rustic edge — 
            set on one of BC's most beautiful heritage sites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/reservations"
              className="inline-block font-callout text-sm tracking-widest uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-burgundy/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Reserve Your Table
            </Link>
            <Link
              to="/menu"
              className="inline-block font-callout text-sm tracking-widest uppercase border border-gold/50 text-gold px-8 py-4 hover:bg-gold/10 transition-all duration-300"
            >
              View Our Menu
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-gold rounded-full mt-1.5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
