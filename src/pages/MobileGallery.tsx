import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";
import LazyImage from "../components/LazyImage.tsx";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileGallery = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return <div>Redirecting to desktop version...</div>;
  }

  // Complete gallery images from all available assets
  const galleryImages = [
    // 1Transit images
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg", alt: "Quickstay King Room" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25.jpeg", alt: "Transit Room View" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25 (1).jpeg", alt: "Transit Room Detail" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25 (2).jpeg", alt: "Transit Room Layout" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26.jpeg", alt: "Transit Room Interior" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26 (1).jpeg", alt: "Transit Room Features" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26 (2).jpeg", alt: "Transit Room Comfort" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27.jpeg", alt: "Transit Room Design" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (1).jpeg", alt: "Transit Room Style" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (2).jpeg", alt: "Transit Room View" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (3).jpeg", alt: "Transit Room Layout" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.28.jpeg", alt: "Transit Room Interior" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.28 (1).jpeg", alt: "Transit Room Features" },
    { src: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.29.jpeg", alt: "Transit Room Final" },
    
    // 2Studio images
    { src: "/assets/2Studio/GOOSE-74.JPG", alt: "Studio Room Interior" },
    { src: "/assets/2Studio/GOOSE-118.JPG", alt: "Studio Room Layout" },
    
    // 3Suite images
    { src: "/assets/3Suite/GOOSE-100.JPG", alt: "Suite Room Luxury" },
    { src: "/assets/3Suite/GOOSE-105.JPG", alt: "Suite Room Comfort" },
    
    // Common areas
    { src: "/assets/Cummunal/GOOSE-70.JPG", alt: "Common Area Lounge" },
    { src: "/assets/Cummunal/GOOSE-71.JPG", alt: "Common Area Seating" },
    { src: "/assets/Cummunal/GOOSE-81.JPG", alt: "Common Area Interior" },
    { src: "/assets/Cummunal/GOOSE-89.JPG", alt: "Common Area View" },
    { src: "/assets/Cummunal/GOOSE-90.JPG", alt: "Common Area Design" },
    { src: "/assets/Cummunal/GOOSE-92.JPG", alt: "Common Area Layout" },
    { src: "/assets/Cummunal/WhatsApp Image 2026-03-11 at 14.06.19.jpeg", alt: "Common Area Detail" },
    { src: "/assets/Cummunal/WhatsApp Image 2026-03-11 at 14.06.20 (3).jpeg", alt: "Common Area Feature" },
    
    // Room images
    { src: "/assets/rooms/GOOSE-106.JPG", alt: "Guest Room Comfort" },
    { src: "/assets/rooms/GOOSE-108.JPG", alt: "Guest Room Design" },
    { src: "/assets/rooms/GOOSE-110.JPG", alt: "Guest Room Layout" },
    { src: "/assets/rooms/GOOSE-73.JPG", alt: "Guest Room Interior" },
    { src: "/assets/rooms/GOOSE-77.JPG", alt: "Guest Room Style" },
    { src: "/assets/rooms/GOOSE-86.JPG", alt: "Guest Room View" },
    
    // Outside images
    { src: "/assets/outside/GOOSE-101.JPG", alt: "Lodge Exterior" },
    { src: "/assets/outside/GOOSE-120.JPG", alt: "Lodge Surroundings" },
    { src: "/assets/outside/GOOSE-5.JPG", alt: "Lodge Building" },
    { src: "/assets/outside/GOOSE-8.JPG", alt: "Lodge Property" },
    { src: "/assets/outside/GOOSE-85.JPG", alt: "Lodge Entrance" },
    { src: "/assets/outside/WhatsApp Image 2026-03-11 at 14.06.20 (1).jpeg", alt: "Lodge Exterior Detail" },
    { src: "/assets/outside/WhatsApp Image 2026-03-11 at 14.06.21.jpeg", alt: "Lodge Building View" },
    { src: "/assets/outside/WhatsApp Image 2026-03-11 at 14.06.28 (3).jpeg", alt: "Lodge Property View" }
  ];

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
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
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
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all bg-background text-foreground shadow-sm text-xs"
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
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Image size={24} className="text-primary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-primary">Gallery</h1>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LazyImage 
                  src={image.src} 
                  alt={image.alt} 
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" 
                  aspectRatio="video"
                  priority={index < 4}
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Button asChild className="px-6 py-3">
              <Link to="/book">Book Your Stay</Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default MobileGallery;
