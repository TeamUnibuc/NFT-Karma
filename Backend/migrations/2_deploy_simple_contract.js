// This was the starter code truffle gave us
// module.exports = function(_deployer) {
//   /* Use deployer to state migration tasks. */
// };

const SimpleContract = artifacts.require('Simple');
 
module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(SimpleContract);
};