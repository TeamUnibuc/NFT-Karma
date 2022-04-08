/**
 * Returns the smart contract's Web3 interface.
 */

import Web3 from 'web3'

// TODO: Update with real contract.
import contractJson from "../../../Backend/build/contracts/UniBucProf.json"

// Address the contract was deployed to.
const contractAddress = "0xd0A2886C17D1913658061EceF0519e2ef796e1A1";

export const web3 = new Web3(Web3.givenProvider);
export const contract = new web3.eth.Contract(contractJson.abi as any, contractAddress);
