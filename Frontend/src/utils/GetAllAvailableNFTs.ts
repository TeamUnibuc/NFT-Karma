import { NFT } from "."
import { contract } from "./SmartContractConnector"

const GetSingleNFT = async (tokenId: number): Promise<NFT> => {
    const data = await contract.methods.tokenData(tokenId).call();
    const nft: NFT = {
        url: data.url,
        price: data.price,
        description: data.name,
        ownerWallet: "UNKNOWN",
        tokenId: tokenId
    }

    return nft;
}

export const GetAllAvailableNFTs = async (): Promise<NFT[]> => {
    const nrOfTokens = await contract.methods.getTotalSupply().call();
    console.log("We have " + nrOfTokens + " tokens.")

    const tokensIds = Array.from(Array(nrOfTokens).keys()).slice(0, nrOfTokens)
    console.log("Tokens to get: ", tokensIds)

    const nfts = await Promise.all(tokensIds.map(GetSingleNFT))

    return nfts;
}