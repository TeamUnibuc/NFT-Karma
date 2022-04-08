// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract UniBucProf {
  
  uint256 private _startPrice;
  address private _contractOwner;
  string private _baseURI;
  string constant public collectionName = "Numai Profi Unibuc";

  struct STokenData
  {
    string url;
    uint256 price;
  }

  mapping (uint256 => string) private _tokenURI;

  mapping (uint256 => uint256) private _tokenPrice;

  mapping (uint256 => address) private _ownerOfTokenId;

  uint256 private totalSupply;

  constructor (string memory __baseURI, uint256 _initPrice)
  { 
    _contractOwner = msg.sender;
    _baseURI = __baseURI;
    _startPrice = _initPrice;
    totalSupply = 0;
  }

  function mint(string calldata tokenURI) public 
  {
    if (msg.sender != _contractOwner)
      revert();
    if (msg.sender == address(0))
      revert();
    
    uint256 newTokenId = totalSupply;
    _tokenURI[newTokenId] = tokenURI;
    _tokenPrice[newTokenId] = _startPrice;
    _ownerOfTokenId[newTokenId] = msg.sender;

    totalSupply += 1;
  }

  function tokenData(uint256 tokenId) public view returns(STokenData memory)
  {
    if (tokenId >= totalSupply || tokenId < 0)
      revert();

    return STokenData(
      string(abi.encodePacked(_baseURI, _tokenURI[tokenId])),
      _tokenPrice[tokenId]
    );
  }
}

