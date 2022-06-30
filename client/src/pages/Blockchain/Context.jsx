import React, { useState, useEffect, createContext } from "react";
// import { contractABISVToken, contractAddressSVToken, contractABISVGovernor, contractAddressSVGovernor } from "../../utils/constants";
// import { ethers } from "ethers";

const { ethereum } = window;
export const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
const [currentAccount, setCurrentAccount] = useState();

const checkIfWalletisConnected = async () => {
    try {
      if (!ethereum)
        return alert.error("Please install a Cryptocurrency Software Wallet");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };
const connectWallet = async () => {
    try {
      if (!ethereum)
        return console.log("Please install a Cryptocurrency Software Wallet");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);

    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  useEffect(() => {
    checkIfWalletisConnected();
  }, [currentAccount]);

  return (
    <ContractContext.Provider
      value={{
        currentAccount,
        connectWallet,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
