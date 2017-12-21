Onixcore
=======

A pure, powerful core for your onixcoin project.

Onixcore is a complete, native interface to the Onixcoin network, and provides the core functionality needed to develop apps for onixcoin.

#Principles

Onixcoin is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Onixcoin network allows for highly resilient bitcoin infrastructure, and the developer community needs reliable, open-source tools to implement bitcoin apps and services.

**Onixcore unchains developers from fallible, centralized APIs, and provides the tools to interact with the real Onixcoin network.**

#Get Started

Onixcore runs on [node](http://nodejs.org/), and can be installed via [npm](https://npmjs.org/):

```
npm install onixcore
```

It is a collection of objects useful to bitcoin applications; class-like idioms are enabled via [Soop](https://github.com/bitpay/soop). In most cases, a developer will require the object's class directly. For instance:

```
var bitcore = require('onixcore');
var Address = bitcore.Address;
var Transaction = bitcore.Transaction;
var PeerManager = bitcore.PeerManager;
```

#Examples

Examples are provided [here](examples.md)
Build the examples by installing and running gulp:

```
npm install -g gulp
gulp
```

Javascript files available at [/examples](/examples) folder.


#Security

Please use at your own risk.

Onixcore is still under heavy development and not quite ready for "drop-in" production use. If you find a security issue, please email security@onixcoin.com.

#Contributing

Onixcore needs some developer love. Please send pull requests for bug fixes, code optimization, and ideas for improvement.

#Browser support

## Building the browser bundle

To build onixcore full bundle for the browser (this is automatically executed after you run `npm install`):

```
node browser/build.js -a
```

This will generate a `browser/bundle.js` file which you can include in your HTML to use onixcore in the browser.

##Example browser usage

From example/simple.html
```
<!DOCTYPE html>
<html>
  <body>
    <script src="../browser/bundle.js"></script>
    <script>
      var bitcore = require('onixcore');
      var Address = bitcore.Address;
      var a = new Address('XEMV35Z5Z1DspCsJriT4SRWAiYPicCgKQg');
      console.log('XEMV35Z5Z1DspCsJriT4SRWAiYPicCgKQg is valid? '+a.isValid());
    </script>
  </body>
</html>
```

You can check a more complex usage example at examples/example.html.

## Generating a customized browser bundle

To build the main onixcore bundle, run:

```
node browser/build.js -m
```

To build all features into the onixcore bundle (which will lead to a large filesize), run:

```
node browser/build.js -a
```

To generate a customized onixcore bundle, you can specify which submodules you want to include in it with the -s option:

```
node browser/build.js -s Transaction,Address
```

This will generate a `browser/bundle.js` containing only the Transaction and Address class, with all their dependencies.  Use this option if you are not using the whole onixcore library, to optimize the bundle size, script loading time, and general resource usage.

## Tests

Run tests in node:

```
mocha
```

Or generate tests in the browser:

```
grunt shell
```

And then open test/index.html in your browser.

To run the code coverage report:

```
npm run-script coverage
```

And then open coverage/lcov-report/index.html in your browser.

#License

**Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).**

Copyright 2013-2014 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

