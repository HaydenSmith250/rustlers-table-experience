import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/AnimatedSection";
import { Utensils, ChefHat, ConciergeBell, CheckCircle } from "lucide-react";
import hiringSign from "@/assets/hiring-sign.jpg";

const positions = [
  {
    title: "Kitchen Prep Associate",
    icon: Utensils,
    intro: "Join the Rustler's Table team in this fast-paced kitchen role!",
    highlights: [
      "Prep fresh ingredients daily",
      "Maintain a clean, organized kitchen",
      "Chop, measure & organize with precision",
      "Learn from experienced chefs",
    ],
    closing: "If you're eager to learn and love great food, this is for you.",
  },
  {
    title: "Cook",
    icon: ChefHat,
    intro: "Step up to the line and cook dishes our guests rave about!",
    highlights: [
      "Prepare & cook quality dishes",
      "Work in a fast-paced kitchen",
      "Collaborate with a great team",
      "Prior cooking experience preferred",
    ],
    closing: "Bring your skills and passion — we'd love to hear from you.",
  },
  {
    title: "Server",
    icon: ConciergeBell,
    intro: "Be the face of Rustler's Table on our front-of-house team!",
    highlights: [
      "Provide friendly, efficient service",
      "Take orders & ensure guest satisfaction",
      "Thrive in an upbeat environment",
      "Great for people who love people",
    ],
    closing: "If you're personable and energetic, we want you on our team.",
  },
];

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    positions: [] as string[],
    experience: "",
    motivation: "",
    references: "",
    certifications: [] as string[],
  });

  const togglePosition = (pos: string) => {
    setForm((prev) => ({
      ...prev,
      positions: prev.positions.includes(pos)
        ? prev.positions.filter((p) => p !== pos)
        : [...prev.positions, pos],
    }));
  };

  const toggleCert = (cert: string) => {
    setForm((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }));
  };

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
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-3">We're Hiring</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4">Join Our Team</h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Be part of the Rustlers' Table family at the historic O'Keefe Ranch. We're looking for passionate individuals who love great food and hospitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hiring Photo */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <div className="overflow-hidden border border-border">
              <img
                src={hiringSign}
                alt="Now Hiring sign in the window of Rustlers' Table"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Open Positions</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Current Opportunities</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {positions.map((pos, i) => (
              <FadeUp key={pos.title} delay={i * 0.1}>
                <div className="bg-card border border-border p-8 md:p-10 h-full flex flex-col hover:border-gold/30 transition-colors">
                  <div className="w-14 h-14 bg-primary/20 flex items-center justify-center mb-6">
                    <pos.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{pos.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-5">{pos.intro}</p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {pos.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-body text-xs text-muted-foreground italic mb-6">{pos.closing}</p>
                  <a
                    href="#apply"
                    className="block text-center font-callout text-xs tracking-widest uppercase bg-gold text-near-black px-6 py-3 hover:bg-gold-light transition-all duration-300 font-semibold"
                  >
                    Apply Now
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 md:py-24 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Why Rustlers' Table?</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">More Than Just a Job</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Beautiful Setting", desc: "Work at the historic O'Keefe Ranch surrounded by stunning Okanagan scenery." },
              { title: "Team Culture", desc: "Join a supportive, tight-knit team that feels like family." },
              { title: "Growth", desc: "Learn from experienced chefs and hospitality professionals." },
            ].map((perk, i) => (
              <FadeUp key={perk.title} delay={i * 0.08}>
                <div className="text-center p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{perk.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{perk.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 md:py-28 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Apply Now</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Start Your Journey</p>
            </div>
          </FadeUp>

          {submitted ? (
            <FadeUp>
              <div className="bg-card border border-gold/30 p-12 text-center">
                <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Application Submitted!</h3>
                <p className="font-body text-muted-foreground">
                  Thank you for your interest in joining Rustlers' Table. We'll review your application and get back to you soon.
                </p>
              </div>
            </FadeUp>
          ) : (
            <FadeUp delay={0.1}>
              <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-12 space-y-8">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">First Name *</label>
                    <input
                      required
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Last Name *</label>
                    <input
                      required
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
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

                {/* Position */}
                <div>
                  <label className="block font-body text-sm text-foreground mb-3">Position *</label>
                  <div className="space-y-3">
                    {["Server", "Kitchen Prep", "Cook"].map((pos) => (
                      <label key={pos} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                            form.positions.includes(pos)
                              ? "border-gold bg-gold/20"
                              : "border-border group-hover:border-gold/50"
                          }`}
                        >
                          {form.positions.includes(pos) && (
                            <div className="w-2.5 h-2.5 bg-gold" />
                          )}
                        </div>
                        <span className="font-body text-sm text-foreground">{pos}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">
                    Tell us about yourself and some of your previous work experience! *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Motivation */}
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">
                    Why do you want to join our team? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.motivation}
                    onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* References */}
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">
                    Please list 2-3 professional references below. *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.references}
                    onChange={(e) => setForm({ ...form, references: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors resize-none"
                  />
                  <p className="font-body text-xs text-muted-foreground mt-2">
                    Include their job position, name and contact information.
                  </p>
                </div>

                {/* Certifications */}
                <div>
                  <label className="block font-body text-sm text-foreground mb-3">
                    Please select all of the certifications you have. *
                  </label>
                  <div className="space-y-3">
                    {["Food Safe", "Serving it Right", "Other"].map((cert) => (
                      <label key={cert} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                            form.certifications.includes(cert)
                              ? "border-gold bg-gold/20"
                              : "border-border group-hover:border-gold/50"
                          }`}
                        >
                          {form.certifications.includes(cert) && (
                            <div className="w-2.5 h-2.5 bg-gold" />
                          )}
                        </div>
                        <span className="font-body text-sm text-foreground">{cert}</span>
                      </label>
                    ))}
                  </div>
                  <p className="font-body text-xs text-muted-foreground mt-2">
                    Please select "other" if you don't have either of these certificates.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full font-callout text-sm tracking-widest uppercase bg-gold text-near-black px-8 py-4 hover:bg-gold-light transition-all duration-300 font-semibold"
                >
                  Submit Application
                </button>
              </form>
            </FadeUp>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
