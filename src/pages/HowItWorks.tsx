import { Car, Lock, DoorOpen, Smartphone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  { icon: CreditCard, title: "Book & Pay", desc: "Select your dates and room online. Pay securely with card or EFT." },
  { icon: Smartphone, title: "Receive Your Codes", desc: "Get your unique gate PIN and room PIN via SMS and email — instantly after payment." },
  { icon: Car, title: "Drive In", desc: "Enter your gate PIN on the keypad at the entrance. Drive in and park." },
  { icon: Lock, title: "Unlock Your Room", desc: "Enter your room PIN on the smart lock. The door opens — you're in." },
  { icon: DoorOpen, title: "Check Out", desc: "Simply leave. Your codes expire at checkout time. No keys to return." },
];

const HowItWorks = () => (
  <article>
    <section className="container py-16">
      <AnimatedSection className="text-center mb-14">
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3">How It Works</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          From booking to room access in five simple steps. No reception desk, no waiting.
        </p>
      </AnimatedSection>

      <div className="max-w-2xl mx-auto space-y-0">
        {steps.map((step, i) => (
          <AnimatedSection key={step.title} delay={i * 0.08}>
            <div className="flex gap-5 relative">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon size={20} className="text-primary" />
                </div>
                {i < steps.length - 1 && <div className="w-px h-full bg-border flex-1 my-2" />}
              </div>
              <div className="pb-10">
                <h3 className="font-display text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <section className="container py-12 text-center">
      <AnimatedSection>
        <Button variant="hero" size="lg" asChild>
          <Link to="/book">Book Now</Link>
        </Button>
      </AnimatedSection>
    </section>
  </article>
);

export default HowItWorks;
