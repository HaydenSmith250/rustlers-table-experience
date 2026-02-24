import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/AnimatedSection";
import { Calendar, Music, Utensils, Star, Clock, MapPin } from "lucide-react";

const eventSections = [
  { id: "upcoming", label: "Upcoming" },
  { id: "specials", label: "Weekly Specials" },
  { id: "events", label: "Events" },
];

const weeklySpecials = [
  {
    day: "Wednesday",
    title: "Wing Wednesday",
    description: "Enjoy our famous wings at a special price every Wednesday. Choose from a variety of flavours including BBQ, buffalo, honey garlic, salt & pepper, and more.",
    icon: Utensils,
    details: "Available all day · Dine-in only",
  },
  {
    day: "Thursday",
    title: "Steak Night",
    description: "Indulge in our premium Certified Angus Beef® steaks at a special Thursday price. Includes your choice of side and sauce.",
    icon: Star,
    details: "Available after 5 PM · Dine-in only",
  },
  {
    day: "Sunday",
    title: "Sunday Brunch Buffet",
    description: "Start your Sunday with our legendary brunch buffet featuring eggs, bacon, sausage, fresh pastries, fruit, and so much more. A ranch tradition.",
    icon: Utensils,
    details: "10 AM – 2 PM · Reservations recommended",
  },
];

const recurringEvents = [
  {
    title: "Country Dance Night with Marv Matchura",
    description: "Put on your boots and hit the floor! Join us for a fun-filled evening of country dancing with live music by Marv Matchura. Whether you're a seasoned two-stepper or just looking for a great night out, this is the place to be.",
    icon: Music,
    schedule: "Select Friday & Saturday evenings",
    details: "Live country music · Dancing · Full bar & dining available",
  },
];

const upcomingEvents = [
  {
    title: "Country Dance Night with Marv Matchura",
    date: "Friday, March 7, 2026",
    time: "7:00 PM – 10:00 PM",
    description: "Live country music and dancing at Rustlers' Table. Full dinner service available.",
    tag: "Live Music",
  },
  {
    title: "Country Dance Night with Marv Matchura",
    date: "Saturday, March 15, 2026",
    time: "7:00 PM – 10:00 PM",
    description: "Another evening of boot-stompin' country fun with Marv Matchura.",
    tag: "Live Music",
  },
  {
    title: "Sunday Brunch Buffet",
    date: "Every Sunday",
    time: "10:00 AM – 2:00 PM",
    description: "Our legendary ranch brunch with all the fixings. Reservations recommended.",
    tag: "Weekly",
  },
];

const Events = () => {
  const [activeSection, setActiveSection] = useState("upcoming");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
              From weekly specials to live country music nights — there's always something happening at Rustlers' Table.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Nav */}
      <nav className="sticky top-16 z-40 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 py-3 justify-center">
            {eventSections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`font-callout text-xs tracking-widest uppercase px-6 py-2 transition-all duration-300 ${
                  activeSection === id
                    ? "text-gold border-b-2 border-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6">
        {/* Upcoming Events */}
        <section id="upcoming" className="py-20 md:py-28 scroll-mt-24">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Upcoming Events</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Don't Miss Out</p>
            </div>
          </FadeUp>

          <div className="space-y-6">
            {upcomingEvents.map((event, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-card border border-border p-8 flex flex-col md:flex-row gap-6 hover:border-gold/30 transition-colors">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center md:w-32 text-center">
                    <Calendar className="w-8 h-8 text-gold mb-2" />
                    <span className="inline-block font-callout text-xs tracking-widest uppercase bg-primary/30 text-gold px-3 py-1">
                      {event.tag}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="font-body text-sm text-gold flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </span>
                      <span className="font-body text-sm text-muted-foreground flex items-center gap-1.5">
                        <Clock className="w-4 h-4" /> {event.time}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <div className="border-t border-border" />

        {/* Weekly Specials */}
        <section id="specials" className="py-20 md:py-28 scroll-mt-24">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Weekly Specials</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Something Special Every Day</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weeklySpecials.map((special, i) => (
              <FadeUp key={special.title} delay={i * 0.1}>
                <div className="bg-card border border-border p-8 h-full flex flex-col hover:border-gold/30 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/20 flex items-center justify-center">
                      <special.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-callout text-xs tracking-widest uppercase text-gold">{special.day}</p>
                      <h3 className="font-display text-xl font-bold text-foreground">{special.title}</h3>
                    </div>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{special.description}</p>
                  <p className="font-body text-xs text-gold/70 italic border-t border-border pt-4">{special.details}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <div className="border-t border-border" />

        {/* Events */}
        <section id="events" className="py-20 md:py-28 scroll-mt-24">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Events</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Entertainment at the Ranch</p>
            </div>
          </FadeUp>

          {recurringEvents.map((event, i) => (
            <FadeUp key={event.title} delay={i * 0.1}>
              <div className="bg-card border border-border p-10 md:p-14 hover:border-gold/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <event.icon className="w-10 h-10 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{event.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">{event.description}</p>
                    <div className="flex flex-wrap gap-6">
                      <span className="font-body text-sm text-gold flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {event.schedule}
                      </span>
                      <span className="font-body text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Rustlers' Table at O'Keefe Ranch
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-4">{event.details}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </section>
      </div>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Want to Host a Private Event?</h2>
            <p className="font-body text-muted-foreground mb-8">
              Rustlers' Table is the perfect venue for private parties, corporate events, and celebrations. Contact us to learn more about our event packages.
            </p>
            <a
              href="tel:+12505422868"
              className="inline-block font-callout text-sm tracking-widest uppercase bg-gold text-near-black px-8 py-4 hover:bg-gold-light transition-all duration-300 font-semibold"
            >
              Call (250) 542-2868
            </a>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
