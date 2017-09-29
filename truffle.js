const HDWalletProvider = require('truffle-hdwallet-provider')
let mnemonic = 'luggage basket tilt chase school clarify aspect void enter cereal chuckle pig' 
module.exports = {
  networks: {
      //download testrpc and type `testrpc` in your console to start a locally hosted blockchain
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby : {
	provider: new HDWalletProvider(mnemonic, "http://localhost:8545"),
	network_id: "4",
	gas: 4500000,
	gasPrice: 25000000000
    }
  }
};
