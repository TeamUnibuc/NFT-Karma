import { contract, web3 } from "./SmartContractConnector";

// true if we were able to buy it
export const BuyNFT = async (tokenId: number): Promise<boolean> => {
    const accounts = await web3.eth.getAccounts();
    console.log("Accounts: ", accounts)
    const result = await contract.methods.buyToken(tokenId).send({
        from: accounts[0],
        value: 100,
        gas: 3000000,
    })
    .then(() => {
        console.log("Yep")
    })
    .catch(() => {
        console.log("Nope")
    });
    console.log("Received " + result)
    return false;
}

// // true if we were able to buy it
// export const CreateNFT = async (NFTUrl: string, description: string): Promise<boolean> => {
//     const accounts = await web3.eth.getAccounts();
//     console.log("Accounts: ", accounts)
//     const result = await contract.methods.mint(NFTUrl, description).send({
//         from: accounts[0],
//     })
//     .then(() => {
//         console.log("Yep")
//     })
//     .catch(() => {
//         console.log("Nope")
//     });
//     console.log("Received " + result)
//     return false;
// }
