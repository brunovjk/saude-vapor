import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [checked, setChecked] = useState(
    localStorage.getItem("checked") || false
  );

  const selectedLanguage = localStorage.getItem("i18nextLng") || "en";

  const handleChangeDarkMode = () => {
    setChecked((c) => !c);
    localStorage.setItem("checked", !checked);
  };

  return (
    <Context.Provider
      value={{
        selectedLanguage,
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
