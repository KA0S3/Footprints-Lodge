import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Droplets, Zap, Lock, Wind, ChevronLeft, ChevronRight, Tv, Coffee, Refrigerator, Bath, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import heroRoom from "@/assets/hero-room.jpg";
import { useState } from "react";

const roomImages = [heroRoom, room1, room2];

const amenities = [
  { icon: Wifi, label: "Fast fibre Wi-Fi" },
  { icon: Tv, label: "Smart TV with streaming" },
  { icon: Coffee, label: "Coffee & tea station" },
  { icon: Refrigerator, label: "Mini refrigerator" },
  { icon: Bath, label: "Luxury bathroom amenities" },
  { icon: Droplets, label: "High-flow shower" },
  { icon: Wind, label: "Naturally cooled" },
  { icon: Zap, label: "Backup water & power" },
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
                <h1 className="font-display text-4xl md:text-5xl font-semibold">Suite</h1>
                <div className="border-t sm:border-t-0 sm:pt-0 pt-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">R1200</span>
                    <span className="text-muted-foreground"> / night</span>
                  </div>
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
              <p className="text-muted-foreground leading-relaxed">
                Premium suite rooms offering the ultimate in comfort and luxury. Spacious and well-appointed 
                for discerning guests who demand the finest amenities and exceptional service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for executives, special occasions, or those seeking an elevated travel experience. 
                Located in the heart of Kempton Park with premium amenities for both business and leisure travelers.
              </p>
            </div>

            {/* Premium Features */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Premium Luxury Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenities.map((a) => (
                  <div key={a.label} className="flex items-center gap-3">
                    <a.icon size={20} strokeWidth={1.5} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{a.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                <strong>Note:</strong> Includes all premium amenities - smart TV, coffee/tea station, mini refrigerator, 
                luxury bathroom products, premium linens, separate workspace, and enhanced room service options.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </article>
  );
};

export default Suite;
