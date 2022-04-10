// import React, { useEffect, useState } from 'react'
// import Web3 from 'web3'

// export default function Metamask(): JSX.Element
// {
//     console.log("Before render")

//     const [account, setAccount] = useState("Loading ...")
    
//     const web3 = new Web3(Web3.givenProvider)

//     const reloadAccount = async () =>
//     {
//         await window.ethereum.request({ method: 'eth_requestAccounts' })
//         const accounts = await web3.eth.getAccounts();
//         console.log(accounts)
//         setAccount(accounts[0]);
//     }

//     const loadBlockChain = async () => {
//         console.log("Before anything")
//         console.log("Given provider")
//         console.log(Web3.givenProvider)
//         console.log("Env var")
//         console.log(import.meta.env.VITE_APP_BLOCKCHAIN_URL)
//         console.log(import.meta.env)
//         // const web3 = new Web3(import.meta.env.VITE_APP_BLOCKCHAIN_URL)

//         window.ethereum.on('accountsChanged', function (accounts) {
//             reloadAccount();
//         })

//         await reloadAccount()
//     }

//     useEffect(() => {loadBlockChain()}, [])

//     return <div>
//         <p>Your account: {account}</p>
//     </div>
// }