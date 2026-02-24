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
    label: "HISTORIC HERITAGE SITE",
  },
];

const TrustBar = () => {
  return (
    <div className="bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
        {highlights.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center gap-1.5 py-2">
            {item.stars && (
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
            )}
            {item.badge && (
              <span className="font-display text-lg text-gold tracking-wide">
                {item.badge}
              </span>
            )}
            {item.icon && <item.icon className="w-5 h-5 text-gold" />}
            <span className="font-callout text-xs tracking-[0.2em] text-muted-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
