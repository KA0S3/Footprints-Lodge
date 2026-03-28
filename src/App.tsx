import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Book from "./pages/Book";
import HowItWorks from "./pages/HowItWorks";
import Location from "./pages/Location";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import More from "./pages/More";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Rooms from "./pages/Rooms";
import Studio from "./pages/Studio";
import Suite from "./pages/Suite";
import Family from "./pages/Family";
import Flat from "./pages/Flat";
import Conference from "./pages/Conference";
import Lounge from "./pages/Lounge";
import Gallery from "./pages/Gallery";
import MobileAbout from "./pages/MobileAbout";
import MobileLocation from "./pages/MobileLocation";
import MobileGallery from "./pages/MobileGallery";
import MobileFAQ from "./pages/MobileFAQ";
import MobileContact from "./pages/MobileContact";

const queryClient = new QueryClient();

// Mobile detection hook using best practices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = mobileRegex.test(userAgent);
      const isSmallScreen = window.innerWidth < 768;
      
      // Consider mobile if it's a mobile device OR small screen
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Mobile redirect component
const MobileRedirect = () => {
  const isMobile = useIsMobile();
  
  if (isMobile === undefined) return null; // Loading state
  
  if (isMobile) {
    return <Navigate to="/book" replace />;
  }
  
  return <Index />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MobileRedirect />} />
          <Route path="/more" element={<More />} />
          
          {/* Mobile-specific pages - outside Layout */}
          <Route path="/mobile-about" element={<MobileAbout />} />
          <Route path="/mobile-location" element={<MobileLocation />} />
          <Route path="/mobile-gallery" element={<MobileGallery />} />
          <Route path="/mobile-faq" element={<MobileFAQ />} />
          <Route path="/mobile-contact" element={<MobileContact />} />
          
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/book" element={<Book />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/studio" element={<Studio />} />
                <Route path="/suite" element={<Suite />} />
                <Route path="/family" element={<Family />} />
                <Route path="/flat" element={<Flat />} />
                <Route path="/conference" element={<Conference />} />
                <Route path="/lounge" element={<Lounge />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/location" element={<Location />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
