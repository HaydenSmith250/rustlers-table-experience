import { Facebook, Instagram, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-near-black border-t border-primary-foreground/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              RUSTLERS' TABLE
            </h3>
            <p className="font-body text-primary-foreground/50 text-sm leading-relaxed">
              Wood-fired steakhouse at the historic O'Keefe Ranch.
              <br />
              Vernon, British Columbia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-callout text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Explore
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="/menu" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Menu</a>
              <a href="/events" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Events</a>
              <a href="/reservations" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Reservations</a>
              <a href="/careers" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Careers</a>
              <a href="/hours" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Hours</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-callout text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+12505422868"
                className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors"
              >
                (250) 542-2868
              </a>
              <a
                href="https://maps.google.com/?q=O'Keefe+Ranch+Vernon+BC"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors"
              >
                O'Keefe Ranch, Vernon BC
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-callout text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/rustlerstable"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/15 flex items-center justify-center hover:border-gold hover:text-gold text-primary-foreground/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/rustlerstable"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/15 flex items-center justify-center hover:border-gold hover:text-gold text-primary-foreground/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://g.page/r/rustlerstable/review"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/15 flex items-center justify-center hover:border-gold hover:text-gold text-primary-foreground/50 transition-colors"
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
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/25">
            © {new Date().getFullYear()} Rustlers' Table. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/25">
            At the Historic O'Keefe Ranch
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
