import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/AnimatedSection";
import { Phone, Calendar, Users, Clock } from "lucide-react";

const Reservations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-near-black">
        <div className="absolute inset-0 bg-gradient-to-b from-near-black to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-3">Reserve Your Spot</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4">Book a Table</h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Whether it's a casual dinner, Sunday brunch, or a special celebration — we'd love to have you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation options */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Call */}
            <FadeUp>
              <div className="bg-card border border-border p-8 text-center h-full flex flex-col items-center justify-center hover:border-gold/30 transition-colors">
                <div className="w-16 h-16 bg-primary/20 flex items-center justify-center mb-6">
                  <Phone className="w-7 h-7 text-gold" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Call Us</h2>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  Give us a call to book your table directly. We're happy to accommodate special requests.
                </p>
                <a
                  href="tel:+12505422868"
                  className="inline-block font-callout text-sm tracking-widest uppercase bg-gold text-near-black px-8 py-4 hover:bg-gold-light transition-all duration-300 font-semibold"
                >
                  (250) 542-2868
                </a>
              </div>
            </FadeUp>

            {/* Online */}
            <FadeUp delay={0.15}>
              <div className="bg-card border border-border p-8 text-center h-full flex flex-col items-center justify-center hover:border-gold/30 transition-colors">
                <div className="w-16 h-16 bg-primary/20 flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-gold" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Book Online</h2>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  Reserve your table through our online booking system — quick and easy.
                </p>
                <a
                  href="https://www.rustlerstable.ca/reservations"
                  className="inline-block font-callout text-sm tracking-widest uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-burgundy/80 transition-all duration-300"
                >
                  Reserve Online
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Info cards */}
          <FadeUp delay={0.3} className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card border border-border p-6 flex items-start gap-4">
                <Users className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Large Groups</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    For parties of 8 or more, please call ahead. 18% auto-gratuity applies to groups of 8+.
                  </p>
                </div>
              </div>
              <div className="bg-card border border-border p-6 flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Hours</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Wed–Sat: 11:30 AM – 8 PM<br />
                    Sunday: 10 AM – 8 PM<br />
                    Mon–Tue: Closed
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservations;
