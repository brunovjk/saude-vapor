const main = async () => {
  // const vjkNFT = await hre.ethers.getContractFactory("vjkNFT");
  // const vjknft = await vjkNFT.deploy();

  // await vjknft.deployed();

  // console.log("Contract deployed to:", vjknft.address);

  const [owner, addr1] = await ethers.getSigners();

  //Deploy Token Contract, mint 1 token and delegate to owner
  console.log("---------Deploy Token Contract, mint 1 token to owner")
  const SVToken = await hre.ethers.getContractFactory("SVToken");
  const svtoken = await SVToken.deploy();    
  await svtoken.deployed();
  const setsvTOKENTx = await svtoken.safeMint( owner.address , " String Test ");
  await setsvTOKENTx.wait(1);  
  console.log(`Token Collection address: ${svtoken.address}`)
  console.log(`Total supply: ${await svtoken.totalSupply()}`)
  console.log(`Owner address: ${owner.address}`)
  console.log(`Owner balance: ${await svtoken.balanceOf(owner.address)}`)

  //Deploy Timelock
  console.log("---------Deploy Timelock Contract")   
  const TimeLock = await hre.ethers.getContractFactory("TimeLock");
  const timelock = await TimeLock.deploy(0, [], []);    
  await timelock.deployed();
  console.log(`Timelock address: ${timelock.address}`)  

  //Deploy Governor
  console.log("---------Deploy Governor Contract")
  const SVGovernor = await hre.ethers.getContractFactory("SVGovernor");
  const svgovernor = await SVGovernor.deploy(svtoken.address, timelock.address);    
  await svgovernor.deployed();
  console.log(`SVGovernor address: ${svgovernor.address}`)  

  // Setting up contracts for roles
  console.log("---------Setting up contracts for Timelock roles")
  const proposerRole = await timelock.PROPOSER_ROLE()
  const executorRole = await timelock.EXECUTOR_ROLE()
  const adminRole = await timelock.TIMELOCK_ADMIN_ROLE()  
  const proposerTx = await timelock.grantRole(proposerRole, svgovernor.address)
  const proposerole = await proposerTx.wait(1)
  const executorTx = await timelock.grantRole(executorRole, "0x0000000000000000000000000000000000000000")
  const executorole = await executorTx.wait(1)
  const revokeTx = await timelock.revokeRole(adminRole, owner.address)
  const revokerole = await revokeTx.wait(1)
  console.log(`Proposer role: ${proposerole.events[0].args.account}`)
  console.log(`Executor role: ${executorole.events[0].args.account}`)
  console.log(`Revoke role: ${revokerole.events[0].args.account}`)

  // Transfer ownership
  console.log("---------Transfer SVToken ownership to Timelock")
  const transferOwnershipTx = await svtoken.transferOwnership(timelock.address)
  const newTokenContractOwner = await transferOwnershipTx.wait(1)
  console.log(`New SVToken contract ower: ${newTokenContractOwner.events[0].args.newOwner}`)

  //Create a proposal
  console.log("---------Create a proposal")
  const token = await hre.ethers.getContractAt("SVToken", svtoken.address);    
  const stringUri = " String Test 1 ";
  const transferCalldata = token.interface.encodeFunctionData("safeMint", [addr1.address, stringUri]);
  const description = `Create a token to: ${addr1.address}, for contribuition of: ${stringUri}`
  const proposeTX = await svgovernor.connect(addr1).propose(
    [svtoken.address],
    [0],
    [transferCalldata],
    description,
  )
  await proposeTX.wait(1);
  const data = await proposeTX.wait(1);
  const proposalId = data.events[0].args.proposalId.toString()
  // await hre.network.provider.send("hardhat_mine");  // Mine 1 block = votingDelay()
  const proposalState = await svgovernor.state(proposalId)    
  console.log(`${data.events[0].event}: 
    proposalState: ${proposalState},
    proposalId: ${data.events[0].args.proposalId.toString()},
    tokenAddress: ${data.events[0].args.targets.toString()},
    amount: ${data.events[0].args[3].toString()},
    transferCalldata: ${data.events[0].args.calldatas.toString()},
    description: ${data.events[0].args.description},
    proposer: ${data.events[0].args.proposer},
    startBlock:  ${data.events[0].args.startBlock.toString()}`)

  // Cast a Vote
  console.log("---------Cast a Vote")
  const voteWay = 1 // 0 = Against, 1 = For, 2 = Abstain
  const voteTx = await svgovernor.castVote(proposalId, voteWay)
  await voteTx.wait(1)
  const hasVoted = await svgovernor.hasVoted(proposalId , owner.address)
  console.log(`AgainstVotes: ${(await svgovernor.proposalVotes(proposalId)).againstVotes.toString()}`)
  console.log(`ForVotes: ${(await svgovernor.proposalVotes(proposalId)).forVotes.toString()}`)
  console.log(`AbstainVotes: ${(await svgovernor.proposalVotes(proposalId)).abstainVotes.toString()}`)
  console.log(`Quorum: ${(await svgovernor.quorum(data.events[0].args.startBlock.toString()))}`)

  // // Queue a proposal
  // console.log("---------Queue a proposal")
  // // await hre.network.provider.send("hardhat_mine", ["0xB2FB"]);  // Mine 45819 block = votingPeriod() + 1
  // const descriptionHash = hre.ethers.utils.id(await data.events[0].args.description);
  // const queueTX = await svgovernor.queue(
  //   [data.events[0].args.targets.toString()],
  //   [(new BigNumber(await data.events[0].args[3])).c[0]],
  //   [await data.events[0].args.calldatas.toString()],
  //   descriptionHash,
  // );
  // await queueTX.wait(1);
  // console.log(`Queue status: ${(await queueTX.wait(1)).events[1].event}`)

  // // Execute the Proposal
  // console.log("---------Execute the Proposal")
  // const executeTX = await svgovernor.execute(
  // [data.events[0].args.targets.toString()],
  // [(new BigNumber(await data.events[0].args[3])).c[0]],
  // [await data.events[0].args.calldatas.toString()],
  // descriptionHash,
  // );
  // await executeTX.wait(1);
  // console.log(`Execute status: ${(await executeTX.wait(1)).events[0].event}`)

  // // Proposal Conclusion
  // console.log("---------Proposal Conclusion")
  // console.log(`Proposal description: ${description}.`)
  // console.log(`Proposer should have 1 token at SVToken collection.
  //   - Proposer: ${await data.events[0].args.proposer},
  //   - Balance of Proposer: ${await svtoken.balanceOf(await data.events[0].args.proposer)}.`)
  //   console.log("-----------------------------------------------------------------")
  
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();