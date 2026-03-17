import { FadeUp } from "./AnimatedSection";

const CTASection = () => {
  return (
    <section id="reservations" className="py-16 md:py-32 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <FadeUp>
          <p className="font-callout text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-2 md:mb-3">
            Ready to Dine?
          </p>
          <h2 className="font-display text-3xl md:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
            Your Table is Waiting
          </h2>
          <p className="font-body text-primary-foreground/60 text-sm md:text-lg max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Whether it's a casual dinner, Sunday brunch, or a special celebration — 
            we can't wait to welcome you to Rustlers' Table.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://www.rustlerstable.ca/reservations"
              className="inline-block font-callout text-xs md:text-sm tracking-widest uppercase bg-gold text-near-black px-8 md:px-10 py-3.5 md:py-4 hover:bg-gold-light transition-all duration-300 font-semibold active:scale-[0.98]"
            >
              Reserve Your Table
            </a>
            <a
              href="tel:+12505422868"
              className="inline-block font-callout text-xs md:text-sm tracking-widest uppercase border border-primary-foreground/30 text-primary-foreground px-8 md:px-10 py-3.5 md:py-4 hover:bg-primary-foreground/5 transition-all duration-300 active:scale-[0.98]"
            >
              Call (250) 542-2868
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default CTASection;
