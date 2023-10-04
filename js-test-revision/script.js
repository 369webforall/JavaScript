//data type
// primitive data type = Number, String, Boolean, null, undefined, Symbol, Bigint
// &
// reference data type - object literal, {name: "Dev", age:45 },  function, array []

// let fName = 'John';

// let friend = fName;

// fName = 'Robert';

// console.log(fName); // Robert

// console.log(friend); // John

// reference data type

// const myDetails = { fName: 'Jack', age: 25 };

// const yourDetails = myDetails;
// console.log(yourDetails);

// yourDetails.age = 35;

// console.log(myDetails); // {fName: "Jack", age: 35}

// console.log(yourDetails); // {fName: "Jack", age: 35}

// Javascript is synchronous language (single threaded programming language)

// What is asynchronous language (multiple thread)

// console.log('Line 1');
// console.log('Line 2');
// console.log('Line 3');
// alert('I am a simple alert');
// console.log('Line 4');
// console.log('Line 5');

// The problem is
// 1mb, 2mb, 3mb, 4mb, 5mb

// console.log('5mb photo size is uploading'); // 20 seconds to upload
// console.log('4mb photo size is uploading');
// console.log('1mb photo size is uploading'); // 4 seconds to upload
// console.log('2mb photo size is uploading');
// console.log('3mb photo size is uploading');

// browser has some api, fetch, setTimeOut
// console.log('start');

// setTimeout(() => {
//   console.log('5mb photo uploaded');
// }, 10000);

// setTimeout(() => {
//   console.log('4mb photo uploaded');
// }, 8000);
// setTimeout(() => {
//   console.log('3mb photo uploaded');
// }, 6000);
// setTimeout(() => {
//   console.log('2mb photo uploaded');
// }, 4000);

// setTimeout(() => {
//   console.log('1mb photo uploaded');
// }, 2000);

// console.log('end');

//Define function

// code we save(define) and can be used (call/ invoke/ execute/ run) later by using the function name / label with parenthesis.

// Thread of execution

// Javascript goes through the code (globally or in a function) line by line and does whatever the of code says to do.

// Memory

// a place to store data (variable environment) where anything defied in the function is stored.

// console.log('start');

// const num = 3;
// function multiplyBy2(inputNumber) {
//   const result = inputNumber * 2;
//   return result;
// }

// const output = multiplyBy2(num);
// const newOutput = multiplyBy2(10);

// console.log('end');

// Promise

function display(data) {
  console.log(data);
}

const futureData = fetch('https://www.twitter.com/class/tweet/1'); // browser api, http request // async
futureData.then(display);
console.log('Print me first');

async function fetchTodo() {
  try {
    let todo = await fetch();
    return await todo.json();
  } catch (err) {
    console.log(err);
  }
}
