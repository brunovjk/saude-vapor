import React, { useState, useEffect, createContext } from "react";
import { contractABISVToken, contractAddressSVToken, contractABISVGovernor, contractAddressSVGovernor } from "../../utils/constants";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";


const { ethereum } = window;
export const ContractContext = createContext();

const getSVToken_Contract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner(0);

  const SVToken_Contract = new ethers.Contract(
    contractAddressSVToken,
    contractABISVToken,
    signer
  );
  return SVToken_Contract;
};
const getSVGovernance_Contract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner(0);

  const getSVGovernance_Contract = new ethers.Contract(
    contractAddressSVGovernor,
    contractABISVGovernor,
    signer
  );
  return getSVGovernance_Contract;
};

export const ContractProvider = ({ children }) => {
const [currentAccount, setCurrentAccount] = useState();
const [collection, setcollection] = useState([]);


const checkIfWalletisConnected = async () => {
    try {
      if (!ethereum)
        return console.log("Please install a Cryptocurrency Software Wallet");

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
const getSVToken_Collection = async () => {
  try {
    if (!ethereum)
      return console.log("Please install a Cryptocurrency Software Wallet");
    const SVToken_Contract = getSVToken_Contract();
    const totalSupplyBigNumber = await SVToken_Contract.totalSupply();
    const totalSupply = BigNumber(totalSupplyBigNumber._hex).c[0];

    const collection_array = [];

    for (var i = 0; i < totalSupply; i++) {
      collection_array[i] = {
        tokenid: i,
        addresssender: await SVToken_Contract.ownerOf(i),
        uri: await SVToken_Contract.tokenURI(i),
      };
    }
    setcollection(collection_array);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    checkIfWalletisConnected();
    getSVToken_Collection();
  }, [currentAccount]);

  return (
    <ContractContext.Provider
      value={{
        currentAccount,
        collection,
        connectWallet,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
