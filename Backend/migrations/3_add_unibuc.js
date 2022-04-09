// This was the starter code truffle gave us
// module.exports = function(_deployer) {
//   /* Use deployer to state migration tasks. */
// };

const SimpleContract = artifacts.require('UniBucProf');
 
module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(SimpleContract, "https://github.com/TeamUnibuc/NFT-Karma/tree/main/Poze", 1)
  .then(() => {
    console.log("Deployed contract at " + SimpleContract.address);
  });
};