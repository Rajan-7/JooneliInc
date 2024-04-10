import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("joonToken"));
  // const [user, setUser] = useState([]);

  const authorizationToken = `Bearer ${token}`;
  // console.log(token);

  // Storing Token in LocalStorage
  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("joonToken", serverToken);
  };

  // Tackling Toggle functionality
  const isLoggedIn = !!token;

  // Tackling the Logout Functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("joonToken");
  };

  useEffect(() => {});

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLs,
        LogoutUser,
        isLoggedIn,
        // user,
        authorizationToken,
      }}
    >
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
