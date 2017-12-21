'use strict';

var chai = chai || require('chai');
var bitcore = bitcore || require('../onixcore');

var expect = chai.expect;
var should = chai.should();

describe('Initialization of onixcore', function() {
  it('should initialze the main object', function() {
    should.exist(bitcore);
  });
});
