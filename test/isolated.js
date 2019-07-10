const Isolated = artifacts.require("Isolated");
// const assert = require("chai").assert;
// const truffleAssert = require('truffle-assertions');

contract('Isolated', (accounts) => {
  it('Configuration is setup', async () => {
      let contractInstance = await Isolated.deployed();

      await contractInstance.updateAdmin(accounts[0]);

      // Fetch function works
      assert.equal(accounts[0], await contractInstance.fetchAdmin.call(), "Call should work");

      // Built-in getter doesn't work
      assert.equal(await contractInstance.methods.admin().call(), accounts[0], "Built-in getter will fail ");
  });


});
