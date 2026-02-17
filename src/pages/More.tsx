import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, HelpCircle, MessageSquare, Info } from "lucide-react";

const links = [
  { to: "/how-it-works", label: "How It Works", description: "Step-by-step self check-in guide", icon: Info },
  { to: "/location", label: "Location", description: "Find us in Kempton Park, Gauteng", icon: MapPin },
  { to: "/faq", label: "FAQ", description: "Common questions answered", icon: HelpCircle },
  { to: "/contact", label: "Contact", description: "Get in touch with our team", icon: MessageSquare },
];

const More = () => {
  return (
    <article className="container py-16 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3 text-center">More</h1>
        <p className="text-muted-foreground text-center mb-12">
          Everything else you need to know about Footprints Lodge.
        </p>
      </motion.div>

      <div className="grid gap-4">
        {links.map((link, i) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          >
            <Link
              to={link.to}
              className="flex items-center gap-4 p-5 rounded-lg border bg-card hover:bg-muted/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <link.icon size={18} className="text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                  {link.label}
                </h2>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </article>
  );
};

export default More;
