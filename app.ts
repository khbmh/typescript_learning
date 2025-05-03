
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


/*
---
classes and objects
---

*/
/*
class device {
  brand = 'xiaomi';
  price = 87490
}

let myPhone = new device()
// console.log(myPhone);
// console.log(device);

*/
// constructor - not a bottle - bottle maker
/*
class Person {
  isAlive = true
  constructor(public name: string, public age: number, public height: number = 5.6, public hobby: string) {
    if (!height) {
      this.height = 5.6
    }
  }
}

let alex = new Person('alex', 33, 0, 'cycling')

console.log(alex);

let john = new Person('John', 23, 5.8, 'reading')

console.log(john);

*/


// this - inside a class, this means the class itself, when a try to access a variable made inside that class
/*
class Baker {
  public name;
  constructor(name: string) {
    this.name = name;
  }
}

let bun = new Baker('bun')

console.log(bun);

*/


/*

cls - obj : public private ; access modifier

*/

/*
class Baker {
  constructor(private name: string) {

  }
}

let bun = new Baker('Pizza')
bun.name = 'Butter'
console.log(bun);

// protected
class shoeMaker {
  private name = 'Apex'
  protected organ = 'Leg'
}


class leatherShoe extends shoeMaker {
  public material = 'leather'

  modify() {
    this.name = 'walker' // public shows error
    this.organ = 'knee' // protected doesn't show error
  }
}

let boyS = new leatherShoe()
boyS.modify()
console.log(boyS);

boyS.organ = 'hand'
boyS.name = 'odheek'
console.log(boyS);

*/


/*

      class and object

*/
// readonly - in future you don't want to change

/*
class Teacher {
  constructor(public readonly name: string) {
  }
  changeName() {
    this.name = 'no' // gave error - but code will be executed
  }
}

let me = new Teacher('ales')


me.changeName()

console.log(me);

*/

// - optional properties - providing is optional
/*
class Human {
  constructor(public name: string, public age?: number) { }
}

let Huki = new Human('huki')
console.log(Huki);

*/
// normal properties -
/*
class user {
  public name;
  public age;
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// parameter properties -

class Human {
  constructor(public name: string, public age?: number) { }
}
*/


/*

getters and setters

*/
/*
class Human {
  constructor(public name: string, public age?: number) { }
  getName() {
    return this.name
  }
  setName(value: string) {
    return this.name = value
  }
}

let Huki = new Human('huki')
console.log(Huki.setName('khuki'));

*/

// get and set
/*
class user {
  constructor(public _name: string) { }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }
}

let u1 = new user(
  'mango'
)

console.log(u1.name);
u1.name = 'coconut'
console.log(u1.name);
*/

/*
-----
static members
-------
*/
// can't get in instances or can access without instance
/*
class folder {
  static version = 1.2

  static getRandomNum() {
    return Math.random()
  }
}

console.log(folder.version);
*/

/*
-----
----  Abstract classes
-----
*/
//abstract classes cannot be instantiated and are meant to be extended.
// class that are extended , no use without extension
/*
class cookingEssential {
  constructor(protected gas: number, protected pot: string) { }
}

class biriyani extends cookingEssential {
  constructor(gas: number, pot: string, private rice: number, private isKacchi: boolean) {
    super(gas, pot)
  }
}

*/
















