import React, { useState, useContext, useEffect } from "react";
import { ContractContext } from "../Context";
import { ContractDetails } from "../../../components";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";

export default function ContractDetailsSVGovernance({ proposalEvent }) {
  const { contractAddressSVToken, SVGovernance_Contract, currentAccount } =
    useContext(ContractContext);

  const [inputFunction, setInputFunction] = useState([]);

  const [proposalInfo, setproposalInfo] = useState({});

  const castVote = async () => {
    try {
      const vote = inputFunction.castvote;
      if (vote !== "0" && vote !== "1" && vote !== "2")
        return console.log("Invalid vote");

      const proposalId = proposalEvent.proposalId;

      const castVote = await SVGovernance_Contract.castVote(proposalId, vote);
      await castVote.wait(1);
    } catch (error) {}
  };
  const queue = async () => {
    try {
      const transferCalldata = proposalEvent.transferCalldata;
      const description = proposalEvent.description;
      const descriptionHash = ethers.utils.id(description);

      const queue = await SVGovernance_Contract.queue(
        [contractAddressSVToken],
        [0],
        [transferCalldata],
        descriptionHash
      );
      await queue.wait(1);
    } catch (error) {}
  };
  const execute = async () => {
    try {
      const transferCalldata = proposalEvent.transferCalldata;
      const description = proposalEvent.description;
      const descriptionHash = ethers.utils.id(description);

      const execute = await SVGovernance_Contract.execute(
        [contractAddressSVToken],
        [0],
        [transferCalldata],
        descriptionHash
      );
      await execute.wait(1);
    } catch (error) {}
  };

  useEffect(() => {
    const getproposalInfo = async () => {
      try {
        const proposalId = proposalEvent.proposalId;
        const blockNumber = proposalEvent.startBlock;

        const votingDelayBigNumber = await SVGovernance_Contract.votingDelay();
        const votingDelay = BigNumber(votingDelayBigNumber._hex).c[0];

        const votingPeriodBigNumber =
          await SVGovernance_Contract.votingPeriod();
        const votingPeriod = BigNumber(votingPeriodBigNumber._hex).c[0];

        const proposalDeadlineBigNumber =
          await SVGovernance_Contract.proposalDeadline(proposalId);
        const proposalDeadline = BigNumber(proposalDeadlineBigNumber._hex).c[0];

        const quorumBigNumber = await SVGovernance_Contract.quorum(blockNumber);
        const quorum = BigNumber(quorumBigNumber._hex).c[0];

        const proposalVotesEvent = await SVGovernance_Contract.proposalVotes(
          proposalId
        );
        const abstainVotes = BigNumber(proposalVotesEvent.abstainVotes._hex)
          .c[0];
        const againstVotes = BigNumber(proposalVotesEvent.againstVotes._hex)
          .c[0];
        const forVotes = BigNumber(proposalVotesEvent.forVotes._hex).c[0];
        const proposalVotes = `Abstain: ${abstainVotes}, Against: ${againstVotes}, For: ${forVotes}`;

        const hasVoted = await SVGovernance_Contract.hasVoted(
          proposalId,
          currentAccount
        );

        setproposalInfo({
          votingConfig: `Voting delay: ${votingDelay}, Voting period: ${votingPeriod}. In Blocks`,
          proposalConfig: `Proposal deadline: ${proposalDeadline}, Quorum: ${quorum}`,
          proposalVotes: proposalVotes,
          hasVoted: `${hasVoted}`,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getproposalInfo();
  }, [
    currentAccount,
    SVGovernance_Contract,
    proposalEvent.proposalId,
    proposalEvent.startBlock,
  ]);

  return (
    <ContractDetails
      title="SVToken Contract Details"
      inputFunction={inputFunction}
      setInputFunction={setInputFunction}
      data={[
        {
          nameFunction: "Cast vote",
          button: "vote",
          buttonFunction: castVote,
          inicialContent: "0 = Against, 1 = For, 2 = Abstain",
          gasFee: true,
        },
        {
          nameFunction: "Queue proposal",
          button: "queue",
          buttonFunction: queue,
          inicialContent: "Queue a valid proposal that has enoght Quorum ",
          gasFee: true,
          disableInput: true,
        },
        {
          nameFunction: "Execute proposal",
          button: "execute",
          buttonFunction: execute,
          inicialContent: "Execute a valid proposal that has enoght Quorum ",
          gasFee: true,
          disableInput: true,
        },
        {
          nameFunction: "Voting config",
          inicialContent: proposalInfo.votingConfig,
          disableInput: true,
        },
        {
          nameFunction: "Proposal config",
          inicialContent: proposalInfo.proposalConfig,
          disableInput: true,
        },
        {
          nameFunction: "Proposal votes",
          inicialContent: proposalInfo.proposalVotes,
          disableInput: true,
        },
        {
          nameFunction: "Current account",
          inicialContent: currentAccount,
          disableInput: true,
        },
        {
          nameFunction: "Has voted",
          inicialContent: proposalInfo.hasVoted,
          disableInput: true,
        },
      ]}
    />
  );
}
