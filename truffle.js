const HDWalletProvider = require('truffle-hdwallet-provider')
let mnemonic = 'dignity above glance still victory sibling chaos shift despair game poem garden'
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
