import { FadeUp, FadeIn } from "./AnimatedSection";
import diningImg from "@/assets/dining-atmosphere.jpg";

const QualitySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn className="relative">
            <img
              src={diningImg}
              alt="Rustlers' Table dining atmosphere"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 hidden lg:block" />
          </FadeIn>

          <FadeUp delay={0.2}>
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-3">
              Quality You Can Taste
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Certified Angus Beef &<br />Locally Sourced Ingredients
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                We take pride in sourcing the finest ingredients. Our steaks feature 
                Certified Angus Beef® — the top 1/3 of USDA Choice and Prime grades — 
                ensuring exceptional flavour, tenderness, and juiciness in every cut.
              </p>
              <p>
                From our house-smoked meats to scratch-made sides, everything is 
                prepared with the care and attention that our guests deserve. This isn't 
                just a meal — it's a commitment to quality.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">CAB</p>
                <p className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">Certified Angus</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">Scratch Made</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">Local</p>
                <p className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">BC Sourced</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
