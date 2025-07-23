//* one module into another.

require("./def.js");    //Very IMP Js Code from def.js


const calculateSum = require("./sum.js");

var a = 10;
var b = 20;

calculateSum(a,b);    //sum printed in sum.js file 30


