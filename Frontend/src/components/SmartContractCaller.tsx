import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import contractJson from "../../../Backend/build/contracts/Simple.json"

// Address the contract was deployed to.
const contractAddress = "0x255f5b3B705ACd7a6882598BEe6B915ff4d092f7";

export default function SmartContractCaller(): JSX.Element
{
    const [name, setName] = useState("Loading ...");
    const [newName, setNewName] = useState("Enter a new name...")

    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(contractJson.abi as any, contractAddress)

    const callSmartContract = async () => {
        const n = await contract.methods.getName().call();
        setName(n);
    }

    useEffect(() => {
        callSmartContract();
    }, [])

    const changeName = async () => {
        const accounts = await web3.eth.getAccounts();
        console.log("Received as accounts:")
        console.log(accounts)
        await contract.methods.changeName(newName).send({ from: accounts[0] });
        callSmartContract()
    }

    return <div>
        <h1>Current name in blockchain: {name}</h1>
        <div>
            <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)}></input>
            <button onClick={() => changeName()}>Change Name</button>
        </div>
    </div>
}