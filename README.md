# appc.js

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Travis CI Build][travis-image]][travis-url]
[![Deps][david-image]][david-url]
[![Dev Deps][david-dev-image]][david-dev-url]

This module makes it easy to load both the `appc.js` or `appc.json` (legacy)
configuration file.

## Installation

    npm install appc.js --save

## Examples

Example for ES5:

```javascript
var AppCJS = require('appc.js').default;
var app = new AppCJS(fileLocation);
console.log(app.name);
```

Example for ES6:

```javascript
import AppCJS from 'appc.js';
var app = new AppCJS(fileLocation);
console.log(app.name);
```

## Reporting Bugs or Submitting Fixes

If you run into problems, and trust us, there are likely plenty of them at this
point -- please create an [Issue](https://github.com/appcelerator/appc.js/issues)
or, even better, send us a pull request.

## Contributing

appc.js is an open source project. appc.js wouldn't be where it is now without
contributions by the community. Please consider forking appc.js to improve,
enhance or fix issues. If you feel like the community will benefit from your
fork, please open a pull request.

To protect the interests of the appc.js contributors, Appcelerator, customers
and end users we require contributors to sign a Contributors License Agreement
(CLA) before we pull the changes into the main repository. Our CLA is simple and
straightforward - it requires that the contributions you make to any
Appcelerator open source project are properly licensed and that you have the
legal authority to make those changes. This helps us significantly reduce future
legal risk for everyone involved. It is easy, helps everyone, takes only a few
minutes, and only needs to be completed once.

[You can digitally sign the CLA](http://bit.ly/app_cla) online. Please indicate
your email address in your first pull request so that we can make sure that will
locate your CLA.  Once you've submitted it, you no longer need to send one for
subsequent submissions.

## License

This project is open source and provided under the Apache Public License (version 2).
Please make sure you see the LICENSE file included in this distribution for more
details on the license. Also, please take notice of the privacy notice at the end of the file.

(C) Copyright 2016, [Appcelerator, Inc](http://www.appcelerator.com) All Rights Reserved.

[npm-image]: https://img.shields.io/npm/v/appc.js.svg
[npm-url]: https://npmjs.org/package/appc.js
[downloads-image]: https://img.shields.io/npm/dm/appc.js.svg
[downloads-url]: https://npmjs.org/package/appc.js
[travis-image]: https://img.shields.io/travis/appcelerator/appc.js.svg
[travis-url]: https://travis-ci.org/appcelerator/appc.js
[david-image]: https://img.shields.io/david/appcelerator/appc.js.svg
[david-url]: https://david-dm.org/appcelerator/appc.js
[david-dev-image]: https://img.shields.io/david/dev/appcelerator/appc.js.svg
[david-dev-url]: https://david-dm.org/appcelerator/appc.js#info=devDependencies
