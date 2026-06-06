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
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-headline text-2xl tracking-tighter text-primary font-bold">
            ISRA <span className="text-foreground font-light">ETHNIC</span>
          </div>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">
            <a href="#catalog" className="hover:text-primary transition-colors">Catalog</a>
            <a href="#styling" className="hover:text-primary transition-colors">AI Stylist</a>
            <a href="#social" className="hover:text-primary transition-colors">Social</a>
            <a href="#location" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <Hero />

      <div className="container mx-auto px-6">
        {/* Catalog Section */}
        <section id="catalog" className="py-24 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl text-foreground">The Signature Series</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
            <p className="text-muted-foreground text-lg italic font-light">
              Handpicked pieces that blend heritage with modern sophistication.
            </p>
          </div>
          <CatalogGrid />
        </section>

        {/* AI Tools Section */}
        <section id="styling" className="py-24 bg-accent/10 -mx-6 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-headline text-4xl text-foreground">Intelligent Styling</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Let our AI consultant help you find the perfect drape and accessories for any occasion.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <DrapeTool />
              <PatternAnalysis />
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section id="social" className="py-24">
          <InstagramFeed />
        </section>

        {/* Boutique Locator Section */}
        <section id="location" className="py-24">
          <BoutiqueLocator />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="font-headline text-2xl text-primary font-bold tracking-widest">ISRA ETHNIC</div>
            <p className="text-muted-foreground leading-relaxed italic">
              "Elegance is the only beauty that never fades." <br />
              Premium ethnic wear boutique based in Tirur.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground">Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Our Heritage</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Catalog</a></li>
              <li><a href="#styling" className="hover:text-primary transition-colors">AI Advisor</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Store Locator</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Stay updated with our latest arrivals and style tips.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your Email" className="bg-accent/30 border border-border rounded-md px-4 py-2 flex-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground tracking-widest uppercase">
          © {new Date().getFullYear()} Isra Ethnic. Crafted for the elegant.
        </div>
      </footer>

      <ContactButtons />
    </main>
  );
}
