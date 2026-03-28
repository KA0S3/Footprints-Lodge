import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Coffee, ShoppingBag, Utensils, Car, Plane, Heart, IceCream, Film, Clock, Phone, Star, ChevronRight, Hospital, Train, Bus, Gamepad2, Activity } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const MobileLocation = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('dining');

  if (!isMobile) {
    return <div>Redirecting to desktop version...</div>;
  }

  const categories = [
    { icon: Film, label: "Entertainment", count: "15+", description: "Casinos, cinemas, theatres, trampolines, spas" },
    { icon: Utensils, label: "Restaurants", count: "25+", description: "Cafés, restaurants, bars, and dining venues" },
    { icon: ShoppingBag, label: "Shops", count: "150+", description: "From boutique stores to major retailers" },
  ];

  const nearbyAmenities = {
    cafes: [
      { name: "Mugg & Bean", type: "Café Restaurant", walk: "4 min", description: "Full breakfast menu, coffee, light meals", hours: "6:00 - 22:00" },
      { name: "Vida e Caffè", type: "Artisanal Coffee", walk: "3 min", description: "Premium coffee, pastries, WiFi", hours: "6:30 - 18:00" },
      { name: "The Frida Cafe", type: "Specialty Coffee", walk: "5 min", description: "Mexican-inspired cafe, cakes, fresh baked goods", hours: "7:00 - 18:00" },
      { name: "Dekadent Coffee Shop", type: "Specialty Coffee", walk: "6 min", description: "Artisanal coffee, baked goods, light meals", hours: "7:00 - 18:00" },
    ],
    restaurants: [
      { name: "Nando's", type: "Portuguese Grill", walk: "6 min", description: "Flame-grilled chicken, peri-peri", hours: "10:30 - 22:00" },
      { name: "Ocean Basket", type: "Seafood Restaurant", walk: "6 min", description: "Fresh seafood, sushi, family dining", hours: "11:00 - 22:00" },
      { name: "Spur", type: "Family Restaurant", walk: "8 min", description: "Steakhouse, family-friendly", hours: "11:00 - 22:00" },
      { name: "Panarottis", type: "Italian", walk: "8 min", description: "Pizza, pasta, Italian cuisine", hours: "11:00 - 22:00" },
    ],
    shopping: [
      { name: "Woolworths Food", type: "Grocery & Gourmet", walk: "8 min", description: "Premium groceries, ready meals", hours: "8:00 - 20:00" },
      { name: "Checkers Hyper", type: "Supermarket", walk: "10 min", description: "Full supermarket, household goods", hours: "7:00 - 21:00" },
      { name: "Pick n Pay", type: "Supermarket", walk: "10 min", description: "Groceries, clothing, general merchandise", hours: "7:00 - 21:00" },
      { name: "Game", type: "Electronics & Appliances", walk: "10 min", description: "Electronics, home appliances", hours: "9:00 - 19:00" },
    ],
    entertainment: [
      { name: "WiiJump Trampoline Park", type: "Trampoline Park", walk: "8 min", description: "The Ultimate Trampoline Park at Harvest Place", hours: "9:00 - 19:00" },
      { name: "Nu Metro Emperors Palace", type: "Luxury Cinema", walk: "15 min", description: "One of Africa's largest cinemas with 4DX and Xtreme theatres", hours: "10:00 - 23:00" },
      { name: "Emperors Palace Casino", type: "Casino & Gaming", walk: "15 min", description: "24-hour casino with gaming and entertainment", hours: "24/7" },
      { name: "The Magic Company", type: "Arcade & Games", walk: "15 min", description: "Family fun arcade at Emperors Palace", hours: "10:00 - 22:00" },
    ],
    essential: [
      { name: "Netcare 911 Emergency", type: "Emergency Medical Services", walk: "5 min", description: "24/7 emergency response, paramedic services", hours: "24/7" },
      { name: "Dis-Chem Pharmacy", type: "Pharmacy & Health", walk: "12 min", description: "Full pharmacy, medications, health products", hours: "8:00 - 19:00" },
      { name: "ATM Network", type: "Banking & ATMs", walk: "2 min", description: "Multiple ATMs available nearby including Capitec Bank", hours: "24/7" },
      { name: "Kempton Park SAPS", type: "Police Station", walk: "8 min", description: "Local police station for safety and security", hours: "24/7" },
    ]
  };

  const tabs = [
    { id: 'dining', label: 'Dining & Cuisine', icon: Utensils },
    { id: 'shopping', label: 'Shopping & Retail', icon: ShoppingBag },
    { id: 'entertainment', label: 'Entertainment', icon: Film },
    { id: 'essential', label: 'Essential Services', icon: Heart },
    { id: 'transport', label: 'Transportation', icon: Car },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with tabs */}
      <motion.header 
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container flex items-center justify-between h-12">
          <Link to="/book" className="font-display text-lg font-semibold text-foreground tracking-tight">
            Footprints
          </Link>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="hero" size="sm" asChild className="shadow-lg hover:shadow-xl transition-all duration-200">
              <Link to="/book">Book Now</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="bg-muted p-1">
          <div className="container">
            <div className="grid grid-cols-5 gap-1">
              <Link
                to="/mobile-about"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
              >
                About
              </Link>
              <Link
                to="/mobile-location"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all bg-background text-foreground shadow-sm text-xs"
              >
                Location
              </Link>
              <Link
                to="/mobile-gallery"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
              >
                Gallery
              </Link>
              <Link
                to="/mobile-faq"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
              >
                FAQ
              </Link>
              <Link
                to="/mobile-contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all text-muted-foreground hover:text-foreground text-xs"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin size={24} className="text-primary" />
            </div>
            <h1 className="font-display text-2xl font-semibold text-primary">Location</h1>
          </div>
          
          {/* Categories Overview */}
          <div className="grid grid-cols-1 gap-4">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <cat.icon size={20} className="text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-xl font-bold">{cat.count}</div>
                    <div className="text-sm font-medium">{cat.label}</div>
                    <div className="text-xs text-muted-foreground">{cat.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Map Section */}
          <motion.div 
            className="relative w-full h-56 bg-gray-100 rounded-xl overflow-hidden border border-border/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <img
              src="/assets/MAP.png"
              alt="Footprints Lodge Location Map"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none" />
          </motion.div>
          
          {/* Tab Navigation */}
          <div className="border-b border-border">
            <div className="grid grid-cols-5 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-1 py-2 text-xs transition-colors ${
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <tab.icon size={14} />
                  <span className="hidden sm:inline">{tab.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Dining Tab */}
            {activeTab === 'dining' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Cafés */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Coffee className="text-primary" size={18} />
                    <h3 className="font-semibold text-foreground">Cafés & Coffee</h3>
                  </div>
                  <div className="space-y-3">
                    {nearbyAmenities.cafes.map((venue) => (
                      <motion.div
                        key={venue.name}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{venue.name}</div>
                            <div className="text-xs text-muted-foreground">{venue.type}</div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                              {venue.walk}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{venue.description}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={12} />
                          {venue.hours}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Restaurants */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Utensils className="text-primary" size={18} />
                    <h3 className="font-semibold text-foreground">Restaurants</h3>
                  </div>
                  <div className="space-y-3">
                    {nearbyAmenities.restaurants.map((venue) => (
                      <motion.div
                        key={venue.name}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{venue.name}</div>
                            <div className="text-xs text-muted-foreground">{venue.type}</div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                              {venue.walk}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{venue.description}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={12} />
                          {venue.hours}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Shopping Tab */}
            {activeTab === 'shopping' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-3">
                  {nearbyAmenities.shopping.map((venue) => (
                    <motion.div
                      key={venue.name}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{venue.name}</div>
                          <div className="text-xs text-muted-foreground">{venue.type}</div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {venue.walk}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{venue.description}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {venue.hours}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Entertainment Tab */}
            {activeTab === 'entertainment' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-3">
                  {nearbyAmenities.entertainment.map((venue) => (
                    <motion.div
                      key={venue.name}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{venue.name}</div>
                          <div className="text-xs text-muted-foreground">{venue.type}</div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {venue.walk}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{venue.description}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {venue.hours}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Essential Services Tab */}
            {activeTab === 'essential' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-3">
                  {nearbyAmenities.essential.map((venue) => (
                    <motion.div
                      key={venue.name}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{venue.name}</div>
                          <div className="text-xs text-muted-foreground">{venue.type}</div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {venue.walk}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{venue.description}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {venue.hours}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Transportation Tab */}
            {activeTab === 'transport' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-3">
                  <motion.div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Plane className="text-primary" size={18} />
                      <div className="font-semibold text-sm">OR Tambo International Airport</div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Major international airport with worldwide connections</p>
                    <div className="flex items-center gap-1 text-xs text-primary font-medium">
                      <span className="bg-primary/10 px-2 py-1 rounded">10 mins drive</span>
                    </div>
                  </motion.div>
                  
                  <motion.div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Train className="text-primary" size={18} />
                      <div className="font-semibold text-sm">Rhodesfield Gautrain Station</div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Rapid rail link to Johannesburg and Pretoria</p>
                    <div className="flex items-center gap-1 text-xs text-primary font-medium">
                      <span className="bg-primary/10 px-2 py-1 rounded">8 mins drive</span>
                    </div>
                  </motion.div>
                  
                  <motion.div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Car className="text-primary" size={18} />
                      <div className="font-semibold text-sm">Major Highway Access</div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Easy access to R21, R24, and N12 highways</p>
                    <div className="flex items-center gap-1 text-xs text-primary font-medium">
                      <span className="bg-primary/10 px-2 py-1 rounded">2 mins drive</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MobileLocation;
