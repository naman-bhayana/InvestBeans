import { Navigate } from "react-router-dom";
import { useAuth } from "@/controllers/AuthContext";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>; 
  if (!user) return <Navigate to="/signin" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
