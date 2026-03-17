import { motion, AnimatePresence } from "framer-motion";
import { X, Wifi, Tv, Coffee, Bath, Wind, Lock, Droplets, Zap, Users, Bed, Refrigerator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: {
    id: string;
    title: string;
    description: string;
    beds: string;
    image: string;
  } | null;
  onSelectRoom: () => void;
}

const RoomModal = ({ isOpen, onClose, room, onSelectRoom }: RoomModalProps) => {
  if (!room) return null;

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const roomDetails = {
    transit: {
      vibe: "Perfect for the minimalist traveler who values efficiency and comfort. Our Quick Stay rooms are designed with purpose - every element serves a function, creating a serene environment free from unnecessary distractions. The clean lines and thoughtful layout maximize space while maintaining a sense of openness. Ideal for business travelers, transit guests, or those seeking a peaceful night's rest without the complexity of traditional hotel stays.",
      amenities: [
        { icon: Bed, label: "Comfortable Double Bed" },
        { icon: Bath, label: "Private En-suite Bathroom" },
        { icon: Wifi, label: "High-Speed WiFi" },
        { icon: Lock, label: "Smart Key Access" },
        { icon: Wind, label: "Climate Control" },
        { icon: Zap, label: "USB Charging Ports" }
      ],
      gallery: [
        "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg",
        "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25.jpeg", 
        "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26.jpeg",
        "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.27.jpeg"
      ]
    },
    suite: {
      vibe: "Experience the pinnacle of versatility and luxury in our King/Twin suites. This flagship accommodation adapts to your needs - whether configured as a spacious king room for couples or divided into twin beds for colleagues. The expanded living area provides room to unwind, work, or entertain. Premium touches throughout create an atmosphere of sophisticated comfort, making it the preferred choice for discerning guests who demand both flexibility and excellence in their accommodation.",
      amenities: [
        { icon: Bed, label: "King or Twin Configuration" },
        { icon: Tv, label: "55\" Smart TV" },
        { icon: Coffee, label: "Premium Coffee Station" },
        { icon: Refrigerator, label: "Mini Bar & Fridge" },
        { icon: Bath, label: "Luxury En-suite Bathroom" },
        { icon: Wifi, label: "High-Speed WiFi" },
        { icon: Wind, label: "Climate Control" },
        { icon: Lock, label: "Smart Key Access" },
        { icon: Users, label: "Seating Area" },
        { icon: Droplets, label: "Rainfall Shower" }
      ],
      gallery: [
        "/assets/3Suite/GOOSE-100.JPG",
        "/assets/3Suite/GOOSE-105.JPG",
        "/assets/rooms/GOOSE-106.JPG",
        "/assets/rooms/GOOSE-108.JPG"
      ]
    },
    studio: {
      vibe: "Our Standard rooms offer the perfect balance of comfort and functionality. Designed with the modern traveler in mind, these spaces provide everything you need for a comfortable stay without unnecessary complexity. The thoughtful layout includes dedicated work and relaxation zones, making it ideal for both business and leisure guests. Clean aesthetics and practical amenities create a welcoming retreat where you can rest, recharge, and prepare for whatever adventures await.",
      amenities: [
        { icon: Bed, label: "Queen Bed" },
        { icon: Tv, label: "43\" Smart TV" },
        { icon: Bath, label: "Modern En-suite Bathroom" },
        { icon: Wifi, label: "High-Speed WiFi" },
        { icon: Coffee, label: "Coffee & Tea Station" },
        { icon: Lock, label: "Smart Key Access" },
        { icon: Wind, label: "Air Conditioning" },
        { icon: Zap, label: "Work Desk" }
      ],
      gallery: [
        "/assets/2Studio/GOOSE-74.JPG",
        "/assets/2Studio/GOOSE-118.JPG",
        "/assets/rooms/GOOSE-73.JPG",
        "/assets/rooms/GOOSE-77.JPG"
      ]
    }
  };

  const currentRoomDetails = roomDetails[room.id as keyof typeof roomDetails];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1]
            }}
            className="relative h-full w-full overflow-y-auto"
          >
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
              {/* Enhanced Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                onClick={onClose}
                className="fixed top-8 right-8 z-10 bg-white/90 backdrop-blur-md text-slate-700 p-4 rounded-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>

              {/* Hero Image Section */}
              <div className="relative h-[60vh] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Floating Title Card */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{room.title}</h3>
                    <p className="text-white/90 text-lg">{room.description}</p>
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="container mx-auto px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  
                  {/* Left Column - Gallery and Description */}
                  <div className="space-y-8">
                    {/* Image Gallery */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <h4 className="text-2xl font-serif font-bold mb-4">Gallery</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {currentRoomDetails.gallery.map((image, index) => (
                          <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                            <img 
                              src={image} 
                              alt={`${room.title} - View ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Room Vibe Description */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
                    >
                      <h4 className="text-2xl font-serif font-bold mb-4">The Vibe</h4>
                      <p className="text-slate-700 leading-relaxed">
                        {currentRoomDetails.vibe}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right Column - Amenities and Action */}
                  <div className="space-y-8">
                    {/* Amenities */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
                    >
                      <h4 className="text-2xl font-serif font-bold mb-6">Amenities</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {currentRoomDetails.amenities.map((amenity, index) => {
                          const Icon = amenity.icon;
                          return (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                <Icon size={20} className="text-slate-700" />
                              </div>
                              <span className="text-slate-700 text-sm">{amenity.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Room Details */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
                    >
                      <h4 className="text-2xl font-serif font-bold mb-4">Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Capacity</span>
                          <span className="font-medium text-slate-800">{room.beds}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Room Type</span>
                          <span className="font-medium text-slate-800">{room.title}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Select Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      className="pt-4"
                    >
                      <Button
                        size="lg"
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-700 hover:to-slate-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                        onClick={() => {
                          onSelectRoom();
                          onClose();
                        }}
                      >
                        Select this Room
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RoomModal;
