import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
  const { LogutUser } = useAuth();
  useEffect(() => {
    LogutUser();
  }, [LogutUser]);

  return <Navigate to={"/login"} />;
};

export default Logout;
