import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

import menuCoffee from '@/assets/images/menu-coffee.png';
import menuBrunch from '@/assets/images/menu-brunch.png';
import gallery2 from '@/assets/images/gallery-2.png';
import gallery3 from '@/assets/images/gallery-3.png';
import gallery4 from '@/assets/images/gallery-4.png';
import menuSpecial from '@/assets/images/menu-special.png';

const feedImages = [
  menuCoffee,
  gallery4,
  gallery3,
  menuBrunch,
  gallery2,
  menuSpecial
];

export function SocialFeed() {
  return (
    <section className="py-24 bg-card border-t border-border/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
            <Instagram size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Follow Our Journey</h2>
          <a 
            href="#" 
            className="text-accent font-button font-medium tracking-wide hover:underline underline-offset-4"
            data-testid="link-instagram"
          >
            @silsila.life
          </a>
        </div>
      </div>

      <div className="flex w-[200%] md:w-full max-w-full overflow-hidden relative">
        {/* Infinite scrolling effect could go here, but using a static grid for simplicity & performance */}
        <div className="grid grid-cols-3 md:grid-cols-6 w-full gap-0">
          {feedImages.map((src, idx) => (
            <motion.div 
              key={idx}
              className="aspect-square relative group overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <img 
                src={src} 
                alt={`Instagram feed image ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
