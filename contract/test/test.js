const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("bignumber.js");

describe("SVGovernor", function () {
  it("Should create/cast/queue and execute a proposal", async function () {

    const accounts = await ethers.getSigners();

    //Deploy Timelock    
    const TimeLock = await ethers.getContractFactory("TimeLock");
    const timelock = await TimeLock.deploy(0, [], []);    
    await timelock.deployed();
    expect(timelock.address);     
    const TimeLockAddress = timelock.address; // console.log(`Timelock address: ${TimeLockAddress}`)    

    //Deploy Token and mint 1 token to owner
    const SVToken = await ethers.getContractFactory("SVToken");
    const svtoken = await SVToken.deploy();    
    await svtoken.deployed();
    expect(svtoken.address); 
    const svTOKENAddress = svtoken.address;  // console.log(`Token Collection address: ${svTOKENAddress}`)   
    const setsvTOKENTx = await svtoken.safeMint( accounts[0].address , "<svg> String Test </svg>");
    await setsvTOKENTx.wait(1);
    expect(await svtoken.totalSupply()).to.equal(1);

    //Deploy Governor
    const SVGovernor = await ethers.getContractFactory("SVGovernor");
    const svgovernor = await SVGovernor.deploy(svTOKENAddress, TimeLockAddress);    
    await svgovernor.deployed();
    expect(svgovernor.address); 

    //Create a proposal
    const token = await ethers.getContractAt("SVToken", svTOKENAddress);    
    const addressTo = accounts[1].address;
    const stringUri = "<svg> String Test 1 </svg>";
    const transferCalldata = token.interface.encodeFunctionData("safeMint", [addressTo, stringUri]);
    const description = `Create a NFT to: ${accounts[1].address}, for the: <svg> String Test 1 </svg>`
    const proposeTX = await svgovernor.propose(
      [svTOKENAddress],
      [0],
      [transferCalldata],
      description,
    )
    await proposeTX.wait(1);
    const data = await proposeTX.wait(1);
    const proposalId = data.events[0].args.proposalId.toString()
    // console.log(`${data.events[0].event}: proposalId: ${data.events[0].args.proposalId.toString()}, tokenAddress: ${data.events[0].args.targets.toString()}, amount: ${data.events[0].args[3].toString()}, transferCalldata: ${data.events[0].args.calldatas.toString()}, description: ${data.events[0].args.description}.`)

    // Mine 1 block = votingDelay()
    await hre.network.provider.send("hardhat_mine");
    const proposalState = await svgovernor.state(proposalId)
    expect(proposalState).to.equal(0);

    // Cast a Vote
    const voteWay = 1 // for
    const voteTx = await svgovernor.castVote(proposalId, voteWay)
    await voteTx.wait(1)
    expect(voteTx); 
    const hasVotedTX = await svgovernor.hasVoted(proposalId , accounts[0].address)
    const hasVoted = await hasVotedTX
    expect(await hasVoted).to.equal(true);
    
    // TokenAddress, amount and transferCalldata from event
    expect(await data.events[0].args.targets.toString()).to.equal(svTOKENAddress);
    expect((new BigNumber(await data.events[0].args[3])).c[0]).to.equal(0);
    expect(await data.events[0].args.calldatas.toString()).to.equal(transferCalldata);
    const descriptionHash = ethers.utils.id(data.events[0].args.description);

    // // Queue a proposal
    const queueTX = await svgovernor.queue(
      [data.events[0].args.targets.toString()],
      [(new BigNumber(await data.events[0].args[3])).c[0]],
      [await data.events[0].args.calldatas.toString()],
      descriptionHash,
    );
    await queueTX.wait(1);
    console.log(await queueTX.wait(1));

    // // Mine 45819 block = votingPeriod() + 1
    // await hre.network.provider.send("hardhat_mine", ["0xB2FB"]);

    // // Execute the Proposal
    // const executeTX = await svgovernor.execute(
    // [data.events[0].args.targets.toString()],
    // [(new BigNumber(await data.events[0].args[3])).c[0]],
    // [await data.events[0].args.calldatas.toString()],
    // descriptionHash,
    // );
    // await executeTX.wait(1);
    // console.log(await executeTX.wait(1));
  });

});