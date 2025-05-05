"use strict";
// basic types
/*
-- primitives
number
string
boolean

-- reference
object, array, function () {} []

--
tuples
enums - enumeration
any, unknown, void, null, undefined, never
*/
function combine(a, b) {
    if (typeof a === 'string' && b === undefined) {
        console.log('hat');
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        console.log(343);
    }
    else
        console.log("it's not us, it's you.");
}
combine('mango');
combine('mango', 33);
combine('mango', 'di');
