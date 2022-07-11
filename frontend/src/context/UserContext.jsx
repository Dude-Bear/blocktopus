import React, { createContext, useEffect, useState } from "react";
import { config } from "../Constants";

// this file is mainly used instad of AuthProvider. With this method I store the
// JWT in local storage, which isn't the recomended way but should be sufficient in the context of my "praxis project"

export const UserContext = createContext();

const BackendURL = config.url;

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("blocktopusToken"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch(BackendURL + "/api/auth/me", requestOptions);

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("blocktopusToken", token);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
