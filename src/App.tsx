import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [hasShownLoading, setHasShownLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedWarpPC');
    if (hasVisited) {
      setShowLoading(false);
      setHasShownLoading(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setHasShownLoading(true);
    sessionStorage.setItem('hasVisitedWarpPC', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showLoading && !hasShownLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalog" element={<Catalog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;