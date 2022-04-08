export type NFT = {
    url: string,
    ownerWallet: string,
    price: number,
    tokenId: number,
}

import { BuyNFT } from "./BuyNFT";
import { CreateNFT } from "./CreateNFT";
import { GetAllAvailableNFTs } from "./GetAllAvailableNFTs";

export { GetAllAvailableNFTs, BuyNFT, CreateNFT }
