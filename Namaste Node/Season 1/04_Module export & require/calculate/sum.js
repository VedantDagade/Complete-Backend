//* Modules protected their variables and function from leaking.


var x = "Vedant this is variable inside sum.js";

//export keyword write in ES module
function calCulateSum(a , b) {
    const sum = a + b;
    console.log("sum printed in sum.js file",sum);
}

module.exports = { x , calCulateSum }; 

