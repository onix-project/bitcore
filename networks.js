var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function (hex) {
    return new Buffer(hex, 'hex');
};

exports.livenet = {
    name: 'livenet',
    magic: hex('f3c3b9de'),
    addressVersion: 0x4B,
    privKeyVersion: 128,
    P2SHVersion: 5,
    hkeyPublicVersion: 0x049d7cb2,
    hkeyPrivateVersion: 0x049d7878,
    genesisBlock: {
        hash: hex('436e23611e0b53339029eb19dfaa6de8f631574f826549b6a06c7a0b14070000'),
        merkle_root: hex('ea7b80ab9167a1e06e0654c686339ec1798e75a4b31f038d06d76cd52e82e164'),
        height: 0,
        nonce: 1033603,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        timestamp: 1491940886,
        bits: 504365040,
    },
    dnsSeeds: [
        'seed.onixcoin.com',
        'seed.onixcoin.info'
    ],
    defaultClientPort: 41016
};

exports.mainnet = exports.livenet;

// FIXME Comprobar los valores correctos de Testnet
exports.testnet = {
    name: 'testnet',
    magic: hex('fec4bade'),
    addressVersion: 0x6f,
    privKeyVersion: 239,
    P2SHVersion: 196,
    hkeyPublicVersion: 0x043587cf,
    hkeyPrivateVersion: 0x04358394,
    genesisBlock: {
        hash: hex('498c475c8c185051dc3f2a0e37616d953b323148da48256c0d96160eda080000'),
        merkle_root: hex('2a5d09737c826a5f8c12307a9c71774cd2e752e2910c9618744f05bc929d01b064'),
        height: 0,
        nonce: 1284927160,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        timestamp: 1394723194,
        bits: 504365040,
    },
    dnsSeeds: [
        'testnet-seed.onixcoin.com',
        'testnet-seed.onixcoin.info'
    ],
    defaultClientPort: 141016
};