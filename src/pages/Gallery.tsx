import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProgressiveImage from "@/components/ProgressiveImage";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Organize images by category
  const imageCategories = {
    "Transit Areas": [
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25 (1).jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25 (2).jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25.jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26 (1).jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26 (2).jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26.jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (1).jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (2).jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27 (3).jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27.jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.28 (1).jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.28.jpeg",
      "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.29.jpeg",
    ],
    "Common Areas": [
      "/assets/Cummunal/GOOSE-70.JPG",
      "/assets/Cummunal/GOOSE-71.JPG",
      "/assets/Cummunal/GOOSE-81.JPG",
      "/assets/Cummunal/GOOSE-89.JPG",
      "/assets/Cummunal/GOOSE-90.JPG",
      "/assets/Cummunal/GOOSE-92.JPG",
      "/assets/Cummunal/WhatsApp Image 2026-03-11 at 14.06.19.jpeg",
      "/assets/Cummunal/WhatsApp Image 2026-03-11 at 14.06.20 (3).jpeg",
      "/assets/Cummunal/image (2).jpeg",
    ],
    "Lodge Interior": [
      "/assets/3Suite/GOOSE-100.JPG",
      "/assets/3Suite/GOOSE-105.JPG",
      "/assets/rooms/GOOSE-106.JPG",
      "/assets/rooms/GOOSE-108.JPG",
      "/assets/rooms/GOOSE-110.JPG",
      "/assets/2Studio/GOOSE-118.JPG",
      "/assets/rooms/GOOSE-73.JPG",
      "/assets/2Studio/GOOSE-74.JPG",
      "/assets/rooms/GOOSE-77.JPG",
      "/assets/rooms/GOOSE-86.JPG",
    ],
    "Exterior & Surroundings": [
      "/assets/outside/GOOSE-101.JPG",
      "/assets/outside/GOOSE-120.JPG",
      "/assets/outside/GOOSE-5.JPG",
      "/assets/outside/GOOSE-8.JPG",
      "/assets/outside/GOOSE-85.JPG",
      "/assets/outside/WhatsApp Image 2026-03-11 at 14.06.20 (1).jpeg",
      "/assets/outside/WhatsApp Image 2026-03-11 at 14.06.21.jpeg",
      "/assets/outside/WhatsApp Image 2026-03-11 at 14.06.28 (3).jpeg",
    ],
  };

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

  const categoryVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/more" className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Back to More
                </Link>
              </Button>
            </motion.div>
            <h1 className="font-display text-xl font-semibold text-foreground tracking-tight">
              Gallery
            </h1>
          </div>
        </div>
      </motion.header>

      {/* Main Gallery Content */}
      <main className="container py-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {Object.entries(imageCategories).map(([category, images], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <h2 className="font-display text-2xl font-bold text-primary">
                  {category}
                </h2>
                <div className="h-px bg-border flex-1" />
                <span className="text-sm text-muted-foreground">
                  {images.length} photos
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {images.map((image, imageIndex) => (
                  <motion.div
                    key={`${category}-${imageIndex}`}
                    variants={imageVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                    className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => openLightbox(image)}
                  >
                    <ProgressiveImage
                      src={image}
                      alt={`${category} - Image ${imageIndex + 1}`}
                      className="group-hover:scale-110 transition-transform duration-300"
                      aspectRatio="square"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>
            <ProgressiveImage
              src={selectedImage}
              alt="Full size image"
              className="w-full h-full object-contain"
              aspectRatio="auto"
              priority={true}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
