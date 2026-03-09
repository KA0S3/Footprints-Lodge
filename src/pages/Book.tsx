import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, Bed, Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import room1Image from "@/assets/room-1.jpg";
import room2Image from "@/assets/room-2.jpg";
import heroRoomImage from "@/assets/hero-room.jpg";
import Rooms from "./Rooms";

const Book = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [showRoomsDetails, setShowRoomsDetails] = useState(false);
  const navigate = useNavigate();

  const roomTypes = [
    {
      id: "transit",
      title: "The Transit",
      description: "Optimized for 1–3 day stays",
      beds: "2 Single or 1 Double bed",
      image: room1Image
    },
    {
      id: "studio", 
      title: "The Studio",
      description: "Our signature balance of comfort and utility",
      beds: "2 Single or 1 Double bed",
      image: room2Image
    },
    {
      id: "suite",
      title: "The Suite", 
      description: "Expanded luxury for groups or long-stay comfort",
      beds: "Sleeps 4 (King bed configuration)",
      image: heroRoomImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
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
        <div className="h-screen overflow-hidden flex items-center justify-center p-4">
          <div className="w-full max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Choose Your Room
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select the perfect accommodation for your stay at Footprints Lodge
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="flex flex-row justify-center items-start gap-8 -mt-[40px] px-8">
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-80 h-96 cursor-pointer"
              onClick={() => {
                if (selectedRoom === room.id) {
                  // If already selected, navigate to the corresponding page
                  if (room.id === "transit") {
                    setShowRoomsDetails(true);
                  } else if (room.id === "studio") {
                    navigate("/studio");
                  } else if (room.id === "suite") {
                    navigate("/suite");
                  }
                } else {
                  // If not selected, just select it
                  setSelectedRoom(room.id);
                }
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
                  width: "220px",
                  height: "180px",
                  borderRadius: "0"
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  {/* Room Title - Dark Serif */}
                  <h3 className="font-serif text-lg font-bold text-gray-900 leading-tight">
                    {room.title}
                  </h3>

                  {/* Room Details - Sans-serif */}
                  <p className="text-gray-600 text-xs leading-relaxed font-sans">
                    {room.description}
                  </p>

                  {/* Bed Configuration - Sans-serif */}
                  <div className="text-gray-700 text-xs font-sans font-medium">
                    {room.beds}
                  </div>

                  {/* Select Button - Centered */}
                  <Button
                    variant={selectedRoom === room.id ? "default" : "outline"}
                    size="sm"
                    className="w-full mt-2 text-xs h-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (room.id === "transit") {
                        setShowRoomsDetails(true);
                      } else if (room.id === "studio") {
                        navigate("/studio");
                      } else if (room.id === "suite") {
                        navigate("/suite");
                      } else {
                        setSelectedRoom(room.id);
                      }
                    }}
                  >
                    {selectedRoom === room.id ? "Selected" : "Select"}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

              </div>
    </div>
      )}
    </div>
  );
};

export default Book;
