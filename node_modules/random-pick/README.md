# random-pick [![NPM version](https://img.shields.io/npm/v/random-pick.svg)](https://npmjs.com/package/random-pick) [![NPM downloads](https://img.shields.io/npm/dm/random-pick.svg)](https://npmjs.com/package/random-pick) [![Build Status](https://img.shields.io/circleci/project/egoist/random-pick/master.svg)](https://circleci.com/gh/egoist/random-pick)

> Pick random unique items from an array.

## Install

```bash
$ npm install --save random-pick
```

## Usage

```js
const pick = require('random-pick')

const fruits = [
  'apple',
  'banana',
  'peach',
  'mango'
]

pick(fruits)
//=> ['banana']

pick(fruits, 2)
//=> ['apple', 'peach']

pick('hello world', 4)
//=> ['e', 'h', 'r', 'w']

pick(document.querySelectorAll('.item'), 2)
//=> ['<div class="item">...</div>', '<div class="item">...</div>']
```

## API

### randomPick(input[, count])

#### input

Type: `array` `string` `object`

The array or string or array-like object to pick from.

#### count

Type: `number`<br>
Default: `1`

The amount of items you wanna pick.

#### return

Type: `array`<br>

Return the picked items.

## License

MIT © [EGOIST](https://github.com/egoist)
