import React, { useContext } from "react";
import Hero from "./Hero";
import ConnectWallet from "./ConnectWallet";
import SVTokenSection from "./SVToken/SVTokenSection";
import SVGovernanceSection from "./SVGovernance/SVGovernanceSection/index";

import { ContractContext} from "./Context";

export default function Blockchain() {
  const { currentAccount } = useContext(ContractContext);

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
