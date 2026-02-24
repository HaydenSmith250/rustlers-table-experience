import { FadeUp, ScaleIn } from "./AnimatedSection";
import specialsImage from "@/assets/specials-menu.jpg";
import { Calendar, Utensils } from "lucide-react";

const specials = [
  { day: "Thursday", name: "Rib Night", price: "$26", desc: "Slow braised ribs with our in-house Rustlers' Sauce, seasonal veggies, mash potato & corn muffin." },
  { day: "Friday", name: "Fish & Chips", price: "From $17", desc: "Fresh cod fish & chips. Plus 15% off for Seniors 60+!" },
  { day: "Saturday", name: "Burger Bash", price: "$2 Off", desc: "$2 off our famous Rustlers' Burger or the Hangmans Heat, with your choice of side." },
  { day: "Sunday", name: "Brunch & Roast Beef", price: "From $16", desc: "All-you-can-eat brunch buffet 10am–2pm, plus Roast Beef Dinner 4pm–8pm." },
];

const SpecialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-14">
            <span className="font-callout text-sm tracking-[0.25em] uppercase text-gold mb-3 block">
              Something Special Every Day
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-near-black mb-4">
              Weekly Specials
            </h2>
            <p className="font-body text-lg text-near-black/70 max-w-2xl mx-auto">
              From Rib Night to Sunday Roast Beef — there's always a reason to visit Rustlers' Table.
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Specials image */}
          <ScaleIn>
            <div className="relative group">
              <div className="absolute -inset-3 bg-gold/20 -rotate-2 transition-transform duration-500 group-hover:rotate-0" />
              <img
                src={specialsImage}
                alt="Rustlers' Table Weekly Specials Menu"
                className="relative w-full object-cover shadow-xl"
              />
            </div>
          </ScaleIn>

          {/* Specials cards */}
          <div className="space-y-5">
            {specials.map((special, i) => (
              <FadeUp key={special.day} delay={i * 0.1}>
                <div className="bg-white/80 backdrop-blur-sm border border-gold/20 p-5 flex items-start gap-4 hover:shadow-lg hover:border-gold/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-burgundy/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-burgundy" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-display text-lg text-near-black">{special.day}</h3>
                      <span className="font-callout text-sm tracking-wider text-gold font-semibold">{special.price}</span>
                    </div>
                    <p className="font-callout text-sm tracking-wider uppercase text-burgundy mb-1">{special.name}</p>
                    <p className="font-body text-sm text-near-black/60">{special.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}

            <FadeUp delay={0.5}>
              <a
                href="https://www.rustlerstable.ca/specials"
                className="inline-flex items-center gap-2 mt-4 font-callout text-sm tracking-widest uppercase bg-primary text-primary-foreground px-8 py-3.5 hover:bg-burgundy/80 transition-colors duration-300"
              >
                <Utensils className="w-4 h-4" />
                View All Specials
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
