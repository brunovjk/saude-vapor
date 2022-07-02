import React, { useContext } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Hero from "./Hero";
import ConnectWallet from "./ConnectWallet";
import SVTokenSection from "./SVToken/SVTokenSection";
import SVGovernanceSection from "./SVGovernance/SVGovernanceSection/index";
import TokenInfo from "./SVToken/TokenInfo";
import ProposalInfo from "./SVGovernance/ProposalInfo";
import CollectionInfo from "./SVToken/CollectionInfo";

import { ContractContext} from "./Context";

export default function Blockchain() {
  const { currentAccount } = useContext(ContractContext);

  function HomeBlockchain() {
    return (
      <>
        <Hero></Hero>
        {!currentAccount ? (
          <ConnectWallet />
        ) : (
          <>
            <SVTokenSection />
          <SVGovernanceSection />
          </>
        )}
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeBlockchain />} />
        <Route path="/TokenInfo/:tokenId" element={<TokenInfo />} />
        <Route path="/ProposalInfo/:proposaId" element={<ProposalInfo />} />
        <Route path="/CollectionInfo/:collectionId" element={<CollectionInfo />} />
      </Routes>
    </>
  )
}
