const assert = require( "assert" );
const redupe = require( "./redupe.js" );

assert.deepEqual( redupe( { "hello": { "world": "yeah", "weeh": 1234 } }, { "hello": { "world": 123, "us": "hi" } } ), { "hello​.world": 123, "hello​.weeh": 1234, "hello​.us": "hi" } );

assert.deepEqual( redupe( { "hello": { "world": "yeah", "weeh": 1234 } }, { "hello": { "world": 123, "us": "hi" } } ), { "hello​.world": 123, "hello​.weeh": 1234, "hello​.us": "hi" } );

console.log( "ok" );
