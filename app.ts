
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



/*
----

type inference
- understanding type inference
- type annotations

----
*/
/*
// when type is not told, tsc will infer the type by itself - inference
let a = 21;
// providing the type - annotation
let b: string | boolean

b = 'egg';

*/


/*
-----
-
    interface and type aliases
- defining interfaces
- using interfaces to define object shapes
- extending interfaces
- type aliases
- intersection types
-
-----
*/
/*
// interface - structure of an object

interface user {
  name: string
  email: string
  age?: number // it's not must have
  password: string
}
// obj structure should be like user
function something(obj: user) {
  obj.email
}

// extending interface
interface admin extends user {
  isAdmin: boolean
}
// both interfaces are to be identical
interface agent extends user { }

// multiple interfaces having same name are merged
interface sportsman {
  name: string
}
interface sportsman {
  sport: string
}

function playNow(obj: sportsman) {
  obj.name
  obj.sport
}


// type aliases
// union type
type id = number | string | null

let userId: id;

// intersection type

*/


// https://youtu.be/lVzb6pmel_E?t=4930&feature=shared