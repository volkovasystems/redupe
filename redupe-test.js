const assert = require( "assert" );
const redupe = require( "./redupe.js" );

assert.deepEqual( redupe( { "hello": { "world": "yeah", "weeh": 1234 } }, { "hello": { "world": 123, "us": "hi" } } ),
	{ "hello​.world": 123, "hello​.weeh": 1234, "hello​.us": "hi" },
	"should be equal to { 'hello​.world': 123, 'hello​.weeh': 1234, 'hello​.us': 'hi' }" );

assert.equal( typeof redupe( { "hello": { "world": "yeah", "weeh": 1234 } },
	{ "hello": { "world": 123, "us": "hi" } } ) == "object",
	true, "should be of object data type" );

console.log( "ok" );
