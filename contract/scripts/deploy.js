const main = async () => {
  const [owner] = await hre.ethers.getSigners();
  //Deploy Token Contract, mint 1 token to owner
  console.log("---------Deploy Token Contract, mint 1 token to owner");
  const SVToken = await hre.ethers.getContractFactory("SVToken");
  const svtoken = await SVToken.deploy();
  await svtoken.deployed();
  const setsvTOKENTx = await svtoken.safeMint(
    owner.address,
    "English",
    "Basic Cannabis Knowledge 101",
    "<p>Cannabis is the genus of three species of flowering plants: Sativa and Indica and ruderalis (naturally lower in THC). Marijuana is the female cannabis plant in which flowers contain a percentage of cannabinoids and hold both medicinal and psychoactive properties. There are 488 chemical entities, and at least 66 are cannabinoid compounds. THC and CBD are not the only medicinally active compounds found in cannabis.</p><p><strong>Sativa</strong>&nbsp;</p><p>Sativa plant grows taller, are lighter in color. The plant takes longer to flower and produces more cerebral effects. This plant is the largest of the three families. Symptom Relief: Depression, ADD, fatigue, Mood Disorder.</p><p><strong>Indica</strong></p><p>Indica plants are shorter, bushier and produce sedative physical effects. Symptom Relief: Pain, anxiety, insomnia, muscle spasms.</p><p><strong>Ruderalis</strong></p><p>Cannabis Ruderalis is a low-THC species of &nbsp;Cannabis. Very small plant and fast growing.</p><p><u>Know the Difference</u></p><p><strong>HEMP: </strong>Active Ingredient-CBD. No psychoactive effects. Contains 20% or more of CBD and less than .3% of THC. Federally legal.</p><p><strong>MARIJUANA PLANT:</strong> Active Ingredient-THC. Yes psychoactive<br>effects (leaves and flowers). Contains 10% or more of CBD and<br>more than 20% THC. Federally illegal Schedule II Drug.&nbsp;</p><ul>  <li>Many parts of the plant can be produced to make every day consumables.&nbsp;</li>  <li>Hemp is produced from the male cannabis plant. CBD can be obtained from both hemp and<br>marijuana, but hemp is the better choice as it does not contain THC. (Tetrahydrocannabinol).&nbsp;&nbsp;</li>  <li>Hemp seed does not contain the psychoactive compound and will not get consumers high. It<br>has shown to be beneficial for treating neurodegenerative diseases inflammation,<br>autoimmune and neurodegenerative diseases.&nbsp;</li></ul><p><u><strong>Consumer Products </strong></u><br> Uses the stalk and leaves. Produces industrial textiles, paper, building materials, consumer textiles.</p><p><u><strong>Consumable/Hygiene Products</strong></u><br>Uses the seeds. Produces foods, industrial products, personal hygiene products.</p>"
  );
  await setsvTOKENTx.wait(1);
  console.log(`Token Collection address: ${svtoken.address}`);
  console.log(`Total supply: ${await svtoken.totalSupply()}`);
  console.log(`Owner address: ${owner.address}`);
  console.log(`Owner balance: ${await svtoken.balanceOf(owner.address)}`);

  //Deploy Timelock
  console.log("---------Deploy Timelock Contract");
  const TimeLock = await hre.ethers.getContractFactory("TimeLock");
  const timelock = await TimeLock.deploy(0, [], []);
  await timelock.deployed();
  console.log(`Timelock address: ${timelock.address}`);

  //Deploy Governor
  console.log("---------Deploy Governor Contract");
  const SVGovernor = await hre.ethers.getContractFactory("SVGovernor");
  const svgovernor = await SVGovernor.deploy(svtoken.address, timelock.address);
  await svgovernor.deployed();
  console.log(`SVGovernor address: ${svgovernor.address}`);

  // Setting up contracts for roles
  console.log("---------Setting up contracts for Timelock roles");
  const proposerRole = await timelock.PROPOSER_ROLE();
  const executorRole = await timelock.EXECUTOR_ROLE();
  const adminRole = await timelock.TIMELOCK_ADMIN_ROLE();
  const proposerTx = await timelock.grantRole(proposerRole, svgovernor.address);
  const proposerole = await proposerTx.wait(1);
  const executorTx = await timelock.grantRole(
    executorRole,
    "0x0000000000000000000000000000000000000000"
  );
  const executorole = await executorTx.wait(1);
  const revokeTx = await timelock.revokeRole(adminRole, owner.address);
  const revokerole = await revokeTx.wait(1);
  console.log(`Proposer role: ${proposerole.events[0].args.account}`);
  console.log(`Executor role: ${executorole.events[0].args.account}`);
  console.log(`Revoke role: ${revokerole.events[0].args.account}`);

  // Transfer ownership
  console.log("---------Transfer SVToken ownership to Timelock");
  const transferOwnershipTx = await svtoken.transferOwnership(timelock.address);
  const newTokenContractOwner = await transferOwnershipTx.wait(1);
  console.log(
    `New SVToken contract ower: ${newTokenContractOwner.events[0].args.newOwner}`
  );
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
