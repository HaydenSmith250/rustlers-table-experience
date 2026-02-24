import { FadeUp, ScaleIn } from "./AnimatedSection";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "The ribs were absolutely incredible — fall-off-the-bone tender with the most amazing smoky glaze. The setting on the ranch makes it feel like a special occasion every time.",
    name: "Sarah M.",
    source: "Google Review",
    rating: 5,
  },
  {
    text: "Best burger I've had in the Okanagan, hands down. The staff was warm and welcoming, and the views from the patio are unbeatable. Already planning our next visit!",
    name: "James T.",
    source: "Google Review",
    rating: 5,
  },
  {
    text: "We came for the Sunday brunch and were blown away. Fresh, hearty food with so much flavour. The kids loved exploring the ranch afterwards. A true hidden gem!",
    name: "Emily & Rob K.",
    source: "Facebook",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-3">
            What Our Guests Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Don't Just Take Our Word for It
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-display text-2xl font-bold text-foreground ml-2">4.9</span>
            <span className="font-body text-muted-foreground">/5 on Google</span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ScaleIn key={i} delay={i * 0.15}>
              <div className="bg-card border border-border p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-foreground/80 leading-relaxed flex-1 italic">
                  "{review.text}"
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-display font-semibold text-foreground">{review.name}</p>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{review.source}</p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
