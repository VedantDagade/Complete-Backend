//* Modules protected their variables and function from leaking.

function calculateSum(a , b) {
    const sum = a + b;
    console.log("sum printed in sum.js file",sum);
}


module.exports = calculateSum; 