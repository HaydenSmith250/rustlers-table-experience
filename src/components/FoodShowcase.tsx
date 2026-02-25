import { FadeUp } from "./AnimatedSection";
import foodSteak from "@/assets/food-steak.jpg";
import foodRibs from "@/assets/food-ribs.jpg";
import foodShortrib from "@/assets/food-shortrib.jpg";
import foodRibs2 from "@/assets/food-ribs2.jpg";

const dishes = [
  { img: foodSteak, name: "Grilled Tenderloin", desc: "On garlic crostini with sautéed mushrooms" },
  { img: foodRibs, name: "Smoked Baby Back Ribs", desc: "Slow-smoked with house BBQ glaze" },
  { img: foodShortrib, name: "Braised Short Rib", desc: "Fork-tender with roasted vegetables" },
  { img: foodRibs2, name: "Signature Rack", desc: "With cornbread muffin & roasted potatoes" },
];

const FoodShowcase = () => {
  return (
    <section className="py-16 md:py-32 bg-near-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp className="text-center mb-10 md:mb-16">
          <p className="font-callout text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-2 md:mb-3">
            From Our Kitchen
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3 md:mb-4">
            Bold Flavours, Crafted with Care
          </h2>
          <p className="font-body text-primary-foreground/60 max-w-2xl mx-auto text-sm md:text-lg">
            Every dish tells a story — from ranch-raised ingredients to recipes perfected over time.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {dishes.map((dish, i) => (
            <FadeUp key={dish.name} delay={i * 0.1} className="group relative overflow-hidden aspect-[16/10] md:aspect-[4/3]">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-near-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                <h3 className="font-display text-lg md:text-2xl font-semibold text-primary-foreground mb-0.5 md:mb-1">
                  {dish.name}
                </h3>
                <p className="font-body text-primary-foreground/70 text-xs md:text-sm">{dish.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="text-center mt-8 md:mt-12">
          <a
            href="https://www.rustlerstable.ca/menu"
            className="inline-block font-callout text-xs md:text-sm tracking-widest uppercase border border-gold/50 text-gold px-6 md:px-8 py-3.5 md:py-4 hover:bg-gold/10 transition-all duration-300 active:scale-[0.98]"
          >
            Explore Full Menu
          </a>
        </FadeUp>
      </div>
    </section>
  );
};

export default FoodShowcase;
