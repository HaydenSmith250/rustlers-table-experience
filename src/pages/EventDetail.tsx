import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/AnimatedSection";
import { Calendar, Clock, MapPin } from "lucide-react";
import ranchImg from "@/assets/ranch-okeefe.jpg";

const EventDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ranchImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-near-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-near-black/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block font-callout text-xs tracking-widest uppercase bg-primary/30 text-gold px-3 py-1 mb-4">
              Live Music
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
              Country Dance Night<br />
              <span className="text-gold">with Marv Makura</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* About */}
        <FadeUp>
          <div className="mb-12 md:mb-16">
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-xs mb-3">About the Night</p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Every Wednesday night, pull on your boots and hit the dance floor. Live country music by Marv Makura 
              sets the tone for a night of great food, cold drinks, and good company at Historic O'Keefe Ranch.
            </p>
          </div>
        </FadeUp>

        {/* Details */}
        <FadeUp delay={0.15}>
          <div className="bg-card border border-border p-8 md:p-10 mb-12 md:mb-16">
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-xs mb-6">Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Day</p>
                  <p className="font-display text-foreground font-semibold">Wednesday</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Time</p>
                  <p className="font-display text-foreground font-semibold">Evening</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="font-display text-foreground font-semibold">Rustlers' Table, O'Keefe Ranch</p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.3} className="text-center">
          <Link
            to="/reservations"
            className="inline-block font-callout text-sm tracking-widest uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-burgundy/80 transition-all duration-300 active:scale-[0.98]"
          >
            Reserve Your Spot
          </Link>
        </FadeUp>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetail;
