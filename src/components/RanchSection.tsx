import { FadeUp } from "./AnimatedSection";
import ranchImg from "@/assets/ranch-hero.jpg";

const RanchSection = () => {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ranchImg} alt="O'Keefe Ranch" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-near-black/75 md:bg-near-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-2 md:mb-3">
              A Setting Like No Other
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
              Dine at the Historic<br />O'Keefe Ranch
            </h2>
            <p className="font-body text-primary-foreground/70 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
              Nestled in the heart of BC's stunning North Okanagan, Rustlers' Table sits 
              on one of the province's most treasured heritage sites. The historic O'Keefe 
              Ranch offers more than a meal — explore heritage buildings, meet farm animals, 
              and soak in the beauty of ranch country.
            </p>
            <p className="font-body text-primary-foreground/70 text-sm md:text-lg leading-relaxed mb-8 md:mb-10">
              Your visit supports the preservation of this beloved community landmark, 
              making every bite a little more meaningful.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://www.rustlerstable.ca/reservations"
              className="inline-block font-callout text-xs md:text-sm tracking-widest uppercase bg-primary text-primary-foreground px-6 md:px-8 py-3.5 md:py-4 hover:bg-burgundy/80 transition-all duration-300 active:scale-[0.98]"
            >
              Plan Your Visit
            </a>
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
