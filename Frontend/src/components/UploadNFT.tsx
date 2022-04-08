import { Button, EditableText } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import contractJson from "../../../Backend/build/contracts/Simple.json"
import { CreateNFT } from '../utils';

// Address the contract was deployed to.
const contractAddress = "0x255f5b3B705ACd7a6882598BEe6B915ff4d092f7";

export default function UploadNFT(): JSX.Element
{
    const [tokenURL, setTokenURL] = useState("Token url...")
    const [tokenDescription, setTokenDescription] = useState("Description...")

    useEffect(() => {
    }, [])

    const submitNewNFT = async () => {
        CreateNFT(tokenURL, tokenDescription);
        console.log("Created NFT.")
    }

    return <div>
        <h2>Token URL:</h2>
        <EditableText multiline={false} value={tokenURL} onChange={setTokenURL} maxLines={2} />
        <br/>
        <br/>
        <EditableText multiline={false} value={tokenDescription} onChange={setTokenDescription} maxLines={2} />
        <br/><br/><br/><br/>
        <Button icon="add" onClick={submitNewNFT}>Submit NFT</Button>    
    </div>
}