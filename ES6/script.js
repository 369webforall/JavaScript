function add() {
  var a = 5;
  var b = 10;
  return a + b;
}

console.log(add()); // 15
console.log(a); // Uncaught ReferenceError: a is not defined
