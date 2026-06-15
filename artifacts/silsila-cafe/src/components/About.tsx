import { motion } from 'framer-motion';
import aboutImage from '@assets/73648_1781510198643.png';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] w-full">
                <img 
                  src={aboutImage} 
                  alt="Barista crafting latte art" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-accent rounded-tl-3xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-accent rounded-br-3xl z-0"></div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-2 flex items-center gap-4">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent font-semibold tracking-widest uppercase text-sm font-button">The Story of Silsila</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-8 leading-tight">
              A creative refuge in <br/>
              <span className="italic font-subheading font-normal text-secondary">Haldwani</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Silsila is more than a café. It is a space where conversations flow, creativity thrives, and every cup is crafted with passion. 
              </p>
              <p>
                From specialty coffee and artisanal desserts to wholesome brunches, we bring people together through exceptional flavors and warm hospitality. Our space is designed to feel like an extension of your living room—golden-hour amber light, exposed brick, and unhurried moments.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border/50 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading text-2xl text-primary font-bold mb-2">100%</h4>
                <p className="text-sm text-muted-foreground font-body">Specialty Grade Beans</p>
              </div>
              <div>
                <h4 className="font-heading text-2xl text-primary font-bold mb-2">Daily</h4>
                <p className="text-sm text-muted-foreground font-body">Fresh Artisanal Baking</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
