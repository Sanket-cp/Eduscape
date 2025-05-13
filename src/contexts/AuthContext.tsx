
import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  updatePassword: (currentPassword: string, newPassword: string) => Promise<void>;
}

// Mock user for demo purposes with Indian name and photo
const MOCK_USER: User = {
  id: "user123",
  name: "Rajesh Kumar",
  email: "sanket200310@gmail.com",
  avatar: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=400&h=400"
};

// Mock storage for registered emails (in a real app, this would be in a database)
const registeredEmails = new Set<string>([MOCK_USER.email]);

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check for saved user in localStorage on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem("learnify_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    if (!registeredEmails.has(email)) {
      throw new Error("Email is not registered");
    }

    // In a real app, you would validate credentials with a backend
    setUser(MOCK_USER);
    setIsAuthenticated(true);
    localStorage.setItem("learnify_user", JSON.stringify(MOCK_USER));
  };

  const register = async (name: string, email: string, password: string) => {
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    // Check if email is already registered
    if (registeredEmails.has(email)) {
      throw new Error("This email is already registered");
    }

    // Password validation
    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }
    
    if (!/(?=.*[A-Z])/.test(password)) {
      throw new Error("Password must contain at least one uppercase letter");
    }
    
    if (!/(?=.*[0-9])/.test(password)) {
      throw new Error("Password must contain at least one number");
    }

    // If all validations pass, create the user
    const newUser = { ...MOCK_USER, name, email };
    registeredEmails.add(email); // Add email to registered set
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem("learnify_user", JSON.stringify(newUser));
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("learnify_user", JSON.stringify(updatedUser));
    }
  };

  const updatePassword = async (currentPassword: string, newPassword: string) => {
    // In a real app, you would validate the current password and update it in the backend
    // For demo purposes, we're just simulating the process
    if (!currentPassword) {
      throw new Error("Current password is required");
    }
    
    if (newPassword && newPassword.length < 6) {
      throw new Error("New password must be at least 6 characters");
    }
    
    // Simulating a successful password update
    return Promise.resolve();
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("learnify_user");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      register, 
      logout,
      updateProfile,
      updatePassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
