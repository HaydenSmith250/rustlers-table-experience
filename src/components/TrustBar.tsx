import { Star, Calendar, MapPin } from "lucide-react";

const highlights = [
  {
    icon: null,
    label: "4.9/5 ON GOOGLE",
    stars: true,
  },
  {
    icon: null,
    label: "CERTIFIED ANGUS BEEF",
    badge: "CAB®",
  },
  {
    icon: Calendar,
    label: "OPEN WED – SUN",
  },
  {
    icon: MapPin,
    label: "HERITAGE SITE",
  },
];

const TrustBar = () => {
  return (
    <div className="bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0">
        {highlights.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center gap-1 py-1.5 md:py-2">
            {item.stars && (
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-3 md:w-4 h-3 md:h-4 text-gold fill-gold" />
                ))}
              </div>
            )}
            {item.badge && (
              <span className="font-display text-base md:text-lg text-gold tracking-wide">
                {item.badge}
              </span>
            )}
            {item.icon && <item.icon className="w-4 md:w-5 h-4 md:h-5 text-gold" />}
            <span className="font-callout text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
