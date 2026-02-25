import { FadeUp } from "./AnimatedSection";
import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp className="text-center mb-8 md:mb-12">
          <p className="font-callout text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-2 md:mb-3">
            Find Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Visit Rustlers' Table
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map - shorter aspect ratio on mobile */}
          <FadeUp delay={0.15}>
            <div className="aspect-[4/3] md:aspect-[4/3] w-full rounded-sm overflow-hidden">
              <iframe
                title="Rustlers' Table Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.8!2d-119.5!3d50.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDE4JzAwLjAiTiAxMTnCsDMwJzAwLjAiVw!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.3} className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="flex items-start gap-3 md:gap-4">
              <MapPin className="w-5 md:w-6 h-5 md:h-6 text-gold mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1">Location</h3>
                <p className="font-body text-sm md:text-base text-muted-foreground">
                  O'Keefe Ranch, 9380 Hwy 97N<br />
                  Vernon, BC V1H 1W9
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <Phone className="w-5 md:w-6 h-5 md:h-6 text-gold mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1">Call Us</h3>
                <a href="tel:+12505422868" className="font-body text-sm md:text-base text-muted-foreground hover:text-gold transition-colors">
                  (250) 542-2868
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <Clock className="w-5 md:w-6 h-5 md:h-6 text-gold mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1">Hours</h3>
                <div className="font-body text-sm md:text-base text-muted-foreground space-y-0.5 md:space-y-1">
                  <p>Wednesday – Saturday: 11:30 AM – 8:00 PM</p>
                  <p>Sunday: 10:00 AM – 8:00 PM</p>
                  <p>Monday – Tuesday: Closed</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//O'Keefe+Ranch+Vernon+BC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-callout text-xs md:text-sm tracking-widest uppercase border border-gold/50 text-gold px-6 md:px-8 py-3.5 md:py-4 hover:bg-gold/10 transition-all duration-300 text-center w-full md:w-fit active:scale-[0.98]"
            >
              Get Directions
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
