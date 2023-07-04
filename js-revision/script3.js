// scope - where u can access the varaible and function
console.log('start');
let c = 30;
console.log(c);

function x(z) {
  let a = 12;
  console.log(c);
  z();
  function y() {
    let b = 20;
    console.log(c);
    console.log(a);
    console.log(b);
  }

  return y;
}

let answer = x(function z() {
  console.log('last function');
});

answer();
// What happen when function execute -  function execution context is created.

// lexical scope = local memory + parent lexical scope
console.log('end');

[1, 2, 3, 45].map((x) => console.log(x));
