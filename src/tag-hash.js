'use strict'

var stringHash = require('./string-hash')
var tagKey = require('./tag-key')

var tagHash = function (tagDef, P1, P2) {
  return stringHash(tagKey(tagDef), P1, P2)
}

module.exports = tagHash
