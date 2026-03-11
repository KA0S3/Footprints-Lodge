import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Droplets, Zap, Lock, Wind, ChevronLeft, ChevronRight, Tv, Coffee, Refrigerator, Bath, ArrowLeft, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import room1 from "@/assets/image (10).jpeg";
import room2 from "@/assets/image (1).jpeg";
import { useState } from "react";

const roomImages = [room1, room2];

const amenities = [
  { icon: Wifi, label: "Fast fibre Wi-Fi" },
  { icon: Tv, label: "16\" flat-screen entertainment" },
  { icon: Coffee, label: "Coffee & tea station" },
  { icon: Refrigerator, label: "Private beverage cooler" },
  { icon: Bath, label: "Luxury bathroom amenities" },
  { icon: Droplets, label: "High-flow rain shower" },
  { icon: Wind, label: "Naturally cooled" },
  { icon: Zap, label: "Backup water & power" },
  { icon: Lock, label: "Instant code check-in" },
  { icon: Users, label: "Multi-sleeper configurations" },
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
      <img
        src={roomImages[activeImage]}
        alt="Premium suite room at Footprints Lodge"
        className="w-full h-full object-cover"
      />
      
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

const Suite = () => {
  return (
    <article className="container py-16">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <AnimatedSection>
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/book" className="flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to room selection
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
                <h1 className="font-display text-4xl md:text-5xl font-semibold">The Suite</h1>
                <div className="border-t sm:border-t-0 sm:pt-0 pt-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">R1200</span>
                    <span className="text-muted-foreground"> / night</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-4">
                    Sleeps up to 4 guests
                  </p>
                  <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                    <Link to="/book">Book Your Stay</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Room Information */}
          <AnimatedSection className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-2">Group / Multi-Sleeper</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our largest floor plan designed for families, teams, or groups, offering an expansive dormitory-style layout without sacrificing our core standards of cleanliness and tech-forward design.
              </p>
            </div>

            {/* Premium Features */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Key Features</h3>
              
              {/* Feature Blocks Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Expansive Space</h4>
                  <p className="text-xs text-muted-foreground">Multi-sleeper configurations with ample room for group coordination.</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Full Utility</h4>
                  <p className="text-xs text-muted-foreground">Includes a private beverage cooler and a dedicated workspace area.</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Safe Haven</h4>
                  <p className="text-xs text-muted-foreground">Integrated "burglar-proofing" art and 24/7 security connectivity.</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Enhanced Comfort</h4>
                  <p className="text-xs text-muted-foreground">Premium linens and luxury bathroom amenities for superior comfort.</p>
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
                <strong>Note:</strong> Expansive dormitory-style layout with full accessibility and enhanced security features.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </article>
  );
};

export default Suite;
