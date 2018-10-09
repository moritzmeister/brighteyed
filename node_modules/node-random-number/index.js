'use strict'
var range = require('lodash.range')
var shuffle = require('lodash.shuffle')

module.exports = function (opts) {
  opts = opts || {}
  var start = typeof opts.start === 'number' ?
    opts.start :
    0
  var end = typeof opts.end === 'number' ?
    opts.end :
    100
  var count = typeof opts.count === 'number' ?
    opts.count :
    1
  if (end <= start) {
    throw new Error('Expected end number to be bigger that start number')
  }
  var numbers = range(start, end)
  if (count > numbers.length) {
    throw new Error('You cannot get more than ' + numbers.length + ' numbers')
  }
  var result = []
  while (count--) {
    numbers = shuffle(numbers)
    result.push(numbers.pop())
  }
  return result
}
