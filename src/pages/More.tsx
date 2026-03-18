import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, HelpCircle, MessageSquare, Info, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProgressiveImage from "../components/ProgressiveImage.tsx";
import { useIsMobile } from "@/hooks/use-mobile";

const More = () => {
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const storyVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  // Mobile Tab Content Components
  const GalleryContent = () => (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-primary">Gallery</h2>
      <div className="grid grid-cols-4 gap-1">
        {/* 1Transit folder images - sample with ProgressiveImage */}
        <ProgressiveImage 
          src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg" 
          alt="Transit area" 
          className="rounded" 
          aspectRatio="square"
        />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25 (1).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25 (2).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26 (1).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26 (2).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (1).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (2).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (3).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.28 (1).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.28.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.29.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
        
        {/* Cummunal folder images */}
        <img src="/assets/Cummunal/GOOSE-70.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/Cummunal/GOOSE-71.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/Cummunal/GOOSE-81.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/Cummunal/GOOSE-89.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/Cummunal/GOOSE-90.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/Cummunal/GOOSE-92.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/Cummunal/WhatsApp Image 2026-03-11 at 14.06.19.jpeg" alt="Common area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/Cummunal/WhatsApp Image 2026-03-11 at 14.06.20 (3).jpeg" alt="Common area" className="w-full h-8 object-cover rounded" />
        <img src="/assets/Cummunal/image (2).jpeg" alt="Common area" className="w-full h-8 object-cover rounded" />
        
        {/* Lodge Interior images from various folders */}
        <img src="/assets/3Suite/GOOSE-100.JPG" alt="Lodge interior" className="w-full h-8 object-cover rounded" />
        <img src="/assets/3Suite/GOOSE-105.JPG" alt="Lodge room" className="w-full h-8 object-cover rounded" />
        <img src="/assets/rooms/GOOSE-106.JPG" alt="Lodge accommodation" className="w-full h-8 object-cover rounded" />
        <img src="/assets/rooms/GOOSE-108.JPG" alt="Lodge facility" className="w-full h-8 object-cover rounded" />
        <img src="/assets/rooms/GOOSE-110.JPG" alt="Lodge view" className="w-full h-8 object-cover rounded" />
        <img src="/assets/2Studio/GOOSE-118.JPG" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
        <img src="/assets/rooms/GOOSE-73.JPG" alt="Lodge interior" className="w-full h-8 object-cover rounded" />
        <img src="/assets/2Studio/GOOSE-74.JPG" alt="Lodge room" className="w-full h-8 object-cover rounded" />
        <img src="/assets/rooms/GOOSE-77.JPG" alt="Lodge facility" className="w-full h-8 object-cover rounded" />
        <img src="/assets/rooms/GOOSE-86.JPG" alt="Lodge view" className="w-full h-8 object-cover rounded" />
        
        {/* Outside folder images */}
        <img src="/assets/outside/GOOSE-101.JPG" alt="Lodge surroundings" className="w-full h-8 object-cover rounded" />
        <img src="/assets/outside/GOOSE-120.JPG" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
        <img src="/assets/outside/GOOSE-5.JPG" alt="Lodge surroundings" className="w-full h-8 object-cover rounded" />
        <img src="/assets/outside/GOOSE-8.JPG" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
        <img src="/assets/outside/GOOSE-85.JPG" alt="Lodge surroundings" className="w-full h-8 object-cover rounded" />
        <img src="/assets/outside/WhatsApp Image 2026-03-11 at 14.06.20 (1).jpeg" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
        <img src="/assets/outside/WhatsApp Image 2026-03-11 at 14.06.21.jpeg" alt="Lodge surroundings" className="w-full h-8 object-cover rounded" />
        <img src="/assets/outside/WhatsApp Image 2026-03-11 at 14.06.28 (3).jpeg" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
      </div>
      <div className="pt-2 border-t border-border/30">
        <p className="text-xs text-muted-foreground text-center">Click to view full gallery</p>
      </div>
    </div>
  );

  const AboutContent = () => (
    <div className="space-y-4 p-4">
      <h2 className="font-display text-xl font-bold text-primary">Our Story</h2>
      <div className="space-y-4 text-muted-foreground">
        <h3 className="font-display text-lg font-semibold text-foreground leading-relaxed">
          20 Years of Heritage. Reimagined.
        </h3>
        
        <p className="leading-relaxed text-sm">
          For two decades, Footprints Lodge has been a sanctuary in the heart of Kempton Park. But we believe that true hospitality requires moving with the times. In 2026, we undertook a radical transformation—moving away from our rustic roots toward a sleek, tech-forward aesthetic.
        </p>
        
        <p className="leading-relaxed text-sm">
          What began as a necessary repair to a 50-year-old pipe became a complete architectural rebirth. We stripped the lodge to its original shell to build something smarter and more sustainable. We've replaced bulky, dated interiors with minimalist steel and "upcycled" sleeper wood salvaged right here from the property.
        </p>
        
        <p className="leading-relaxed text-sm">
          Our evolution isn't just aesthetic; it's mechanical. We've implemented a "Continuous Maintenance" protocol—including a 6-year mattress replacement cycle—and cut our energy footprint by 40% through solar tech and recycled heat systems. We've traded the old for the optimized, ensuring that while our look is new, our commitment to the community remains as solid as the stone foundations we were built on.
        </p>
      </div>
    </div>
  );

  const LocationContent = () => (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <MapPin size={20} className="text-primary" />
        </div>
        <h2 className="font-display text-xl font-semibold text-primary">Location</h2>
      </div>
      
      {/* Map Section */}
      <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-border/30">
        <img
          src="/assets/MAP.png"
          alt="Footprints Lodge Location Map"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none" />
      </div>
      
      {/* Nearby Landmarks */}
      <div className="space-y-2">
        <p className="font-semibold text-sm text-foreground">Nearby Landmarks</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex justify-between items-center">
            <span>OR Tambo International Airport</span>
            <span className="text-primary font-medium">10 mins</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Rhodesfield Gautrain Station</span>
            <span className="text-primary font-medium">8 mins</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Emperors Palace Casino</span>
            <span className="text-primary font-medium">12 mins</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Local Shopping Hubs</span>
            <span className="text-primary font-medium">5 mins</span>
          </div>
        </div>
      </div>
    </div>
  );

  const FAQContent = () => (
    <div className="space-y-4 p-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <HelpCircle size={24} className="text-primary" />
      </div>
      <h2 className="font-display text-xl font-semibold text-primary">FAQ</h2>
      <p className="text-sm text-muted-foreground">
        Common questions answered
      </p>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p className="leading-relaxed">• Check-in & check-out times</p>
        <p className="leading-relaxed">• Payment methods</p>
        <p className="leading-relaxed">• Cancellation policy</p>
        <p className="leading-relaxed">• Amenities included</p>
        <p className="leading-relaxed">• Eco-Friendly Initiatives</p>
        <p className="text-xs text-muted-foreground pl-4">Solar & Water recycling systems</p>
        <p className="leading-relaxed">• Proximity to Hubs</p>
        <p className="text-xs text-muted-foreground pl-4">Gautrain & Airport access</p>
        <p className="leading-relaxed">• Check-in Tech</p>
        <p className="text-xs text-muted-foreground pl-4">Keyless entry details</p>
      </div>
    </div>
  );

  const ContactContent = () => (
    <div className="space-y-4 p-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <MessageSquare size={24} className="text-primary" />
      </div>
      <h2 className="font-display text-xl font-semibold text-primary">Contact</h2>
      <p className="text-sm text-muted-foreground">
        Get in touch with our team
      </p>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p className="leading-relaxed">• 24/7 support available</p>
        <p className="leading-relaxed">• Quick response guarantee</p>
        <p className="leading-relaxed">• Multiple contact methods</p>
        <p className="leading-relaxed">• Emergency assistance</p>
        <div className="pt-2 mt-2 border-t border-border/30">
          <p className="font-semibold text-foreground mb-2">Direct Concierge</p>
          <p className="leading-relaxed">• WhatsApp Support</p>
          <p className="text-xs text-muted-foreground pl-4">+27 72 985 9725</p>
          <p className="leading-relaxed mt-2">• Emergency After-Hours</p>
          <p className="text-xs text-muted-foreground pl-4">+27 72 985 9725</p>
          <p className="leading-relaxed mt-2">• Physical Address</p>
          <p className="text-xs text-muted-foreground pl-4">Footprints Lodge</p>
          <p className="text-xs text-muted-foreground pl-4">Kempton Park, Gauteng</p>
          <p className="text-xs text-muted-foreground pl-4">South Africa</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex items-center justify-between h-12">
          <Link to="/" className="font-display text-lg font-semibold text-foreground tracking-tight">
            Footprints
          </Link>

          <motion.div className="hidden md:flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="hero" size="sm" asChild className="shadow-lg hover:shadow-xl transition-all duration-200">
              <Link to="/book">Book Now</Link>
            </Button>
          </motion.div>
          {isMobile && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="hero" size="sm" asChild className="shadow-lg hover:shadow-xl transition-all duration-200">
                <Link to="/book">Book Now</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container py-12 max-w-6xl">
        {isMobile ? (
          // Mobile Layout - Tabbed Interface
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="about" className="text-xs">About</TabsTrigger>
                <TabsTrigger value="location" className="text-xs">Location</TabsTrigger>
                <TabsTrigger value="gallery" className="text-xs">Gallery</TabsTrigger>
                <TabsTrigger value="faq" className="text-xs">FAQ</TabsTrigger>
                <TabsTrigger value="contact" className="text-xs">Contact</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-0">
                <motion.div variants={storyVariants}>
                  <div className="rounded-xl border border-amber-100/50 bg-gradient-to-br from-amber-50/30 to-emerald-50/20 shadow-sm">
                    <AboutContent />
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="location" className="mt-0">
                <motion.div variants={itemVariants}>
                  <Link
                    to="/location"
                    className="block p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <LocationContent />
                  </Link>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="gallery" className="mt-0">
                <motion.div variants={itemVariants}>
                  <Link
                    to="/gallery"
                    className="block p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <GalleryContent />
                  </Link>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="faq" className="mt-0">
                <motion.div variants={itemVariants}>
                  <Link
                    to="/faq"
                    className="block p-4 rounded-xl bg-card hover:border-yellow-600 transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                    <FAQContent />
                  </Link>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="contact" className="mt-0">
                <motion.div variants={itemVariants}>
                  <Link
                    to="/contact"
                    className="block p-4 rounded-xl bg-card hover:border-yellow-600 transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                    <ContactContent />
                  </Link>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        ) : (
          // Desktop Layout - Original Grid (unchanged)
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min"
          >
          {/* Gallery - Top Left */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="row-span-1"
          >
            <Link
              to="/gallery"
              className="block h-full p-3 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <h2 className="font-display text-xl font-semibold mb-2 text-primary">
                Gallery
              </h2>
              <div className="flex-grow overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-4 gap-1">
                {/* 1Transit folder images - sample with ProgressiveImage */}
                <ProgressiveImage 
                  src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg" 
                  alt="Transit area" 
                  className="rounded" 
                  aspectRatio="square"
                />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25 (1).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25 (2).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26 (1).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26 (2).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (1).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (2).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (3).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.28 (1).jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.28.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.29.jpeg" alt="Transit area" className="w-full h-8 object-cover rounded" />
                
                {/* Cummunal folder images */}
                <img src="/assets/Cummunal/GOOSE-70.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/Cummunal/GOOSE-71.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/Cummunal/GOOSE-81.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/Cummunal/GOOSE-89.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/Cummunal/GOOSE-90.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/Cummunal/GOOSE-92.JPG" alt="Common area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/Cummunal/WhatsApp Image 2026-03-11 at 14.06.19.jpeg" alt="Common area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/Cummunal/WhatsApp Image 2026-03-11 at 14.06.20 (3).jpeg" alt="Common area" className="w-full h-8 object-cover rounded" />
                <img src="/assets/Cummunal/image (2).jpeg" alt="Common area" className="w-full h-8 object-cover rounded" />
                
                {/* Lodge Interior images from various folders */}
                <img src="/assets/3Suite/GOOSE-100.JPG" alt="Lodge interior" className="w-full h-8 object-cover rounded" />
                <img src="/assets/3Suite/GOOSE-105.JPG" alt="Lodge room" className="w-full h-8 object-cover rounded" />
                <img src="/assets/rooms/GOOSE-106.JPG" alt="Lodge accommodation" className="w-full h-8 object-cover rounded" />
                <img src="/assets/rooms/GOOSE-108.JPG" alt="Lodge facility" className="w-full h-8 object-cover rounded" />
                <img src="/assets/rooms/GOOSE-110.JPG" alt="Lodge view" className="w-full h-8 object-cover rounded" />
                <img src="/assets/2Studio/GOOSE-118.JPG" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
                <img src="/assets/rooms/GOOSE-73.JPG" alt="Lodge interior" className="w-full h-8 object-cover rounded" />
                <img src="/assets/2Studio/GOOSE-74.JPG" alt="Lodge room" className="w-full h-8 object-cover rounded" />
                <img src="/assets/rooms/GOOSE-77.JPG" alt="Lodge facility" className="w-full h-8 object-cover rounded" />
                <img src="/assets/rooms/GOOSE-86.JPG" alt="Lodge view" className="w-full h-8 object-cover rounded" />
                
                {/* Outside folder images */}
                <img src="/assets/outside/GOOSE-101.JPG" alt="Lodge surroundings" className="w-full h-8 object-cover rounded" />
                <img src="/assets/outside/GOOSE-120.JPG" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
                <img src="/assets/outside/GOOSE-5.JPG" alt="Lodge surroundings" className="w-full h-8 object-cover rounded" />
                <img src="/assets/outside/GOOSE-8.JPG" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
                <img src="/assets/outside/GOOSE-85.JPG" alt="Lodge surroundings" className="w-full h-8 object-cover rounded" />
                <img src="/assets/outside/WhatsApp Image 2026-03-11 at 14.06.20 (1).jpeg" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
                <img src="/assets/outside/WhatsApp Image 2026-03-11 at 14.06.21.jpeg" alt="Lodge surroundings" className="w-full h-8 object-cover rounded" />
                <img src="/assets/outside/WhatsApp Image 2026-03-11 at 14.06.28 (3).jpeg" alt="Lodge exterior" className="w-full h-8 object-cover rounded" />
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-border/30">
                <p className="text-xs text-muted-foreground text-center">Click to view full gallery</p>
              </div>
            </Link>
          </motion.div>

          {/* Our Story - Center Column */}
          <motion.div
            variants={storyVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="row-span-2"
          >
            <div className="h-full p-8 rounded-xl border border-amber-100/50 bg-gradient-to-br from-amber-50/30 to-emerald-50/20 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">
                  Our Story
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <h3 className="font-display text-xl font-semibold text-foreground leading-relaxed">
                  20 Years of Heritage. Reimagined.
                </h3>
                
                <p className="leading-relaxed">
                  For two decades, Footprints Lodge has been a sanctuary in the heart of Kempton Park. But we believe that true hospitality requires moving with the times. In 2026, we undertook a radical transformation—moving away from our rustic roots toward a sleek, tech-forward aesthetic.
                </p>
                
                <p className="leading-relaxed">
                  What began as a necessary repair to a 50-year-old pipe became a complete architectural rebirth. We stripped the lodge to its original shell to build something smarter and more sustainable. We've replaced bulky, dated interiors with minimalist steel and "upcycled" sleeper wood salvaged right here from the property.
                </p>
                
                <p className="leading-relaxed">
                  Our evolution isn't just aesthetic; it's mechanical. We've implemented a "Continuous Maintenance" protocol—including a 6-year mattress replacement cycle—and cut our energy footprint by 40% through solar tech and recycled heat systems. We've traded the old for the optimized, ensuring that while our look is new, our commitment to the community remains as solid as the stone foundations we were built on.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location - Top Right */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="row-span-1"
          >
            <Link
              to="/location"
              className="block h-full p-3 rounded-xl bg-card shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold text-primary">
                  Location
                </h2>
              </div>
              
              {/* Map Section */}
              <div className="mb-4">
                <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden border border-border/30">
                  <img
                    src="/assets/MAP.png"
                    alt="Footprints Lodge Location Map"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none" />
                </div>
              </div>
              
              {/* Nearby Landmarks */}
              <div className="space-y-2">
                <p className="font-semibold text-sm text-foreground mb-3">Nearby Landmarks</p>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span>OR Tambo International Airport</span>
                    <span className="text-primary font-medium">10 mins</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rhodesfield Gautrain Station</span>
                    <span className="text-primary font-medium">8 mins</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Emperors Palace Casino</span>
                    <span className="text-primary font-medium">12 mins</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Local Shopping Hubs</span>
                    <span className="text-primary font-medium">5 mins</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* FAQ - Bottom Left */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="row-span-1"
          >
            <Link
              to="/faq"
              className="block h-full p-6 rounded-xl bg-card hover:border-yellow-600 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <HelpCircle size={24} className="text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                FAQ
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Common questions answered
              </p>
              <div className="space-y-3 text-xs text-muted-foreground">
                <p className="leading-relaxed">• Check-in & check-out times</p>
                <p className="leading-relaxed">• Payment methods</p>
                <p className="leading-relaxed">• Cancellation policy</p>
                <p className="leading-relaxed">• Amenities included</p>
                <p className="leading-relaxed">• Eco-Friendly Initiatives</p>
                <p className="text-xs text-muted-foreground pl-4 mt-1">Solar & Water recycling systems</p>
                <p className="leading-relaxed">• Proximity to Hubs</p>
                <p className="text-xs text-muted-foreground pl-4 mt-1">Gautrain & Airport access</p>
                <p className="leading-relaxed">• Check-in Tech</p>
                <p className="text-xs text-muted-foreground pl-4 mt-1">Keyless entry details</p>
              </div>
            </Link>
          </motion.div>

          {/* Contact - Bottom Right */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="row-span-1"
          >
            <Link
              to="/contact"
              className="block h-full p-6 rounded-xl bg-card hover:border-yellow-600 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageSquare size={24} className="text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Contact
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Get in touch with our team
              </p>
              <div className="space-y-3 text-xs text-muted-foreground">
                <p className="leading-relaxed">• 24/7 support available</p>
                <p className="leading-relaxed">• Quick response guarantee</p>
                <p className="leading-relaxed">• Multiple contact methods</p>
                <p className="leading-relaxed">• Emergency assistance</p>
                <div className="pt-2 mt-2 border-t border-border/30">
                  <p className="font-semibold text-foreground mb-2">Direct Concierge</p>
                  <p className="leading-relaxed">• WhatsApp Support</p>
                  <p className="text-xs text-muted-foreground pl-4 mt-1">+27 72 985 9725</p>
                  <p className="leading-relaxed mt-2">• Emergency After-Hours</p>
                  <p className="text-xs text-muted-foreground pl-4 mt-1">+27 72 985 9725</p>
                  <p className="leading-relaxed mt-2">• Physical Address</p>
                  <p className="text-xs text-muted-foreground pl-4 mt-1">Footprints Lodge</p>
                  <p className="text-xs text-muted-foreground pl-4">Kempton Park, Gauteng</p>
                  <p className="text-xs text-muted-foreground pl-4">South Africa</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
        )}
      </main>
    </div>
  );
};

export default More;
