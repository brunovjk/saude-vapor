import React, { useState, useEffect } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [currentUser, setCurrentUser] = useState();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (currentUser !== undefined) {
      const currentUserProvider = currentUser.providerData[0].providerId;
      localStorage.setItem("currentUserProvider", currentUserProvider);
    }
  }, [currentUser]);

  return (
    <Context.Provider
      value={{
        isAuth,
        setIsAuth,
        checked,
        setChecked,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
