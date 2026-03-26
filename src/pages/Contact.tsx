import { Phone, Mail, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('All fields are required');
      return false;
    }
    
    if (formData.name.length < 2 || formData.name.length > 50) {
      setError('Name must be between 2 and 50 characters');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    if (formData.message.length < 10 || formData.message.length > 1000) {
      setError('Message must be between 10 and 1000 characters');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="container py-16 max-w-7xl px-4">
      {/* Back Button */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/more')}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to More
        </Button>
      </div>
      
      <AnimatedSection className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3">Contact</h1>
        <p className="text-muted-foreground">We're here to help — reach us anytime.</p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information Block */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6">
            <div className="space-y-5">
              {/* Contact & Hours Row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-base font-semibold text-primary mb-3 flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    Contact
                  </h3>
                  <div className="space-y-2 ml-7">
                    <a href="tel:+27729859725" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                      <span>+27 72 985 9725</span>
                    </a>
                    <a href="mailto:info@afrifoot.co.za" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                      <Mail size={14} className="text-primary opacity-70" />
                      <span>info@afrifoot.co.za</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-base font-semibold text-primary mb-3 flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    Hours
                  </h3>
                  <div className="text-muted-foreground text-sm ml-7">
                    <p>24/7 Support</p>
                    <p className="text-xs opacity-75">Always available</p>
                  </div>
                </div>
              </div>
              
              {/* Location Section */}
              <div className="border-t border-border/30 pt-4">
                <h3 className="font-display text-base font-semibold text-primary mb-3 flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  Location
                </h3>
                <div className="text-muted-foreground text-sm ml-7">
                  <p className="font-medium">Footprints Lodge</p>
                  <p className="text-sm opacity-90">1 Crestwood St</p>
                  <p className="text-sm opacity-90">Aston Manor, Kempton Park, 1619</p>
                  <p className="text-sm opacity-90">Gauteng, South Africa</p>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="bg-background/60 rounded-lg p-3 border border-border/50">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Response Time:</span>
                  <span>Within 2 hours (business), 24 hours (after)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Block */}
          <div className="bg-card border rounded-lg p-5 space-y-3">
            <h2 className="font-display text-lg font-semibold mb-3">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="contact-name" className="text-xs">Name</Label>
                  <Input 
                    id="contact-name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    className="h-8 text-sm" 
                    disabled={loading}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="text-xs">Email</Label>
                  <Input 
                    id="contact-email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    className="h-8 text-sm" 
                    disabled={loading}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="contact-message" className="text-xs">Message</Label>
                <Textarea 
                  id="contact-message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?" 
                  rows={3} 
                  className="resize-none text-sm" 
                  disabled={loading}
                />
              </div>
              
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
              
              <Button 
                variant="hero" 
                className="w-full" 
                type="submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* Success Message */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-card border rounded-lg p-10 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="font-display text-xl font-semibold mb-2">Message Sent Successfully!</h2>
            <p className="text-sm text-muted-foreground mb-4">We'll get back to you within 2 hours during business hours.</p>
            <Button 
              variant="outline" 
              onClick={() => setSent(false)}
              className="mt-2"
            >
              Send Another Message
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Contact;
