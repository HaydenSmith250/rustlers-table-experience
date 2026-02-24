import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import QualitySection from "@/components/QualitySection";
import SocialProof from "@/components/SocialProof";
import { FadeUp } from "@/components/AnimatedSection";
import foodSteak from "@/assets/food-steak.jpg";
import foodRibs from "@/assets/food-ribs.jpg";
import foodShortrib from "@/assets/food-shortrib.jpg";
import foodBurger from "@/assets/food-burger.jpg";
import foodRibs2 from "@/assets/food-ribs2.jpg";

const sections = [
  { id: "starters", label: "Starters" },
  { id: "salads", label: "Salads" },
  { id: "handhelds", label: "Handhelds" },
  { id: "pastas", label: "Pastas" },
  { id: "entrees", label: "Entrées" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  note?: string;
}

const MenuSection = ({ id, title, subtitle, items, children }: {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  children?: React.ReactNode;
}) => (
  <section id={id} className="py-16 md:py-20 scroll-mt-24">
    <FadeUp>
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h2>
        {subtitle && <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">{subtitle}</p>}
      </div>
    </FadeUp>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
      {items.map((item, i) => (
        <FadeUp key={item.name} delay={i * 0.04}>
          <div className="flex justify-between items-start gap-4 py-4 border-b border-border group hover:border-gold/30 transition-colors">
            <div className="flex-1">
              <h3 className="font-display text-lg text-foreground group-hover:text-gold transition-colors">{item.name}</h3>
              <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
              {item.note && <p className="font-body text-xs text-gold/70 mt-1 italic">{item.note}</p>}
            </div>
            <span className="font-callout text-sm tracking-wider text-gold font-semibold whitespace-nowrap pt-1">{item.price}</span>
          </div>
        </FadeUp>
      ))}
    </div>
    {children}
  </section>
);

const starters: MenuItem[] = [
  { name: "Barn Burner Nachos", price: "$28", desc: "Tower high corn chips with two layers of tomatoes, peppers, banana peppers, black olives, onions, cheese, served with salsa & sour cream.", note: "Add Pulled Pork $7 · Add Spicy Beef $8" },
  { name: "Ranchito's", price: "$13", desc: "Smoked cheese, jalapeño peppers, green onion with red pepper, slow baked in a soft tortilla. Served with roasted red pepper dip or sour cream." },
  { name: "Fire Pit Poutine", price: "$15", desc: "Crispy potato wedges, smoked cheese curds served with a thick gravy.", note: "Add Pulled Pork $7 · Add Spicy Beef $8" },
  { name: "Outlaw Wedges", price: "$15", desc: "Seasoned wedges served with Thai chilli & sour cream.", note: "Add Spicy Beef $8" },
  { name: "Fire Pit Dip", price: "$15", desc: "Smoked cheddar cheese with bacon & jalapeños, served with corn chips.", note: "Add Shrimp $7" },
  { name: "Bruschetta", price: "$15", desc: "Tomatoes, garlic, red onions & bocconcini with balsamic drizzle on a fresh baguette." },
];

const salads: MenuItem[] = [
  { name: "O'Keefe's Cowboy Salad", price: "$25", desc: "Blackened chicken served on mixed greens with cheese, corn, peppers, bacon, black olives & tomatoes, served with a smoky BBQ dressing." },
  { name: "Caesar Salad", price: "$17", desc: "Romaine, bacon, asiago & fried capers, served with focaccia." },
  { name: "House Salad", price: "$12", desc: "Mixed greens, tomatoes, cucumbers, red onions, candied walnuts & carrots, with choice of dressing." },
  { name: "Beet Fennel Salad", price: "$18", desc: "Golden beets, cherry tomatoes, finely shaved fennel with goat cheese & walnuts, served with vanilla citrus vinaigrette." },
  { name: "Quinoa Salad", price: "$18", desc: "Avocado, fried chickpeas, cucumbers, red peppers & cherry tomatoes, served with a roasted shallot vinaigrette." },
];

const lunchHandhelds: MenuItem[] = [
  { name: "Steak Sandwich", price: "$33", desc: "8oz striploin served on a garlic focaccia, sautéed mushrooms, crispy shallots, served with choice of gravy or demi glaze." },
  { name: "Roast Beef Dip", price: "$25", desc: "Slow roasted prime rib cooked in jus, with caramelized onions & smoked gouda. Choice of jus or demi glaze." },
  { name: "BBQ Pulled Pork", price: "$19", desc: "Slow braised pork shoulder with spicy chipotle aioli & jalapeño coleslaw, with swiss cheese." },
  { name: "Chicken Caesar Wrap", price: "$22", desc: "Romaine, crispy chicken, asiago cheese, bacon, fried capers, with a creamy caesar dressing." },
  { name: "Veggie Wrap", price: "$19", desc: "Seasonal vegetables, goat cheese & roasted walnuts with roasted shallot vinaigrette." },
  { name: "Quinoa Wrap", price: "$20", desc: "Sundried tomato quinoa with goat cheese, avocado, and roasted red peppers with a garlic confit vinaigrette." },
];

const allDayHandhelds: MenuItem[] = [
  { name: "Rustlers Burger", price: "$27", desc: "6oz thick pure chuck blackened, with smoked cheddar cheese, smoked paprika and BBQ aioli, lettuce, tomato, red onion, dill pickle, crispy shallots & bacon." },
  { name: "Hangman's Heat", price: "$29", desc: "6oz burger dipped in-house buffalo sauce, smoked cheddar cheese, topped with sriracha roasted red pepper aioli, banana pepper, red onion, bacon, lettuce, tomato & sliced dill pickle." },
  { name: "RT's Chicken Club", price: "$25", desc: "Crispy chicken breast with bacon, lettuce, tomato, and house aioli on a toasted bun." },
  { name: "Saddle Burger", price: "$25", desc: "Classic 6oz chuck burger with all the fixings and your choice of cheese." },
];

const pastas: MenuItem[] = [
  { name: "Louisiana Linguini", price: "$35", desc: "½ lb prawns seared in cajun, shallots, garlic, jalapeños finished in a white wine cream sauce served over linguini with focaccia." },
  { name: "Jalapeño Mac & Cheese", price: "$25", desc: "Macaroni with jalapeños, bacon, smoked cheddar, and smoked gouda in a creamy white wine sauce, finished with asiago cheese." },
  { name: "Pasta Carbonara", price: "$33", desc: "Linguini pasta, bacon, white wine, red onions, garlic, shallots, a splash of heavy cream, finished with one golden egg yolk, served with focaccia." },
  { name: "Salmon Linguini", price: "$35", desc: "Seared salmon fillet with garlic, shallots, finished in a mustard dill white wine cream sauce, served with focaccia." },
];

const entrees: MenuItem[] = [
  { name: "10oz Ribeye", price: "$44", desc: "Certified Angus Beef® ribeye with daily mashed potatoes & seasonal vegetables. Choice of compound butter, peppercorn, or béarnaise sauce.", note: "Add Garlic Shrimp $12 · Cajun Shrimp $12 · Mushrooms $5" },
  { name: "New York Striploin", price: "$38", desc: "8oz Certified Angus Beef® striploin, daily mashed potatoes & seasonal vegetables. Choice of compound butter, peppercorn, or béarnaise sauce." },
  { name: "Beef Short Ribs", price: "$38", desc: "2 large slow braised short ribs with a wild mushroom demi glaze, daily mashed potatoes & seasonal vegetables." },
  { name: "Atlantic Salmon", price: "$32", desc: "6oz maple bourbon glazed salmon, sundried tomatoes and roasted garlic quinoa & seasonal vegetables." },
  { name: "Chicken Supreme", price: "$27", desc: "8oz seared chicken breast with a cranberry demi glaze, daily mashed potatoes & seasonal vegetables." },
  { name: "Buttermilk Chicken", price: "$25", desc: "Crispy buttermilk fried chicken with daily mashed potatoes & seasonal vegetables." },
  { name: "Pork Ribs", price: "$29", desc: "1lb slow braised pork ribs in tomato and BBQ sauce, finished with our in-house Rustlers sauce. Served with daily mashed potatoes, honey bourbon beans, seasonal vegetables, and a corn muffin." },
];

const desserts: MenuItem[] = [
  { name: "Baileys Cheesecake", price: "$14", desc: "Rich and creamy cheesecake infused with Baileys Irish Cream, on a chocolate cookie crust with a drizzle of caramel." },
  { name: "Carrot Cake", price: "$12", desc: "Moist, spiced carrot cake layered with velvety cream cheese frosting, topped with candied walnuts." },
];

const Menu = () => {
  const [activeSection, setActiveSection] = useState("starters");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foodSteak} alt="Rustlers' Table menu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-near-black/80 via-near-black/70 to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-callout text-gold tracking-[0.3em] uppercase text-sm mb-3">Rustlers' Table</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4">Our Menu</h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Bold flavours, quality ingredients, and dishes crafted with care — from starters to steaks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky section nav */}
      <nav className="sticky top-16 z-40 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 py-3 min-w-max justify-center">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`font-callout text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300 whitespace-nowrap ${
                  activeSection === id
                    ? "text-gold border-b-2 border-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu content */}
      <div className="max-w-7xl mx-auto px-6">
        <MenuSection id="starters" title="Starters" subtitle="Available All Day" items={starters}>
          <FadeUp delay={0.3} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <img src={foodRibs2} alt="Appetizer presentation" className="w-full aspect-[4/3] object-cover opacity-80 hover:opacity-100 transition-opacity" />
              <img src={foodBurger} alt="Food presentation" className="w-full aspect-[4/3] object-cover opacity-80 hover:opacity-100 transition-opacity hidden md:block" />
              <img src={foodShortrib} alt="Short rib appetizer" className="w-full aspect-[4/3] object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-8 text-center">
            <p className="font-body text-sm text-muted-foreground">Daily Soup — Bowl $10 · Cup $6</p>
          </FadeUp>
        </MenuSection>

        <div className="border-t border-border" />

        <MenuSection id="salads" title="Salads" subtitle="Available All Day" items={salads}>
          <FadeUp delay={0.2} className="mt-8 max-w-3xl mx-auto">
            <div className="bg-card border border-border p-6 text-center">
              <p className="font-callout text-xs tracking-[0.2em] uppercase text-gold mb-2">Salad Add-Ons</p>
              <p className="font-body text-sm text-muted-foreground">
                Chicken Breast $9 · Prawns $12 · 8oz Striploin $18 · 6oz Salmon $15
              </p>
              <p className="font-body text-xs text-muted-foreground mt-2">
                Dressings: Ranch · Cowboy · Garlic Confit · Mustard Dill · Roasted Shallot · Vanilla Citrus
              </p>
            </div>
          </FadeUp>
        </MenuSection>

        <div className="border-t border-border" />

        <MenuSection id="handhelds" title="Handhelds" subtitle="Burgers & Sandwiches" items={[...allDayHandhelds, ...lunchHandhelds]}>
          <FadeUp delay={0.2} className="mt-8 max-w-3xl mx-auto">
            <div className="bg-card border border-border p-6 text-center">
              <p className="font-callout text-xs tracking-[0.2em] uppercase text-gold mb-2">Served With Your Choice Of</p>
              <p className="font-body text-sm text-muted-foreground">
                House Salad · Honey Bourbon Beans · Wedges · Coleslaw
              </p>
              <p className="font-body text-xs text-muted-foreground mt-2">
                Upgrades: Caesar Salad $6 · Poutine $6 · Cowboy Salad $6 · Mac & Cheese $7
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Add-Ons: Cheese $3.50 · Bacon $3.50 · Caramelized Onions $3.50 · Mushrooms $3.50 · GF Bun $2
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.3} className="mt-10">
            <img src={foodBurger} alt="Rustlers Burger" className="w-full max-w-2xl mx-auto aspect-[16/9] object-cover" />
          </FadeUp>
        </MenuSection>

        <div className="border-t border-border" />

        <MenuSection id="pastas" title="Pastas" subtitle="Available All Day" items={pastas}>
          <FadeUp delay={0.2} className="mt-8 max-w-3xl mx-auto">
            <div className="bg-card border border-border p-6 text-center">
              <p className="font-callout text-xs tracking-[0.2em] uppercase text-gold mb-2">Pasta Add-Ons</p>
              <p className="font-body text-sm text-muted-foreground">
                Pulled Pork $7 · Short Rib $17 · Chicken $9 · Prawns $12 · 8oz Striploin $18 · 6oz Salmon $15
              </p>
            </div>
          </FadeUp>
        </MenuSection>

        <div className="border-t border-border" />

        <MenuSection id="entrees" title="After 5 Entrées" subtitle="Available After 5 PM" items={entrees}>
          <FadeUp delay={0.3} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <img src={foodRibs} alt="Smoked ribs" className="w-full aspect-[4/3] object-cover opacity-80 hover:opacity-100 transition-opacity" />
              <img src={foodShortrib} alt="Braised short rib" className="w-full aspect-[4/3] object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-8 text-center">
            <p className="font-body text-xs text-muted-foreground italic">
              Substitute potato or quinoa with rice pilaf · 18% auto-gratuity added to groups of 8+
            </p>
          </FadeUp>
        </MenuSection>

        <div className="border-t border-border" />

        <MenuSection id="desserts" title="Desserts" subtitle="Sweet Endings" items={desserts} />

        <div className="border-t border-border" />

        {/* Drinks section */}
        <section id="drinks" className="py-16 md:py-20 scroll-mt-24">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Drinks</h2>
              <p className="font-callout text-sm tracking-[0.2em] uppercase text-gold">Beer · Wine · Spirits · Cocktails</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Beer */}
            <FadeUp delay={0.05}>
              <div className="bg-card border border-border p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">Beer</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Guinness <span className="text-muted-foreground">(440ml)</span></span><span className="font-callout text-sm text-gold">$9.00</span></div>
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Craft <span className="text-muted-foreground">(355ml)</span></span><span className="font-callout text-sm text-gold">$8.50</span></div>
                  <p className="font-body text-xs text-muted-foreground pl-2">Trash Panda IPA · Filthy Dirty IPA</p>
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Imported <span className="text-muted-foreground">(355ml)</span></span><span className="font-callout text-sm text-gold">$8.50</span></div>
                  <p className="font-body text-xs text-muted-foreground pl-2">Heineken · Corona</p>
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Domestic <span className="text-muted-foreground">(355ml)</span></span><span className="font-callout text-sm text-gold">$7.50</span></div>
                  <p className="font-body text-xs text-muted-foreground pl-2">Budweiser · Coors Banquet · 1516 Pale Ale · Blue Moon · Coors Light</p>
                </div>
              </div>
            </FadeUp>

            {/* Wine */}
            <FadeUp delay={0.1}>
              <div className="bg-card border border-border p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">Wine</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">6oz</span><span className="font-callout text-sm text-gold">$7.50</span></div>
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">9oz</span><span className="font-callout text-sm text-gold">$10.00</span></div>
                </div>
                <div className="space-y-2 pt-3 border-t border-border">
                  <p className="font-callout text-xs tracking-wider uppercase text-gold">White</p>
                  <p className="font-body text-sm text-muted-foreground">Jackson Triggs Sauvignon Blanc · Pinot Grigio</p>
                  <p className="font-callout text-xs tracking-wider uppercase text-gold mt-3">Red</p>
                  <p className="font-body text-sm text-muted-foreground">Jackson Triggs Cabernet Sauvignon · Merlot</p>
                </div>
              </div>
            </FadeUp>

            {/* Ciders */}
            <FadeUp delay={0.15}>
              <div className="bg-card border border-border p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">Ciders & Growers</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Summer Peach <span className="text-muted-foreground">(355ml)</span></span><span className="font-callout text-sm text-gold">$8.50</span></div>
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Bartlett Pear <span className="text-muted-foreground">(355ml)</span></span><span className="font-callout text-sm text-gold">$8.50</span></div>
                </div>
              </div>
            </FadeUp>

            {/* Spirits */}
            <FadeUp delay={0.2}>
              <div className="bg-card border border-border p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">Spirits</h3>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">1oz</span><span className="font-callout text-sm text-gold">$8.00</span></div>
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">2oz</span><span className="font-callout text-sm text-gold">$10.00</span></div>
                </div>
                <p className="font-body text-xs text-muted-foreground pt-3 border-t border-border">
                  Absolut Vodka · Beefeater Gin · Bacardi White Rum · Jose Cuervo Tequila · 40 Creek Rye · Spiced Rum
                </p>
              </div>
            </FadeUp>

            {/* Cocktails & Coffees */}
            <FadeUp delay={0.25}>
              <div className="bg-card border border-border p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">Cocktails & Coffees</h3>
                <div className="flex justify-between mb-3">
                  <span className="font-body text-sm text-foreground">2oz</span>
                  <span className="font-callout text-sm text-gold">$12.75</span>
                </div>
                <p className="font-body text-xs text-muted-foreground pt-3 border-t border-border">
                  Irish Coffee · Mimosa · Baileys Coffee · Blueberry Tea
                </p>
              </div>
            </FadeUp>

            {/* Non-Alcoholic */}
            <FadeUp delay={0.3}>
              <div className="bg-card border border-border p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">Non-Alcoholic</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Coffee / Tea / Hot Chocolate / Milk</span><span className="font-callout text-sm text-gold">$3.50</span></div>
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Juice (Orange, Cranberry, Apple)</span><span className="font-callout text-sm text-gold">$3.50</span></div>
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Pop & Iced Tea</span><span className="font-callout text-sm text-gold">$3.00</span></div>
                  <div className="flex justify-between"><span className="font-body text-sm text-foreground">Non-Alcoholic Beer</span><span className="font-callout text-sm text-gold">$7.00</span></div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>

      <QualitySection />
      <SocialProof />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Menu;
