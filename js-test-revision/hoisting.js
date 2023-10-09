// console.log(a);

// var b = 200;
// x();

// let a = 100;

// console.log(a);
// function x() {
//   let y = 10;
//   console.log(y);
// }

// what is lexical scope // scope chain

let a = 100;

function x() {
  let b = 200;

  function y() {
    return a + b;
  }
  return y;
}

let ans = x();

console.log(ans());
