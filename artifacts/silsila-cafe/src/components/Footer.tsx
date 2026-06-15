import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          <div className="lg:col-span-1">
            <h3 className="font-heading text-3xl font-bold tracking-wider mb-4">SILSILA</h3>
            <p className="text-primary-foreground/70 font-body text-sm mb-6 max-w-xs">
              Equal parts specialty-coffee obsession and welcoming neighborhood warmth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors" data-testid="link-footer-ig">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors" data-testid="link-footer-fb">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors" data-testid="link-footer-tw">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              <li>+91 83778 93379</li>
              <li>hello@silsilacafe.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Hours</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              <li>Mon - Sun</li>
              <li>9:00 AM – 8:00 PM</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-body text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Silsila Café. Every Sip Tells a Story.
          </p>
          <div className="flex gap-6 text-sm font-body text-primary-foreground/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
