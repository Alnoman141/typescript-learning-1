"use strict";
/*
 let myName: string = "Abdullah Al Noman";
 let myAge: number = 20;

 console.log('name ' + myName + ' age ' + myAge);
*/
/*
interface User {
    name: string;
    age: number
}

const user: User =  {
    name: 'Abdullah Al Noman',
    age: 26
}

console.log(user);
*/
/*
interface User {
    name: string;
    age: number;
}

*/
/*
class AuthUser {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

const user: User = new AuthUser('Al Noman', 26);

console.log(user);
*/
/*
function getUser() : User {
    const user: User = {
        name: 'Abdullah',
        age: 20
    }

    return user;
}
const newUser = getUser();
console.log(newUser);

*/
/*
function getUser(user:User){
    
    return user;
}

const newUser = getUser({name : 'Noman', age: 20});

console.log(newUser);
*/
/*
const myArr = ['JS', 'TS', 'Vue', 'React'];
const myTxt = "Hello TS World";


function getLength(obj: string | string[]){
    return obj.length;
}

const arrLength = getLength(myArr);
const strLength = getLength(myTxt);
console.log(strLength, arrLength);


function wrapInArray(obj: string|string[]){
    if(typeof obj === 'string'){
        return [obj];
    }
    return obj;
}

const newArr = wrapInArray(myTxt);
console.log(newArr);
*/
/*
interface Point{
    x: number;
    y: number;
}

function logPoint(p: Point){
    console.log(`${p.x} & ${p.y}`);
}

const point = { x: 26, y: 30 };
const point3 = { x: 26, y: 30, z: 35 };
const rect = { x: 10, y: 15, width: 30, height: 80 };
const color = { hex: '#333444'};

logPoint(point);
logPoint(point3);
logPoint(rect);
// logPoint(color);


class VirtualPoint{
    x: number;
    y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
}
const newPoint = new VirtualPoint(30, 20);
logPoint(newPoint);
*/
/*
type One = { p:string };
 
interface Two {
    p:string;
}

class Three {
    p = "Hello World"
}

let x:One = { p: 'Hi'};

let two: Two = x;

two = new Three();
console.log(two);
*/
/*
function start( arg: string | string[] | (() => string) | { s: string }): string {
    if( typeof arg === 'string'){
        return commonCase(arg);
    } else if( Array.isArray(arg)){
        return arg.map(commonCase).join(",");
    } else if (typeof arg ===  'function'){
        return commonCase(arg());
    } else {
        return commomCase(arg.s)
    }

    function commomCase(s: string) :string {
        return s;
    }
};
*/
/*
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
function area(s: Shape) {
  if (s.kind === "circle") {
    return Math.PI * s.radius * s.radius;
  } else if (s.kind === "square") {
    return s.x * s.x;
  } else {
    return (s.x * s.y) / 2;
  }
}

function height(s: Shape){
    if(s.kind === 'circle'){
        return 2 * s.radius;
    } else {
        return s.x;
    }
}

const newArea = area({ kind: 'circle', radius: 3 });
const newHeight = height({ kind: 'circle', radius: 3 });

console.log('Area = ' + newArea + ' & height = ' + newHeight);
*/
/*
interface Rx {
    readonly x: number;
}

let rx: Rx = { x: 1 };
console.log(rx);
*/
class Student {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
    }
}
function gretter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Abdullah", "Al", "Noman");
console.log(user);
let hello = gretter(user);
console.log(hello);
