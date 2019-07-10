const Isolated = artifacts.require("Isolated");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Isolated);

};
