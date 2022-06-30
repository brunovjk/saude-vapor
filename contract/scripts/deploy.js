const main = async () => {
  const [owner] = await hre.ethers.getSigners();
  //Deploy Token Contract, mint 1 token to owner
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