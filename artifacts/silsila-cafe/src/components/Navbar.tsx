import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => scrollTo(e, '#home')}
          className={`font-heading text-2xl font-bold tracking-wider ${
            isScrolled ? 'text-primary' : 'text-primary md:text-white'
          } hover:opacity-80 transition-opacity`}
          data-testid="link-logo"
        >
          SILSILA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`text-sm font-medium tracking-wide font-body hover:text-accent transition-colors ${
                    isScrolled ? 'text-foreground' : 'text-white/90 hover:text-white'
                  }`}
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            className="font-button tracking-wide rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-nav-reserve"
          >
            Reserve
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary'}`}
          onClick={() => setIsMobileMenuOpen(true)}
          data-testid="button-mobile-menu-open"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 bg-background z-50 flex flex-col pt-20 px-6"
          >
            <button
              className="absolute top-6 right-6 p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="button-mobile-menu-close"
            >
              <X size={24} />
            </button>
            <ul className="flex flex-col space-y-6 mt-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-2xl font-heading text-foreground block border-b border-border/50 pb-4"
                    data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button 
                className="w-full font-button tracking-wide rounded-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-mobile-nav-reserve"
              >
                Reserve a Table
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
