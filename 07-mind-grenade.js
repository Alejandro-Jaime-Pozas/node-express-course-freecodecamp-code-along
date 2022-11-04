const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1 + num2}`);
}

addValues() // this will call the fn in main module just by requiring this module
// module.exports = addValues