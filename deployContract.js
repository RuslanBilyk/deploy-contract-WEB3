module.path.push('/usr/lib/node_modules');

var fs = require('fs');

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/........"));

const contract_data = JSON.parse(fs.readdirSync('./deployContractDOCKER/build/contracts/MyToken.json'));

var openKey = "openKey";
var privateKey="privateKey";

var contract = new web3.eth.Contract(contract_data.abi);

contract.deploy({
    data: contract_data.unlinked_binary,
    arguments: []
}).send({
    from: real_address,
    gas: 1500000,
    gasPrice: '80000000'
}, function (error, transactionHash) {

}).on('error', function (error) {
    console.log('error', error);
}).on('transactionHash', function (transactionHash) {
    console.log('transactionHash', transactionHash);
}).on('receipt', function (receipt) {
    console.log('receipt', receipt.contractAddress);
}).on('confirmation', function (confirmationNumber, receipt) {
    console.log('confirmation', confirmationNumber);
}).then(function (new_contract) {
    console.log('Contract Deployed');
    console.log(new_contract.options.address);
    fs.writeFileSync('deployedContract.txt', new_contract.options.address);
});