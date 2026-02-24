import { FadeUp } from "./AnimatedSection";
import { Star } from "lucide-react";

const ReviewCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeUp>
          <div className="flex justify-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Remember That First Bite?
          </h2>

          <p className="font-body text-secondary-foreground/70 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
            The sizzle of the grill, the smoky aroma, that moment when everything
            on your plate was exactly right — we put our hearts into every dish.
          </p>

          <p className="font-body text-secondary-foreground/50 text-base max-w-md mx-auto mb-10 leading-relaxed">
            If we made your evening special, a quick review means the world to our
            small team. It truly keeps us going.
          </p>

          <a
            href="https://g.page/r/rustlerstable/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-callout text-sm tracking-widest uppercase bg-gold text-near-black px-10 py-4 hover:bg-gold-light transition-all duration-300 font-semibold"
          >
            Leave Us a Review
          </a>

          <p className="font-body text-xs text-secondary-foreground/30 mt-6">
            Takes less than a minute — thank you ♥
          </p>
        </FadeUp>
      </div>
    </section>
  );
};

export default ReviewCTA;
