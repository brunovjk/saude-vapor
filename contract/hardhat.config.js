require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_RPC_URL || "",
      accounts : [
        `${process.env.PRIVATE_KEY_0 !== undefined ? [process.env.PRIVATE_KEY_0] : []}`,
        `${process.env.PRIVATE_KEY_1 !== undefined ? [process.env.PRIVATE_KEY_1] : []}`,
        `${process.env.PRIVATE_KEY_2 !== undefined ? [process.env.PRIVATE_KEY_2] : []}`
      ]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
