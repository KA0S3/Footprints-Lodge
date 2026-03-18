import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wifi, Tv, Coffee, Wind, Bath, Users, X, Bed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface RoomInventory {
  id: string;
  roomName: string;
  category: string;
  size: string;
  maxOccupancy: string;
  bedConfiguration: string;
  price: string;
  description: string;
  keyAmenities: {
    icon: any;
    label: string;
  }[];
  tag?: string;
}

interface ParsedRoomConfig {
  maxOccupancy: string;
  bedConfiguration: string;
  amenities: string[];
}

interface AmenityIcon {
  icon: any;
  label: string;
}

const getAmenityIcon = (amenityText: string): AmenityIcon => {
  const text = amenityText.toLowerCase();
  if (text.includes('tv') || text.includes('dstv') || text.includes('satellite')) return { icon: Tv, label: amenityText };
  if (text.includes('aircon') || text.includes('air')) return { icon: Wind, label: amenityText };
  if (text.includes('kettle') || text.includes('coffee') || text.includes('tea')) return { icon: Coffee, label: amenityText };
  if (text.includes('bath') || text.includes('en-suite') || text.includes('shower')) return { icon: Bath, label: amenityText };
  if (text.includes('desk')) return { icon: Wifi, label: amenityText };
  if (text.includes('hairdryer')) return { icon: Wifi, label: amenityText };
  if (text.includes('safe')) return { icon: Wifi, label: amenityText };
  if (text.includes('refrigerator') || text.includes('fridge')) return { icon: Wifi, label: amenityText };
  if (text.includes('iron')) return { icon: Wifi, label: amenityText };
  if (text.includes('microwave')) return { icon: Wifi, label: amenityText };
  if (text.includes('blanket')) return { icon: Wifi, label: amenityText };
  if (text.includes('pillow')) return { icon: Wifi, label: amenityText };
  if (text.includes('fan')) return { icon: Wind, label: amenityText };
  if (text.includes('convert') || text.includes('voltage')) return { icon: Wifi, label: amenityText };
  if (text.includes('towel')) return { icon: Bath, label: amenityText };
  if (text.includes('non-smoking')) return { icon: Wifi, label: amenityText };
  if (text.includes('sitting') || text.includes('couch') || text.includes('chairs')) return { icon: Users, label: amenityText };
  if (text.includes('lounge')) return { icon: Users, label: amenityText };
  if (text.includes('bedroom')) return { icon: Bed, label: amenityText };
  return { icon: Wifi, label: amenityText };
};

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

  // External booking links mapping
  const bookingLinks = {
    "quick-stay": "https://book.nightsbridge.com/11584?bbrtid=22",
    "compact-queen": "https://book.nightsbridge.com/11584?bbrtid=20",
    "comfy-king-twin": "https://book.nightsbridge.com/11584?bbrtid=3",
    "family-2-1": "https://book.nightsbridge.com/11584?bbrtid=16",
    "family-2-2": "https://book.nightsbridge.com/11584?bbrtid=21"
  };

  const roomInventory: RoomInventory[] = [
    // Category A: Quick Stay (Studio)
    {
      id: "quick-stay",
      roomName: "Quick Stay",
      category: "Studio",
      size: "20m²",
      maxOccupancy: "2 Adults",
      bedConfiguration: "Sleeps 1-2 • Compact design • Workspace • Private entrance",
      price: "R800",
      description: "A compact, minimalist guest room perfect for short stays. Features modern finishes, a practical design, a dedicated workspace, and a private ground-floor entrance.",
      keyAmenities: [
        { icon: Wind, label: "Ceiling fan" },
        { icon: Wifi, label: "Desk" },
        { icon: Wifi, label: "Converters/Voltage adaptors" },
        { icon: Bath, label: "Shower only" },
        { icon: Bath, label: "Towels" }
      ],
      tag: "No-contact"
    },
    
    // Category B: Compact Queen (Standard)
    {
      id: "compact-queen",
      roomName: "Compact Queen",
      category: "Standard",
      size: "22m²",
      maxOccupancy: "2 Adults",
      bedConfiguration: "Sleeps 2 • Queen Bed • White linen • Tranquil atmosphere",
      price: "R950",
      description: "A minimalistic, standard queen room featuring white linen and a tranquil atmosphere. Designed for solo travelers or couples who prioritize a clean, functional space.",
      keyAmenities: [
        { icon: Bed, label: "Queen Bed" },
        { icon: Tv, label: "DSTV/Satellite TV" },
        { icon: Wifi, label: "Non-smoking" },
        { icon: Wifi, label: "Safe" },
        { icon: Bath, label: "Shower only" }
      ]
    },
    
    // Category C: Comfy King / Twin (Business)
    {
      id: "comfy-king-twin",
      roomName: "Comfy King / Twin",
      category: "Business",
      size: "30m²",
      maxOccupancy: "2 Adults",
      bedConfiguration: "Sleeps 2 • King or Twin beds • Sitting area • Premium environment",
      price: "R1200",
      description: "A spacious, business-class room offering more room than a standard stay. Includes a versatile King or Twin bed configuration, comfortable seating for relaxation, and air-conditioning.",
      keyAmenities: [
        { icon: Wind, label: "Air-con" },
        { icon: Users, label: "Sitting area" },
        { icon: Coffee, label: "Coffee/Tea facilities" },
        { icon: Wifi, label: "Desk" },
        { icon: Wifi, label: "Hairdryer" }
      ]
    },
    
    // Category D: Family 2+1 (Family Room)
    {
      id: "family-2-1",
      roomName: "Family 2+1",
      category: "Family Room",
      size: "36m²",
      maxOccupancy: "3 Guests",
      bedConfiguration: "Sleeps 3 • King bed + Single bed • Private en-suite • Climate control",
      price: "R1500",
      description: "A comfortable family-oriented room able to accommodate up to three guests. Features a King bed and one Single bed with a layout designed to balance shared space with individual comfort.",
      keyAmenities: [
        { icon: Wind, label: "Air-con" },
        { icon: Tv, label: "DSTV" },
        { icon: Wifi, label: "Refrigerator" },
        { icon: Wifi, label: "Iron/Ironing board" },
        { icon: Bath, label: "Shower only" }
      ]
    },
    
    // Category E: Family 2+2 (Family Suite)
    {
      id: "family-2-2",
      roomName: "Family 2+2",
      category: "Family Suite",
      size: "48m²",
      maxOccupancy: "4 Guests",
      bedConfiguration: "Sleeps 4 • 2 Bedrooms (King/Twin configs) • Shared lounge • Private bathroom",
      price: "R1900",
      description: "Our premier Family Suite features two separate rooms that can be configured with twin or king beds. Includes a shared private bathroom and a cozy lounge area for family bonding.",
      keyAmenities: [
        { icon: Bed, label: "2 Bedrooms" },
        { icon: Users, label: "Shared Lounge" },
        { icon: Wifi, label: "Microwave" },
        { icon: Coffee, label: "Coffee/Tea facilities" },
        { icon: Wifi, label: "Electric blanket" },
        { icon: Wifi, label: "Non-feather pillows" }
      ]
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
    // Open external booking link in new tab
    if (selectedRoom) {
      const bookingLink = bookingLinks[selectedRoom.id as keyof typeof bookingLinks];
      if (bookingLink) {
        window.open(bookingLink, '_blank');
      }
    }
    closeSpotlight();
  };

  // Mock room images - keeping existing paths
  const getRoomImages = (roomId: string) => {
    const imageMap: { [key: string]: string[] } = {
      'quick-stay': [
        '/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.24.jpeg',
        '/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.25.jpeg',
        '/assets/1Transit/WhatsApp Image 2026-03-11 at 14.06.26.jpeg'
      ],
      'compact-queen': [
        '/assets/2Studio/GOOSE-74.JPG',
        '/assets/2Studio/GOOSE-118.JPG'
      ],
      'comfy-king-twin': [
        '/assets/3Suite/GOOSE-100.JPG',
        '/assets/3Suite/GOOSE-105.JPG',
        '/assets/rooms/GOOSE-106.JPG'
      ],
      'family-2-1': [
        '/assets/3Suite/GOOSE-100.JPG',
        '/assets/rooms/GOOSE-108.JPG',
        '/assets/rooms/GOOSE-110.JPG'
      ],
      'family-2-2': [
        '/assets/rooms/GOOSE-73.JPG',
        '/assets/rooms/GOOSE-77.JPG',
        '/assets/rooms/GOOSE-86.JPG'
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
                    <div className="grid grid-cols-12 gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      <div className="col-span-3">Room</div>
                      <div className="col-span-2">Size</div>
                      <div className="col-span-2">Occupancy</div>
                      <div className="col-span-3">Configuration</div>
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
                        <div className="grid grid-cols-12 gap-2 px-4 py-3 items-center">
                          <div className="col-span-3">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-2">
                                {room.tag && (
                                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[8px] px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap">
                                    {room.tag}
                                  </span>
                                )}
                                <span className="font-display text-sm font-semibold text-slate-900">
                                  {room.roomName}
                                </span>
                              </div>
                              <span className="text-[10px] text-slate-500 font-medium">
                                {room.category}
                              </span>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <span className="text-xs text-slate-600 font-medium">
                              {room.size}
                            </span>
                          </div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-1">
                              <Users size={10} className="text-slate-400" />
                              <span className="text-xs text-slate-600 font-medium">
                                {room.maxOccupancy}
                              </span>
                            </div>
                          </div>
                          <div className="col-span-3">
                            <div className="space-y-1">
                              {parsedConfig.bedConfiguration && (
                                <div className="flex items-center gap-1">
                                  <Bed size={9} className="text-slate-400 flex-shrink-0" />
                                  <span className="text-xs text-slate-600">
                                    {parsedConfig.bedConfiguration.length > 25 ? parsedConfig.bedConfiguration.substring(0, 25) + '...' : parsedConfig.bedConfiguration}
                                  </span>
                                </div>
                              )}
                              {parsedConfig.amenities.length > 0 && (
                                <div className="flex flex-wrap gap-0.5">
                                  {parsedConfig.amenities.slice(0, 1).map((amenity, amenityIndex) => {
                                    const Icon = getAmenityIcon(amenity).icon;
                                    
                                    return (
                                      <div 
                                        key={amenityIndex} 
                                        className="flex items-center gap-0.5 px-1 py-0.5 bg-slate-50 rounded border border-slate-200/30"
                                      >
                                        <Icon size={6} className="text-slate-400" />
                                        <span className="text-[7px] text-slate-500 font-medium leading-tight">
                                          {amenity.length > 15 ? amenity.substring(0, 15) + '...' : amenity}
                                        </span>
                                      </div>
                                    );
                                  })}
                                  {parsedConfig.amenities.length > 1 && (
                                    <span className="text-[7px] text-slate-400 font-medium px-1 py-0.5 leading-tight">
                                      +{parsedConfig.amenities.length - 1}
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
                  All rooms include modern amenities and are designed for your comfort
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
                    Discover our carefully curated room categories designed to meet every traveler's needs, from business professionals to families seeking comfort and convenience.
                  </p>
                  <p>
                    Each room category is thoughtfully designed with specific amenities and configurations to ensure your stay is both comfortable and tailored to your requirements.
                  </p>
                  <p>
                    From compact studios ideal for short stays to spacious family suites, we offer the perfect accommodation solution for your visit to Gauteng.
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
                    {/* Description */}
                    <div>
                      <h3 className="font-semibold text-base text-slate-900 mb-2 flex items-center gap-2">
                        <div className="w-1 h-4 bg-primary rounded-full"></div>
                        Description
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{selectedRoom.description}</p>
                    </div>
                    
                    {/* Room Info */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200/50">
                        <div className="text-xs text-slate-500 font-medium mb-1">Size</div>
                        <div className="font-semibold text-sm text-slate-900">{selectedRoom.size}</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200/50">
                        <div className="text-xs text-slate-500 font-medium mb-1">Occupancy</div>
                        <div className="font-semibold text-sm text-slate-900">{selectedRoom.maxOccupancy}</div>
                      </div>
                    </div>
                    
                    {/* Configuration */}
                    <div>
                      <h3 className="font-semibold text-base text-slate-900 mb-2 flex items-center gap-2">
                        <div className="w-1 h-4 bg-primary rounded-full"></div>
                        Configuration
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{selectedRoom.bedConfiguration}</p>
                    </div>
                    
                    {/* Key Amenities */}
                    <div>
                      <h3 className="font-semibold text-base text-slate-900 mb-3 flex items-center gap-2">
                        <div className="w-1 h-4 bg-primary rounded-full"></div>
                        Key Amenities
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedRoom.keyAmenities.map((amenity, index) => {
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
                          Book
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
