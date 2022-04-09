/**
 * Returns the smart contract's Web3 interface.
 */

import Web3 from 'web3'

// TODO: Update with real contract.
import contractJson from "../../../Backend/build/contracts/UniBucProf.json"

// Address the contract was deployed to.
const contractAddress = "0x833e91208e8aC82A5980bf4389047A0e1e057797";

export const web3 = new Web3(Web3.givenProvider);
export const contract = new web3.eth.Contract(contractJson.abi as any, contractAddress);
