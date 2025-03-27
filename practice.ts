//  number data type

let dec: number = 13;
let hex: number = 0xa;

let binary: number = 0b1010;
let octal: number = 0o12;

console.log(dec, hex, binary, octal);

// string data type
let str: string = "asif";
let lowc = str.toLowerCase();
let upprcase = str.toUpperCase();
console.log(lowc, upprcase);

let fname: string = "asif";
let lname = " khan";
console.log(`${fname} ${lname}`);

//  boolean data type
let isDone: boolean = false;
let isLogin: boolean = true;
console.log(`${isDone} ${isLogin}`);

//  null data type
let nllll: null = null;
console.log(nllll);

// undefined data type
let undf: undefined;
console.log(undf);

// object data type
let obj: object = {
  name: "asif",
  age: 25,
  location: "bangalore",
};

console.log(obj);

//  Array practice

let array: string[] = ["apple", "mango"];
array.push("banana");
console.log(array, array.length);

let num: number[] = [1, 2, 3, 4, 5];

console.log(num);
let numbersAndString: (string | number)[] = [1, 2, 3, 4, 5, "asif"];

// tuple practice data typ seprated via commo
let personInfo: [string, number] = ["asif", 25];

// ANY data type
let any: any = 124;
any = "asif";
any = 0x1;

console.log(any);

// unknown
let unkn: unknown = 3;
unkn = "asif";
console.log(unkn);

// Interface for object
interface Person {
  name: string;
  age: number;
}

let user: Person = {
  name: "Asif",
  age: 25,
};
console.log(user);

// INTERFACE READ_oNLY
interface car {
  readonly brand: string;
  model: string;
}

let mycar: car = { brand: "toyata", model: "Corolla" };
// mycar.brand = "mahindra";  there will be an error becouse
//

console.log(mycar);

interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

let Pet: Dog = { species: "mamal", breed: "Labrador" };
console.log(Pet);

//  type type
type ID = string | number;
let userID: ID = 101; // Valid
userID = "A101"; // Also valid

//  type sript with objet

type Cat = { meow: () => void };
type Dog1 = { bark: () => void };
let pet1: Cat | Dog1;

pet1 = {
  meow: () => {
    console.log("meow");
  },
};
pet1.meow();

pet1 = { bark: () => console.log("Dog is barking ") };
pet1.bark();

//  creating funtion
function getId(id: string): void {
  console.log(` i am calling from parameter = ${id}`);
}
getId(" Asif");

//  intersection
type employee = { name: string; age: number };
type manager = { department: string };
type teamLeader = employee & manager;
let lead: teamLeader = {
  name: "Asif",
  age: 25,
  department: "Computer application",
};
console.log(lead);

//  intersection with function

type Loggable = {
  log: () => void;
};
type ErrorType = {
  error: string;
};

type Logger = Loggable & ErrorType;

let systemLogger: Logger = {
  log: () => {
    console.log("login successfull");
  },
  error: "getting error while loggin",
};
console.log(systemLogger);

// Named Functions

function addNamed(num: number, num2: number): number {
  return num + num2;
}
console.log(addNamed(5, 6));

// Anonymous Functions
let addano = function (x: number, y: number): number {
  return x + y;
};
console.log(addano(5, 9));

// Arrow Functions
let aarowfunction = (g: string, h: string): void => {
  console.log(`${g}  ${h}`);
};
console.log(aarowfunction("asif", "khan"));

// Optional & Default Parameters

function oORDefault(x?: number) {
  console.log(x);
}
console.log(oORDefault(5));

// class and Object
class person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  intdroduced(): void {
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
  }
}
//  creating an Object
let asif = new person("asif", 22);

asif.intdroduced();

//  explain the Object concepts in TypeScript:

class Car {
  name: string;
  model: string;
  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }
  display(): void {
    console.log(`Car Name: ${this.name}`);
    console.log(`Model: ${this.model}`);
  }
}
let car = new Car("Toyota", "Camry");
car.display();

//  constructor
class student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  display(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}
let std = new student("Asif", 25);
std.display();

//  this keyword
class employeee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  showName() {
    console.log(this.name);
  }
}
let emp = new employeee("Asif");
emp.showName();

// public and private access modifiers
class bankAccount {
  private balance: number;
  public accountHolderName: string;
  constructor(balance: number, accountHolderName: string) {
    this.balance = balance;
    this.accountHolderName = accountHolderName;
  }
  deposite(amount: number): number {
    return (this.balance += amount);
  }
  getbalance(): number {
    return this.balance;
  }
}

let myAccount = new bankAccount(1000, "Asif");
console.log(myAccount.deposite(500));
console.log(myAccount.accountHolderName);
// console.log(myAccount.balance); there is error becouse balance is private
console.log(
  `My Account Balance: ${myAccount.getbalance()} and name is ${
    myAccount.accountHolderName
  }`
);

//  protected access modifier
class Animal1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Dogg extends Animal1 {
  bark(): void {
    console.log(`${this.name} is barking`);
  }
}

let dog = new Dogg("Tommy");
console.log(dog.bark()); // allowed
console.log(dog.name); // it is not allowed

//  optional properties
class product {
  name: string;
  price?: number;
  constructor(name: string, price?: number) {
    this.name = name;
    this.price = price;
  }
}
let product1 = new product("laptop");
console.log(product1.name);
console.log(product1.price); // it will be undefined because price is optional

//  static member
class MathUtils {
  static PI: number = 3.14;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

//  abstract class
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.area()); // Output: 78.5

console.log(MathUtils.PI); // Output: 3.14
console.log(MathUtils.circleArea(5)); // Output: 78.5

//  function
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 24));

// Rest Parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// Function Overloading
function display(value: string): void;
function display(value: number): void;
function display(value: any): void {
    console.log(`Value: ${value}`);
}
display("Hello"); //  Hello
display(100); //  100

// Generics 
function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<number>(5)); // 
console.log(identity<string>("Hello")); 

exports = {};
