import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BiographyPage from "./pages/BiographyPage";
import TimelinePage from "./pages/TimelinePage";
import INAPage from "./pages/INAPage";
import MysteryPage from "./pages/MysteryPage";
import QuotesPage from "./pages/QuotesPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<BiographyPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/ina" element={<INAPage />} />
          <Route path="/mystery" element={<MysteryPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
