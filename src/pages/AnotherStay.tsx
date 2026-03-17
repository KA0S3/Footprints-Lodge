import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wifi, Tv, Coffee, Wind, Bath, Users, X, Bed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface RoomInventory {
  id: string;
  roomNumber: string;
  roomName: string;
  bedConfiguration: string;
  price: string;
  amenities: {
    icon: any;
    label: string;
  }[];
  route: string;
  tag?: string;
  section?: string;
}

interface ParsedRoomConfig {
  maxOccupancy: string;
  bedConfiguration: string;
  amenities: string[];
}

const parseBedConfiguration = (config: string): ParsedRoomConfig => {
  // Extract max occupancy (e.g., "Sleeps 1-2", "Sleeps 2-4", "Sleeps 2")
  const occupancyMatch = config.match(/Sleeps\s+(\d+(?:-\d+)?)/i);
  const maxOccupancy = occupancyMatch ? occupancyMatch[1] : "";
  
  // Remove occupancy and split by '•' to get remaining parts
  const remainingConfig = config.replace(/Sleeps\s+\d+(?:-\d+)?\s*•?\s*/i, '').trim();
  const parts = remainingConfig.split('•').map(part => part.trim()).filter(part => part);
  
  // First part is usually bed configuration
  const bedConfiguration = parts[0] || "";
  
  // Remaining parts are additional amenities/features
  const amenities = parts.slice(1);
  
  return {
    maxOccupancy,
    bedConfiguration,
    amenities
  };
};

