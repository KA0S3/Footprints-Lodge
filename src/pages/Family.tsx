import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Droplets, Zap, Lock, Wind, ChevronLeft, ChevronRight, Tv, Coffee, Refrigerator, Bath, ArrowLeft, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const roomImages = ["placeholder-1", "placeholder-2"];

const amenities = [
  { icon: Tv, label: "Smart TV" },
  { icon: Wind, label: "Aircon" },
  { icon: Coffee, label: "Kettle with tea/coffee" },
  { icon: Bath, label: "En-suite Bathroom" },
  { icon: Users, label: "Much larger floor plan" },
  { icon: Wifi, label: "High-speed fibre Wi-Fi" },
  { icon: Lock, label: "Instant code check-in" },
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
      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500">
        <div className="text-center">
          <div className="text-6xl mb-2">🏠</div>
          <p className="text-sm">Family Room Image {activeImage + 1}</p>
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

const Family = () => {
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
                <h1 className="font-display text-4xl md:text-5xl font-semibold">Family</h1>
                <div className="border-t sm:border-t-0 sm:pt-0 pt-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">R950</span>
                    <span className="text-muted-foreground"> / night</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-4">
                    Various Configurations
                  </p>
                  <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                    <Link to="/another-stay">View Details</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Room Information */}
          <AnimatedSection className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-2">Family Room</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our spacious Family Room offers various bed configurations with a much larger floor plan. Perfect for families or groups who need extra space, featuring all premium amenities including Smart TV, air conditioning, and kettle facilities.
              </p>
            </div>

            {/* Premium Features */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Family Features</h3>
              
              {/* Feature Blocks Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Spacious Layout</h4>
                  <p className="text-xs text-muted-foreground">Much larger floor plan for families and groups.</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Flexible Configs</h4>
                  <p className="text-xs text-muted-foreground">Various bed configurations available.</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Full Amenities</h4>
                  <p className="text-xs text-muted-foreground">Smart TV, Aircon, kettle with tea/coffee.</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Family Comfort</h4>
                  <p className="text-xs text-muted-foreground">En-suite bathroom and climate control.</p>
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
                <strong>Note:</strong> Family Room offers various configurations with a much larger floor plan while maintaining all King/Twin amenities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </article>
  );
};

export default Family;
