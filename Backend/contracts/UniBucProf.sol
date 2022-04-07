// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// import "./ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract UniBucProf is ERC721 {
  
  constructor (string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
  {  }

  
 
  
}

