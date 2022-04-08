export type NFT = {
    url: string,
    ownerWallet: string,
    price: number,
    tokenId: number,
    description: string,
}

import { BuyNFT } from "./BuyNFT";
import { CreateNFT } from "./CreateNFT";
import { GetAllAvailableNFTs } from "./GetAllAvailableNFTs";

export { GetAllAvailableNFTs, BuyNFT, CreateNFT }
