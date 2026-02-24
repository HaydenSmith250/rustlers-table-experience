const Footer = () => {
  return (
    <footer className="bg-near-black border-t border-primary-foreground/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">RUSTLERS' TABLE</h3>
            <p className="font-body text-primary-foreground/50 text-sm">
              At the Historic O'Keefe Ranch<br />
              Vernon, British Columbia
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="/menu" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Menu</a>
            <a href="/events" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Events</a>
            <a href="/reservations" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Reservations</a>
            <a href="/careers" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Careers</a>
            <a href="/hours" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">Hours</a>
          </div>
          <div className="text-left md:text-right">
            <a href="tel:+12505422868" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors block mb-1">(250) 542-2868</a>
            <p className="font-body text-sm text-primary-foreground/30 mt-4">
              © {new Date().getFullYear()} Rustlers' Table. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
