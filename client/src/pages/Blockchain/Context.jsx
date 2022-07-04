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
  const SVToken_Contract = getSVToken_Contract();
  const SVGovernance_Contract = getSVGovernance_Contract();

  const [currentAccount, setCurrentAccount] = useState();
  const [tokenCollection, setTokenCollection] = useState([]);
  const [proposalCollection, setProposalCollection] = useState([]);

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
  const getSVToken_Collection = async () => {
    try {
      if (!ethereum)
        return console.log("Please install a Cryptocurrency Software Wallet");
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
      setTokenCollection(collection_array);
    } catch (error) {
      console.log(error);
    }
  };
  const getProposal_Collection = async () => {
    try {
      if (!ethereum)
        return console.log("Please install a Cryptocurrency Software Wallet");

      const filters = await SVGovernance_Contract.filters.ProposalCreated();
      const logs = await SVGovernance_Contract.queryFilter(filters, 0, "latest");
      const events = logs.map((log) => SVGovernance_Contract.interface.parseLog(log));
      
      const collection_array = [];

      for (var i = 0; i < events.length; i++) {
        const proposalId = events[i].args.proposalId.toString()
        const proposalState = await SVGovernance_Contract.state(proposalId)      
  
        collection_array[i] = {
          proposalId: proposalId,
          proposalState: proposalState,
          tokenAddress: events[i].args.targets.toString(),
          transferCalldata: events[i].args.calldatas.toString(),
          description: events[i].args.description,
          proposer: events[i].args.proposer,
          startBlock:  events[i].args.startBlock.toString()
        };
      }

      setProposalCollection(collection_array);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletisConnected();
    getSVToken_Collection();
    getProposal_Collection();
  }, [currentAccount]);

  return (
    <ContractContext.Provider
      value={{
        connectWallet,
        currentAccount,
        tokenCollection,
        proposalCollection,
        SVToken_Contract,
        SVGovernance_Contract,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
