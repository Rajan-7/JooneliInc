import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token,setToken]=useState(localStorage.getItem('token'));
  
  // Storing Token in LocalStorage
  const storeTokenInLs = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  // Tackling Toggle functionality
  const isLoggedIn = !!token;

  // Tackling the Logout Functionality
  const LogutUser = ()=>{
    setToken('');
    return localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider value={{ storeTokenInLs, LogutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const useContextValue = useContext(AuthContext);
  if (!useContextValue) {
    throw new Error("authProvider is not properly used.");
  }
  return useContextValue;
};
