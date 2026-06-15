import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ctaBg from '@/assets/images/cta-bg.png';

export function ReservationCTA() {
  return (
    <section id="reservation" className="relative py-32 overflow-hidden flex items-center justify-center min-h-[500px]">
      {/* Background Image with Parallax feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80 z-10 backdrop-blur-sm" />
      </div>

      {/* Floating Coffee Beans SVG (Absolute) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <svg 
            key={i}
            className={`absolute animate-float-bean text-accent fill-current w-8 h-8`}
            style={{ 
              top: `${Math.random() * 80 + 10}%`, 
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`
            }}
            viewBox="0 0 24 24"
          >
            <path d="M16 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1.5 12.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm1.5-4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM8 4C3.6 4 0 7.6 0 12s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1.5 12.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm1.5-4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
          </svg>
        ))}
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-background/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-md">
            Reserve Your<br/>Cozy Corner
          </h2>
          <p className="text-white/80 font-body text-lg mb-10 italic">
            Whether for a quiet morning reading or a weekend brunch with friends, secure your spot.
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto font-button tracking-widest rounded-full bg-accent hover:bg-white hover:text-primary text-accent-foreground px-10 py-7 text-lg uppercase transition-all duration-300 shadow-xl"
            onClick={() => window.location.href = "tel:+918377893379"}
            data-testid="button-book-table"
          >
            Book a Table
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
