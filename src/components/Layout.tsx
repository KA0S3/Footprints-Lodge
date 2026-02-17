import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks = [
  { to: "/rooms", label: "Rooms" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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

          <nav className="hidden md:flex items-center gap-1">
            {mainLinks.map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive(link.to) 
                      ? "text-primary bg-primary/10 shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* More dropdown */}
            <motion.div 
              ref={moreRef} 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                onMouseEnter={() => setMoreOpen(true)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  moreLinks.some((l) => isActive(l.to)) || isActive("/more")
                    ? "text-primary bg-primary/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Link to="/more" onClick={(e) => { if (moreOpen) e.preventDefault(); }}>More</Link> 
                <motion.div
                  animate={{ rotate: moreOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.div>
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setMoreOpen(false)}
                    className="absolute top-full right-0 mt-1 w-44 bg-card border rounded-lg shadow-lg py-1 z-50"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMoreOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(link.to)
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </nav>

          <motion.div className="hidden md:flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="hero" size="sm" asChild className="shadow-lg hover:shadow-xl transition-all duration-200">
              <Link to="/book">Book Now</Link>
            </Button>
          </motion.div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t bg-card overflow-hidden"
            >
              <nav className="container flex flex-col gap-1 py-3">
                {allLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(link.to) ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-3 pt-2">
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <Link to="/book" onClick={() => setMobileOpen(false)}>Book Now</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="flex-1">{children}</main>

      {/* Compact footer */}
      <footer className="bg-foreground text-background">
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
