var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function (hex) {
    return new Buffer(hex, 'hex');
};

exports.livenet = {
    name: 'livenet',
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L3105
    magic: hex('f3c3b9de'),
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/base58.h#L275
    // echo "obase=16; 75" | bc
    addressVersion: 0x4B, // PUBKEY_ADDRESS
    privKeyVersion: 128,  //common to all coins
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/base58.h#L276
    P2SHVersion: 5,  // SCRIPT_ADDRESS
    hkeyPublicVersion: 0x049d7cb2, // bip32 Header Public
    hkeyPrivateVersion: 0x049d7878, // bip32 Header Private
    genesisBlock: {
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L35
        // echo -n '000007140b7a6ca0b64965824f5731f6e86daadf19eb299033530b1e61236e43' | dd conv=swab | rev
        hash: hex('436e23611e0b53339029eb19dfaa6de8f631574f826549b6a06c7a0b14070000'),
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2811
        // echo -n '64e1822ed56cd7068d031fb3a4758e79c19e3386c654066ee0a16791ab807bea' | dd conv=swab | rev
        merkle_root: hex('ea7b80ab9167a1e06e0654c686339ec1798e75a4b31f038d06d76cd52e82e164'),
        height: 0,
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2797
        nonce: 1033603, 
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2795
        timestamp: 1491940886,
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2796
        // echo $((0x1e0ffff0))
        bits: 504365040
    },
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/net.cpp#L1195
    dnsSeeds: [
        'seed5.cryptolife.net',
	'seed2.cryptolife.net', 
	'seed3.cryptolife.net', 
	'electrum6.cryptolife.net',
        'seed.onixcoin.com',
        'seed.onixcoin.info'
    ],
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/protocol.h#L21
    defaultClientPort: 41016
};

exports.mainnet = exports.livenet;

// FIXME Comprobar los valores correctos de Testnet
exports.testnet = {
    name: 'testnet',
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2741
    magic: hex('fec4bade'),
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/base58.h#L277
    // echo "obase=16; 111" | bc
    addressVersion: 0x6f, // PUBKEY_ADDRESS_TEST
    privKeyVersion: 239,
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/base58.h#L278
    P2SHVersion: 196, //SCRIPT_ADDRESS_TEST
    hkeyPublicVersion: 0x043587cf, // TODO Verificar si este valor es correcto, estamos usando el de bitcoin - Testnet bip32 Header Public
    hkeyPrivateVersion: 0x04358394, // TODO Verificar si este valor es correcto, estamos usando el de bitcoin - Testnet bip32 Header Private
    genesisBlock: {
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2751
        // echo -n '00000c1f283092a173e73f9f318dc1ca36b02eb706adbbde5c384cd0e649849a' | dd conv=swab | rev
        hash: hex('9a8449e6d04c385cdebbad06b72eb036cac18d319f3fe773a19230281f0c0000'),
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2750
        // echo -n '44fc5cf70a124a1bdaca0bc243d1ed4dc7a00ec46bacdc2cad14c63dc98f0b8d' | dd conv=swab | rev
        merkle_root: hex('8d0b8fc93dc614ad2cdcac6bc40ea0c74dedd143c20bcada1b4a120af75cfc44'),
        height: 0,
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2802
        nonce: 755634,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2801
        timestamp: 1521912794,
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2796
        // echo $((0x1e0ffff0))
        bits: 504365040
    },
    dnsSeeds: [
        'testnet-seed.onixcoin.com',
        'testnet-seed.onixcoin.info'
    ],
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/protocol.h#L21
    defaultClientPort: 9944
};
