import { FadeUp } from "./AnimatedSection";
import diningImg from "@/assets/dining-atmosphere.jpg";
import ranchImg from "@/assets/ranch-okeefe.jpg";
import steakImg from "@/assets/food-steak.jpg";

interface HighlightCard {
  heading: string;
  copy: string;
  image: string;
  imageLeft: boolean;
  button?: { label: string; href: string };
}

const cards: HighlightCard[] = [
  {
    heading: "The Atmosphere",
    copy: "Warm lighting, exposed wood, and a room built for long dinners. The kind of place that makes a Tuesday feel special.",
    image: diningImg,
    imageLeft: true,
  },
  {
    heading: "The Setting",
    copy: "Surrounded by 100 acres of Okanagan ranch land. There's no backdrop like it in Vernon.",
    image: ranchImg,
    imageLeft: false,
  },
  {
    heading: "Private Events",
    copy: "Birthdays, corporate dinners, anniversary nights. A venue that does the talking for you.",
    image: steakImg,
    imageLeft: true,
    button: { label: "Book a Private Event", href: "#reservations" },
  },
];

const WhySection = () => {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp className="text-center mb-12 md:mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Why People Keep Coming Back
          </h2>
          <p className="font-body text-sm md:text-lg text-muted-foreground">
            The atmosphere. The setting. The experience.
          </p>
        </FadeUp>

        <div className="flex flex-col gap-16 md:gap-24">
          {cards.map((card, i) => (
            <FadeUp key={card.heading} delay={i * 0.1}>
              <div
                className={`flex flex-col ${
                  card.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-gold mb-3 md:mb-4">
                    {card.heading}
                  </h3>
                  <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed max-w-md">
                    {card.copy}
                  </p>
                  {card.button && (
                    <a
                      href={card.button.href}
                      className="inline-block mt-6 font-callout text-xs md:text-sm tracking-widest uppercase bg-gold text-near-black px-8 py-3.5 hover:bg-gold-light transition-all duration-300 font-semibold w-fit active:scale-[0.98]"
                    >
                      {card.button.label}
                    </a>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
