# invoke-before

> Returns a function that will only be executed before being called N times.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/gearcase/invoke-before/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/gearcase/invoke-before/master.svg?style=flat-square)](https://travis-ci.org/gearcase/invoke-before)
[![coverage:?](https://img.shields.io/coveralls/gearcase/invoke-before/master.svg?style=flat-square)](https://coveralls.io/github/gearcase/invoke-before)


## Install

```
$ npm install --save invoke-before 
```

## Usage

> For more use-cases see the [tests](https://github.com/gearcase/invoke-before/blob/master/test/spec/index.js)

```js

var invokeBefore = require('invoke-before');

// invokeBefore(n, func);

invokeBefore(1, func); // never be executed
invokeBefore(2, func); // only be executed once
invokeBefore(3, func); // only be executed twice

// ...
```

## Related

- [invoke-fn](https://github.com/gearcase/invoke-fn) - A faster alternative to `Function#apply`.
- [invoke-before](https://github.com/gearcase/invoke-before) - Returns a function that will only be executed before being called N times.
- [invoke-after](https://github.com/gearcase/invoke-after) - Returns a function that will only be executed after being called N times.
- [invoke-once](https://github.com/gearcase/invoke-once) - Restrict the given function only be invoked once.
- [is-native](https://github.com/gearcase/is-native) - Checks if the given value is a native function.
- [to-source-code](https://github.com/gearcase/to-source-code.git) - Converts function to its source code.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/gearcase/invoke-before/issues/new).
