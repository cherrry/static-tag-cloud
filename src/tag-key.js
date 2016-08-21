'use strict'

var tagKey = function (tagDef) {
  return tagDef.id + ':' + tagDef.count
}

module.exports = tagKey
