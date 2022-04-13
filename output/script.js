"use strict";
/*
 let myName: string = "Abdullah Al Noman";
 let myAge: number = 20;

 console.log('name ' + myName + ' age ' + myAge);
*/
class Three {
    constructor() {
        this.p = "Hello World";
    }
}
let x = { p: 'Hi' };
let two = x;
two = new Three();
console.log(two);
