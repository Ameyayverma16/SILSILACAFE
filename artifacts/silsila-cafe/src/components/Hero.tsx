import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/images/hero.png';

export function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={heroImage} 
            alt="Silsila Cafe aesthetic latte art" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-accent text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-4 block drop-shadow-md">
            Every Sip Tells a Story
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-lg">
            Savor Every<br />Moment at Silsila
          </h1>
          <p className="font-subheading text-xl md:text-3xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md italic">
            Crafting exceptional coffee, delightful brunches, and unforgettable experiences in the heart of Haldwani.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="font-button tracking-wide rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg hover-elevate shadow-lg border border-accent-foreground/10"
            onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-hero-menu"
          >
            View Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="font-button tracking-wide rounded-full bg-transparent hover:bg-white/10 text-white border-white/50 hover:border-white px-8 py-6 text-lg backdrop-blur-sm"
            onClick={() => document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-hero-reserve"
          >
            Reserve a Table
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-white/80 hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        data-testid="button-hero-scroll"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Steam effect (pure CSS) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex justify-center items-center opacity-30 mix-blend-screen">
        <svg viewBox="0 0 100 100" className="w-64 h-64 text-white animate-steam" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40 80 Q30 50 40 20" />
          <path d="M50 80 Q60 50 50 20" />
          <path d="M60 80 Q50 50 60 20" />
        </svg>
      </div>
    </section>
  );
}
