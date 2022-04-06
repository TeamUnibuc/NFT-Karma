// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Simple {
  string public name;
   
  constructor() {
    name = 'my name';
  }
 
  // Exemplu pentru diferenta dintre string memory si string calldata
  // memory poate fi modificat in functie / returnat, gas price -> higher
  // calldata este readonly si este calculat de caller, este constant, readonly gas price -> lower
  function getName() public view returns (string memory) {
    return (name);
  }
 
  function changeName(string calldata _name) public {
    name = _name;
  }
}
