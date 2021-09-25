require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stone deny miss essay gloom end army genre'; 
let testAccounts = [
"0x48f4c691e0534079f9ba16415634b5310a0c9a3dddbad5837826bd41b955e8bf",
"0x84670bd59f12f638eec01d03d0256e039e404a4d80bb5b7141133e73ca818d92",
"0x6324f2bd16c2ae2cf9ff9ceff6ce5d56a62eb2709543625a6e7d03474061e038",
"0x716cd8758a4060a61eaa41890ff8f99f926c392f7652c3ba54efe160440527e7",
"0xa0e6e30b6b382892f6ffc66854b5ece9e86fba1821f0f2431ca021c39cf69e2f",
"0x84a2c7e5d67638d5294d1eebc23d62b91fb5f80b38421349c1fb847e5552411f",
"0x10007fea33d17b25a70b5bc5f39bfc0b8821c8d78dd429c923a3a054fc9e3ee6",
"0x70a83a2d3cf447361a7a3cd50ab5472c1a15bbab018a9c06f112af99de8bdc13",
"0x7b77358c9e6a6d964aa15020b4f3564be23e536953c15c1a7429c61f38a75265",
"0x9b8839b4c035aac3eadba2e205033ede08c1df8df1a8402cf07de0de1dca3dde"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


