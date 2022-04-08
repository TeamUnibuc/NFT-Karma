/**
 * Returns the smart contract's Web3 interface.
 */

import Web3 from 'web3'

// TODO: Update with real contract.
import contractJson from "../../../Backend/build/contracts/Simple.json"

// Address the contract was deployed to.
const contractAddress = "0x255f5b3B705ACd7a6882598BEe6B915ff4d092f7";

export const web3 = new Web3(Web3.givenProvider);
export const contract = new web3.eth.Contract(contractJson.abi as any, contractAddress);
