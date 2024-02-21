import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storeTokenInLs = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  return (
    <AuthContext.Provider value={{ storeTokenInLs }}>
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
