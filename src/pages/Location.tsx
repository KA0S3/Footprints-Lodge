import { MapPin, Coffee, ShoppingBag, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import neighborhoodImg from "@/assets/neighborhood.jpg";

const categories = [
  { icon: Coffee, label: "Cafés & Coffee", count: 18 },
  { icon: Utensils, label: "Restaurants", count: 22 },
  { icon: ShoppingBag, label: "Shops", count: 12 },
];

const spots = [
  { name: "Mugg & Bean", type: "Café", walk: "4 min" },
  { name: "Steers", type: "Fast food", walk: "5 min" },
  { name: "Woolworths Food", type: "Grocery", walk: "8 min" },
  { name: "Ocean Basket", type: "Restaurant", walk: "6 min" },
  { name: "Vida e Caffè", type: "Coffee", walk: "3 min" },
  { name: "Nando's", type: "Restaurant", walk: "6 min" },
];

const Location = () => (
  <article>
    <section className="relative h-56 md:h-72 overflow-hidden">
      <motion.img
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        src={neighborhoodImg}
        alt="Kempton Park neighbourhood near Footprints Lodge"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-background mb-1">Location</h1>
          <p className="text-background/80 flex items-center justify-center gap-1 text-sm">
            <MapPin size={14} /> Kempton Park, Gauteng
          </p>
        </div>
      </div>
    </section>

    <section className="container py-12">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="grid grid-cols-3 gap-4 mb-10">
          {categories.map((cat) => (
            <div key={cat.label} className="bg-card rounded-lg border p-4 text-center">
              <cat.icon size={18} className="mx-auto mb-2 text-primary" />
              <div className="text-xl font-bold">{cat.count}</div>
              <div className="text-xs text-muted-foreground">{cat.label}</div>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-lg overflow-hidden border mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28636.40894158!2d28.2171!3d-26.1076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9512f2e1d34d57%3A0xa97c64fa20261220!2sKempton%20Park%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1704912345678!5m2!1sen!2sus"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Footprints Lodge location in Kempton Park"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h2 className="font-display text-xl font-semibold mb-4">Nearby</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {spots.map((spot) => (
              <motion.div
                key={spot.name}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-between p-3 rounded-lg border bg-card"
              >
                <div>
                  <div className="text-sm font-medium">{spot.name}</div>
                  <div className="text-xs text-muted-foreground">{spot.type}</div>
                </div>
                <span className="text-xs text-primary font-medium">{spot.walk}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </article>
);

export default Location;
