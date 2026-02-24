import { FadeUp } from "./AnimatedSection";
import { Utensils } from "lucide-react";

const specials = [
  { day: "Thursday", name: "Rib Night", price: "$26", desc: "Slow braised ribs with our in-house Rustlers' Sauce, seasonal veggies, mash potato & corn muffin." },
  { day: "Friday", name: "Fish & Chips", price: "From $17", desc: "Fresh cod fish & chips. Plus 15% off for Seniors 60+!" },
  { day: "Saturday", name: "Burger Bash", price: "$2 Off", desc: "$2 off our famous Rustlers' Burger or the Hangmans Heat, with your choice of side." },
  { day: "Sunday", name: "Brunch & Roast Beef", price: "From $16", desc: "All-you-can-eat brunch buffet 10am–2pm, plus Roast Beef Dinner 4pm–8pm." },
];

const SpecialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="font-callout text-sm tracking-[0.3em] uppercase text-gold mb-3 block">
              Something Special Every Day
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Weekly Specials
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              From Rib Night to Sunday Roast — there's always a reason to visit.
            </p>
          </div>
        </FadeUp>

        {/* Specials grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {specials.map((special, i) => (
            <FadeUp key={special.day} delay={i * 0.08}>
              <div className="relative bg-card border border-border p-6 md:p-8 group hover:border-gold/30 transition-all duration-500 h-full">
                {/* Day label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-callout text-xs tracking-[0.3em] uppercase text-gold/80">
                    {special.day}
                  </span>
                  <span className="font-callout text-sm tracking-wider text-gold font-semibold bg-gold/10 px-3 py-1">
                    {special.price}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-10 h-[1px] bg-gold/40 mb-4" />

                {/* Name & description */}
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 leading-snug">
                  {special.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {special.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center">
            <a
              href="https://www.rustlerstable.ca/specials"
              className="inline-flex items-center gap-2 font-callout text-sm tracking-widest uppercase bg-gold text-near-black px-8 py-3.5 hover:bg-gold-light transition-colors duration-300 font-semibold"
            >
              <Utensils className="w-4 h-4" />
              View All Specials
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default SpecialsSection;
