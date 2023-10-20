import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat", // local host 和 default 不是一个网络
  networks: {
    localhost: {
      chainId: 31337,
      url: "http://127.0.0.1:8545/",
    },
    sepolia: {
      chainId: 11155111,
      url: ""
    },
    // polygon
    polygon: {
      chainId: 0,
      url: ""
    },
  }
};

export default config;
