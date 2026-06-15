import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

import heartToHeart from '@assets/73646_(1)_1781510366143.jpg';
import grilledVeggie from '@assets/73651_1781510366143.jpg';
import mushroomMelt from '@assets/73650_1781510366144.jpg';
import pulledChicken from '@assets/73649_1781510366145.jpg';
import pestoSandwich from '@assets/73652_1781510366145.jpg';
import lifeAtSilsila from '@assets/73647_(1)_1781510411536.jpg';

const tiles = [
  { src: lifeAtSilsila,   alt: "Life at Silsila",         cls: "col-span-2 row-span-2" },
  { src: pulledChicken,   alt: "Pulled Chicken Sandwich",  cls: "col-span-1 row-span-1" },
  { src: pestoSandwich,   alt: "Pesto Sandwich",           cls: "col-span-1 row-span-1" },
  { src: heartToHeart,    alt: "Heart to Heart letter",    cls: "col-span-1 row-span-2" },
  { src: grilledVeggie,   alt: "Grilled Veggie Sandwich",  cls: "col-span-1 row-span-1" },
  { src: mushroomMelt,    alt: "Mushroom Cheese Melt",     cls: "col-span-1 row-span-1" },
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
            href="https://www.instagram.com/silsila.life"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-button font-medium tracking-wide hover:underline underline-offset-4"
            data-testid="link-instagram"
          >
            @silsila.life
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[480px] md:h-[560px]">
          {tiles.map((tile, idx) => (
            <motion.div
              key={idx}
              className={`relative group overflow-hidden rounded-xl ${tile.cls}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                <Instagram className="text-white w-7 h-7" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
