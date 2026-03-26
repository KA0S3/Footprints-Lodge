import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, HelpCircle, MessageSquare, Info, BookOpen, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LazyImage from "../components/LazyImage.tsx";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const More = () => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const storyVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  // Mobile Tab Content Components
  const GalleryContent = () => (
    <div className="space-y-4">
      <h1 className="font-display text-3xl font-bold text-primary">Gallery</h1>
      <div className="grid grid-cols-2 gap-2">
        {/* Only 6 preview images for performance */}
        <LazyImage 
          src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg" 
          alt="Quickstay King" 
          className="rounded" 
          aspectRatio="video"
          priority={true}
        />
        <LazyImage 
          src="/assets/Cummunal/GOOSE-70.JPG" 
          alt="Common area" 
          className="rounded" 
          aspectRatio="video"
          priority={true}
        />
        <LazyImage 
          src="/assets/3Suite/GOOSE-100.JPG" 
          alt="Lodge interior" 
          className="rounded" 
          aspectRatio="video"
        />
        <LazyImage 
          src="/assets/rooms/GOOSE-106.JPG" 
          alt="Lodge accommodation" 
          className="rounded" 
          aspectRatio="video"
        />
        <LazyImage 
          src="/assets/outside/GOOSE-101.JPG" 
          alt="Lodge surroundings" 
          className="rounded" 
          aspectRatio="video"
        />
        <LazyImage 
          src="/assets/2Studio/GOOSE-118.JPG" 
          alt="Lodge exterior" 
          className="rounded" 
          aspectRatio="video"
        />
      </div>
      <div className="pt-2 border-t border-border/30">
        <p className="text-xs text-muted-foreground text-center">Click to view full gallery</p>
      </div>
    </div>
  );

  const AboutContent = () => {
    const fullText = "For over two decades, Footprints Lodge has provided practical, reliable accommodation in Kempton Park—ideal for business travellers and short stopovers. Our location offers easy access to the airport, major routes, and a wide range of nearby restaurants and shopping centres.\n\nIn 2026, the lodge underwent a complete renovation. What started as a repair project became a full rebuild, transforming the space into a clean, modern, and efficient environment. The design is intentionally minimal—focused on comfort, functionality, and a straightforward stay without unnecessary extras.\n\nSustainability and maintenance are part of how we operate. The upgrade included the use of upcycled sleeper wood, reduced energy systems, and solar-supported infrastructure, lowering our energy footprint by 40%. A continuous maintenance approach ensures the property remains in good condition, including a structured 6-year mattress replacement cycle for consistent guest comfort.\n\nFootprints Lodge is well suited to on-the-move professionals and skilled tradespeople, as well as travellers needing a convenient, well-located place to stay. It's not about luxury—it's about a clean, efficient space that meets your needs and keeps things simple.";

    return (
      <div className="space-y-4 p-4 h-full flex flex-col">
        <h2 className="font-display text-xl font-bold text-primary">About Footprints Lodge</h2>
        <div className="flex-1 text-muted-foreground relative">
          <div className={`leading-relaxed text-sm ${!isExpanded ? '' : ''}`}>
            <div className={!isExpanded ? '' : ''}>
              {fullText.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          
          {isExpanded && (
            <motion.button
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              less
              <ChevronDown size={16} className="rotate-180 transition-transform duration-200" />
            </motion.button>
          )}
        </div>
      </div>
    );
  };

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
          <p className="leading-relaxed mt-2">• Email Support</p>
          <p className="text-xs text-muted-foreground pl-4">info@afrifoot.co.za</p>
          <p className="leading-relaxed mt-2">• Physical Address</p>
          <p className="text-xs text-muted-foreground pl-4">1 Crestwood St</p>
          <p className="text-xs text-muted-foreground pl-4">Aston Manor, Kempton Park, 1619</p>
          <p className="text-xs text-muted-foreground pl-4">Gauteng, South Africa</p>
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
                  <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
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
            whileHover={{ opacity: 0.9, transition: { duration: 0.2 } }}
            className="row-span-1"
          >
            <Link
              to="/gallery"
              className="block h-full p-3 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <h1 className="font-display text-3xl font-bold mb-2 text-primary">
                Gallery
              </h1>
              <div className="flex-grow overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-2 gap-2">
                {/* Only 6 preview images for performance */}
                <LazyImage 
                  src="/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg" 
                  alt="Quickstay King" 
                  className="rounded" 
                  aspectRatio="video"
                  priority={true}
                />
                <LazyImage 
                  src="/assets/Cummunal/GOOSE-70.JPG" 
                  alt="Common area" 
                  className="rounded" 
                  aspectRatio="video"
                  priority={true}
                />
                <LazyImage 
                  src="/assets/3Suite/GOOSE-100.JPG" 
                  alt="Lodge interior" 
                  className="rounded" 
                  aspectRatio="video"
                />
                <LazyImage 
                  src="/assets/rooms/GOOSE-106.JPG" 
                  alt="Lodge accommodation" 
                  className="rounded" 
                  aspectRatio="video"
                />
                <LazyImage 
                  src="/assets/outside/GOOSE-101.JPG" 
                  alt="Lodge surroundings" 
                  className="rounded" 
                  aspectRatio="video"
                />
                <LazyImage 
                  src="/assets/2Studio/GOOSE-118.JPG" 
                  alt="Lodge exterior" 
                  className="rounded" 
                  aspectRatio="video"
                />
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
            whileHover={{ opacity: 0.95, transition: { duration: 0.2 } }}
            className="row-span-2"
          >
            <div className="h-full px-8 pt-8 pb-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col relative">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">
                  About Footprints Lodge
                </h2>
              </div>
              
              <div className="flex-1 text-muted-foreground relative overflow-hidden">
                <div className={`leading-relaxed ${!isExpanded ? 'max-h-[600px]' : ''}`}>
                  {!isExpanded && (
                    <>
                      <p className="mb-3">
                        For over two decades, Footprints Lodge has provided practical, reliable accommodation in Kempton Park—ideal for business travellers and short stopovers. Our location offers easy access to the airport, major routes, and a wide range of nearby restaurants and shopping centres.
                      </p>
                      <p className="mb-3">
                        In 2026, the lodge underwent a complete renovation. What started as a repair project became a full rebuild, transforming the space into a clean, modern, and efficient environment. The design is intentionally minimal—focused on comfort, functionality, and a straightforward stay without unnecessary extras.
                      </p>
                      <p className="mb-3">
                        Sustainability and maintenance are part of how we operate. The upgrade included the use of upcycled sleeper wood, reduced energy systems, and solar-supported infrastructure, lowering our energy footprint by 40%. A continuous maintenance approach ensures the property remains in good condition, including a structured 6-year mattress replacement cycle for consistent guest comfort.
                      </p>
                      <p className="mb-0">
                        Footprints Lodge is well suited to on-the-move professionals and skilled tradespeople, as well as travellers needing a convenient, well-located place to stay. It's not about luxury—it's about a clean, efficient space that meets your needs and keeps things simple.
                      </p>
                      {/* Fade overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white/80 via-white/60 via-white/40 via-white/25 via-white/15 via-white/8 via-white/3 to-transparent pointer-events-none" />
                      
                      {/* More button */}
                      {!isExpanded && (
                        <motion.button
                          onClick={() => setIsModalOpen(true)}
                          className="absolute bottom-4 left-0 z-10 text-primary font-bold hover:underline transition-colors px-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          ...more
                        </motion.button>
                      )}
                    </>
                  )}
                  {isExpanded && (
                    <>
                      <p className="mb-3">
                        For over two decades, Footprints Lodge has provided practical, reliable accommodation in Kempton Park—ideal for business travellers and short stopovers. Our location offers easy access to the airport, major routes, and a wide range of nearby restaurants and shopping centres.
                      </p>
                      <p className="mb-3">
                        In 2026, the lodge underwent a complete renovation. What started as a repair project became a full rebuild, transforming the space into a clean, modern, and efficient environment. The design is intentionally minimal—focused on comfort, functionality, and a straightforward stay without unnecessary extras.
                      </p>
                      <p className="mb-3">
                        Sustainability and maintenance are part of how we operate. The upgrade included the use of upcycled sleeper wood, reduced energy systems, and solar-supported infrastructure, lowering our energy footprint by 40%. A continuous maintenance approach ensures the property remains in good condition, including a structured 6-year mattress replacement cycle for consistent guest comfort.
                      </p>
                      <p className="mb-0">
                        Footprints Lodge is well suited to on-the-move professionals and skilled tradespeople, as well as travellers needing a convenient, well-located place to stay. It's not about luxury—it's about a clean, efficient space that meets your needs and keeps things simple.
                      </p>
                    </>
                  )}
                </div>
                
                {isExpanded && (
                  <motion.button
                    onClick={() => setIsExpanded(false)}
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    less
                    <ChevronDown size={16} className="rotate-180 transition-transform duration-200" />
                  </motion.button>
                )}
              </div>
              
              </div>
          </motion.div>

          {/* Location - Top Right */}
          <motion.div
            variants={itemVariants}
            whileHover={{ opacity: 0.9, transition: { duration: 0.2 } }}
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
            whileHover={{ opacity: 0.9, transition: { duration: 0.2 } }}
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
            whileHover={{ opacity: 0.9, transition: { duration: 0.2 } }}
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
                  <p className="leading-relaxed mt-2">• Email Support</p>
                  <p className="text-xs text-muted-foreground pl-4 mt-1">info@afrifoot.co.za</p>
                  <p className="leading-relaxed mt-2">• Physical Address</p>
                  <p className="text-xs text-muted-foreground pl-4 mt-1">1 Crestwood St</p>
                  <p className="text-xs text-muted-foreground pl-4">Aston Manor, Kempton Park, 1619</p>
                  <p className="text-xs text-muted-foreground pl-4">Gauteng, South Africa</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
        )}
      </main>
      
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full max-w-4xl mx-auto p-8 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-display text-3xl font-bold text-primary">About Footprints Lodge</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <ChevronDown size={24} className="rotate-180" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="max-w-3xl mx-auto">
                  <p className="mb-6 text-lg leading-relaxed">
                    For over two decades, Footprints Lodge has provided practical, reliable accommodation in Kempton Park—ideal for business travellers and short stopovers. Our location offers easy access to the airport, major routes, and a wide range of nearby restaurants and shopping centres.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed">
                    In 2026, the lodge underwent a complete renovation. What started as a repair project became a full rebuild, transforming the space into a clean, modern, and efficient environment. The design is intentionally minimal—focused on comfort, functionality, and a straightforward stay without unnecessary extras.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed">
                    Sustainability and maintenance are part of how we operate. The upgrade included the use of upcycled sleeper wood, reduced energy systems, and solar-supported infrastructure, lowering our energy footprint by 40%. A continuous maintenance approach ensures the property remains in good condition, including a structured 6-year mattress replacement cycle for consistent guest comfort.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Footprints Lodge is well suited to on-the-move professionals and skilled tradespeople, as well as travellers needing a convenient, well-located place to stay. It's not about luxury—it's about a clean, efficient space that meets your needs and keeps things simple.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default More;
