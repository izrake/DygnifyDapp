import { ethers } from "ethers";
import dygnifyStaking from "../../artifacts/contracts/DygnifyStaking.sol/DygnifyStaking.json";
import dygnifyToken from "../../artifacts/contracts/DygnifyToken.sol/DygnifyToken.json";
import { requestAccount } from "../navbar/NavBarHelper";

const dygnifyStakingAddress = "0x535f2B176CA3f39D9B5e99b8BEFb85bbA43f5045";
const token = "0x310FC4DCC85C212475f0671fc90aC8Ec3971bd87";

export async function approve(amount) {
  if (amount <= 0 || amount <= "0") {
    console.log("Amount must be greater than 0");
  } else if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider });
    const signer = provider.getSigner();
    const contract2 = new ethers.Contract(token, dygnifyToken.abi, signer);
    const transaction = await contract2.approve(dygnifyStakingAddress, amount);
    await transaction.wait();
  }
}

export async function allowance(ownerAddress) {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider });
    const signer = provider.getSigner();
    const contract2 = new ethers.Contract(token, dygnifyToken.abi, signer);
    const transaction = await contract2.allowance(
      ownerAddress,
      dygnifyStakingAddress
    );

    return ethers.utils.formatEther(transaction);
  }
}

export async function stake(amount) {
  if (amount <= 0 || amount <= "0") {
    console.log("Amount must be greater than 0");
  } else if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider });
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      dygnifyStakingAddress,
      dygnifyStaking.abi,
      signer
    );
    const transaction1 = await contract.stake(amount);
    await transaction1.wait();
  }
}

export async function unstake(amount) {
  if (amount === 0) console.log("Amount must be greater than 0");
  else if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider });
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      dygnifyStakingAddress,
      dygnifyStaking.abi,
      signer
    );
    const transaction = await contract.unstake(amount);
    await transaction.wait();
  }
}

export async function withdrawYield() {
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider });
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      dygnifyStakingAddress,
      dygnifyStaking.abi,
      signer
    );
    const transaction = await contract.withdrawYield();
    await transaction.wait();
  }
}

export async function getTotalYield() {
  try {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        dygnifyStakingAddress,
        dygnifyStaking.abi,
        signer
      );
      const data = await contract.getTotalYield();

      return ethers.utils.formatEther(data);
    }
  } catch (error) {
    console.log(error);
  }
  return 0;
}

export async function getWalletBal() {
  try {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // console.log({ provider });
      const contract = new ethers.Contract(token, dygnifyToken.abi, provider);
      const signer = provider.getSigner();
      const bal = await contract.balanceOf(await signer.getAddress());
      // console.log(ethers.utils.formatEther(bal));
      return ethers.utils.formatEther(bal);
      console.log(ethers.utils.formatEther(bal));
    }
  } catch (error) {
    console.log(error);
  }

  return 0;
}

export async function getWithdrawBal() {
  try {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
      const contract = new ethers.Contract(
        dygnifyStakingAddress,
        dygnifyStaking.abi,
        provider
      );

      const signer = provider.getSigner();
      const data = await contract.stakingBalance(await signer.getAddress());
      return ethers.utils.formatEther(data);
    }
  } catch (error) {
    console.log(error);
  }

  return 0;
}
