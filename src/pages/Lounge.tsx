import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Droplets, Zap, Lock, Wind, ChevronLeft, ChevronRight, Tv, Bath, ArrowLeft, Users, Bed, Monitor, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const roomImages = ["lounge-1", "lounge-2", "lounge-3"];

const amenities = [
  { icon: Wifi, label: "High-speed fibre Wi-Fi" },
  { icon: Tv, label: "Large entertainment system" },
  { icon: Droplets, label: "2 Individual en-suite toilets" },
  { icon: Wind, label: "Climate controlled environment" },
  { icon: Zap, label: "Backup water & power" },
  { icon: Lock, label: "Instant code check-in" },
];

const useCases = [
  { 
    type: "Premium Stay", 
    icon: Bed,
    description: "Luxurious accommodation with King bed and lounge seating",
    features: ["King-size bed", "Lounge seating area", "2 private en-suite toilets", "Premium amenities"]
  },
  { 
    type: "Meeting Space", 
    icon: Monitor,
    description: "Professional meeting environment with flexible seating",
    features: ["Conference table", "Executive seating", "Presentation equipment", "Refreshment station"]
  },
];

const ImageCarousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % roomImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-700">
        <div className="text-center">
          <div className="text-6xl mb-2">🛋️</div>
          <p className="text-sm">Adaptive Lounge Configuration {activeImage + 1}</p>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {roomImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === activeImage ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`View photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Lounge = () => {
  return (
    <article className="container py-16">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <AnimatedSection>
          <Button
            variant="ghost"
            asChild
            className="gap-2 mb-6"
          >
            <Link to="/book">
              <ArrowLeft size={16} />
              Back to Room Selection
            </Link>
          </Button>
        </AnimatedSection>

        {/* Main Content Section - Image/Heading left, Description/Amenities/Pricing right */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image, Heading and Pricing */}
          <div className="space-y-4">
            <AnimatedSection>
              <ImageCarousel />
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h1 className="font-display text-4xl md:text-5xl font-semibold mb-2">Adaptive Lounge</h1>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm px-3 py-1 rounded-full font-medium mb-4">
                    <Coffee size={14} />
                    Versatile Space
                  </div>
                </div>
                <div className="border-t sm:border-t-0 sm:pt-0 pt-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">R1,800</span>
                    <span className="text-muted-foreground"> / night</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-4">
                    Premium stay OR meeting space
                  </p>
                  <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                    <Link to="/book">Book Adaptive Lounge</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Room Information */}
          <AnimatedSection className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-2">The Transformative Space</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Adaptive Lounge is our most innovative space - a large, sophisticated lounge area with two individual en-suite toilets that seamlessly transforms between luxury accommodation and professional meeting environment. Book it for a premium stay with King amenities, or convert it into your ideal meeting space with tables and chairs.
              </p>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Dual Functionality</h3>
              <div className="space-y-4 mb-6">
                {useCases.map((useCase) => (
                  <div key={useCase.type} className="bg-card border border-border/50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <useCase.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{useCase.type}</h4>
                        <p className="text-xs text-muted-foreground">{useCase.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Blocks Grid */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Adaptive Features</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Flexible Layout</h4>
                  <p className="text-xs text-muted-foreground">Easily converts between stay and work modes</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Premium Comfort</h4>
                  <p className="text-xs text-muted-foreground">Luxury furnishings in both configurations</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Private Facilities</h4>
                  <p className="text-xs text-muted-foreground">2 individual en-suite toilets for privacy</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Smart Technology</h4>
                  <p className="text-xs text-muted-foreground">Entertainment and presentation systems</p>
                </div>
              </div>
            </div>
            
            {/* Amenities List */}
            <div>
              <h4 className="font-medium text-sm mb-3">Included Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenities.map((a) => (
                  <div key={a.label} className="flex items-center gap-3">
                    <a.icon size={20} strokeWidth={1.5} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-2 text-purple-800">Configuration Options</h4>
              <ul className="text-xs text-purple-700 space-y-1">
                <li>• <strong>Stay Mode:</strong> King bed, lounge seating, entertainment system</li>
                <li>• <strong>Meeting Mode:</strong> Conference table, executive chairs, presentation setup</li>
                <li>• <strong>Mixed Mode:</strong> Partial configuration for extended stays with work requirements</li>
                <li>• Please specify your preferred configuration when booking</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </article>
  );
};

export default Lounge;
