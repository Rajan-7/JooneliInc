import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const URL = "http://localhost:5005/api/auth/user";

export const AuthProvider = ({ children }) => {
  const [contactData,setContactData]=useState('');
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Storing Token in LocalStorage
  const storeTokenInLs = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  // Tackling Toggle functionality
  const isLoggedIn = !!token;

  // Tackling the Logout Functionality
  const LogutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT Authentication - getting the user data
  const userAuthentication = async () => {
    try {
      const response = await fetch(URL,{
        method:"GET",
        headers:{
          Authorization:`Bearer ${token}`,
        }
      })
      if(response.ok){
        const data = await response.json();
        console.log("Info of User",data.userData);
        setContactData(data.userData);
      }
    } catch (error) {
      console.error('Error occured while fetching user Data');
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ storeTokenInLs, LogutUser, isLoggedIn, contactData }}>
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
