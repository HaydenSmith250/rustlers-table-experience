import { FadeUp, ScaleIn } from "./AnimatedSection";
import { Star, Quote, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "We had a really good experience at Rustlers, and would recommend it to others. The food was delicious and hearty portions. I would call it refined comfort food. The service was great. There were 5 different meals at our table and everyone's food was done to perfection. It's a hidden little gem, go check it out!",
    name: "Erik N.",
    source: "Google Review",
    rating: 5,
  },
  {
    text: "Been wanting to try this place for awhile so we finally went there for my birthday dinner. Best decision ever, good prices, great service and incredible food! The only thing that would have made it perfect is if my parents were there, they would have loved this place. We would definitely recommend the New York Dinner, it's our favorite!",
    name: "Lora M.",
    source: "Google Review",
    rating: 5,
  },
  {
    text: "Really good food! Good prices! It gives you that fancy restaurant vibe with the food but doesn't make you broke after lol. My family and I went to the haunted house and corn maze then had supper here after. Desserts were also very good! My toddler finished the carrot cake by himself and he usually doesn't like carrot cake. Loved it and will visit the restaurant again 😁",
    name: "S. Crosby",
    source: "Google Review",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
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
            <span className="font-display text-3xl font-bold text-foreground ml-2">4.8</span>
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

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        <FadeUp delay={0.5} className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=rustlers+table+reviews#lrd=0x537e773cb6290bfb:0xcfc8803e256b5831,1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-callout text-xs md:text-sm tracking-widest uppercase border border-gold/50 text-gold px-6 md:px-8 py-3.5 md:py-4 hover:bg-gold/10 transition-all duration-300 active:scale-[0.98]"
          >
            See More Reviews
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
};

export default SocialProof;
