const assert = require( "assert" );
const redupe = require( "./redupe.js" );

assert.deepEqual( redupe( { "hello": { "world": "yeah", "weeh": 1234 } }, { "hello": { "world": 123, "us": "hi" } } ),
							{ "hello​.world": 123, "hello​.weeh": 1234, "hello​.us": "hi" },
							"should be deeply equal" );

assert.equal( typeof redupe( { "hello": { "world": "yeah", "weeh": 1234 } }, { "hello": { "world": 123, "us": "hi" } } ),
						 		"object", "should return 'object'" );

console.log( "ok" );
