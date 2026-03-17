import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Droplets, Zap, Lock, Wind, ChevronLeft, ChevronRight, Tv, Bath, ArrowLeft, Users, Monitor, Coffee, Presentation } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const roomImages = ["conference-1", "conference-2", "conference-3"];

const amenities = [
  { icon: Tv, label: "Smart TV" },
  { icon: Wind, label: "Aircon" },
  { icon: Coffee, label: "Kettle with tea/coffee" },
  { icon: Bath, label: "En-suite bathroom with two individual toilets" },
  { icon: Users, label: "Very large lounge" },
  { icon: Wifi, label: "High-speed fibre Wi-Fi" },
  { icon: Lock, label: "Instant code check-in" },
];

const bedroomConfigurations = [
  { type: "King Configuration", capacity: "2 people", description: "King bed with premium amenities" },
  { type: "Twin Configuration", capacity: "2 people", description: "2 Twin beds with premium amenities" },
  { type: "Mixed Configuration", capacity: "2-4 people", description: "Combination of King and Twin options" },
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
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700">
        <div className="text-center">
          <div className="text-6xl mb-2">🏢</div>
          <p className="text-sm">Conference Suite Configuration {activeImage + 1}</p>
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

const Conference = () => {
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
                  <h1 className="font-display text-4xl md:text-5xl font-semibold mb-2">Conference Suite</h1>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm px-3 py-1 rounded-full font-medium mb-4">
                    <Monitor size={14} />
                    Versatile Space
                  </div>
                </div>
                <div className="border-t sm:border-t-0 sm:pt-0 pt-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">R1,500</span>
                    <span className="text-muted-foreground"> / night</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-4">
                    2 Bedrooms with King/Twin configurations
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
              <h3 className="font-semibold text-lg mb-2">The Premium Conference Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Conference Suite offers a sophisticated space combining accommodation and meeting facilities. Features two bedrooms with flexible King/Twin configurations, a very large lounge area, and premium amenities including dual en-suite bathrooms for ultimate convenience and privacy.
              </p>
            </div>

            {/* Bedroom Configurations */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Bedroom Configurations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {bedroomConfigurations.map((config) => (
                  <div key={config.type} className="bg-card border border-border/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={16} className="text-primary" />
                      <h4 className="font-medium text-sm">{config.type}</h4>
                    </div>
                    <p className="text-xs text-primary font-medium mb-1">{config.capacity}</p>
                    <p className="text-xs text-muted-foreground">{config.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Blocks Grid */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Suite Features</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Spacious Lounge</h4>
                  <p className="text-xs text-muted-foreground">Very large lounge area for meetings and relaxation</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Dual Bathrooms</h4>
                  <p className="text-xs text-muted-foreground">Two individual en-suite toilets for privacy</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Flexible Bedrooms</h4>
                  <p className="text-xs text-muted-foreground">King or Twin bed configurations available</p>
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-sm mb-2">Premium Amenities</h4>
                  <p className="text-xs text-muted-foreground">Smart TV, Aircon, kettle facilities in each room</p>
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
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-2 text-amber-800">Suite Information</h4>
              <ul className="text-xs text-amber-700 space-y-1">
                <li>• 2 Bedrooms with King or Twin configurations</li>
                <li>• Very large lounge area for meetings</li>
                <li>• En-suite bathrooms with two individual toilets</li>
                <li>• All King/Twin amenities included in each room</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </article>
  );
};

export default Conference;
