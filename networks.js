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
        // echo -n '000008da0e16960d6c2548da4831323b956d61370e2a3fdc5150188c5c478c49' | dd conv=swab | rev
        hash: hex('498c475c8c185051dc3f2a0e37616d953b323148da48256c0d96160eda080000'),
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2750
        // echo -n 'b0019d92bc054f7418960c91e252e7d24c77719c7a30128c5f6a827c73095d2a' | dd conv=swab | rev
        merkle_root: hex('2a5d09737c826a5f8c12307a9c71774cd2e752e2910c9618744f05bc929d01b0'),
        height: 0,
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2802
        nonce: 1284927160,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2801
        timestamp: 1394723194,
        // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/main.cpp#L2796
        // echo $((0x1e0ffff0))
        bits: 504365040
    },
    dnsSeeds: [
        'testnet-seed.onixcoin.com',
        'testnet-seed.onixcoin.info'
    ],
    // https://github.com/jestevez/onixcoin/blob/28aec388d7014fcc2bf1de60f2113b85d1840ddf/src/protocol.h#L21
    defaultClientPort: 141016
};
