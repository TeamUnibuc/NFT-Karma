import React, { useState, useCallback } from 'react'
import './App.css'
import SmartContractCaller from './components/SmartContractCaller'
import {
  Alignment,
  Button,
  Navbar,
} from "@blueprintjs/core";
import NFTList from './components/NFTList';
import UploadNFT from './components/UploadNFT';

const CONTENT_STYLE: React.CSSProperties = {
  paddingLeft: "30px",
  paddingTop: "30px",
  paddingRight: "30px",
}

function App() {
  
  // list of active menus
  const [activeMenu, setActiveMenu] = useState("NFT-LIST")

  return (
    <div className="App">
      <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>NFT Karma</Navbar.Heading>
              <Navbar.Divider />
              <Button className="bp4-minimal" icon="home" text="Home" onClick={() => setActiveMenu("NFT-LIST")} />
              <Button className="bp4-minimal" icon="add" text="Upload NFT" onClick={() => setActiveMenu("UPLOAD-NFT")} />
          </Navbar.Group>
      </Navbar>

      <div style={CONTENT_STYLE}>
      {activeMenu == "NFT-LIST" && <NFTList />}
      {activeMenu == "UPLOAD-NFT" && <UploadNFT />}
      {/* <header className="App-header"> */}
        {/* <Metamask /> */}
      {/* <SmartContractCaller /> */}
      {/* </header> */}
      </div>
    </div>
  )
}

export default App
