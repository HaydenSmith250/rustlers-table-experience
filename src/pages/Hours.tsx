import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/AnimatedSection";
import { Clock, MapPin, Phone, Sun } from "lucide-react";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "11:30 AM – 8:00 PM" },
  { day: "Thursday", time: "11:30 AM – 8:00 PM" },
  { day: "Friday", time: "11:30 AM – 8:00 PM" },
  { day: "Saturday", time: "11:30 AM – 8:00 PM" },
  { day: "Sunday", time: "10:00 AM – 8:00 PM" },
];

const Hours = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-near-black">
        <div className="absolute inset-0 bg-gradient-to-b from-near-black to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-3">Plan Your Visit</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4">Hours & Location</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Hours */}
            <FadeUp>
              <div className="bg-card border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-gold" />
                  <h2 className="font-display text-2xl font-bold text-foreground">Hours</h2>
                </div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className={`flex justify-between py-2 border-b border-border ${
                        h.day === today ? "text-gold" : ""
                      }`}
                    >
                      <span className="font-body text-sm font-medium">
                        {h.day}
                        {h.day === today && <span className="text-xs ml-2 font-callout tracking-wider uppercase">(Today)</span>}
                      </span>
                      <span className={`font-body text-sm ${h.time === "Closed" ? "text-muted-foreground" : ""}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
                  <Sun className="w-4 h-4 text-gold" />
                  <p className="font-body text-sm text-muted-foreground">
                    Sunday Brunch Buffet: 10 AM – 2 PM
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Location & contact */}
            <FadeUp delay={0.15}>
              <div className="space-y-6">
                <div className="bg-card border border-border p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-gold" />
                    <h2 className="font-display text-2xl font-bold text-foreground">Location</h2>
                  </div>
                  <p className="font-body text-muted-foreground mb-4">
                    O'Keefe Ranch<br />
                    9380 Hwy 97N<br />
                    Vernon, BC V1H 1W9
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//O'Keefe+Ranch+Vernon+BC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-callout text-sm tracking-widest uppercase border border-gold/50 text-gold px-6 py-3 hover:bg-gold/10 transition-all duration-300"
                  >
                    Get Directions
                  </a>
                </div>

                <div className="bg-card border border-border p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-gold" />
                    <h2 className="font-display text-2xl font-bold text-foreground">Contact</h2>
                  </div>
                  <a href="tel:+12505422868" className="font-body text-lg text-foreground hover:text-gold transition-colors">
                    (250) 542-2868
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Map */}
          <FadeUp delay={0.3} className="mt-12">
            <div className="aspect-[16/9] w-full">
              <iframe
                title="Rustlers' Table Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.8!2d-119.5!3d50.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDE4JzAwLjAiTiAxMTnCsDMwJzAwLjAiVw!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hours;
