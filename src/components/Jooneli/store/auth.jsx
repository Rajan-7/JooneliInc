import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const URL = "http://localhost:5005/api/admin/cnews";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("joonToken"));
  const [cnews,setCnews]=useState([]);
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

  // To fetch Inews
  const getAllCnews = async()=>{
    try {
      const response = await axios.get(URL,{
        headers:{
          Authorization:authorizationToken
        }
      });
      console.log(response.data);
      setCnews(response.data);
    } catch (error) {
      console.log(`From Cnews frontend: ${error}`);
    }
  }

  useEffect(() => {
    getAllCnews();
  });

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLs,
        LogoutUser,
        isLoggedIn,
        cnews,
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
