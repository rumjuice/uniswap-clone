import { ethers } from "hardhat";

async function main() {
  // Since ETH is not ERC20, we need WETH converter address
  const wEthRinkeby = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
  const [owner, receiver] = await ethers.getSigners();

  const Factory = await ethers.getContractFactory("UniswapV2Factory");
  const Router = await ethers.getContractFactory("UniswapV2Router02");

  const factory = await Factory.deploy(owner.address);

  await factory.setFeeTo(receiver.address);
  const initCodePairHash = await factory.INIT_CODE_PAIR_HASH();

  const router = await Router.deploy(factory.address, wEthRinkeby);

  console.log("Factory deployed to:", factory.address);
  // 0x5FbDB2315678afecb367f032d93F642f64180aa3
  console.log("INIT_CODE_PAIR_HASH", initCodePairHash);
  // 0x95ec725d49355a7c5b76b7a3372074d6b9c8586f3f4fed188159a5c708faa75d
  console.log("Router deployed to:", router.address);
  // 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
