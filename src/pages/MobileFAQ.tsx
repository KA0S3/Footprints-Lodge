import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileFAQ = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return <div>Redirecting to desktop version...</div>;
  }

  const faqItems = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in is from 2:00 PM and check-out is until 10:00 AM. Early check-in and late check-out may be available upon request."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, and electronic bank transfers. Payment is required upon check-in."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 24 hours before check-in are fully refunded. Late cancellations may incur a charge."
    },
    {
      question: "What amenities are included?",
      answer: "All rooms include Wi-Fi, DSTV, desk, safe, and clean linen. Some rooms have additional amenities like air-conditioning and tea/coffee facilities."
    },
    {
      question: "Do you have eco-friendly initiatives?",
      answer: "Yes! We use solar-supported infrastructure and water recycling systems, reducing our energy footprint by 40%."
    },
    {
      question: "How close are you to transportation hubs?",
      answer: "We're 10 minutes from OR Tambo Airport, 8 minutes from Rhodesfield Gautrain Station, with easy access to major routes."
    },
    {
      question: "What check-in technology do you use?",
      answer: "We offer keyless entry with self-check-in system for your convenience and security."
    }
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
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
              >
                Gallery
              </Link>
              <Link
                to="/mobile-faq"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all bg-background text-foreground shadow-sm text-xs"
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
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <HelpCircle size={28} className="text-primary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-primary">FAQ</h1>
          </div>
          
          <p className="text-base text-muted-foreground">
            Frequently asked questions about Footprints Lodge
          </p>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              >
                <h3 className="font-semibold text-foreground mb-2 text-sm">{item.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <Button asChild className="px-6 py-3">
              <Link to="/mobile-contact">Still Have Questions?</Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default MobileFAQ;
