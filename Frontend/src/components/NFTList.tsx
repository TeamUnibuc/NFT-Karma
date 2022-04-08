import { Button, Card, Elevation } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react'
import { GetAllAvailableNFTs, NFT } from '../utils';
import ShowSingleNFT from './ShowSingleNFT';

const CARD_STYLE: React.CSSProperties = {
    width: "80%",
    // height: "100px",
    marginBottom: "30px",
}

export default function NFTList(): JSX.Element
{
    const [NFTList, setNFTList] = useState<NFT[]>([]);
    // NFT-ul pe care a dat click un tip.
    // daca da click pe un NFT, NU SE POATE INTOARCE LA PAGINA ASTA.
    // Este obligat sa dea din nou click pe bara de sus.
    const [selectedNFT, setSelectedNFT] = useState<NFT|null>(null);

    // incarca NFT-urile
    const loadNFTs = async () => {
        const NFTs = await GetAllAvailableNFTs();
        setNFTList(NFTs);
    };
    
    // apelam functia care incarca NFT-urile
    useEffect(() => {
        loadNFTs()
    }, [selectedNFT]);

    const goBackToNFTList = () => {
        setSelectedNFT(null);
    }

    if (selectedNFT != null)
        return <ShowSingleNFT nft={selectedNFT} goBackToNFTList={goBackToNFTList} />
    
    return <div>
        {NFTList.map((nft: NFT) => {
            return <Card
                    style={CARD_STYLE}
                    interactive={true}
                    elevation={Elevation.TWO}
                    onClick={() => setSelectedNFT(nft)} key={nft.tokenId}
                >
                <img src={nft.url} height="50px" width="50px" />
                <h5><a href="#">Card heading</a></h5>
                <p>Price: {nft.price} TK</p>
                <Button onClick={() => setSelectedNFT(nft)}>View NFT</Button>
            </Card>
        })}
    </div>
}