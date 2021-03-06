'use strict'

// Two carefully selected primes
var P1 = 43063
var P2 = 48611

var stringHash = function (string, p1, p2) {
  p1 = p1 || P1
  p2 = p2 || P2

  var hash = 0
  for (var i = 0, _len = string.length; i < _len; i++) {
    var code = string.charCodeAt(i)
    hash = ((((hash * p1) % p2) + code) * p1) % p2
  }
  return hash
}

module.exports = stringHash
