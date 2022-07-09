import React, { useState, useContext, useEffect } from "react";
import { ContractContext } from "../Context";
import { ContractDetails } from "../../../components";
import BigNumber from "bignumber.js";

export default function ContractDetailsSVToken() {
  const { SVToken_Contract, currentAccount } = useContext(ContractContext);

  const [inputFunction, setInputFunction] = useState([]);

  const [symbolName, setSymbolName] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [balanceOf, setBalanceOf] = useState();
  const [getVotes, setGetVotes] = useState();

  const getCollectionInfo = async () => {
    try {
      const symbol = await SVToken_Contract.symbol();
      const name = await SVToken_Contract.name();
      setSymbolName(`${symbol}, ${name}`);
      const totalSupplyBigNumber = await SVToken_Contract.totalSupply();
      const totalSupply = BigNumber(totalSupplyBigNumber._hex).c[0];
      setTotalSupply(totalSupply);
      const balanceOfBigNumber = await SVToken_Contract.balanceOf(
        currentAccount
      );
      const balanceOf = BigNumber(balanceOfBigNumber._hex).c[0];
      setBalanceOf(balanceOf);
      const getVotesBigNumber = await SVToken_Contract.getVotes(currentAccount);
      const getVotes = BigNumber(getVotesBigNumber._hex).c[0];
      setGetVotes(getVotes);
    } catch (error) {
      console.log(error);
    }
  };

  const burnTokenId = async () => {
    try {
      const tokenId = `${inputFunction.burntoken}`
      const burnTokenId = await SVToken_Contract.burn(tokenId);
      await burnTokenId.wait(1); // const data = await burnTokenId.wait(1); 
      // console.log(data.events);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollectionInfo();
  }, [currentAccount]);

  return (
    <ContractDetails
      title="SVToken Contract Details"
      inputFunction={inputFunction}
      setInputFunction={setInputFunction}
      data={[
        {
          nameFunction: "Symbol and Name",
          inicialContent: symbolName,
        },
        {
          nameFunction: "Total supply",
          inicialContent: totalSupply,
        },
        {
          nameFunction: "Current Account",
          inicialContent: currentAccount,
        },
        {
          nameFunction: "Your balance",
          inicialContent: balanceOf,
        },
        {
          nameFunction: "Voting power",
          inicialContent: getVotes,
        },
        {
          nameFunction: "Burn Token",
          button: "burn",
          buttonFunction: burnTokenId,
          inicialContent: "Insert a valid Token ID",
          gasFee: true,
        },
      ]}
    />
  );
}

// {
//   nameFunction: "Symbol and Name",
//   inicialContent: `${symbol}, ${name}`,
//   button: "vote",
//   buttonFunction: CastVote,
//   buttonFunctionDesc: "0 = Against, 1 = For, 2 = Abstain",
//   params: `${proposalEvent.proposalId}`,
//   gasFee: true,
// },
