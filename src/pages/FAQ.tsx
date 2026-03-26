import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  { q: "What are the check-in and check-out times?", a: "Check-in is from 15:00. Check-out is by 11:00. Your access code activates 30 minutes before check-in and expires 30 minutes after checkout." },
  { q: "Is breakfast available?", a: "Yes — R100 per person per day. Choose between 'Compact' (cold/continental) or 'Hot' (English style). We recommend 48 hours' advance notice. Add it during booking or contact us." },
  { q: "What is the child policy?", a: "Children 0-12 years pay 50% of sharing rate. Children 13-18 years pay 100% of sharing rate." },
  { q: "Are there tea/coffee facilities in rooms?", a: "Tea and coffee facilities vary by room type. COMFY KING rooms include full tea/coffee facilities. QUICKSTAY QUEEN and QUICKSTAY KING rooms do not have in-room facilities, but shared facilities are available in the dining room." },
  { q: "What's the cancellation policy?", a: "Free cancellation up to 24 hours before check-in. Within 24 hours, one night's charge applies." },
  { q: "Is there parking?", a: "Yes, secure on-site parking is included. Use your gate PIN to enter." },
  { q: "What about load shedding?", a: "We have backup power and water. Hot showers and Wi-Fi stay on regardless." },
  { q: "What if I have an emergency?", a: "Call +27 72 985 9725 — available 24/7." },
  { q: "Are family rooms available?", a: "Family Rooms (Rooms 16 & 17) sleep 3 or more people and are handled via direct inquiry only. Please contact us at info@afrifoot.co.za for availability and rates." },
];

const FAQ = () => (
  <article className="container py-16 max-w-5xl">
    {/* Back Button */}
    <AnimatedSection className="mb-8">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link to="/more" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={16} />
          Back to More
        </Link>
      </Button>
    </AnimatedSection>
    
    <AnimatedSection className="text-center mb-12">
      <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3">FAQ</h1>
      <p className="text-muted-foreground">Everything you need to know about staying at Footprints Lodge.</p>
    </AnimatedSection>
    <AnimatedSection delay={0.1}>
      <Accordion type="single" collapsible>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg p-4 bg-card">
              <AccordionTrigger className="text-sm font-medium text-left hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </AnimatedSection>
  </article>
);

export default FAQ;
