require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note praise puppy half arm bubble genre'; 
let testAccounts = [
"0x74320836a243efa7c57818d425085cbb8d3158c40baedd160dcabaabce0d7beb",
"0x0b9097d816cd594cc983bf7a8f71ee78038dc3010b8eece14de57d6c4350189a",
"0xfca0ca5d80b23e07fe94f9ceb5250ef79987cd870e12af91481c14d0f66c406a",
"0x220137bb3252000d134487d71c2df432e3182db6ae2ccf17361fe43a48f4d7bd",
"0xcd2ea716fa1bac364c72ef79fba1edbf7fdd17881805664cef1d44fb756d9f22",
"0x263ca42e499e6c66ef703607c1a8384f27b2368b3ee2033f253ab9aa5252e8a7",
"0x9944a9cbd25a7c4675d89cb2b0f26b47f6b0d98be8bebceb522f39ab6d51d1c5",
"0x9ba6d4e6e8e6a749699e422740ef61c10f9c609e2538f393063f4ab453e35602",
"0x3bf0679ea8dcf65de2efd4b830f9468a273887807b8f6b9e86163072b09339db",
"0x13fcd19d1423cb780024ea636239fb056ecaae94c1940893ffa4f1ae13bd57c0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

