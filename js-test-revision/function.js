// Global variable
let globalVar = 10;

// Function that accepts parameters and returns a value
function add(x, y) {
  // Local variable
  let result = x + y;
  return result;
}

// Function that modifies a global variable
function modifyGlobalVar(newValue) {
  globalVar = newValue;
}

// Function that works with arrays (passing by reference)
function addToArray(arr, value) {
  arr.push(value);
}

// Call the add function
const sum = add(5, 3);
console.log(`Sum: ${sum}`); // Output: Sum: 8

// Call the modifyGlobalVar function
modifyGlobalVar(20);
console.log(`Global Variable: ${globalVar}`); // Output: Global Variable: 20

// Working with arrays (passing by reference)
const myArray = [1, 2, 3];
addToArray(myArray, 4);
console.log(`Modified Array: ${myArray}`); // Output: Modified Array: 1,2,3,4

// Redefining a variable with the same name inside a function
function redefineVariable() {
  let localVar = 5;
  console.log(`Inside Function: localVar = ${localVar}`);
}

let localVar = 10;
redefineVariable();
console.log(`Outside Function: localVar = ${localVar}`);
// Output: Inside Function: localVar = 5
//         Outside Function: localVar = 10
