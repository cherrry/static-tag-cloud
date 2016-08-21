'use strict'

var assign = require('object-assign')

var distribute = require('./distribute')
var shuffle = require('./shuffle')

var DEFAULT_NUM_OF_BUCKETS = 4

var tagCloud = function (tagDefs, options) {
  // only process tags with positive count
  tagDefs = tagDefs.filter(function (tagDef) { return tagDef.count > 0 })
  if (tagDefs.length === 0) return []

  var numOfBuckets = (options && options.numOfBuckets) || DEFAULT_NUM_OF_BUCKETS
  return shuffle(distribute(tagDefs, numOfBuckets))
}

module.exports = tagCloud
