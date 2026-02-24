import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/AnimatedSection";
import { Calendar, Music, Clock, MapPin, Phone, CheckCircle, Utensils } from "lucide-react";

const dailySpecials = [
  {
    day: "Thursday",
    title: "Rib Night",
    price: "$26.00",
    description:
      "Slow braised ribs, finished with our in-house Rustlers Sauce, served with seasonal veggies, mash potato, and a corn muffin.",
    extra: "Extra pound of ribs — $12.00",
  },
  {
    day: "Friday",
    title: "Seniors' Day & Fish & Chips",
    price: "",
    description:
      "Seniors' Day (60+) — 15% off ALL menu items for seniors aged 60 or over!",
    extra: "Fish & Chips: 1pc Cod $17.00 | 2pc Cod $24.00",
  },
  {
    day: "Saturday",
    title: "Burger Bash",
    price: "$2.00 OFF",
    description:
      "Enjoy our famous Rustlers' Burger or try out the Hangman's Heat for $2.00 off! Comes with a side of your choice.",
    extra: "",
  },
  {
    day: "Sunday",
    title: "Brunch & Roast Beef Dinner",
    price: "",
    description: "",
    extra: "",
    isSunday: true,
  },
];

const Events = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    eventType: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-near-black">
        <div className="absolute inset-0 bg-gradient-to-b from-near-black to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-3">What's Happening</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4">Events & Specials</h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto">
              From daily specials to live country music — there's always something happening at Rustlers' Table.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Upcoming Events */}
        <section className="py-20 md:py-28">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Upcoming Events</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Don't Miss Out</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-card border border-border p-10 md:p-14 hover:border-gold/30 transition-colors max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Music className="w-10 h-10 text-gold" />
                </div>
                <div className="flex-1">
                  <span className="inline-block font-callout text-xs tracking-widest uppercase bg-primary/30 text-gold px-3 py-1 mb-4">
                    Live Music
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Country Dance Night with Marv Matchura
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    Put on your boots and hit the floor! Join us for a fun-filled evening of country dancing with live music by Marv Matchura. Whether you're a seasoned two-stepper or just looking for a great night out, this is the place to be. Full dinner service and bar available.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <span className="font-body text-sm text-gold flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Select Friday & Saturday Evenings
                    </span>
                    <span className="font-body text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" /> 7:00 PM – 10:00 PM
                    </span>
                    <span className="font-body text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Rustlers' Table at O'Keefe Ranch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        <div className="border-t border-border" />

        {/* Daily Specials */}
        <section className="py-20 md:py-28">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Daily Specials</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Something Special Every Day</p>
            </div>
          </FadeUp>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Wednesday */}
            <FadeUp delay={0.05}>
              <div className="bg-card border border-border p-8 hover:border-gold/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-callout text-xs tracking-widest uppercase text-gold">Wednesday</p>
                  <span className="font-callout text-lg text-gold font-semibold">2 Can Dine $54</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Steak Night</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Buy one New York dinner at regular price and get the second New York dinner 50% off.
                </p>
              </div>
            </FadeUp>

            {/* Thursday */}
            <FadeUp delay={0.1}>
              <div className="bg-card border border-border p-8 hover:border-gold/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-callout text-xs tracking-widest uppercase text-gold">Thursday</p>
                  <span className="font-callout text-lg text-gold font-semibold">$26.00</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Rib Night</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Slow braised ribs, finished with our in-house Rustlers Sauce, served with seasonal veggies, mash potato, and a corn muffin.
                </p>
                <p className="font-body text-xs text-gold/70 italic border-t border-border pt-4">
                  Extra pound of ribs — $12.00
                </p>
              </div>
            </FadeUp>

            {/* Friday */}
            <FadeUp delay={0.15}>
              <div className="bg-card border border-border p-8 hover:border-gold/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-callout text-xs tracking-widest uppercase text-gold">Friday</p>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Seniors' Day & Fish & Chips</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground mb-1">Seniors' Day <span className="text-gold text-sm">(60+)</span></p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      15% off ALL menu items for seniors aged 60 or over!
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-display text-lg font-semibold text-foreground mb-1">Fish & Chips</p>
                    <p className="font-body text-sm text-muted-foreground">
                      1pc Cod: <span className="text-gold">$17.00</span> · 2pc Cod: <span className="text-gold">$24.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Saturday */}
            <FadeUp delay={0.2}>
              <div className="bg-card border border-border p-8 hover:border-gold/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-callout text-xs tracking-widest uppercase text-gold">Saturday</p>
                  <span className="font-callout text-lg text-gold font-semibold">$2.00 OFF</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Burger Bash</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Enjoy our famous Rustlers' Burger or try out the Hangman's Heat for $2.00 off! Comes with a side of your choice.
                </p>
              </div>
            </FadeUp>

            {/* Sunday */}
            <FadeUp delay={0.25}>
              <div className="bg-card border border-border p-8 hover:border-gold/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-callout text-xs tracking-widest uppercase text-gold">Sunday</p>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Brunch & Roast Beef Dinner</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground mb-1">Brunch Buffet <span className="text-muted-foreground text-sm">10 AM – 2 PM</span></p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-2">
                      All you can eat Brunch Buffet! Includes all beverages.
                    </p>
                    <div className="font-body text-sm text-muted-foreground space-y-1">
                      <p>Youth: <span className="text-gold">$16.00</span></p>
                      <p>Adults: <span className="text-gold">$35.00</span></p>
                      <p>Seniors: <span className="text-gold">$28.00</span></p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-display text-lg font-semibold text-foreground mb-1">Roast Beef Dinner <span className="text-muted-foreground text-sm">4 PM – 8 PM</span></p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      Roast Beef Dinner with mashed potatoes, seasonal vegetables, yorkshire pudding, served with demi glaze or mushroom demi glaze.
                    </p>
                    <p className="font-callout text-gold font-semibold mt-2">$29.00</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <div className="border-t border-border" />

        {/* Private Events with Form */}
        <section className="py-20 md:py-28">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Host a Private Event</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Your Celebration, Our Setting</p>
              <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
                Rustlers' Table at the historic O'Keefe Ranch is the perfect venue for private parties, corporate events, birthdays, and celebrations. Fill out the form below and we'll get back to you.
              </p>
            </div>
          </FadeUp>

          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <FadeUp>
                <div className="bg-card border border-gold/30 p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">Inquiry Submitted!</h3>
                  <p className="font-body text-muted-foreground">
                    Thank you for your interest! We'll review your inquiry and get back to you shortly.
                  </p>
                </div>
              </FadeUp>
            ) : (
              <FadeUp delay={0.1}>
                <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-12 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm text-foreground mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-foreground mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-foreground mb-2">Preferred Date *</label>
                      <input
                        required
                        type="date"
                        value={form.eventDate}
                        onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm text-foreground mb-2">Estimated Guests *</label>
                      <input
                        required
                        type="number"
                        min="1"
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-foreground mb-2">Event Type *</label>
                      <select
                        required
                        value={form.eventType}
                        onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                        className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors"
                      >
                        <option value="">Select...</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="wedding">Wedding / Reception</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Tell us about your event</label>
                    <textarea
                      rows={4}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors resize-none"
                      placeholder="Any special requests, dietary needs, or additional details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-callout text-sm tracking-widest uppercase bg-gold text-near-black px-8 py-4 hover:bg-gold-light transition-all duration-300 font-semibold"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </FadeUp>
            )}

            {/* Phone alternative */}
            <FadeUp delay={0.2}>
              <div className="mt-8 bg-card border border-border p-8 text-center">
                <p className="font-body text-muted-foreground mb-3">
                  Prefer to chat? Give us a call to discuss your event.
                </p>
                <a
                  href="tel:+12505422868"
                  className="inline-flex items-center gap-3 font-callout text-lg tracking-wider text-gold hover:text-gold-light transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (250) 542-2868
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
