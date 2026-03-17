import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AnotherStay from "./pages/AnotherStay";
import Flat from "./pages/Flat";
import Conference from "./pages/Conference";
import Lounge from "./pages/Lounge";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/more" element={<More />} />
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
                <Route path="/another-stay" element={<AnotherStay />} />
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
