import React, { useContext } from "react";
import { ContractContext } from "../Context";

export const CastVote = (proposalId, vote) => {
  const { SVGovernance_Contract } = useContext(ContractContext);

  if (!proposalId || (vote !== "0" && vote !== "1" && vote !== "2"))
    return console.log("Vote not in Bravo parms");
};

// try {
//   var voteTx = await SVGovernanceContract.castVote(proposalId, vote);
//   await voteTx.wait(1);
// } catch (error) {
//   console.log(error);
// }

// return console.log(voteTx);
