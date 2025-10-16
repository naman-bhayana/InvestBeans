
import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '@/api/axios.ts';


type User = {
  _id?: string;
  name?: string;
  email?: string;

};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
   

  const refreshUser = async () => {
    try {
      const { data } = await api.get('/api/v1/users/me'); 
      setUser(data?.data || null);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   
    refreshUser();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post('/api/v1/users/login', { email, password });
    
      setUser(data?.data?.user || null);
    } catch (err: any) {
  
      const msg = err?.response?.data?.message || err?.message || 'Unable to sign in';
      throw new Error(msg);
    }
  };

  const signUp = async (emailOrName: any, maybeEmail?: any, maybePassword?: any) => {
  
    let name = '';
    let email = '';
    let password = '';
    if (maybeEmail !== undefined && maybePassword !== undefined) {
      name = emailOrName;
      email = maybeEmail;
      password = maybePassword;
    } else {
    
      email = emailOrName;
      password = maybeEmail;
    }

    try {
      const { data } = await api.post('/api/v1/users/register', { name, email, password });
      setUser(data?.data || null);
    } catch (err: any) {
      const msg = err?.response?.data?.message || err?.message || 'Unable to sign up';
      throw new Error(msg);
    }
  };

  // const signOut = async () => {
  //   try {
  //     await api.post('/api/v1/users/logout'); 
  //     setUser(null);
  //      navigate("/");
  //   } catch (err) {
   
  //     setUser(null);
      
  //   }
  // };
const signOut = async (callback?: () => void) => {
  try {
    await api.post('/api/v1/users/logout');
    setUser(null);
    if (callback) callback(); 
  } catch (err) {
    setUser(null);
    if (callback) callback();
  }
};
  const isAuthenticated = !!user;
  return (
   <AuthContext.Provider value={{ user, loading, isAuthenticated, signIn, signUp, signOut, refreshUser }}>
      {children}
    </AuthContext.Provider>

  );
};


export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
