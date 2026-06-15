import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const reviews = [
  {
    text: "Great experience, lovely staff and the best tiramisu pastry in town.",
    author: "Priya S.",
    date: "2 weeks ago"
  },
  {
    text: "Really enjoyed the ambience, food, and cozy atmosphere. Perfect for golden hour.",
    author: "Rahul M.",
    date: "1 month ago"
  },
  {
    text: "A beautiful place to relax, work, and enjoy specialty coffee. The oat milk iced latte is perfection.",
    author: "Ananya D.",
    date: "3 months ago"
  }
];

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue.toFixed(1)}</span>;
}

export function Reviews() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div 
            className="w-full md:w-1/3 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">Loved by the community</h2>
            
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="flex text-accent">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={28} className={i <= 4 ? "fill-accent" : i === 5 ? "fill-accent/50" : ""} />
                ))}
              </div>
              <span className="text-5xl font-heading font-bold text-primary-foreground ml-2">
                <AnimatedNumber value={4.3} />
              </span>
            </div>
            <p className="text-primary-foreground/70 font-body">Based on 131+ Reviews</p>
          </motion.div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                className={`bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl ${idx === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              >
                <div className="flex text-accent mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-accent" />
                  ))}
                </div>
                <p className="font-body text-primary-foreground/90 leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-heading font-bold text-primary-foreground">{review.author}</span>
                  <span className="text-primary-foreground/50">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
