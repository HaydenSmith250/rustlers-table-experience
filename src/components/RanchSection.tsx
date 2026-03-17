import { FadeUp } from "./AnimatedSection";
import ranchImg from "@/assets/ranch-okeefe.jpg";

const RanchSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-[-20%] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${ranchImg})` }}
        />
        <div className="absolute inset-0 bg-near-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-3">
              A Setting Like No Other
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
              Dine at the Historic<br />O'Keefe Ranch
            </h2>
            <p className="font-body text-primary-foreground/80 text-base md:text-xl leading-relaxed mb-8 md:mb-10">
              Heritage buildings. Farm animals. The rolling hills of the Okanagan.<br className="hidden md:block" />
              More than a meal — it's a destination.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://www.okeeferanch.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-callout text-xs md:text-sm tracking-widest uppercase border border-gold/50 text-gold px-6 md:px-8 py-3.5 md:py-4 hover:bg-gold/10 transition-all duration-300 active:scale-[0.98]"
            >
              Explore the Ranch
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default RanchSection;
