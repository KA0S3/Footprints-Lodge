import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileAbout = () => {
  const isMobile = useIsMobile();

  const fullText = "For over two decades, Footprints Lodge has provided practical, reliable accommodation in Kempton Park—ideal for business travellers and short stopovers. Our location offers easy access to the airport, major routes, and a wide range of nearby restaurants and shopping centres.\n\nIn 2026, the lodge underwent a complete renovation. What started as a repair project became a full rebuild, transforming the space into a clean, modern, and efficient environment. The design is intentionally minimal—focused on comfort, functionality, and a straightforward stay without unnecessary extras.\n\nSustainability and maintenance are part of how we operate. The upgrade included the use of upcycled sleeper wood, reduced energy systems, and solar-supported infrastructure, lowering our energy footprint by 40%. A continuous maintenance approach ensures the property remains in good condition, including a structured 6-year mattress replacement cycle for consistent guest comfort.\n\nFootprints Lodge is well suited to on-the-move professionals and skilled tradespeople, as well as travellers needing a convenient, well-located place to stay. It's not about luxury—it's about a clean, efficient space that meets your needs and keeps things simple.";

  if (!isMobile) {
    // Redirect to desktop version if not mobile
    return <div>Redirecting to desktop version...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with tabs */}
      <motion.header 
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex items-center justify-between h-12">
          <Link to="/book" className="font-display text-lg font-semibold text-foreground tracking-tight">
            Footprints
          </Link>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="hero" size="sm" asChild className="shadow-lg hover:shadow-xl transition-all duration-200">
              <Link to="/book">Book Now</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="bg-muted p-1">
          <div className="container">
            <div className="grid grid-cols-5 gap-1">
              <Link
                to="/mobile-about"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all bg-background text-foreground shadow-sm text-xs"
              >
                About
              </Link>
              <Link
                to="/mobile-location"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
              >
                Location
              </Link>
              <Link
                to="/mobile-gallery"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
              >
                Gallery
              </Link>
              <Link
                to="/mobile-faq"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
              >
                FAQ
              </Link>
              <Link
                to="/mobile-contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="font-display text-3xl font-bold text-primary">About Footprints Lodge</h1>
          
          <div className="space-y-4 text-muted-foreground">
            {fullText.split('\n').map((paragraph, index) => (
              <motion.p 
                key={index} 
                className="leading-relaxed text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MobileAbout;
