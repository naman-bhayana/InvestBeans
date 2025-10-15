import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeController from "@/controllers/HomeController";
import NotFoundController from "@/controllers/NotFoundController";
import DomesticController from "@/controllers/DomesticController";
import GlobalController from "@/controllers/GlobalController";
import DashboardController from "@/controllers/DashboardController";
import SignInController from "@/controllers/SignInController";
import SignUpController from "@/controllers/SignUpController";
import ProtectedRoute from "@/controllers/ProtectedRoute";
import { AuthProvider } from "@/controllers/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeController />} />
            <Route path="/domestic" element={<DomesticController />} />
            <Route path="/global" element={<GlobalController />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardController />
                </ProtectedRoute>
              }
            />
            <Route path="/signin" element={<SignInController />} />
            <Route path="/signup" element={<SignUpController />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFoundController />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
