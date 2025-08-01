import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import WeddingCards from "./pages/services/WeddingCards";
import BusinessCards from "./pages/services/BusinessCards";
import FlexPrinting from "./pages/services/FlexPrinting";
import PackagingSolutions from "./pages/services/PackagingSolutions";
import OfficePrinting from "./pages/services/OfficePrinting";
import CustomItems from "./pages/services/CustomItems";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/wedding-cards" element={<WeddingCards />} />
              <Route path="/services/business-cards" element={<BusinessCards />} />
              <Route path="/services/flex-printing" element={<FlexPrinting />} />
              <Route path="/services/packaging-solutions" element={<PackagingSolutions />} />
              <Route path="/services/office-printing" element={<OfficePrinting />} />
              <Route path="/services/custom-items" element={<CustomItems />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
