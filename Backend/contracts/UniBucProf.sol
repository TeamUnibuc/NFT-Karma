// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract UniBucProf {
  
  uint256 private _startPrice;
  address payable private _contractOwner;
  string private _baseURI;
  string constant public collectionName = "Numai Profi Unibuc";

  struct STokenData
  {
    string url;
    uint256 price;
    string name;
    address owner;
  }

  mapping (uint256 => STokenData) private _tokenData;

  uint256 private totalSupply;

  constructor (string memory __baseURI, uint256 _initPrice)
  { 
    _contractOwner = payable(msg.sender);
    _baseURI = __baseURI;
    _startPrice = _initPrice;
    totalSupply = 0;
  }

  function getTotalSupply() public view returns(uint256)
  {
    return totalSupply;
  }

  function mint(string calldata tokenURI, string calldata name) public 
  {
    // if (msg.sender != _contractOwner)
    //   revert();
    if (msg.sender == address(0))
      revert();
    
    uint256 newTokenId = totalSupply;
    _tokenData[newTokenId].url = string(abi.encodePacked(_baseURI, tokenURI));
    _tokenData[newTokenId].price = _startPrice;
    _tokenData[newTokenId].name = name;
    _tokenData[newTokenId].owner = msg.sender;

    totalSupply += 1;
  }

  function tokenData(uint256 tokenId) public view returns(STokenData memory)
  {
    if (tokenId >= totalSupply || tokenId < 0)
      revert();

    return _tokenData[tokenId];
  }

  function checkBalance() public view returns (uint256)
  {
    return address(this).balance;
  }

  function buyToken(uint256 tokenId) public payable
  {
    if (tokenId < 0 || tokenId >= totalSupply)
      revert();
    if (msg.sender == address(0))
      revert();
    if (msg.sender == _tokenData[tokenId].owner)
      revert();
    if (msg.value < _tokenData[tokenId].price)
      revert();

    _tokenData[tokenId].price *= 2;
    _tokenData[tokenId].owner = msg.sender;
  }
}

