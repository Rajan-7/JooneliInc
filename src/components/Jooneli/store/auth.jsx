import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const URL = "http://localhost:5005/api/admin/cnews";
const IURL = "http://localhost:5005/api/admin/inews";
const BURL ="http://localhost:5005/api/admin/blogs";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("joonToken"));
  const [cnews,setCnews]=useState([]);
  const [inews,setInews]=useState([]);
  const [blogs,setBlogs]=useState([]);
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

  // To fetch Cnews
  const getAllCnews = async()=>{
    try {
      const response = await axios.get(URL);
      console.log(response.data);
      console.log(response.data[0].image);
      setCnews(response.data);
    } catch (error) {
      console.log(`From Cnews frontend: ${error}`);
    }
  }

  // To fetch Inews
  const getAllInews = async()=>{
    try {
      const response = await axios.get(IURL);
      setInews(response.data);
    } catch (error) {
      console.log(`From Inews frontend`,error);
    }
  }

  // To fetch Blogs
  const getAllBlogs = async()=>{
    try {
      const response = await axios.get(BURL);
      setBlogs(response.data);
    } catch (error) {
      console.log(`From Blogs Frontend`,error);
    }
  }

  useEffect(() => {
    getAllCnews();
    getAllInews();
    getAllBlogs();
  },[]);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLs,
        LogoutUser,
        isLoggedIn,
        cnews,
        inews,
        blogs,
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
