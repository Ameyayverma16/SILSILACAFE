import { motion } from 'framer-motion';
import { Coffee, Croissant, Milk, Laptop, HeartHandshake, Smile } from 'lucide-react';

const features = [
  {
    icon: <Coffee size={32} />,
    title: "Specialty Coffee",
    desc: "Ethically sourced, expertly roasted, and precisely extracted."
  },
  {
    icon: <Croissant size={32} />,
    title: "Fresh Bakery",
    desc: "Artisanal pastries and breads baked fresh every morning."
  },
  {
    icon: <Milk size={32} />,
    title: "Oat Milk Options",
    desc: "Premium dairy alternatives for the perfect creamy texture."
  },
  {
    icon: <Laptop size={32} />,
    title: "Work Friendly",
    desc: "Fast WiFi, ample outlets, and a space that inspires creativity."
  },
  {
    icon: <Smile size={32} />,
    title: "Cozy Ambience",
    desc: "Amber lighting and warm textures for a relaxing escape."
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Inclusive Space",
    desc: "A safe, welcoming, LGBTQ+ friendly neighborhood haven."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">We sweat the small stuff so you can just sit back and savor.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-card border border-border/50 p-8 rounded-2xl group hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 text-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
