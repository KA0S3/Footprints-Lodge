import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Bed, Home, ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Rooms from "./Rooms";
import { useIsMobile } from "@/hooks/use-mobile";

const Book = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [showRoomsDetails, setShowRoomsDetails] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // External booking links mapping
  const bookingLinks = {
    "quick-stay": "https://book.nightsbridge.com/11584?bbrtid=22",
    "compact-queen": "https://book.nightsbridge.com/11584?bbrtid=20",
    "comfy-king-twin": "https://book.nightsbridge.com/11584?bbrtid=3"
  };

  const featuredRooms = [
    {
      id: "quick-stay",
      title: "Quick Stay",
      description: "A compact, minimalist guest room perfect for short stays. Features modern finishes, a practical design, a dedicated workspace, and a private ground-floor entrance.",
      beds: "Studio • 20m² • Sleeps 1-2 • Compact design • Workspace • Private entrance",
      image: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg",
      price: "R800",
      size: "20m²",
      occupancy: "2 Adults",
      amenities: ["Ceiling fan", "Desk", "Converters/Voltage adaptors", "Shower only", "Towels"]
    },
    {
      id: "compact-queen", 
      title: "Compact Queen",
      description: "A minimalistic, standard queen room featuring white linen and a tranquil atmosphere. Designed for solo travelers or couples who prioritize a clean, functional space.",
      beds: "Standard • 22m² • Sleeps 2 • Queen Bed • White linen • Tranquil atmosphere",
      image: "/assets/2Studio/GOOSE-74.JPG",
      price: "R950",
      size: "22m²",
      occupancy: "2 Adults",
      amenities: ["Queen Bed", "DSTV/Satellite TV", "Non-smoking", "Safe", "Shower only"]
    },
    {
      id: "comfy-king-twin",
      title: "Comfy King / Twin", 
      description: "A spacious, business-class room offering more room than a standard stay. Includes a versatile King or Twin bed configuration, comfortable seating for relaxation, and air-conditioning.",
      beds: "Business • 30m² • Sleeps 2 • King or Twin beds • Sitting area • Premium environment",
      image: "/assets/3Suite/GOOSE-100.JPG",
      price: "R1200",
      size: "30m²",
      occupancy: "2 Adults",
      amenities: ["Air-con", "Sitting area", "Coffee/Tea facilities", "Desk", "Hairdryer"]
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardsContainerRef.current && !cardsContainerRef.current.contains(event.target as Node)) {
        setExpandedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleRoomClick = (room: typeof featuredRooms[0]) => {
    if (isMobile) {
      // On mobile, toggle fullscreen expansion
      if (expandedCard === room.id) {
        setExpandedCard(null);
      } else {
        setExpandedCard(room.id);
      }
    } else {
      // On desktop, keep existing behavior
      if (expandedCard === room.id) {
        setExpandedCard(null);
      } else {
        setExpandedCard(room.id);
      }
    }
  };
  const handleBookClick = (room: typeof featuredRooms[0]) => {
    setSelectedRoom(room.id);
    // Open external booking link in new tab
    const bookingLink = bookingLinks[room.id as keyof typeof bookingLinks];
    if (bookingLink) {
      window.open(bookingLink, '_blank');
    }
  };

  const truncateDescription = (description: string, maxLength: number = 60) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "... more";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      {/* Dark overlay for hover effect - covers entire page */}
      <motion.div
        className="absolute inset-0 bg-black/40 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: (expandedCard && !showRoomsDetails) ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {showRoomsDetails ? (
        <div>
          {/* Back button */}
          <div className="container py-4">
            <Button
              variant="ghost"
              onClick={() => setShowRoomsDetails(false)}
              className="gap-2"
            >
              <ArrowLeft size={16} />
              Back to Room Selection
            </Button>
          </div>
          {/* Rooms component */}
          <Rooms />
        </div>
      ) : (
        <div className="min-h-screen flex items-start justify-center p-4 pt-12 relative z-20">
          <div className="w-full max-w-7xl">

        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent max-w-2xl ml-4 md:ml-8">
              Choose Your Room
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl ml-4 md:ml-8">
              Select the perfect accommodation for your stay at Footprints Lodge
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-16"
          >
            <Button
              variant="outline"
              onClick={() => navigate("/another-stay")}
              className="gap-2 px-4 py-2 text-xs font-medium bg-black text-white border-black hover:bg-gray-800 hover:border-gray-800 transition-all duration-200 h-8"
            >
              More ways to stay
              <ArrowRight size={14} />
            </Button>
          </motion.div>
        </div>

        {/* Three Static Cards - Different layouts for mobile and desktop */}
        {isMobile ? (
          // Mobile Layout: Stacked vertically with fullscreen expansion
          <div className="relative w-full max-w-7xl mx-auto space-y-4 px-4" ref={cardsContainerRef}>
            {featuredRooms.map((room) => (
              <motion.div
                key={room.id}
                className="relative cursor-pointer z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleRoomClick(room)}
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl bg-white"
                  style={{
                    height: expandedCard === room.id ? "100vh" : "200px"
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {/* Room Image */}
                  <div className="relative h-full">
                    <img 
                      src={room.image} 
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                      {/* Header */}
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif font-bold text-lg leading-tight">
                          {room.title}
                        </h3>
                        {expandedCard === room.id && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCard(null);
                            }}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
                          >
                            <X size={16} className="text-white" />
                          </button>
                        )}
                      </div>

                      {/* Middle Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <p className="text-sm leading-relaxed mb-2">
                          {expandedCard === room.id ? 
                            room.description : 
                            truncateDescription(room.description, 80)
                          }
                        </p>
                        
                        {expandedCard === room.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-3"
                          >
                            <div className="text-sm">
                              {room.beds}
                            </div>
                            <div className="text-sm space-y-1">
                              {room.amenities.map(amenity => `• ${amenity}`).join(' ')}
                            </div>
                            <div className="font-bold text-lg">
                              {room.price}<span className="text-sm font-normal">/night</span>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex justify-between items-end">
                        {expandedCard !== room.id && (
                          <div className="text-xs opacity-80">
                            {room.beds.split(' • ').slice(0, 2).join(' • ')}
                          </div>
                        )}
                        <Button
                          className="bg-black text-white hover:bg-gray-800 border-black text-xs px-4 py-2 h-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookClick(room);
                          }}
                        >
                          {expandedCard === room.id ? "Book Now" : "View & Book"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Desktop Layout: Original horizontal layout
          <div className="relative w-full max-w-7xl mx-auto -mt-[40px]" style={{ height: expandedCard ? "420px" : "384px", transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}>
            <div className="flex gap-4 h-full px-4" ref={cardsContainerRef}>
              {featuredRooms.map((room) => (
                <motion.div
                  key={room.id}
                  className="relative cursor-pointer z-20"
                  style={{
                    width: expandedCard === room.id ? "70%" : expandedCard ? "15%" : "33.33%",
                    height: expandedCard === room.id ? "420px" : "384px",
                    transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  onClick={() => handleRoomClick(room)}
                >
                  <motion.div
                    className="relative h-full rounded-2xl overflow-hidden shadow-xl"
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    {/* Botanical Background Image */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={room.image} 
                        alt={room.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Offset White Tab - Asymmetrically positioned to bottom-right */}
                    <motion.div 
                      className="absolute bg-white p-4 shadow-2xl flex flex-col justify-between"
                      style={{
                        bottom: "-20px",
                        right: "-20px",
                        width: "200px",
                        height: expandedCard === room.id ? "calc(100% + 40px)" : "160px",
                        borderRadius: "8px",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`space-y-${expandedCard === room.id ? "3" : "1"} flex-1 flex flex-col justify-between`}>
                        {/* Room Title - Dark Serif */}
                        <div className={`flex items-start justify-between gap-2 ${expandedCard === room.id ? "mt-4" : ""}`}>
                          <h3 className={`font-serif font-bold text-gray-900 leading-tight flex-1 ${expandedCard === room.id ? "text-xl" : "text-base"}`}>
                            {room.title}
                          </h3>
                        </div>

                        {/* Room Details - Sans-serif */}
                        <p className={`text-gray-600 leading-relaxed font-sans ${expandedCard === room.id ? "text-xs" : "text-[9px]"}`}>
                          {expandedCard === room.id ? 
                            room.description : 
                            truncateDescription(room.description, 50)
                          }
                        </p>

                        {/* Additional details shown only when expanded */}
                        {expandedCard === room.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2"
                          >
                            <div className="text-gray-700 text-xs font-sans font-medium">
                              {room.beds}
                            </div>
                            <div className="text-gray-600 text-xs font-sans">
                              {room.amenities.slice(0, 3).map(amenity => `• ${amenity}`).join(' ')}
                            </div>
                            {room.amenities.length > 3 && (
                              <div className="text-gray-600 text-xs font-sans">
                                {room.amenities.slice(3).map(amenity => `• ${amenity}`).join(' ')}
                              </div>
                            )}
                            <div className="font-semibold text-sm text-gray-900 mt-2">
                              {room.price}<span className="text-xs font-normal text-gray-500">/night</span>
                            </div>
                          </motion.div>
                        )}

                        {/* Bed Configuration - Sans-serif - hidden when expanded */}
                        {expandedCard !== room.id && (
                          <div className="text-gray-700 text-[9px] font-sans font-medium">
                            {room.beds.split(' • ').slice(0, 3).join(' • ')}
                          </div>
                        )}

                        {/* Book Button - Filled color for clear call-to-action */}
                        <Button
                          className={`w-full ${expandedCard === room.id ? "mt-3" : "mt-1"} text-xs h-7 bg-black text-white hover:bg-gray-800 border-black`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookClick(room);
                          }}
                        >
                          Book
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-full max-w-4xl">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <iframe 
                width="100%" 
                height="453" 
                src="https://www.youtube.com/embed/flC9vf0vaKg?start=22&autoplay=1&mute=1" 
                title="AFRICA FOOTPRINTS LODGE" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        </div>

    </div>
      )}
    </div>
  );
};

export default Book;
