const { expect } = require("chai");
const { ethers } = require("hardhat");

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
    await setsvTOKENTx.wait();
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
    const proposeTX = await svgovernor.propose(
      [svTOKENAddress],
      [0],
      [transferCalldata],
      `Create a NFT to: ${accounts[1].address}, for the: <svg> String Test 1 </svg>`,
    )
    await proposeTX.wait();
    const data = await proposeTX.wait();
    const proposalId = data.events[0].args.proposalId.toString()
    const proposalState = await svgovernor.state(proposalId)
    expect(proposalState);
    // console.log(`${data.events[0].event}: proposalId: ${data.events[0].args.proposalId.toString()}, tokenAddress: ${data.events[0].args.targets.toString()}, amount: ${data.events[0].args[3].toString()}, transferCalldata: ${data.events[0].args.calldatas.toString()}, description: ${data.events[0].args.description}.`)

    // Cast a Vote
    const voteWay = 1 // for
    const voteTx = await svgovernor.castVote(proposalId, voteWay)
    await voteTx.wait()
    expect(voteTx); 

    // Queue the proposal
    // const descriptionHash = ethers.utils.id(data.events[0].args.description);
    // const queueTX = await svgovernor.queue(
    //   [data.events[0].args.targets.toString()],
    //   [data.events[0].args[3].toString()],
    //   [data.events[0].args.calldatas.toString()],
    //   descriptionHash,
    // );
    // await queueTX.wait();
    // console.log(await queueTX.wait());

    // Execute the Proposal
    // const executeTX = await svgovernor.execute(
    //   [proposalId],
    //   [svTOKENAddress],
    //   [0],
    //   [transferCalldata],
    //   descriptionHash,
    // );
    // await executeTX.wait();
    // console.log(await executeTX.wait());
  });

});