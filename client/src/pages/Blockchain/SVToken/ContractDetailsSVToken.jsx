import React, { useState, useContext, useEffect } from "react";
import { ContractContext } from "../Context";
import { ContractDetails } from "../../../components";
import BigNumber from "bignumber.js";

export default function ContractDetailsSVToken() {
  const { SVToken_Contract, currentAccount } = useContext(ContractContext);

  const [inputFunction, setInputFunction] = useState([]);

  const [collectionInfo, setCollectionInfo] = useState({});

  const burnTokenId = async () => {
    try {
      const tokenId = `${inputFunction.burntoken}`;
      const burnTokenId = await SVToken_Contract.burn(tokenId);
      await burnTokenId.wait(1); // const data = await burnTokenId.wait(1);
      // console.log(data.events);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCollectionInfo = async () => {
      try {
        const symbol = await SVToken_Contract.symbol();
        const name = await SVToken_Contract.name();
        const totalSupplyBigNumber = await SVToken_Contract.totalSupply();
        const totalSupply = BigNumber(totalSupplyBigNumber._hex).c[0];
        const balanceOfBigNumber = await SVToken_Contract.balanceOf(
          currentAccount
        );
        const balanceOf = BigNumber(balanceOfBigNumber._hex).c[0];
        const getVotesBigNumber = await SVToken_Contract.getVotes(
          currentAccount
        );
        const getVotes = BigNumber(getVotesBigNumber._hex).c[0];

        setCollectionInfo({
          symbolName: `${symbol}, ${name}`,
          totalSupply: totalSupply,
          balanceOf: balanceOf,
          getVotes: getVotes,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCollectionInfo();
  }, [currentAccount, SVToken_Contract]);

  return (
    <ContractDetails
      title="SVToken Contract Details"
      inputFunction={inputFunction}
      setInputFunction={setInputFunction}
      data={[
        {
          nameFunction: "Symbol and Name",
          inicialContent: collectionInfo.symbolName,
        },
        {
          nameFunction: "Total supply",
          inicialContent: collectionInfo.totalSupply,
        },
        {
          nameFunction: "Current Account",
          inicialContent: currentAccount,
        },
        {
          nameFunction: "Your balance",
          inicialContent: collectionInfo.balanceOf,
        },
        {
          nameFunction: "Voting power",
          inicialContent: collectionInfo.getVotes,
        },
        {
          nameFunction: "Burn Token",
          button: "burn",
          buttonFunction: burnTokenId,
          inicialContent: "Insert a valid Token ID", //Label
          gasFee: true,
        },
      ]}
    />
  );
}
