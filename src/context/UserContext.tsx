import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getUser = async () => {
    try {
      const user = await axios.get("/api/user");
    console.log("this is context log",user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={[user, isLoading]}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
