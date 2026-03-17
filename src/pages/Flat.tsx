import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Droplets, Zap, Lock, Wind, ChevronLeft, ChevronRight, Tv, Bath, ArrowLeft, Users, Home, Bed } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const roomImages = ["flat-1", "flat-2", "flat-3"];

const amenities = [
  { icon: Wifi, label: "High-speed fibre Wi-Fi throughout" },
  { icon: Tv, label: "Multiple entertainment systems" },
  { icon: Droplets, label: "Multiple high-flow rain showers" },
  { icon: Wind, label: "Individual climate control" },
  { icon: Zap, label: "Backup water & power" },
  { icon: Lock, label: "Instant code check-in" },
];

const flatRooms = [
  { number: "16", type: "The Flat: Unit 16", features: "King + 1 Single OR 3 Singles", price: "R950", layout: "Family-style layout with King/Twin amenities" },
  { number: "17", type: "The Flat: Unit 17", features: "King + 2 Singles OR 4 Singles", price: "R1150", layout: "Large family-style layout with King/Twin amenities" },
  { number: "18", type: "The Flat: Unit 18", features: "King or 2 Twin Beds", price: "R750", layout: "Standard King/Twin amenities" },
  { number: "19", type: "The Flat: Unit 19", features: "Double Bed", price: "R750", layout: "Compact bed size but features all King/Twin amenities" },
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
      <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-amber-700">
        <div className="text-center">
          <div className="text-6xl mb-2">🏢</div>
          <p className="text-sm">The Flat - Room Group {activeImage + 1}</p>
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

const Flat = () => {
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
                  <h1 className="font-display text-4xl md:text-5xl font-semibold mb-2">The Flat Units</h1>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm px-3 py-1 rounded-full font-medium mb-4">
                    <Home size={14} />
                    Individual Units Available
                  </div>
                </div>
                <div className="border-t sm:border-t-0 sm:pt-0 pt-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">R750</span>
                    <span className="text-muted-foreground"> - R1150</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-4">
                    Individual units available for different group sizes
                  </p>
                  <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                    <Link to="/another-stay">View All Units</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Room Information */}
          <AnimatedSection className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-2">The Flat Units Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Flat consists of four individual units (Units 16-19), each offering unique configurations to suit different group sizes and preferences. From compact double rooms to spacious family layouts, each unit features premium amenities including Smart TV, air conditioning, and kettle facilities.
              </p>
            </div>

            {/* Room Breakdown */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Individual Unit Configurations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {flatRooms.map((room) => (
                  <div key={room.number} className="bg-card border border-border/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Bed size={16} className="text-primary" />
                      <h4 className="font-medium text-sm">{room.type}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{room.features}</p>
                    <p className="text-xs text-muted-foreground mb-2">{room.layout}</p>
                    <p className="text-sm font-semibold text-primary">{room.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Blocks Grid */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Unit Features</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Flexible Configurations</h4>
                  <p className="text-xs text-muted-foreground">Multiple bed arrangements to suit your needs</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Premium Amenities</h4>
                  <p className="text-xs text-muted-foreground">All units include Smart TV, Aircon & kettle facilities</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Family Options</h4>
                  <p className="text-xs text-muted-foreground">Units 16 & 17 offer family-style layouts</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Individual Access</h4>
                  <p className="text-xs text-muted-foreground">Private entrance and facilities for each unit</p>
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
            
            <p className="text-xs text-muted-foreground mt-4 italic">
              <strong>Note:</strong> Each unit is booked individually. Units 16-17 offer family-style layouts, while Units 18-19 provide standard configurations.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </article>
  );
};

export default Flat;
