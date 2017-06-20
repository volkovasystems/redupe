"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "redupe",
			"path": "redupe/redupe.js",
			"file": "redupe.js",
			"module": "redupe",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/redupe.git",
			"test": "redupe-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Clone and override property values.

		The target will be the one to be cloned and overridden by the source.

		There can be multiple sources, the last source will be the last overriding source.

		Passing disregard as true will not override existing properties.
	@end-module-documentation

	@include:
		{
			"depher": "depher",
			"falzy": "falzy",
			"filled": "filled",
			"fluctuate": "fluctuate",
			"loosen": "loosen",
			"protype": "protype",
			"pyck": "pyck",
			"shft": "shft",
			"transpher": "transpher",
			"truu": "truu"
		}
	@end-include
*/

const depher = require( "depher" );
const falzy = require( "falzy" );
const filled = require( "filled" );
const fluctuate = require( "fluctuate" );
const loosen = require( "loosen" );
const protype = require( "protype" );
const pyck = require( "pyck" );
const shft = require( "shft" );
const transpher = require( "transpher" );
const truu = require( "truu" );

const redupe = function redupe( target, source, disregard ){
	/*;
		@meta-configuration:
			{
				"target:required": [
					"object",
					Array
				],
				"source": [
					"object",
					Array,
					"..."
				],
				"disregard": "boolean"
			}
		@end-meta-configuration
	*/

	if( falzy( target ) || !protype( target, OBJECT ) ){
		throw new Error( "invalid target" );
	}

	source = pyck( shft( arguments ), OBJECT ).filter( truu );

	target = loosen( target, true );

	disregard = depher( arguments, BOOLEAN, false );

	if( filled( source ) ){
		source.forEach( ( source ) => {
			source = loosen( source, true );

			transpher( source, target, disregard );
		} );
	}

	return fluctuate( target );
};

module.exports = redupe;
