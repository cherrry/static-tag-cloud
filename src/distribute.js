'use strict'

var assign = require('object-assign')

// assign bucket number
var distribute = function (tagDefs, numOfBuckets) {
  var length = tagDefs.length
  var counts = tagDefs.map(function (tagDef) {
    return tagDef.count
  }).sort()

  var step = tagDefs.length / numOfBuckets
  var upperBounds = []
  for (var i = 0; i < numOfBuckets; i++) {
    var from = Math.min(length - 1, Math.max(0, Math.round(i * step)))
    upperBounds.push(counts[from])
  }

  var findBucket = function (count) {
    var bucket = 0
    while (bucket < numOfBuckets && count >= upperBounds[bucket]) {
      bucket++
    }
    return bucket
  }

  return tagDefs.map(function (tagDef) {
    return assign({ bucket: findBucket(tagDef.count) }, tagDef)
  })
}

module.exports = distribute
