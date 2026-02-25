import { Facebook, Instagram, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-near-black border-t border-primary-foreground/10">
      {/* Review Banner */}
      <div className="bg-gold py-3 md:py-3.5 text-center px-4">
        <a
          href="https://g.page/r/rustlerstable/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 md:gap-3 group"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 text-near-black fill-near-black" />
            ))}
          </div>
          <span className="font-callout text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase text-near-black font-semibold group-hover:underline">
            Enjoyed your visit? Leave us a review
          </span>
        </a>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 mb-2 md:mb-0">
            <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2 md:mb-3">
              RUSTLERS' TABLE
            </h3>
            <p className="font-body text-primary-foreground/50 text-xs md:text-sm leading-relaxed">
              Wood-fired steakhouse at the historic O'Keefe Ranch.
              <br />
              Vernon, British Columbia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-callout text-[10px] md:text-xs tracking-[0.2em] uppercase text-gold mb-3 md:mb-4">
              Explore
            </h4>
            <div className="flex flex-col gap-2 md:gap-2.5">
              <a href="/menu" className="font-body text-xs md:text-sm text-primary-foreground/50 hover:text-gold transition-colors">Menu</a>
              <a href="/events" className="font-body text-xs md:text-sm text-primary-foreground/50 hover:text-gold transition-colors">Events</a>
              <a href="/reservations" className="font-body text-xs md:text-sm text-primary-foreground/50 hover:text-gold transition-colors">Reservations</a>
              <a href="/careers" className="font-body text-xs md:text-sm text-primary-foreground/50 hover:text-gold transition-colors">Careers</a>
              <a href="/hours" className="font-body text-xs md:text-sm text-primary-foreground/50 hover:text-gold transition-colors">Hours</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-callout text-[10px] md:text-xs tracking-[0.2em] uppercase text-gold mb-3 md:mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 md:gap-2.5">
              <a href="tel:+12505422868" className="font-body text-xs md:text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                (250) 542-2868
              </a>
              <a
                href="https://maps.google.com/?q=O'Keefe+Ranch+Vernon+BC"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs md:text-sm text-primary-foreground/50 hover:text-gold transition-colors"
              >
                O'Keefe Ranch, Vernon BC
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-callout text-[10px] md:text-xs tracking-[0.2em] uppercase text-gold mb-3 md:mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://www.facebook.com/rustlerstable"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/15 flex items-center justify-center hover:border-gold hover:text-gold text-primary-foreground/50 transition-colors active:opacity-70"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/rustlerstable"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/15 flex items-center justify-center hover:border-gold hover:text-gold text-primary-foreground/50 transition-colors active:opacity-70"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://g.page/r/rustlerstable/review"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/15 flex items-center justify-center hover:border-gold hover:text-gold text-primary-foreground/50 transition-colors active:opacity-70"
                aria-label="Google Reviews"
              >
                <Star className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-3">
          <p className="font-body text-[10px] md:text-xs text-primary-foreground/25">
            © {new Date().getFullYear()} Rustlers' Table. All rights reserved.
          </p>
          <p className="font-body text-[10px] md:text-xs text-primary-foreground/25">
            At the Historic O'Keefe Ranch
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
