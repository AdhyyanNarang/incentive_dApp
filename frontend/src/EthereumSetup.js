import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var greeterABI = [{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"type":"function"}]

var greeterAddress = '0x9029f945ae211b7e2a914fe27ca10c410a896d18'; 

const greeterContract = web3.eth.contract(greeterABI).at(greeterAddress);

export{greeterContract};
