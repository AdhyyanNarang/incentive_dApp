var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations, 0x5eb0a19a7a5274743baa6e017347c06bcfcb3777);
};
