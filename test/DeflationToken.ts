import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("DeflationToken", function () {
  it("", async function() {
    const dt = await ethers.deployContract("DeflationToken");
    const address = await dt.getAddress();
    console.log(address);
  });
});
