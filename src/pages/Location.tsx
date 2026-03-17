import { MapPin, Coffee, ShoppingBag, Utensils, Car, Plane, Heart, IceCream, Film, Clock, Phone, Star, ChevronRight, Hospital, Train, Bus, Gamepad2, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

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
    { name: "Innos Cafe", type: "Coffee & Light Meals", walk: "8 min", description: "Coffee shop with breakfast and lunch options", hours: "6:00 - 19:00" },
    { name: "Milky Lane", type: "Dessert & Ice Cream", walk: "8 min", description: "Ice cream, milkshakes, desserts", hours: "9:00 - 21:00" },
  ],
  restaurants: [
    { name: "Nando's", type: "Portuguese Grill", walk: "6 min", description: "Flame-grilled chicken, peri-peri", hours: "10:30 - 22:00" },
    { name: "Ocean Basket", type: "Seafood Restaurant", walk: "6 min", description: "Fresh seafood, sushi, family dining", hours: "11:00 - 22:00" },
    { name: "Spur", type: "Family Restaurant", walk: "8 min", description: "Steakhouse, family-friendly", hours: "11:00 - 22:00" },
    { name: "Panarottis", type: "Italian", walk: "8 min", description: "Pizza, pasta, Italian cuisine", hours: "11:00 - 22:00" },
    { name: "Grub House", type: "Restaurant & Grill", walk: "7 min", description: "Casual dining with grill specialties", hours: "11:00 - 22:00" },
    { name: "Roccomamas", type: "Burger Restaurant", walk: "5 min", description: "Smashburgers, hot wings, rockin ribs", hours: "10:00 - 22:00" },
    { name: "Cappello", type: "Italian Restaurant", walk: "6 min", description: "Italian cuisine with full service", hours: "11:00 - 23:00" },
  ],
  takeaways: [
    { name: "McDonald's", type: "Fast Food", walk: "7 min", description: "Burgers, fries, quick meals", hours: "6:00 - 23:00" },
    { name: "KFC", type: "Fast Food", walk: "6 min", description: "Fried chicken, meals, delivery", hours: "10:00 - 22:00" },
    { name: "Steers", type: "Fast Food", walk: "5 min", description: "Burgers, quick meals", hours: "10:00 - 22:00" },
    { name: "Roman's Pizza", type: "Pizza Takeaway", walk: "8 min", description: "Pizza delivery and collection", hours: "10:00 - 22:00" },
    { name: "Chicken Licken", type: "Fast Food", walk: "6 min", description: "Fried chicken, quick meals", hours: "10:00 - 22:00" },
    { name: "Pie City", type: "Takeaway Bakery", walk: "10 min", description: "Pies, pastries, baked goods", hours: "7:00 - 20:00" },
  ],
  bars: [
    { name: "Tiger's Milk", type: "Bar & Grill", walk: "3 min", description: "Craft beer, cocktails, burgers, sunset deck", hours: "11:00 - 23:00" },
    { name: "Hennie's", type: "Sports Bar & Grill", walk: "4 min", description: "Sports bar with grill, huge food selection", hours: "11:00 - 23:00" },
    { name: "Bossa", type: "Restaurant & Bar", walk: "5 min", description: "Full bar, cocktails, veranda dining", hours: "8:00 - 02:00" },
    { name: "Cappello's", type: "Italian Restaurant & Bar", walk: "6 min", description: "Italian cuisine with full bar service", hours: "11:00 - 23:00" },
  ],
  dining: [
    { name: "Mugg & Bean", type: "Café Restaurant", walk: "4 min", description: "Full breakfast menu, coffee, light meals", hours: "6:00 - 22:00" },
    { name: "Vida e Caffè", type: "Artisanal Coffee", walk: "3 min", description: "Premium coffee, pastries, WiFi", hours: "6:30 - 18:00" },
    { name: "Nando's", type: "Portuguese Grill", walk: "6 min", description: "Flame-grilled chicken, peri-peri", hours: "10:30 - 22:00" },
    { name: "Ocean Basket", type: "Seafood Restaurant", walk: "6 min", description: "Fresh seafood, sushi, family dining", hours: "11:00 - 22:00" },
    { name: "Steers", type: "Fast Food", walk: "5 min", description: "Burgers, quick meals", hours: "10:00 - 22:00" },
    { name: "Spur", type: "Family Restaurant", walk: "8 min", description: "Steakhouse, family-friendly", hours: "11:00 - 22:00" },
    { name: "Panarottis", type: "Italian", walk: "8 min", description: "Pizza, pasta, Italian cuisine", hours: "11:00 - 22:00" },
    { name: "Milky Lane", type: "Dessert & Ice Cream", walk: "8 min", description: "Ice cream, milkshakes, desserts", hours: "9:00 - 21:00" },
  ],
  shopping: [
    { name: "Woolworths Food", type: "Grocery & Gourmet", walk: "8 min", description: "Premium groceries, ready meals", hours: "8:00 - 20:00" },
    { name: "Checkers Hyper", type: "Supermarket", walk: "10 min", description: "Full supermarket, household goods", hours: "7:00 - 21:00" },
    { name: "Pick n Pay", type: "Supermarket", walk: "10 min", description: "Groceries, clothing, general merchandise", hours: "7:00 - 21:00" },
    { name: "Clicks", type: "Pharmacy & Beauty", walk: "10 min", description: "Pharmacy, cosmetics, health products", hours: "8:00 - 19:00" },
    { name: "Game", type: "Electronics & Appliances", walk: "10 min", description: "Electronics, home appliances", hours: "9:00 - 19:00" },
    { name: "Edgars", type: "Fashion Department Store", walk: "10 min", description: "Clothing, cosmetics, accessories", hours: "9:00 - 19:00" },
  ],
  entertainment: [
    { name: "WiiJump Trampoline Park", type: "Trampoline Park", walk: "8 min", description: "The Ultimate Trampoline Park at Harvest Place", hours: "9:00 - 19:00" },
    { name: "Nu Metro Emperors Palace", type: "Luxury Cinema", walk: "15 min", description: "One of Africa's largest cinemas with 4DX and Xtreme theatres", hours: "10:00 - 23:00" },
    { name: "Emperors Palace Casino", type: "Casino & Gaming", walk: "15 min", description: "24-hour casino with gaming and entertainment", hours: "24/7" },
    { name: "The Magic Company", type: "Arcade & Games", walk: "15 min", description: "Family fun arcade at Emperors Palace", hours: "10:00 - 22:00" },
    { name: "Festival Mall Arcade", type: "Gaming Arcade", walk: "10 min", description: "Modern arcade gaming center", hours: "9:00 - 21:00" },
  ],
  essential: [
    { name: "Netcare 911 Emergency", type: "Emergency Medical Services", walk: "5 min", description: "24/7 emergency response, paramedic services", hours: "24/7" },
    { name: "Dis-Chem Pharmacy", type: "Pharmacy & Health", walk: "12 min", description: "Full pharmacy, medications, health products", hours: "8:00 - 19:00" },
    { name: "Clicks Pharmacy", type: "Pharmacy & Health", walk: "10 min", description: "Prescription medication, cosmetics, health", hours: "8:00 - 19:00" },
    { name: "ATM Network", type: "Banking & ATMs", walk: "2 min", description: "Multiple ATMs available nearby including Capitec Bank", hours: "24/7" },
    { name: "Kempton Park SAPS", type: "Police Station", walk: "8 min", description: "Local police station for safety and security", hours: "24/7" },
    { name: "Security Services", type: "Safety & Security", walk: "Local", description: "24/7 private security in suburban area", hours: "24/7" },
  ]
};

