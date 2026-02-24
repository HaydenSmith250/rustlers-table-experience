import { FadeUp, ScaleIn } from "./AnimatedSection";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-16">
          <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-3">
            What Our Guests Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Don't Just Take Our Word for It
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-display text-3xl font-bold text-foreground ml-2">4.9</span>
            <span className="font-body text-muted-foreground text-lg">/5 on Google</span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <ScaleIn key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border p-8 h-full flex flex-col relative group hover:border-gold/30 transition-colors duration-500"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-gold/20 mb-4 group-hover:text-gold/40 transition-colors duration-500" />

                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="font-body text-foreground/80 leading-relaxed flex-1 text-[15px]">
                  "{review.text}"
                </p>

                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-gold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">{review.name}</p>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{review.source}</p>
                  </div>
                </div>

                {/* Subtle gold accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
