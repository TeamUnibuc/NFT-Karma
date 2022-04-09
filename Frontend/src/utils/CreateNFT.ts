import { NFT } from "."
import { contract, web3 } from "./SmartContractConnector"


// true if we were able to buy it
export const CreateNFT = async (NFTUrl: string, description: string): Promise<boolean> => {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    const accounts = await web3.eth.getAccounts();
    console.log("Accounts: ", accounts)
    const result = await contract.methods.mint(NFTUrl, description).send({
        from: accounts[0],
        // tokenURI: NFTUrl,
        // name: description,
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

//         console.log("Received as accounts:")
//         console.log(accounts)
//         await contract.methods.changeName(newName).send({ from: accounts[0] });

// const GetSingleNFT = async (tokenId: number): Promise<NFT> => {
//     const data = await contract.methods.tokenData(0).call();
//     const nft: NFT = {
//         url: data.url,
//         price: data.price,
//         description: data.name,
//         ownerWallet: "UNKNOWN",
//         tokenId: tokenId
//     }

//     return nft;
// }

// export const GetAllAvailableNFTs = async (): Promise<NFT[]> => {
//     const nrOfTokens = await contract.methods.getTotalSupply().call();
//     console.log("We have " + nrOfTokens + " tokens.")

//     const tokensIds = Array.from(Array(nrOfTokens).keys()).slice(0, nrOfTokens)
//     console.log("Tokens to get: ", tokensIds)

//     const nfts = await Promise.all(tokensIds.map(GetSingleNFT))

//     return nfts;
// }