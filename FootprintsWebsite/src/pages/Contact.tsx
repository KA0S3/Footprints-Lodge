import { Phone, Mail, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <article className="container py-16 max-w-2xl">
      <AnimatedSection className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3">Contact</h1>
        <p className="text-muted-foreground">We're here to help — reach us anytime.</p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { href: "tel:+27729859725", icon: Phone, title: "Call", sub: "+27 72 985 9725" },
            { href: "mailto:hello@footprintslodge.co.za", icon: Mail, title: "Email", sub: "hello@footprintslodge.co.za" },
            { href: "tel:+27729859725", icon: AlertTriangle, title: "Emergency", sub: "24/7 — same number" },
          ].map((item) => (
            <motion.a
              key={item.title}
              href={item.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="bg-card border rounded-lg p-5 text-center"
            >
              <item.icon size={18} className="mx-auto mb-2 text-primary" />
              <div className="font-medium text-sm">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.sub}</div>
            </motion.a>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        {!sent ? (
          <div className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="font-display text-xl font-semibold">Send a Message</h2>
            <div>
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" placeholder="How can we help?" rows={4} />
            </div>
            <Button variant="hero" className="w-full" onClick={() => setSent(true)}>Send Message</Button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border rounded-lg p-10 text-center"
          >
            <h2 className="font-display text-xl font-semibold mb-2">Message Sent!</h2>
            <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
          </motion.div>
        )}
      </AnimatedSection>
    </article>
  );
};

export default Contact;
