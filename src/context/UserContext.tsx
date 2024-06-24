import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    id: "",
    rules: [],
    trades: [],
    exchanges: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const user = await axios.get("/api/user");      
      const { firstName, lastName, id, rules, trades, exchanges } = await user.data;
      setUser({ firstName, lastName, id, rules, trades, exchanges});
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
