import { FadeUp } from "./AnimatedSection";
import { Star } from "lucide-react";

const ReviewCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeUp>
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gold fill-gold" />
            ))}
          </div>
          <p className="font-body text-muted-foreground text-sm mb-5">
            Loved your meal? A quick review means the world to our team.
          </p>
          <a
            href="https://g.page/r/rustlerstable/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-callout text-xs tracking-widest uppercase border border-gold/40 text-gold px-8 py-3 hover:bg-gold/10 transition-all duration-300"
          >
            Leave a Review
          </a>
        </FadeUp>
      </div>
    </section>
  );
};

export default ReviewCTA;
