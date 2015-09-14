Filename Extension
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture a Windows filename extension.


## Installation

``` bash
$ npm install regex-extname-windows
```


## Usage

``` javascript
var re = require( 'regex-extname-windows' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture a Windows filename extension. 

``` javascript
var ext = re.exec( 'index.js' )[ 1 ];
// returns '.js'
```

## Notes

*	When executed against dotfile filenames (e.g., `.gitignore`), the [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) does __not__ capture the basename as a filename extension.

	``` javascript
	var ext = re.exec( '.bash_profile' )[ 1 ];
	// returns ''

	ext = re.exec( '.travis.yml' )[ 1 ];
	// returns '.yml'
	```


## Examples

``` javascript
var re = require( 'regex-extname-windows' );

var ext;

ext = re.exec( 'index.js' )[ 1 ];
// returns '.js'

ext = re.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
// returns '.html'

ext = re.exec( 'foo\\file.pdf' )[ 1 ];
// returns '.pdf'

ext = re.exec( 'beep\\boop.' )[ 1 ];
// returns '.'

ext = re.exec( '' )[ 1 ];
// returns ''

ext = re.exec( '\\foo\\bar\\file' )[ 1 ];
// returns ''

ext = re.exec( 'C:\\foo\\bar\\.gitignore' )[ 1 ];
// returns ''
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-extname-windows.svg
[npm-url]: https://npmjs.org/package/regex-extname-windows

[travis-image]: http://img.shields.io/travis/kgryte/regex-extname-windows/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-extname-windows

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-extname-windows/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-extname-windows?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-extname-windows.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-extname-windows

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-extname-windows.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-extname-windows

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-extname-windows.svg
[github-issues-url]: https://github.com/kgryte/regex-extname-windows/issues
