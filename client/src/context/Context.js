import React from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
