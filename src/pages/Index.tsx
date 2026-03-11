import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/image (1).jpeg";

const Index = () => {
  return (
    <div className="h-screen flex flex-col relative">
      {/* Hero Section */}
      <section className="flex-1 relative overflow-hidden" aria-label="Hero">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Minimalist premium room at Footprints Lodge, Kempton Park"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Logo and Brand */}
            <motion.h1 
              className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Footprints Lodge
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-light mb-3 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Modern, clean, safe stays with a touch of africa
            </motion.p>
            
            <motion.p 
              className="text-lg text-white/80 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A perfect night's rest in the heart of Kempton Park
            </motion.p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button 
              variant="gloss" 
              size="lg" 
              asChild
              className="px-8 py-4 text-lg shadow-2xl hover:shadow-3xl"
            >
              <Link to="/book">Book a Room</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="px-8 py-4 text-lg border-white text-white bg-transparent hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Link to="/more">More</Link>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 text-white/70 text-sm space-y-1"
          >
            <p>Kempton Park · R650/night · Self check-in</p>
            <p className="text-xs text-white/50">Designed for the modern business traveler</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
