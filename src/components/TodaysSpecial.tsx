import { FadeUp } from "./AnimatedSection";
import { Flame } from "lucide-react";

const specials: Record<number, { title: string; subtitle: string }> = {
  0: { title: "Sunday Brunch", subtitle: "10am to 2pm" },
  1: { title: "Join Us Wednesday – Sunday", subtitle: "We're closed Monday & Tuesday" },
  2: { title: "Join Us Wednesday – Sunday", subtitle: "We're closed Monday & Tuesday" },
  3: { title: "Wing Night", subtitle: "50¢ Wings All Night" },
  4: { title: "Rib Fest", subtitle: "Slow-Smoked St. Louis Ribs" },
  5: { title: "Steak Night", subtitle: "10oz New York Strip" },
  6: { title: "Steak Night", subtitle: "10oz New York Strip" },
};

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const TodaysSpecial = () => {
  const today = new Date().getDay();
  const special = specials[today];
  const dayName = dayNames[today];
  const isClosed = today === 1 || today === 2;

  return (
    <section className="py-10 md:py-16 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="bg-card border border-gold/20 p-6 md:p-10 text-center relative">
            {!isClosed && (
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3 py-1 mb-4">
                <Flame className="w-3.5 h-3.5 text-gold" />
                <span className="font-callout text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold">
                  Today — {dayName}
                </span>
              </div>
            )}
            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2">
              {special.title}
            </h3>
            <p className="font-body text-base md:text-lg text-gold">
              {special.subtitle}
            </p>
          </div>
        </FadeUp>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default TodaysSpecial;