const AnotherStay = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<RoomInventory | null>(null);
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRowBounds, setSelectedRowBounds] = useState<DOMRect | null>(null);

  const roomInventory: RoomInventory[] = [
    // Essential Stays Section
    {
      id: "quick-stay",
      roomNumber: "",
      roomName: "Quick Stay",
      bedConfiguration: "Sleeps 1-2 • Various (Newly Renovated)",
      price: "R800",
      amenities: [
        { icon: Bath, label: "En-suite Bathroom" }
      ],
      route: "/book",
      tag: "No-contact",
      section: "essential"
    },
    {
      id: "compact-standard",
      roomNumber: "",
      roomName: "Compact (Standard)",
      bedConfiguration: "Sleeps 2 • Queen Bed • TV • En-suite",
      price: "R950",
      amenities: [
        { icon: Tv, label: "Smart TV" },
        { icon: Bath, label: "En-suite Bathroom" }
      ],
      route: "/book",
      section: "essential"
    },
    
    // Standard & Premium Rooms Section
    {
      id: "king-twin",
      roomNumber: "",
      roomName: "King / Twin",
      bedConfiguration: "Sleeps 2 • King or 2 Twin Beds • TV • Aircon • Kettle • En-suite",
      price: "R1200",
      amenities: [
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "Aircon" },
        { icon: Coffee, label: "Kettle with tea/coffee" },
        { icon: Bath, label: "En-suite Bathroom" }
      ],
      route: "/suite"
    },
    {
      id: "family-room",
      roomNumber: "",
      roomName: "Family Room",
      bedConfiguration: "Sleeps 2-4 • Various Configurations • TV • Aircon • Kettle • En-suite • Large Space",
      price: "R1500",
      amenities: [
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "Aircon" },
        { icon: Coffee, label: "Kettle with tea/coffee" },
        { icon: Bath, label: "En-suite Bathroom" },
        { icon: Users, label: "Much larger floor plan" }
      ],
      route: "/family"
    },
    
    // The Flat Units Section
    {
      id: "flat-16",
      roomNumber: "",
      roomName: "The Flat: Unit 16",
      bedConfiguration: "Sleeps 2-4 • King + 1 Single OR 3 Singles • TV • Aircon • Kettle • En-suite • Family Layout",
      price: "R1600",
      amenities: [
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "Aircon" },
        { icon: Coffee, label: "Kettle with tea/coffee" },
        { icon: Bath, label: "En-suite Bathroom" },
        { icon: Users, label: "Family-style layout" }
      ],
      route: "/flat",
      section: "the-flat"
    },
    {
      id: "flat-17",
      roomNumber: "",
      roomName: "The Flat: Unit 17",
      bedConfiguration: "Sleeps 2-6 • King + 2 Singles OR 4 Singles • TV • Aircon • Kettle • En-suite • Large Family Layout",
      price: "R1900",
      amenities: [
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "Aircon" },
        { icon: Coffee, label: "Kettle with tea/coffee" },
        { icon: Bath, label: "En-suite Bathroom" },
        { icon: Users, label: "Large family-style layout" }
      ],
      route: "/flat",
      section: "the-flat"
    },
    {
      id: "flat-18",
      roomNumber: "",
      roomName: "The Flat: Unit 18",
      bedConfiguration: "Sleeps 2 • King or 2 Twin Beds • TV • Aircon • Kettle • En-suite",
      price: "R1300",
      amenities: [
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "Aircon" },
        { icon: Coffee, label: "Kettle with tea/coffee" },
        { icon: Bath, label: "En-suite Bathroom" }
      ],
      route: "/flat",
      section: "the-flat"
    },
    {
      id: "flat-19",
      roomNumber: "",
      roomName: "The Flat: Unit 19",
      bedConfiguration: "Sleeps 2 • Double Bed • TV • Aircon • Kettle • En-suite • Compact Size",
      price: "R1100",
      amenities: [
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "Aircon" },
        { icon: Coffee, label: "Kettle with tea/coffee" },
        { icon: Bath, label: "En-suite Bathroom" }
      ],
      route: "/flat",
      section: "the-flat"
    },
    
    // Conference Suite Section
    {
      id: "conference-suite",
      roomNumber: "",
      roomName: "Conference Suite",
      bedConfiguration: "Sleeps 4 • 2 Bedrooms (King/Twin configs) • TV • Aircon • Kettle • Large Lounge • Dual Bathrooms",
      price: "R2200",
      amenities: [
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "Aircon" },
        { icon: Coffee, label: "Kettle with tea/coffee" },
        { icon: Bath, label: "En-suite bathroom with two individual toilets" },
        { icon: Users, label: "Very large lounge" }
      ],
      route: "/conference",
      tag: "Versatile Space",
      section: "specialized"
    }
  ];

  const handleRoomSelect = (room: RoomInventory, event: React.MouseEvent) => {
    const rowElement = (event.currentTarget as HTMLElement);
    const bounds = rowElement.getBoundingClientRect();
    setSelectedRoom(room);
    setShowSpotlight(true);
    setCurrentImageIndex(0);
    setSelectedRowBounds(bounds);
  };

  const closeSpotlight = () => {
    setShowSpotlight(false);
    setSelectedRoom(null);
    setSelectedRowBounds(null);
  };

  const handleConfirmSelection = () => {
    if (selectedRoom) {
      navigate(selectedRoom.route);
      closeSpotlight();
    }
  };

  // Mock room images - in a real app, these would come from room data or API
  const getRoomImages = (roomId: string) => {
    const imageMap: { [key: string]: string[] } = {
      'quick-stay': [
        '/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg',
        '/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25.jpeg',
        '/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26.jpeg'
      ],
      'compact-standard': [
        '/assets/2Studio/GOOSE-74.JPG',
        '/assets/2Studio/GOOSE-118.JPG'
      ],
      'king-twin': [
        '/assets/3Suite/GOOSE-100.JPG',
        '/assets/3Suite/GOOSE-105.JPG',
        '/assets/rooms/GOOSE-106.JPG'
      ],
      'family-room': [
        '/assets/3Suite/GOOSE-100.JPG',
        '/assets/rooms/GOOSE-108.JPG',
        '/assets/rooms/GOOSE-110.JPG'
      ],
      'flat-16': [
        '/assets/rooms/GOOSE-73.JPG',
        '/assets/rooms/GOOSE-77.JPG',
        '/assets/rooms/GOOSE-86.JPG'
      ],
      'flat-17': [
        '/assets/rooms/GOOSE-73.JPG',
        '/assets/rooms/GOOSE-108.JPG',
        '/assets/rooms/GOOSE-110.JPG'
      ],
      'flat-18': [
        '/assets/rooms/GOOSE-106.JPG',
        '/assets/rooms/GOOSE-108.JPG',
        '/assets/rooms/GOOSE-77.JPG'
      ],
      'flat-19': [
        '/assets/2Studio/GOOSE-74.JPG',
        '/assets/2Studio/GOOSE-118.JPG'
      ],
      'conference-suite': [
        '/assets/rooms/GOOSE-110.JPG',
        '/assets/rooms/GOOSE-73.JPG',
        '/assets/rooms/GOOSE-77.JPG'
      ]
    };
    return imageMap[roomId] || ['/assets/placeholder.svg'];
  };

  // Prevent body scroll when spotlight is open
  useEffect(() => {
    if (showSpotlight) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSpotlight]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/book")}
            className="mb-6 gap-2"
          >
            <ArrowLeft size={16} />
            Back to Booking
          </Button>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Rooms
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select from our available rooms with detailed configurations and amenities
          </p>
        </motion.div>

        {/* Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Room Table (50%) */}
            <div className="lg:w-[50%]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-sm overflow-hidden"
              >
                <div className="max-h-[700px] overflow-y-auto">
                  {/* Table Header */}
                  <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-slate-200 px-4 py-2 z-10">
                    <div className="grid grid-cols-10 gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      <div className="col-span-4">Room</div>
                      <div className="col-span-4">Configuration</div>
                      <div className="col-span-2 text-center">Price</div>
                    </div>
                  </div>

                  {/* Table Rows */}
                  <div className="divide-y divide-slate-100">
                    {roomInventory.map((room, index) => {
                      const parsedConfig = parseBedConfiguration(room.bedConfiguration);
                      
                      return (
                      <motion.div
                        key={room.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.03 * index }}
                        className={`group hover:bg-slate-50/30 transition-all duration-300 cursor-pointer ${
                          selectedRoom?.id === room.id && showSpotlight 
                            ? 'relative z-[60] ring-2 ring-primary ring-offset-2 bg-primary/10 scale-105 shadow-lg' 
                            : showSpotlight && selectedRoom?.id !== room.id
                            ? 'opacity-30 pointer-events-none' 
                            : 'hover:scale-[1.02] hover:shadow-sm'
                        }`}
                        onClick={(event) => handleRoomSelect(room, event)}
                      >
                        <div className="grid grid-cols-10 gap-2 px-4 py-2 items-center">
                          <div className="col-span-4">
                            <div className="flex items-center gap-2">
                              {room.tag && (
                                <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[8px] px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap">
                                  {room.tag}
                                </span>
                              )}
                              <div className="flex items-center gap-1">
                                <span className="font-display text-sm font-semibold text-slate-900">
                                  {room.roomName}
                                </span>
                                {parsedConfig.maxOccupancy && (
                                  <>
                                    <span className="text-slate-300">•</span>
                                    <div className="flex items-center gap-0.5">
                                      <Users size={9} className="text-slate-400" />
                                      <span className="text-[9px] text-slate-500 font-medium">
                                        {parsedConfig.maxOccupancy}
                                      </span>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="col-span-4">
                            <div className="flex items-start gap-2">
                              {parsedConfig.bedConfiguration && (
                                <div className="flex items-center gap-1">
                                  <Bed size={10} className="text-slate-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-xs text-slate-600">
                                    {parsedConfig.bedConfiguration}
                                  </span>
                                </div>
                              )}
                              {parsedConfig.amenities.length > 0 && (
                                <div className="flex flex-wrap gap-0.5 mt-0.5">
                                  {parsedConfig.amenities.slice(0, 2).map((amenity, amenityIndex) => {
                                    const getAmenityIcon = (amenityText: string) => {
                                      const text = amenityText.toLowerCase();
                                      if (text.includes('tv')) return Tv;
                                      if (text.includes('aircon') || text.includes('air')) return Wind;
                                      if (text.includes('kettle') || text.includes('coffee') || text.includes('tea')) return Coffee;
                                      if (text.includes('bath') || text.includes('en-suite')) return Bath;
                                      return Wifi;
                                    };
                                    
                                    const Icon = getAmenityIcon(amenity);
                                    
                                    return (
                                      <div 
                                        key={amenityIndex} 
                                        className="flex items-center gap-0.5 px-1.5 py-0.5 bg-slate-50 rounded border border-slate-200/30"
                                      >
                                        <Icon size={7} className="text-slate-400" />
                                        <span className="text-[8px] text-slate-500 font-medium leading-tight">
                                          {amenity.length > 12 ? amenity.substring(0, 12) + '...' : amenity}
                                        </span>
                                      </div>
                                    );
                                  })}
                                  {parsedConfig.amenities.length > 2 && (
                                    <span className="text-[8px] text-slate-400 font-medium px-1.5 py-0.5 leading-tight">
                                      +{parsedConfig.amenities.length - 2}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-span-2 text-center">
                            <span className="font-mono text-sm font-semibold text-slate-900">
                              {room.price}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Footer Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-4 text-center"
              >
                <p className="text-xs text-slate-400">
                  All rooms include instant check-in, backup utilities & Wi-Fi
                </p>
              </motion.div>
            </div>

            {/* Right Column - About Us Teaser (50%) */}
            <div className={`lg:w-[50%] lg:sticky lg:top-24 lg:h-fit transition-all duration-300 ${
              showSpotlight ? 'opacity-30 pointer-events-none' : 'opacity-100'
            }`}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm"
              >
                <h2 className="font-serif text-2xl font-light text-slate-900 mb-4 leading-relaxed">
                  About Footprints Lodge
                </h2>
                <div className="space-y-3 font-serif text-base text-slate-700 leading-relaxed">
                  <p>
                    Nestled in Kempton Park, we offer a tranquil retreat where modern comfort meets thoughtful hospitality.
                  </p>
                  <p>
                    Each space is meticulously designed to provide not just accommodation, but an experience—where business travelers find their perfect workspace and leisure guests discover their peaceful sanctuary.
                  </p>
                  <p>
                    From essential Quick Stay rooms to versatile adaptive spaces, every corner reflects our commitment to your comfort and convenience.
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    asChild
                    className="group border-slate-300 hover:border-slate-400 transition-all duration-300 text-sm"
                  >
                    <Link to="/about" className="font-serif">
                      Learn More About Our Story
                      <ArrowLeft size={14} className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Blackout Overlay and Spotlight Showcase */}
      <AnimatePresence>
        {showSpotlight && selectedRoom && (
          <>
            {/* Blackout Overlay with Exclusion for Selected Row */}
            {selectedRowBounds && (
              <>
                {/* Top overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed left-0 right-0 top-0 bg-black/90 backdrop-blur-sm z-40"
                  style={{ height: `${selectedRowBounds.top}px` }}
                  onClick={closeSpotlight}
                />
                {/* Left overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed left-0 top-0 bottom-0 bg-black/90 backdrop-blur-sm z-40"
                  style={{ 
                    top: `${selectedRowBounds.top}px`,
                    width: `${selectedRowBounds.left}px`,
                    height: `${selectedRowBounds.height}px`
                  }}
                  onClick={closeSpotlight}
                />
                {/* Right overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-0 bottom-0 bg-black/90 backdrop-blur-sm z-40"
                  style={{ 
                    left: `${selectedRowBounds.right}px`,
                    top: `${selectedRowBounds.top}px`,
                    width: `calc(100% - ${selectedRowBounds.right}px)`,
                    height: `${selectedRowBounds.height}px`
                  }}
                  onClick={closeSpotlight}
                />
                {/* Bottom overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed left-0 right-0 bottom-0 bg-black/90 backdrop-blur-sm z-40"
                  style={{ 
                    top: `${selectedRowBounds.bottom}px`,
                    height: `calc(100% - ${selectedRowBounds.bottom}px)`
                  }}
                  onClick={closeSpotlight}
                />
              </>
            )}
            
            {/* Spotlight Showcase Lightbox */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-[3.5rem] left-0 h-[calc(100vh-3.5rem)] w-full lg:w-[50%] bg-white z-50 shadow-2xl overflow-hidden lg:left-[50%] border-l border-slate-200 rounded-r-2xl"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white p-4 relative border-b border-slate-200">
                <button
                  onClick={closeSpotlight}
                  className="absolute top-3 right-3 p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <X size={18} />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-6 bg-primary rounded-full"></div>
                  <div>
                    <h2 className="font-display text-xl font-bold tracking-tight">{selectedRoom.roomName}</h2>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col lg:flex-row h-[calc(100%-72px)]">
                {/* Image Gallery */}
                <div className="lg:w-2/5 relative bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="relative h-full overflow-hidden">
                    <img 
                      src={getRoomImages(selectedRoom.id)[currentImageIndex]} 
                      alt={selectedRoom.roomName}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    {getRoomImages(selectedRoom.id).length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                        {getRoomImages(selectedRoom.id).map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                              currentImageIndex === index ? 'bg-primary w-4' : 'bg-slate-400 hover:bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Room Details */}
                <div className="lg:w-3/5 p-5 overflow-y-auto bg-gradient-to-b from-white to-slate-50">
                  <div className="space-y-5">
                    {/* Configuration */}
                    <div>
                      <h3 className="font-semibold text-base text-slate-900 mb-2 flex items-center gap-2">
                        <div className="w-1 h-4 bg-primary rounded-full"></div>
                        Configuration
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{selectedRoom.bedConfiguration}</p>
                    </div>
                    
                    {/* Amenities */}
                    <div>
                      <h3 className="font-semibold text-base text-slate-900 mb-3 flex items-center gap-2">
                        <div className="w-1 h-4 bg-primary rounded-full"></div>
                        Amenities
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedRoom.amenities.map((amenity, index) => {
                          const Icon = amenity.icon;
                          return (
                            <div key={index} className="flex items-center gap-2 text-slate-700 p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-slate-200/50">
                              <Icon size={16} className="text-primary flex-shrink-0" />
                              <span className="text-xs font-medium">{amenity.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="border-t border-slate-200 pt-4">
                      <div className="flex items-end justify-between bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-slate-200/50">
                        <div>
                          <span className="text-xs text-slate-500 font-medium">Starting from</span>
                          <div className="font-display text-2xl font-bold text-slate-900 mt-1">
                            {selectedRoom.price}<span className="text-xs font-normal text-slate-500">/night</span>
                          </div>
                        </div>
                        <Button
                          onClick={handleConfirmSelection}
                          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 h-auto text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                        >
                          Confirm Selection
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnotherStay;
