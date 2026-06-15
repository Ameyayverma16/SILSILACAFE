import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import menuCoffeeImage from '@/assets/images/menu-coffee.png';
import menuSpecialImage from '@/assets/images/menu-special.png';
import menuBrunchImage from '@/assets/images/menu-brunch.png';

const menuData = [
  {
    category: "Classic Coffee",
    image: menuCoffeeImage,
    items: [
      { name: "Espresso", desc: "Double shot of our seasonal blend", price: "₹150" },
      { name: "Americano", desc: "Espresso over hot or iced water", price: "₹180" },
      { name: "Flat White", desc: "Espresso with micro-foamed milk", price: "₹220" },
      { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and foam", price: "₹220" },
      { name: "Latte", desc: "Espresso with steamed milk and light foam", price: "₹240" },
    ]
  },
  {
    category: "Special Drinks",
    image: menuSpecialImage,
    items: [
      { name: "Tiramisu Latte", desc: "Our signature dessert coffee", price: "₹280" },
      { name: "Matcha Latte", desc: "Ceremonial grade matcha with steamed milk", price: "₹260" },
      { name: "Oat Milk Iced Latte", desc: "Creamy oat milk over ice with double espresso", price: "₹260" },
      { name: "Hot Chocolate", desc: "Rich Belgian chocolate, melted down", price: "₹240" },
      { name: "Cold Brew", desc: "Steeped for 18 hours", price: "₹220" },
    ]
  },
  {
    category: "Brunch & Bakery",
    image: menuBrunchImage,
    items: [
      { name: "Avocado Toast", desc: "Sourdough, smashed avocado, seeds, microgreens", price: "₹320" },
      { name: "Truffle Mushroom Sandwich", desc: "Wild mushrooms, truffle oil, cheese", price: "₹290" },
      { name: "Tiramisu Pastry", desc: "The best in town, soaked in our espresso", price: "₹250" },
      { name: "Almond Croissant", desc: "Twice baked, filled with almond frangipane", price: "₹220" },
      { name: "Butter Croissant", desc: "Classic, flaky, French-style", price: "₹180" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-accent"></div>
            <span className="text-accent font-semibold tracking-widest uppercase text-sm font-button">Our Offerings</span>
            <div className="h-px w-8 bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Signature Menu</h2>
          <p className="text-muted-foreground font-body italic text-lg">
            Carefully curated, intentionally crafted.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {menuData.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <Card className="h-full bg-background border-border/40 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={section.image} 
                    alt={section.category} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-2xl font-heading font-bold text-white drop-shadow-md">{section.category}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <ul className="space-y-6">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="group/item">
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-heading font-semibold text-lg text-primary group-hover/item:text-accent transition-colors">{item.name}</h4>
                          <div className="flex-grow border-b border-dashed border-border/60 mx-4 relative top-[-4px]"></div>
                          <span className="font-mono text-sm font-medium text-primary">{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
