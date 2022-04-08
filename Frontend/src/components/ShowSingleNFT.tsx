import { Button, Card, Elevation } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react'
import { BuyNFT, NFT } from '../utils';

const CARD_STYLE: React.CSSProperties = {
    width: "80%",
    // height: "100px",
    marginBottom: "30px",
}

export interface ShowSingleNFTParams {
    nft: NFT,
    goBackToNFTList: () => void,
}

export default function ShowSingleNFT({ nft, goBackToNFTList }: ShowSingleNFTParams): JSX.Element
{

    const buyNFT = async () => {
        await BuyNFT(nft.tokenId);
        console.log("Got here!")
        goBackToNFTList();
    }

    return <div>
        <Button onClick={goBackToNFTList}>Go Back</Button> 
        <Card
            style={CARD_STYLE}
            interactive={true}
            elevation={Elevation.TWO}
            onClick={buyNFT} key={nft.tokenId}
        >
            <img src={nft.url} height="50px" width="50px" />
            <h5><a href="#">Card heading</a></h5>
            <p>Price: {nft.price} TK</p>
            <Button onClick={buyNFT}>Buy NFT</Button>
        </Card>
    </div>
}