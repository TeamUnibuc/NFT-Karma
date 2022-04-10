import React, { useState, useEffect } from 'react'
import './App.css'
import SmartContractCaller from './components/SmartContractCaller'
import {
  Alignment,
  Button,
  Navbar,
} from "@blueprintjs/core";
import NFTList from './components/NFTList';
import UploadNFT from './components/UploadNFT';
import { contract, web3 } from "./utils/SmartContractConnector";

const CONTENT_STYLE: React.CSSProperties = {
  paddingLeft: "30px",
  paddingTop: "30px",
  paddingRight: "30px",
}

function App() {

  // list of active menus
  const [activeMenu, setActiveMenu] = useState("NFT-LIST")
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<string>('');

  useEffect(() => {
    if (web3 !== undefined && web3 !== null &&  web3.currentProvider !== null){
      console.log(web3.currentProvider);
      web3.eth.getAccounts()
      .then(handleAccountsChanged)
      .catch((err) => {
        setIsMetamaskConnected(false);
        setCurrentAccount("");
        console.log(err);
      });
    }
  }, []);

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      setIsMetamaskConnected(false);
      setCurrentAccount("");
    } else {
      console.log("Accounts: " + accounts);
      setIsMetamaskConnected(true);
      setCurrentAccount(accounts[0]);
    }
  }

  const connectWallet = async () => {
    if (window.ethereum === undefined){
      alert("Please install Metamask!");
      return;
    }
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    console.log("No of connected accounts: " + accounts.length);
    setIsMetamaskConnected(true);
  };

  return (
    <div className="App">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>NFT Karma</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp4-minimal" icon="home" text="Home" onClick={() => setActiveMenu("NFT-LIST")} />
          <Button className="bp4-minimal" icon="add" text="Upload NFT" onClick={() => setActiveMenu("UPLOAD-NFT")} />
          {isMetamaskConnected === false ? <Button className="bp4-minimal" icon="bank-account" text="Connect" intent="primary" onClick={connectWallet} /> : null}
        </Navbar.Group>
      </Navbar>

      <div style={CONTENT_STYLE}>
        {activeMenu == "NFT-LIST" && <NFTList isMetamaskConnected currentAccount={currentAccount} />}
        {activeMenu == "UPLOAD-NFT" && <UploadNFT isMetamaskConnected />}
        {/* <header className="App-header"> */}
        {/* <Metamask /> */}
        {/* <SmartContractCaller /> */}
        {/* </header> */}
      </div>
    </div>
  )
}

export default App