const Location = () => {
  const [activeTab, setActiveTab] = useState('dining');

  const tabs = [
    { id: 'dining', label: 'Dining & Cuisine', icon: Utensils },
    { id: 'shopping', label: 'Shopping & Retail', icon: ShoppingBag },
    { id: 'entertainment', label: 'Entertainment', icon: Film },
    { id: 'essential', label: 'Essential Services', icon: Heart },
    { id: 'transportation', label: 'Transportation', icon: Car },
  ];

  const categoryToTabMap: { [key: string]: string } = {
    "Entertainment": 'entertainment',
    "Restaurants": 'dining', 
    "Shops": 'shopping',
  };

  const handleCategoryClick = (categoryLabel: string) => {
    const correspondingTab = categoryToTabMap[categoryLabel];
    if (correspondingTab) {
      setActiveTab(correspondingTab);
      // Scroll to specific sections
      setTimeout(() => {
        if (categoryLabel === "Cafés & Coffee") {
          const cafesSection = document.getElementById('cafes-section');
          if (cafesSection) {
            cafesSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (categoryLabel === "Restaurants") {
          const restaurantsSection = document.getElementById('restaurants-section');
          if (restaurantsSection) {
            restaurantsSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // For other categories, scroll to the general tabs section
          const tabsSection = document.getElementById('amenities-tabs');
          if (tabsSection) {
            tabsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100); // Small delay to ensure tab content is rendered
    }
  };

  return (
    <article>
    {/* Hero Section with Extended Background */}
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/assets/outside/GOOSE-5.JPG" 
          alt="Footprints Lodge exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-green-400/50" />
      </div>
      <div className="absolute inset-0 bg-foreground/60">
        {/* Heading at very top */}
        <div className="text-center pt-6">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-background mb-2">Location</h1>
          <p className="text-background/80 flex items-center justify-center gap-1 text-sm">
            <MapPin size={14} /> Kempton Park, Gauteng
          </p>
        </div>
        
        {/* Two Column Layout positioned at top */}
        <div className="container mt-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Category Blocks */}
            <div className="space-y-4">
              <AnimatedSection className="space-y-4">
                {categories.map((cat, index) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-background/95 backdrop-blur-sm rounded-lg border p-4 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => handleCategoryClick(cat.label)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <cat.icon size={20} className="text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-xl font-bold">{cat.count}</div>
                        <div className="text-sm font-medium">{cat.label}</div>
                        <div className="text-xs text-muted-foreground">{cat.description}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatedSection>
            </div>

            {/* Right Column - Map */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-lg overflow-hidden border shadow-xl bg-background/95 backdrop-blur-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.23456789!2d28.217123456789!3d-26.107654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9512f2e1d34d57%3A0xa97c64fa20261220!2s1+Crestwood+St+Kempton+Park+1619!5e0!3m2!1sen!2sza!4v1704912345678!5m2!1sen!2sza"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Footprints Lodge location in Kempton Park"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* Detailed Amenities Section */}
    <section id="amenities-tabs" className="container py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.2}>
          <div className="mb-12">
            {/* Tab Navigation */}
            <div className="border-b border-border mb-8">
              <nav className="flex justify-between overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-colors whitespace-nowrap flex-1 justify-center ${
                      activeTab === tab.id
                        ? 'border-primary text-primary font-medium'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <tab.icon size={16} />
                    <span className="text-sm">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {/* Dining Tab */}
              {activeTab === 'dining' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/* Cafés Section */}
                  <div id="cafes-section" className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                      <Coffee className="text-primary" size={20} />
                      <h4 className="font-display text-lg font-semibold">Cafés & Coffee</h4>
                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                      {nearbyAmenities.cafes.map((venue) => (
                        <motion.div
                          key={venue.name}
                          whileHover={{ x: 4, scale: 1.02 }}
                          transition={{ duration: 0.15 }}
                          className="bg-card rounded-lg border p-4 hover:shadow-md transition-all"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <div className="font-semibold text-base">{venue.name}</div>
                              <div className="text-sm text-muted-foreground">{venue.type}</div>
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

                  {/* Restaurants Section */}
                  <div id="restaurants-section" className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                      <Utensils className="text-primary" size={20} />
                      <h4 className="font-display text-lg font-semibold">Restaurants</h4>
                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                      {nearbyAmenities.restaurants.map((venue) => (
                        <motion.div
                          key={venue.name}
                          whileHover={{ x: 4, scale: 1.02 }}
                          transition={{ duration: 0.15 }}
                          className="bg-card rounded-lg border p-4 hover:shadow-md transition-all"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <div className="font-semibold text-base">{venue.name}</div>
                              <div className="text-sm text-muted-foreground">{venue.type}</div>
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

                  {/* Takeaways Section */}
                  <div className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                      <Utensils className="text-primary" size={20} />
                      <h4 className="font-display text-lg font-semibold">Takeaways & Fast Food</h4>
                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                      {nearbyAmenities.takeaways.map((venue) => (
                        <motion.div
                          key={venue.name}
                          whileHover={{ x: 4, scale: 1.02 }}
                          transition={{ duration: 0.15 }}
                          className="bg-card rounded-lg border p-4 hover:shadow-md transition-all"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <div className="font-semibold text-base">{venue.name}</div>
                              <div className="text-sm text-muted-foreground">{venue.type}</div>
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

                  {/* Bars & Pubs Section */}
                  <div className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="text-primary" size={20} />
                      <h4 className="font-display text-lg font-semibold">Bars & Pubs</h4>
                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                      {nearbyAmenities.bars.map((venue) => (
                        <motion.div
                          key={venue.name}
                          whileHover={{ x: 4, scale: 1.02 }}
                          transition={{ duration: 0.15 }}
                          className="bg-card rounded-lg border p-4 hover:shadow-md transition-all"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <div className="font-semibold text-base">{venue.name}</div>
                              <div className="text-sm text-muted-foreground">{venue.type}</div>
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
                >
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-3">Harvest Place - Premium Shopping Experience</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        An upscale shopping destination offering exclusive brands, fine dining, and luxury amenities. Just 8 minutes from Footprints Lodge.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-green-500" />
                          <span>Luxury Brands</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Utensils size={14} className="text-orange-500" />
                          <span>Fine Dining</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Activity size={14} className="text-red-500" />
                          <span>Trampoline Park</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-3">Festival Mall - Premier Shopping Destination</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Kempton Park's largest shopping centre, featuring over 150 stores, entertainment facilities, 
                        and dining options. Just 10 minutes from Footprints Lodge.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-500" />
                          <span>Anchor Stores</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Gamepad2 size={14} className="text-purple-500" />
                          <span>Arcade</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IceCream size={14} className="text-pink-500" />
                          <span>Ice Rink</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                    {nearbyAmenities.shopping.map((shop) => (
                      <motion.div
                        key={shop.name}
                        whileHover={{ x: 4, scale: 1.02 }}
                        transition={{ duration: 0.15 }}
                        className="bg-card rounded-lg border p-4 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <div className="font-semibold text-base">{shop.name}</div>
                            <div className="text-sm text-muted-foreground">{shop.type}</div>
                          </div>
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {shop.walk}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{shop.description}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={12} />
                          {shop.hours}
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
                >
                  <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                    {nearbyAmenities.entertainment.map((venue) => (
                      <motion.div
                        key={venue.name}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.15 }}
                        className="bg-card rounded-lg border p-4 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <div className="font-semibold text-base">{venue.name}</div>
                            <div className="text-sm text-muted-foreground">{venue.type}</div>
                          </div>
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {venue.walk}
                          </span>
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
                >
                  <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                    {nearbyAmenities.essential.map((service) => (
                      <motion.div
                        key={service.name}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.15 }}
                        className="bg-card rounded-lg border p-4 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <div className="font-semibold text-base">{service.name}</div>
                            <div className="text-sm text-muted-foreground">{service.type}</div>
                          </div>
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                            {service.walk}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{service.description}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={12} />
                          {service.hours}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Transportation Tab */}
              {activeTab === 'transportation' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Plane className="text-green-600" size={24} />
                        <div>
                          <h4 className="font-semibold">OR Tambo International Airport</h4>
                          <p className="text-sm text-muted-foreground">4 km away</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Perfect for international travelers and early morning flights. 
                        Easy access via R21 highway.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Train className="text-blue-600" size={24} />
                        <div>
                          <h4 className="font-semibold">Gautrain Station</h4>
                          <p className="text-sm text-muted-foreground">12 km away</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Rapid rail connection to Johannesburg, Pretoria, and the airport. 
                        Secure parking available.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card rounded-lg border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Bus size={16} className="text-primary" />
                        <h5 className="font-medium text-sm">Public Transport</h5>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Local bus routes within 500m, connecting to major hubs
                      </p>
                    </div>
                    <div className="bg-card rounded-lg border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Car size={16} className="text-primary" />
                        <h5 className="font-medium text-sm">Major Highways</h5>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Easy access to R21, N12, and N3 highways
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
    </article>
  );
};

export default Location;
