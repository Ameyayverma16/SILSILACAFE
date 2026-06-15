import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import storefront from '@assets/Screenshot_2026-06-15_130020_1781509931878.png';
import tiramisuLatte from '@assets/Screenshot_2026-06-15_130035_1781509931878.png';
import dessertOfMonth from '@assets/73644_1781509947295.jpg';
import freshFlowers from '@assets/73645_1781509947295.jpg';
import coffeeAndFriends from '@assets/73643_1781509947296.jpg';
import linens from '@assets/73642_1781509947297.jpg';
import cafeInterior from '@assets/73641_1781509947298.jpg';

const images = [
  { src: storefront, alt: "Silsila Café storefront", className: "col-span-1 md:col-span-2 row-span-2" },
  { src: tiramisuLatte, alt: "Tiramisu latte", className: "col-span-1 row-span-2" },
  { src: dessertOfMonth, alt: "Star dessert of the month", className: "col-span-1 row-span-1" },
  { src: freshFlowers, alt: "Fresh flowers at the counter", className: "col-span-1 row-span-1" },
  { src: coffeeAndFriends, alt: "Coffee and friends", className: "col-span-1 md:col-span-2 row-span-1" },
  { src: linens, alt: "Curated café interior with linens", className: "col-span-1 row-span-2" },
  { src: cafeInterior, alt: "Busy café day", className: "col-span-1 md:col-span-1 row-span-1" },
];

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">The Silsila Experience</h2>
            <p className="text-muted-foreground font-body max-w-lg">Glimpses of our space, our craft, and the moments shared within these walls.</p>
          </div>
          <div className="hidden md:block">
            <span className="text-accent tracking-[0.2em] uppercase text-sm font-semibold">@silsila.life</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedImg(img.src)}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <span className="text-white font-button tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 translate-y-4 group-hover:translate-y-0">VIEW</span>
              </div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              src={selectedImg} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain rounded-md"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
