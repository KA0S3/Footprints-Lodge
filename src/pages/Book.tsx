import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, Bed, Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Rooms from "./Rooms";

const Book = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [showRoomsDetails, setShowRoomsDetails] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const featuredRooms = [
    {
      id: "transit",
      title: "Quick Stay",
      description: "The Essentials - Optimized for speed and no-contact efficiency",
      beds: "Bed and bathroom only for 1-2 guests",
      image: "/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg"
    },
    {
      id: "studio", 
      title: "Standard Room",
      description: "The Standard - Queen bed, TV, and en-suite bathroom",
      beds: "Sleeps 2 guests with enhanced comfort",
      image: "/assets/2Studio/GOOSE-74.JPG"
    },
    {
      id: "suite",
      title: "King/Twin", 
      description: "The Flexible - Premium flagship with full amenities",
      beds: "King or Twin configuration for up to 4 guests",
      image: "/assets/3Suite/GOOSE-100.JPG"
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
    if (expandedCard === room.id) {
      // If already expanded, navigate to booking page
      setSelectedRoom(room.id);
      if (room.id === "transit") {
        setShowRoomsDetails(true);
      } else if (room.id === "studio") {
        navigate("/studio");
      } else if (room.id === "suite") {
        navigate("/suite");
      }
    } else {
      // If not expanded, expand it
      setExpandedCard(room.id);
    }
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

        {/* Three Static Cards */}
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
                    className="absolute bg-white p-6 shadow-2xl flex flex-col justify-between"
                    style={{
                      bottom: "-20px",
                      right: "-20px",
                      width: expandedCard === room.id ? "280px" : "220px",
                      height: expandedCard === room.id ? "280px" : "180px",
                      borderRadius: "8px",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`space-y-${expandedCard === room.id ? "4" : "2"} flex-1 flex flex-col justify-between`}>
                      {/* Room Title - Dark Serif */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 className={`font-serif font-bold text-gray-900 leading-tight flex-1 ${expandedCard === room.id ? "text-xl" : "text-lg"}`}>
                          {room.title}
                        </h3>
                      </div>

                      {/* Room Details - Sans-serif */}
                      <p className={`text-gray-600 leading-relaxed font-sans ${expandedCard === room.id ? "text-xs" : "text-[10px]"}`}>
                        {room.description}
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
                            • Free WiFi • Air Conditioning • Daily Housekeeping
                          </div>
                          <div className="text-gray-600 text-xs font-sans">
                            • Workspace • Smart TV • Coffee & Tea Facilities
                          </div>
                        </motion.div>
                      )}

                      {/* Bed Configuration - Sans-serif - hidden when expanded */}
                      {expandedCard !== room.id && (
                        <div className="text-gray-700 text-xs font-sans font-medium">
                          {room.beds}
                        </div>
                      )}

                      {/* Select Button - Centered */}
                      <Button
                        variant={selectedRoom === room.id ? "default" : "outline"}
                        size="sm"
                        className={`w-full ${expandedCard === room.id ? "mt-4" : "mt-2"} text-xs h-8`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRoomClick(room);
                        }}
                      >
                        {selectedRoom === room.id ? "Selected" : "Select"}
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

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
