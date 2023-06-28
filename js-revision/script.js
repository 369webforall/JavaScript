// What is hoisting
// Variable and functions are hoisted, which means their decleration moved on the top of code.
var a;
abcd();
console.log(a);
var a = 12;

a = 12;

function abcd() {}

// console.log(b);

// data type - string, number, boolean, undefined, null, [], {},

//types in js (primitive and reference)

// prmitive - string, number, boolean, undefined, null
// reference - {}, [], ()

let c = 50;
console.log(c);
let e = c;
console.log(e);
e += 5;

console.log(c);

console.log('e', e);

let arr = [1, 2, 3, 4, 5];

let arr2 = arr;

arr2.push(10);

console.log(arr);

console.log(arr2);

let arr3 = [...arr];
arr3.push(20);
console.log(arr2);
console.log(arr3);

// conditional
// if you have to make a decision

// falsey - 0, undefined, null, false
// truthy - string, number(prositice or negative), [], {} true,

if (12 < 10) {
  console.log('true');
} else if (12 > 10) {
  console.log(' yes it is true');
} else {
}

// 11111111111
// 1,2,3,4,5,6,7,8,89

for (let i = 0; i <= 20; i++) {
  console.log();
}

let x = 20;
while (x >= 0) {
  console.log(x);
  x--;
}

function count(num) {
  return num + 20;
}

console.log(count(30));

console.log(count(100));
