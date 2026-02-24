import { FadeUp } from "./AnimatedSection";

const BrunchSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-3">
            Every Sunday
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mb-2">
            Sunday Brunch
          </h2>
          <p className="font-callout text-2xl md:text-3xl text-gold-light tracking-wider mb-6">
            10 AM — 2 PM
          </p>
          <p className="font-body text-secondary-foreground/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Start your Sunday right with our signature brunch buffet. Fresh-baked pastries, 
            farm-fresh eggs, smoked meats, and all the hearty favourites — 
            in a setting you won't find anywhere else.
          </p>
          <a
            href="https://www.rustlerstable.ca/reservations"
            className="inline-block font-callout text-sm tracking-widest uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-burgundy/80 transition-all duration-300"
          >
            Book Sunday Brunch
          </a>
        </FadeUp>
      </div>
    </section>
  );
};

export default BrunchSection;
