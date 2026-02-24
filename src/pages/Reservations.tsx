import { motion } from "framer-motion";
import diningBg from "@/assets/dining-atmosphere.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/AnimatedSection";
import { Phone, Calendar, Users, Clock, MapPin, Star, Utensils, PartyPopper } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Reservations = () => {
  const [eventForm, setEventForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEventForm({ name: "", email: "", phone: "", date: "", guests: "", details: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <img src={diningBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-near-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/60 via-transparent to-background" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-gold/5"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div 
              className="inline-flex items-center gap-2 border border-gold/30 bg-gold/5 px-5 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Utensils className="w-3.5 h-3.5 text-gold" />
              <p className="font-callout text-gold tracking-[0.3em] uppercase text-xs">Reserve Your Spot</p>
            </motion.div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-5">Book a Table</h1>
            <p className="font-body text-primary-foreground/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              Whether it's a casual dinner, Sunday brunch, or a special celebration — we'd love to have you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation - Call Only */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <div className="relative bg-gradient-to-br from-card via-card to-gold/5 border-2 border-gold/20 p-10 md:p-14 text-center flex flex-col items-center justify-center group hover:border-gold/50 transition-all duration-500 shadow-[0_0_60px_-15px_hsl(var(--gold)/0.15)]">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/40" />
              <div className="w-20 h-20 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/20 transition-colors duration-500">
                <Phone className="w-9 h-9 text-gold" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Reserve Your Table</h2>
              <div className="w-16 h-0.5 bg-gold/40 mx-auto mb-5" />
              <p className="font-body text-muted-foreground mb-8 leading-relaxed max-w-md text-base">
                Give us a call to book your table directly. We're happy to accommodate special requests, dietary needs, and celebrations.
              </p>
              <a
                href="tel:+12505422868"
                className="inline-flex items-center gap-3 font-callout text-base tracking-widest uppercase bg-gold text-near-black px-10 py-5 hover:bg-gold-light transition-all duration-300 font-semibold shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" />
                (250) 542-2868
              </a>
              <p className="font-body text-xs text-muted-foreground mt-5 tracking-wide">Walk-ins also welcome</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Special Events Booking Form */}
      <section className="py-20 md:py-24 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-10">
              <div className="w-14 h-14 bg-primary/20 flex items-center justify-center mx-auto mb-5">
                <PartyPopper className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Special Events</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold mb-4">Private Dining & Celebrations</p>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                Planning a birthday, anniversary, corporate dinner, or private gathering? Fill out the form below and we'll get back to you to arrange the perfect event.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            {submitted ? (
              <div className="text-center py-12 bg-background border border-gold/30 p-8">
                <Star className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="font-body text-muted-foreground">We've received your inquiry and will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleEventSubmit} className="bg-background border border-border p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="event-name" className="font-callout text-xs tracking-widest uppercase text-muted-foreground">Name *</Label>
                    <Input id="event-name" required value={eventForm.name} onChange={e => setEventForm(f => ({ ...f, name: e.target.value }))} className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-phone" className="font-callout text-xs tracking-widest uppercase text-muted-foreground">Phone *</Label>
                    <Input id="event-phone" type="tel" required value={eventForm.phone} onChange={e => setEventForm(f => ({ ...f, phone: e.target.value }))} className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-email" className="font-callout text-xs tracking-widest uppercase text-muted-foreground">Email</Label>
                    <Input id="event-email" type="email" value={eventForm.email} onChange={e => setEventForm(f => ({ ...f, email: e.target.value }))} className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-date" className="font-callout text-xs tracking-widest uppercase text-muted-foreground">Preferred Date *</Label>
                    <Input id="event-date" type="date" required value={eventForm.date} onChange={e => setEventForm(f => ({ ...f, date: e.target.value }))} className="bg-card border-border" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="event-guests" className="font-callout text-xs tracking-widest uppercase text-muted-foreground">Estimated Guests *</Label>
                    <Input id="event-guests" type="number" min="1" required value={eventForm.guests} onChange={e => setEventForm(f => ({ ...f, guests: e.target.value }))} className="bg-card border-border" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-details" className="font-callout text-xs tracking-widest uppercase text-muted-foreground">Event Details</Label>
                  <Textarea id="event-details" rows={4} placeholder="Tell us about your event — type, special requests, dietary needs..." value={eventForm.details} onChange={e => setEventForm(f => ({ ...f, details: e.target.value }))} className="bg-card border-border" />
                </div>
                <div className="text-center pt-2">
                  <button type="submit" className="font-callout text-sm tracking-widest uppercase bg-gold text-near-black px-10 py-4 hover:bg-gold-light transition-all duration-300 font-semibold">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">What to Expect</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Your Visit</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: "Historic Setting", desc: "Dine at the beautiful O'Keefe Ranch, surrounded by Okanagan heritage and scenery." },
              { icon: Utensils, title: "Bold Flavours", desc: "Certified Angus Beef®, house-smoked meats, and dishes crafted with care." },
              { icon: Star, title: "Special Occasions", desc: "Let us know about birthdays, anniversaries, or celebrations — we'll make it memorable." },
              { icon: Users, title: "Groups Welcome", desc: "We accommodate parties of all sizes. Call ahead for groups of 8 or more." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 bg-primary/20 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp>
              <div className="bg-card border border-border p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-gold" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Large Groups</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  For parties of 8 or more, please call ahead so we can prepare the perfect setup for your group. An 18% auto-gratuity applies to groups of 8+.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-card border border-border p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gold" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Hours</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  Wed–Sat: 11:30 AM – 8 PM<br />
                  Sunday: 10 AM – 8 PM<br />
                  Mon–Tue: Closed
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-card border border-border p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-gold" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Private Events</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  Looking to host a private event or party? Rustlers' Table offers event packages for any occasion. Call us to discuss your needs.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Find Us</h2>
              <p className="font-body text-sm text-muted-foreground">O'Keefe Ranch · 9380 Hwy 97N · Vernon, BC</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="aspect-[16/7] w-full">
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

export default Reservations;
