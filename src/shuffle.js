'use strict'

var stringHash = require('./string-hash')
var tagHash = require('./tag-hash')
var tagKey = require('./tag-key')

// A pseudo-random shuffle function
var shuffle = function (tagDefs) {
  // special M for hashing tagDefs
  var M = stringHash(tagDefs.map(tagKey).sort().join(','))

  var tagDefsByHashKey = {}
  tagDefs.forEach(function (tagDef) {
    var hashKey = tagHash(tagDef, M)
    tagDefsByHashKey[hashKey] = tagDef
  })

  return Object.keys(tagDefsByHashKey)
    .filter(function (key) { return tagDefsByHashKey.hasOwnProperty(key) })
    .sort()
    .map(function (hashKey) {
      return tagDefsByHashKey[hashKey]
    })
}

module.exports = shuffle
