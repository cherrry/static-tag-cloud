# Static Tag Cloud

A deterministic tag cloud generator which always gives the same output upon the same input.

## Install

```sh
$ npm install --save static-tag-cloud
```

## Usage

```js
import tagCloud from 'static-tag-cloud'

tagCloud([
  { id: 'apple', count: 1 },
  { id: 'boy', count: 2 },
  { id: 'cat', count: 4 },
  { id: 'dog', count: 1 }
])

/*
[
  { bucket: 2, id: 'apple', count: 1 },
  { bucket: 2, id: 'dog', count: 1 },
  { bucket: 2, id: 'boy', count: 2 },
  { bucket: 4, id: 'cat', count: 4 }
]
*/
```
