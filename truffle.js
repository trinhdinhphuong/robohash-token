require('dotenv').config({path: '.env'});
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
        networks: {
                ropsten: {
                    provider: function(){
                        return new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY)
                        },
                         network_id: 3,
                         gas: 3000000,
                         gasPrice: 10000000000
                        }
                    },
        compilers: {
    solc: {
       version: "0.4.21"
    }
     }
};