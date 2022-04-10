import { Alignment, Button, ButtonGroup, Card, Divider, Elevation } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react'
import { BuyNFT, NFT } from '../utils';
import { web3 } from '../utils/SmartContractConnector';

const CARD_STYLE: React.CSSProperties = {
    width: "80%",
    maxWidth: "500px",
    // height: "100px",
    marginBottom: "30px",
    marginLeft: "auto",
    marginRight: "auto"
}

const CARD_CONTAINER_STYLE: React.CSSProperties = {
    display: "flex"
}

export interface ShowSingleNFTParams {
    nft: NFT,
    goBackToNFTList: () => void,
    isMetamaskConnected: boolean,
    currentAccount: string,
}

export default function ShowSingleNFT({ nft, goBackToNFTList, isMetamaskConnected, currentAccount }: ShowSingleNFTParams): JSX.Element {

    const buyNFT = async () => {
        await BuyNFT(nft);
        console.log("Got here!")
        goBackToNFTList();
    }

    return <div>
        <Card
            style={CARD_STYLE}
            interactive={false}
            elevation={Elevation.TWO}
        >
            <img src={nft.url} height="250px" width="250px" />
            <h5><a href="#">{nft.description}</a></h5>
            <p>Price: {nft.price / (10 ** 18)} UBC</p>
            <p>Owner: {nft.ownerWallet}</p>
            <ButtonGroup> 
                <Button onClick={goBackToNFTList}>Go Back</Button>
                {
                    isMetamaskConnected && currentAccount !== nft.ownerWallet ?
                    <>
                        <Divider />
                        <Button onClick={buyNFT} intent="success">Buy NFT</Button>
                    </> : null
                }
                
            </ButtonGroup>

        </Card>
    </div>
}