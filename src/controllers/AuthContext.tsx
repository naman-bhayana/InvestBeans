import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("ib_auth_token");
    setIsAuthenticated(Boolean(token));
  }, []);

  const signIn = async (email: string, password: string) => {
    // Minimal demo auth: accept any non-empty credentials
    if (!email || !password) throw new Error("Email and password are required");
    localStorage.setItem("ib_auth_token", "demo-token");
    setIsAuthenticated(true);
  };

  const signUp = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password are required");
    // For demo, auto sign-in after sign-up
    localStorage.setItem("ib_auth_token", "demo-token");
    setIsAuthenticated(true);
  };

  const signOut = () => {
    localStorage.removeItem("ib_auth_token");
    setIsAuthenticated(false);
  };

  const value = useMemo(() => ({ isAuthenticated, signIn, signUp, signOut }), [isAuthenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};


