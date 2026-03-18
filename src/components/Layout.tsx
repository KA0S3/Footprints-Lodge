import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const mainLinks = [
  { to: "/book", label: "Book" },
];

const moreLinks = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/location", label: "Location" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const allLinks = [{ to: "/", label: "Home" }, ...mainLinks, ...moreLinks];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  // Pages where the Book Now button should be hidden
  const hideBookButton = ['/book', '/rooms', '/studio', '/suite', '/family', '/another-stay'].includes(location.pathname);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (to: string) => location.pathname === to;

  return (
    <div className="min-h-screen flex flex-col">
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
            : 'bg-background/95 backdrop-blur-md border-b border-border/20'
        }`}
        initial={{ y: 0 }}
        animate={{ y: scrolled ? 0 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex items-center justify-between h-14">
          <Link to="/" className="font-display text-lg font-semibold text-foreground tracking-tight">
            Footprints
          </Link>

          <motion.div className="hidden md:flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="hero" size="sm" asChild className="shadow-lg hover:shadow-xl transition-all duration-200">
              <Link to={hideBookButton ? "/more" : "/book"}>
                {hideBookButton ? "More" : "Book Now"}
              </Link>
            </Button>
          </motion.div>

          {/* Mobile CTA Button - replaces burger menu */}
          <div className="md:hidden">
            <Link 
              to={hideBookButton ? "/more" : "/book"}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 h-9 px-3"
            >
              {hideBookButton ? "More" : "Book Now"}
            </Link>
          </div>
        </div>
      </motion.header>

      <main className="flex-1 overflow-y-auto scrollbar-hide">{children}</main>

      {/* Compact footer */}
      <footer className="bg-foreground text-background mt-[5px]">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="font-display text-sm">Footprints Lodge</span>
            <div className="flex items-center gap-4 text-xs text-background/50">
              <a href="tel:+27729859725" className="hover:text-background transition-colors">+27 72 985 9725</a>
              <a href="mailto:hello@footprintslodge.co.za" className="hover:text-background transition-colors">hello@footprintslodge.co.za</a>
              <span>Kempton Park, Gauteng</span>
            </div>
            <span className="text-xs text-background/30">&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
