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
  }

  mapping (uint256 => STokenData) private _tokenData;

  mapping (uint256 => address) private _ownerOfTokenId;

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
    if (msg.sender != _contractOwner)
      revert();
    if (msg.sender == address(0))
      revert();
    
    uint256 newTokenId = totalSupply;
    _tokenData[newTokenId].url = tokenURI;
    _tokenData[newTokenId].price = _startPrice;
    _tokenData[newTokenId].name = name;
    _ownerOfTokenId[newTokenId] = msg.sender;

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
    if (msg.sender == _ownerOfTokenId[tokenId])
      revert();
    if (msg.value < _tokenData[tokenId].price)
      revert();

    _tokenData[tokenId].price *= 2;
    _ownerOfTokenId[tokenId] = msg.sender;
  }
}

