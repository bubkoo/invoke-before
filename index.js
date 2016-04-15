'use strict';

var invoke    = require('invoke-fn');
var toInteger = require('to-integer');


module.exports = function (n, func) {

  if (typeof func !== 'function') {
    throw new TypeError('Argument error: Expected a function');
  }

  n = toInteger(n);

  var result;

  return function () {

    if (--n > 0) {
      result = invoke(func, this, arguments);
    }

    if (func && n <= 1) {
      func = undefined;
    }

    return result;
  };
};

