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
/*
let z = 'name'
let b = true;

let arr = [1, 2, 4, 'hello', { name: 'Alex' }]
let arr2: number[] = [1, 2, 4]
console.log(z);

// tuples - fixed types for array items
let arr3: [number, string] = [3, 'hello']

// enum - predefined rules or values for company or project
enum UserRoles {
  ADMIN = 'ceo',
  mahi = 'manager'
}

UserRoles.ADMIN

// any, unknown, void, null, undefined, never

let a; //any  - it shouldn't be used normally - works like js

let b3: unknown; // -- while working need to define types or give error

a = 2
a = 'hello'
b3 = 2
b3 = 'hello'

a.toUpperCase()

if (typeof b3 == 'string')
  b3.toUpperCase()


// void - not returning anything
function abcd(): void {
  console.log(
    'hello'
  );
}
let myName: string | null
myName = 'M'

// never - won't let following codes to execute - may not need in implementation
function neverRun(): never {
  while (true) {
    console.log('th');
  }
}
neverRun()
console.log('never is in');

*/ 
