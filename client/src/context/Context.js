import React, { useState, useEffect } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [checked, setChecked] = useState(localStorage.getItem("themeMode"));

  const handleChangeDarkMode = () => {
    localStorage.setItem("themeMode", !checked);

    setChecked((c) => !c);
  };

  return (
    <Context.Provider
      value={{
        isAuth,
        setIsAuth,
        checked,
        setChecked,
        handleChangeDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
