'use strict'
var random = require('node-random-number')

module.exports = function (input, count) {
  var indexes = random({start: 0, end: input.length, count: count})
  return indexes.map(function (index) {
    return input[index]
  })
}
