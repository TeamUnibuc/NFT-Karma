import { Button, EditableText } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import contractJson from "../../../Backend/build/contracts/Simple.json"

// Address the contract was deployed to.
const contractAddress = "0x255f5b3B705ACd7a6882598BEe6B915ff4d092f7";

export default function UploadNFT(): JSX.Element
{
    const [tokenURL, setTokenURL] = useState("Token url...")

    useEffect(() => {
    }, [])

    const submitNewNFT = async () => {
        // TODO:
    }

    return <div>
        <h2>Token URL:</h2>
        <EditableText multiline={false} onChange={setTokenURL} maxLines={1} />
        <br/><br/><br/><br/>
        <Button icon="add">Submit NFT</Button>    
    </div>
}