import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, HelpCircle, MessageSquare, Info, BookOpen } from "lucide-react";

const More = () => {
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

          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/book"
              className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 text-muted-foreground hover:text-foreground hover:border-yellow-600"
            >
              Book
            </Link>
            <Link
              to="/more"
              className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 text-primary bg-primary/10 shadow-sm"
            >
              More
            </Link>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container py-12 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min"
        >
          {/* How It Works - Top Left */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="row-span-1"
          >
            <Link
              to="/how-it-works"
              className="block h-full p-6 rounded-xl bg-card hover:border-yellow-600 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Info size={24} className="text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                How It Works
              </h2>
              <p className="text-sm text-muted-foreground">
                Step-by-step self check-in guide
              </p>
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
                <p className="leading-relaxed">
                  Welcome to Footprints Lodge, where comfort meets convenience in the heart of Kempton Park. 
                  Our journey began with a simple vision: to create a sanctuary that feels like home while 
                  offering the modern amenities today's travelers expect.
                </p>
                
                <p className="leading-relaxed">
                  Founded on principles of hospitality and attention to detail, Footprints Lodge has become 
                  more than just a place to stay—it's an experience. Every corner of our lodge tells a story 
                  of thoughtful design, from our carefully curated rooms to our seamless self check-in process.
                </p>
                
                <p className="leading-relaxed">
                  Whether you're here for business or leisure, for a night or for weeks, we're committed to 
                  making your stay memorable. Our story continues with every guest who walks through our doors, 
                  leaving their footprints in our growing family.
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
              className="block h-full p-6 rounded-xl bg-card hover:border-yellow-600 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin size={24} className="text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Location
              </h2>
              <p className="text-sm text-muted-foreground">
                Find us in Kempton Park, Gauteng
              </p>
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
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• Check-in & check-out times</p>
                <p>• Payment methods</p>
                <p>• Cancellation policy</p>
                <p>• Amenities included</p>
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
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• 24/7 support available</p>
                <p>• Quick response guarantee</p>
                <p>• Multiple contact methods</p>
                <p>• Emergency assistance</p>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default More;
