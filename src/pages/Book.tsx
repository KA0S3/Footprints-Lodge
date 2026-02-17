import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pageVariant = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const Book = () => {
  const [step, setStep] = useState(1);
  const [dates, setDates] = useState<{ from?: Date; to?: Date }>({});
  const [room, setRoom] = useState("");
  const [breakfast, setBreakfast] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", corporate: "" });

  const handleSubmit = () => setStep(3);

  // Helper function to check if dates are valid
  const areDatesValid = () => {
    return dates.from && dates.to;
  };

  return (
    <article className="container py-16 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3 text-center">Book a Room</h1>
        <p className="text-muted-foreground text-center mb-10">
          Select dates, add your details, and receive your access code instantly.
        </p>
      </motion.div>

      {/* Step indicators */}
      <div className="flex items-center justify-center gap-4 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {step > s ? <Check size={14} /> : s}
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {s === 1 ? "Dates" : s === 2 ? "Details" : "Confirm"}
            </span>
            {s < 3 && <div className="w-8 h-px bg-border" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" variants={pageVariant} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-2 block">Select Room</Label>
              <Select value={room} onValueChange={setRoom}>
                <SelectTrigger><SelectValue placeholder="Choose a room" /></SelectTrigger>
                <SelectContent>
                  {["Room 1", "Room 2", "Room 3", "Room 4"].map((r, i) => (
                    <SelectItem key={i} value={`room-${i + 1}`}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium mb-2 block">Check-in & Check-out</Label>
              <div className="flex justify-center">
                <Calendar
                  mode="range"
                  selected={dates.from && dates.to ? { from: dates.from, to: dates.to } : undefined}
                  onSelect={(range) => {
                    if (range?.from && range?.to) {
                      setDates({ from: range.from, to: range.to });
                    }
                  }}
                  numberOfMonths={1}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  className="rounded-md border"
                />
              </div>
            </div>
            <Button variant="hero" className="w-full" onClick={() => {
              if (room && areDatesValid()) {
                setStep(2);
              }
            }} disabled={!room || !areDatesValid()}>
              Continue
            </Button>
            
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" variants={pageVariant} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+27 72 000 0000" />
              <p className="text-xs text-muted-foreground mt-1">We'll text your access code instantly after payment.</p>
            </div>
            <div>
              <Label htmlFor="corporate">Corporate Code (optional)</Label>
              <Input id="corporate" value={formData.corporate} onChange={(e) => setFormData({ ...formData, corporate: e.target.value })} placeholder="e.g. CORP2024" />
            </div>
            <div className="flex items-center gap-2 py-2">
              <Checkbox id="breakfast" checked={breakfast} onCheckedChange={(c) => setBreakfast(c === true)} />
              <Label htmlFor="breakfast" className="text-sm cursor-pointer">Add breakfast — R150/day</Label>
            </div>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
              <Button variant="hero" className="flex-1" onClick={handleSubmit} disabled={!formData.name || !formData.email || !formData.phone}>Confirm & Pay</Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" variants={pageVariant} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="text-center py-10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={28} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl font-semibold mb-3">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-2">Code sent. Expect SMS and email within moments.</p>
            <p className="text-sm text-muted-foreground mb-8">Your gate PIN and room PIN will arrive shortly.</p>
            <Button variant="heroOutline" asChild>
              <a href="/how-it-works">See How Check-in Works</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Book;
