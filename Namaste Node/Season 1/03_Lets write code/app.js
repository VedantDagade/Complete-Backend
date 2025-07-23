var name = "Vedant Dagade";

var a = 10;
var b = 20;

console.log(name);
console.log(a + b);


//! Global object inside node.js
//in browser ==> window is a global object or this.
//in node    ==> global is a global object

//? console.log(global);
//? console.log(globalThis);

console.log(global === globalThis); //true