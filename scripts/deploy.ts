import { sign } from "crypto";
import { ethers } from "hardhat";
import dtCompiled from "../artifacts/contracts/DeflationToken.sol/DeflationToken.json";

async function main() {
  // deploy deflation token
  // get signer 
  const [deployer] = await ethers.getSigners();
  const contract = await ethers.deployContract("DeflationToken");
  const address = await contract.getAddress();

  console.log(`address ${address}  deployer ${deployer.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
