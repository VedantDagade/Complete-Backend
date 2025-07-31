//* one module into another.
require("./def.js");    //Very IMP Js Code from def.js


const { x , calCulateSum , calCulateMultiply } = require("./calculate");


var a = 10;
var b = 20;


console.log(x);    //Vedant this is variable inside sum.js


calCulateSum(a,b);    //sum printed in sum.js file 30

calCulateMultiply(a , b);   //200


//json file data print
const data = require("./data.json");

console.log((data));  //{ name: 'Vedant Dagade', city: 'Pune' }
