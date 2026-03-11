import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Droplets, Zap, Lock, Wind, ChevronLeft, ChevronRight, Tv, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import room1 from "@/assets/image (1).jpeg";
import room2 from "@/assets/image (2).jpeg";
import { useState } from "react";

const roomImages = [room1, room2];

const amenities = [
  { icon: Wifi, label: "Universal plug sockets with integrated chargers" },
  { icon: Droplets, label: "High-flow shower" },
  { icon: Wind, label: "High-efficiency Aircron climate control" },
  { icon: Zap, label: "Backup water & power" },
  { icon: Lock, label: "Instant code check-in" },
  { icon: Tv, label: "16\" flat-screen entertainment" },
  { icon: Users, label: "Private external entrance" },
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
        alt="Premium minimalist room at Footprints Lodge"
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

const Rooms = () => {
  return (
    <article className="container py-16">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Section - Image/Heading left, Description/Amenities/Pricing right */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image, Heading and Pricing */}
          <div className="space-y-4">
            <AnimatedSection>
              <ImageCarousel />
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <h1 className="font-display text-4xl md:text-5xl font-semibold">The Transit</h1>
                <div className="border-t sm:border-t-0 sm:pt-0 pt-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">R800</span>
                    <span className="text-muted-foreground"> / night</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-4">
                    Sleeps 2 guests
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
              <h3 className="font-semibold text-lg mb-2">Quick Stay / Essential</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimized for speed and productivity, this minimalist ergonomic space is designed for travelers who need a clean, high-efficiency base between destinations.
              </p>
            </div>

            {/* Essential Features */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Key Features</h3>
              
              {/* Feature Blocks Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Seamless Utility</h4>
                  <p className="text-xs text-muted-foreground">Ergonomically planned flow with "no-fluff" minimalist steel storage.</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Maintenance Standard</h4>
                  <p className="text-xs text-muted-foreground">Premium mattresses on a guaranteed 6-year replacement cycle.</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Tech-Ready</h4>
                  <p className="text-xs text-muted-foreground">Universal plug sockets with integrated high-speed cellphone chargers.</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Private Access</h4>
                  <p className="text-xs text-muted-foreground">Private external entrance for enhanced security and convenience.</p>
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
                <strong>Note:</strong> Tech-ready minimalist design focused on speed and productivity. See FAQ for more information.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </article>
  );
};

export default Rooms;
