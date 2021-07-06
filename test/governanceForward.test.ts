import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { GovernaceForward__factory } from "../typechain/factories/GovernaceForward__factory";

chai.use(solidity);
const { expect } = chai;

describe("GovernanceForward", () => {
  let contractAddress: string;

  beforeEach(async () => {
    const [deployer] = await ethers.getSigners();
    const contractFactory = new GovernaceForward__factory(deployer);
    const contractInstance = await contractFactory.deploy();
    contractAddress = contractInstance.address;
  });
  describe("Forward To", async () => {
    it("should success to get voter", async () => {
      const [sender, receiver] = await ethers.getSigners();
      const contractInstance = new GovernaceForward__factory(sender).attach(contractAddress);
      await contractInstance.forwardTo(receiver.address);

      expect(await contractInstance.getVoterByAddress(sender.address)).to.eq(receiver.address);
      expect(await contractInstance.getVotesByRange(0, 1)).not.empty;

      await contractInstance.cancel();
      expect(await contractInstance.getVotesByRange(0, 1)).not.empty;
    });
  });
});
