/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var assert = chai.assert;


// TESTS //

describe( 'regex-extname-windows', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should capture Windows filename extensions', function test() {
		var expected,
			values,
			ext,
			i;

		values = [
			'index.js',
			'C:\\foo\\bar\\home.html',
			'foo\\file.pdf',
			'index.js\\',
			'foo\\bar\\home.html\\',
			'foo\\..\\..\\bar\\home.html',
			'.gitigno.re',
			'\\foo\\bar\\.editorconf.ig',
			'main\\.travis.yml',
			'boop.'
		];

		expected = [
			'.js',
			'.html',
			'.pdf',
			'.js',
			'.html',
			'.html',
			'.re',
			'.ig',
			'.yml',
			'.'
		];

		for ( i = 0; i < values.length; i++ ) {
			ext = re.exec( values[ i ] )[ 1 ];
			assert.strictEqual( ext, expected[ i ], values[ i ] );
		}
	});

	it( 'should not capture anything if provided a path not having a filename extension, including dotfiles not having an extension', function test() {
		var values,
			ext,
			i;

		values = [
			'',
			'C:\\foo\\bar\\file',
			'\\foo\\bar\\.gitignore',
			'.editorconfig',
			'.jshintrc',
			'jshintignore',
			'beep',
			'\\foo\\bar\\file\\'
		];

		for ( i = 0; i < values.length; i++ ) {
			ext = re.exec( values[ i ] )[ 1 ];
			assert.strictEqual( ext, '', values[ i ] );
		}
	});

});
