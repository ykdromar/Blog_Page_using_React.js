import { AuthContext } from "../providers";
import { useState, useEffect, useContext } from "react";

import {
  firebaseLogin,
  firebaseGetUser,
  firebaseLogout,
} from "../config/firebaseAuth";
export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      firebaseGetUser(setUser, setLoading);
    };
    getUser();
  }, []);

  const login = async (email, password) => {
    let user = await firebaseLogin(email, password);
    if (user) {
      window.alert("Logged in");
      setUser(user);
    } else {
      window.alert("Account not exists!");
    }
    return;
  };

  const logout = async () => {
    await firebaseLogout();
    window.alert("Logged Out");
    setUser(null);
  };
  return {
    user,
    login,
    logout,
    loading,
  };
};
