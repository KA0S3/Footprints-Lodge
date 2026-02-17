import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  { q: "What are the check-in and check-out times?", a: "Check-in is from 15:00. Check-out is by 11:00. Your access code activates 30 minutes before check-in and expires 30 minutes after checkout." },
  { q: "Is breakfast available?", a: "Yes — R150 per person per day. We recommend 48 hours' advance notice. Add it during booking or contact us." },
  { q: "Is there a TV or coffee station?", a: "No. Our rooms are intentionally minimal — no TV, no coffee station. This keeps rooms clean, quiet, and focused. Everything else is top grade." },
  { q: "What's the cancellation policy?", a: "Free cancellation up to 24 hours before check-in. Within 24 hours, one night's charge applies." },
  { q: "Is there parking?", a: "Yes, secure on-site parking is included. Use your gate PIN to enter." },
  { q: "What about load shedding?", a: "We have backup power and water. Hot showers and Wi-Fi stay on regardless." },
  { q: "What if I have an emergency?", a: "Call +27 72 985 9725 — available 24/7." },
];

const FAQ = () => (
  <article className="container py-16 max-w-2xl">
    <AnimatedSection className="text-center mb-12">
      <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3">FAQ</h1>
      <p className="text-muted-foreground">Everything you need to know about staying at Footprints Lodge.</p>
    </AnimatedSection>
    <AnimatedSection delay={0.1}>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4 bg-card">
            <AccordionTrigger className="text-sm font-medium text-left hover:no-underline">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </AnimatedSection>
  </article>
);

export default FAQ;
