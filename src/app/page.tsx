
import { Hero } from "@/components/Hero";
import { CatalogGrid } from "@/components/CatalogGrid";
import { DrapeTool } from "@/components/DrapeTool";
import { PatternAnalysis } from "@/components/PatternAnalysis";
import { InstagramFeed } from "@/components/InstagramFeed";
import { BoutiqueLocator } from "@/components/BoutiqueLocator";
import { ContactButtons } from "@/components/ContactButtons";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header / Logo Section */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-headline text-3xl tracking-tighter text-primary font-bold">
            ISRA <span className="text-foreground font-light">ETHNIC</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-bold text-muted-foreground">
            <a href="#catalog" className="hover:text-primary transition-colors">Catalog</a>
            <a href="#styling" className="hover:text-primary transition-colors">AI Styling</a>
            <a href="#social" className="hover:text-primary transition-colors">Social</a>
            <a href="#location" className="hover:text-primary transition-colors">Find Us</a>
          </div>
        </div>
      </nav>

      <Hero />

      <div className="container mx-auto px-6">
        {/* Catalog Section */}
        <section id="catalog" className="py-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-headline text-5xl text-primary">The Luxury Collection</h2>
            <p className="text-muted-foreground text-lg">Handpicked masterpieces that tell a story of heritage and craftsmanship.</p>
          </div>
          <CatalogGrid />
        </section>

        <Separator className="bg-primary/10" />

        {/* AI Tools Section */}
        <section id="styling" className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
             <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30">
                <DrapeTool />
             </div>
          </div>
          <div className="space-y-6">
             <div className="p-1 rounded-2xl bg-gradient-to-br from-secondary/30 to-primary/30">
                <PatternAnalysis />
             </div>
          </div>
        </section>

        <Separator className="bg-primary/10" />

        {/* Instagram Feed Section */}
        <section id="social" className="py-24">
          <InstagramFeed />
        </section>

        <Separator className="bg-primary/10" />

        {/* Boutique Locator Section */}
        <section id="location" className="py-24">
          <BoutiqueLocator />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/10 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="font-headline text-3xl text-primary font-bold">ISRA ETHNIC</div>
            <p className="text-muted-foreground leading-relaxed">
              Curating elegance since 2020. Your premier destination for the most exquisite ethnic wear in Tirur.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#styling" className="hover:text-primary transition-colors">AI Stylist</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Store Locator</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-widest text-primary">Newsletter</h4>
            <p className="text-muted-foreground">Subscribe to receive exclusive offers and styling tips.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your Email" className="bg-background border border-primary/20 rounded-lg px-4 flex-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold uppercase">Join</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-primary/5 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Isra Ethnic. Designed for sophistication.
        </div>
      </footer>

      <ContactButtons />
    </main>
  );
}
