// synchronous program

function foo() {
  console.log('foo');
}
console.log('hello');
let x = 10;
console.log(x);
x = 20;
console.log(x);
//async

foo();

// setTimeout(function () {
//   console.log('callback from settime');
// }, 5000);

function greet(name, callback) {
  callback(name);
}

function displayName(name) {
  console.log('Name of person is', name);
}

greet('Robert', displayName);

greet('John', displayName);

function getcheese(callback) {
  setTimeout(() => {
    const cheese = '🧀';
    console.log('cheese is ready');
    callback(cheese);
  }, 1000);
}

function makedough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + '🧇';
    callback(dough);
  }, 1000);
}

function makePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + '🍕';
    callback(pizza);
  }, 1000);
}

getcheese((cheese) => {
  console.log('ok thanks received cheese', cheese);
  makedough(cheese, (dough) => {
    console.log('dough is ready', dough);
    makePizza(dough, (pizza) => {
      console.log('Pizza is ready', pizza);
    });
  });
});
