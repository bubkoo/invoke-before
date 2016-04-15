'use strict';

var expect = require('chai').expect;


describe('invoke-before: ', function () {

  var invokeBefore = require('../../');

  it('invokeBefore(1, func) => never be executed.', function () {

    var c  = 0;
    var fn = invokeBefore(1, function () {
      return ++c;
    });

    expect(fn()).to.be.undefined;
    expect(fn()).to.be.undefined;
    expect(fn()).to.be.undefined;

  });

  it('invokeBefore(2, func) => only be executed once.', function () {

    var c  = 0;
    var fn = invokeBefore(2, function () {
      return ++c;
    });

    expect(fn()).to.be.equal(1);
    expect(fn()).to.be.equal(1);
    expect(fn()).to.be.equal(1);

  });

  it('invokeBefore(3, func) => only be executed twice.', function () {

    var c  = 0;
    var fn = invokeBefore(3, function () {
      return ++c;
    });

    expect(fn()).to.be.equal(1);
    expect(fn()).to.be.equal(2);
    expect(fn()).to.be.equal(2);

  });

  it('exceptions', function () {

    expect(function(){
      invokeBefore(3, null);
    }).to.throw(Error);

  });
});
