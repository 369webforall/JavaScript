# ES6 Tutorial

ECMAScript 2015 or ES2015 is a significant update to the JavaScript programming language.
It is the first major update to the language since ES5 which was standardized in 2009.
Therefore, ES2015 is often called ES6.

# Section 1. New ES6 syntax

## Difference between var and let variable

    The var variables belong to the global scope when you define them outside a function.
    For example:

    var user;

    if the you define variable inside function using var then it scope is within that function.

    ```
    function add() {
        var a= 5;
        var b = 6;
        return a+b;
    }

    console.log(add());

    console.log(a) // Uncaught ReferenceError: a is not defined

    ```

The following example displays four numbers from 0 to 4 inside the loop and the number 5 outside the loop.

```
for (var i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);


```

In this example, the i variable is a global variable. Therefore,
it can be accessed from both inside the loop and outside after the for loop end.

let -

```
for (let i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

```

In this case, the code shows four numbers from 0 to 4 inside a loop and a reference error:

Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4

The error:

Uncaught ReferenceError: i is not defined

Since this example uses the let keyword, the variable i is blocked scope.
It means that the variable i only exists and can be accessible inside the for loop block.

In JavaScript, a block is delimited by a pair of curly braces {} like in the if...else and for statements:

```
if(condition) {
   // inside a block
}

for(...) {
  // inside a block
}

```

### 2: Creating global properties

The global var variables are added to the global object as properties.
The global object is window on the web browser and global on Node.js:

```
var counter = 0;
console.log(window.counter); //  0

```

However, the let variables are not added to the global object:

```
let counter = 0;
console.log(window.counter); // undefined

```

### 3: Redeclaration

The var keyword allows you to redeclare a variable without any issue:

```
var counter = 10;
var counter;
console.log(counter); // 10

```

However, if you redeclare a variable with the let keyword, you will get an error:

```
let counter = 10;
let counter; // error

```

### 4: The Temporal dead zone

The let variables have temporal dead zones while the var variables don’t.
To understand the temporal dead zone, let’s examine the life cycles of both var and
let variables, which have two steps: creation and execution.

The var variables
In the creation phase, the JavaScript engine assigns storage spaces to var variables and
immediately initializes them to undefined.
In the execution phase, the JavaScript engine assigns the var variables the values
specified by the assignments if there are ones. Otherwise, the var variables remain undefined.
See the execution context for more information.

The let variables
In the creation phase, the JavaScript engine assigns storage spaces to the
let variables but does not initialize the variables. Referencing uninitialized variables will cause a ReferenceError.
The let variables have the same execution phase as the var variables.
The temporal dead zone starts from the block until
the let variable declaration is processed.
In other words, it is the location where you cannot access the let variables before they are defined.

In this tutorial, you have learned about the differences between var and let keywords.

## Introduction to the JavaScript const keyword

ES6 provides a new way of declaring a constant by using the const keyword.
The const keyword creates a read-only reference to a value.

```
const CONSTANT_NAME = value;
```

By convention, the constant identifiers are in uppercase.

Note: when u declare const varaible value must be assigned during the declearion.

- Can't reassing the value.
- const is also a block level varaible similar to let.

### JavaScript const and Objects

The const keyword ensures that the variable it creates is read-only.
However, it doesn’t mean that the actual value to which the const variable reference is immutable.
For example:

```
const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30

```

Even though the person variable is a constant, you can change the value of its property.

You can't assign different value to the const variable.

```
person = { age: 40 }; // TypeError

```

If you want the value of the person object to be immutable,
you have to freeze it by using the Object.freeze() method:

```
const person = Object.freeze({age: 20});
person.age = 30; // TypeError

```

## JavaScript Default Parameters

```
function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say('Hello') // 'Hello'

```

The default value of the message paramater in the say() function is 'Hi'.

In JavaScript, default function parameters allow you to initialize named parameters with default values.
if no values or undefined are passed into the function.

## Arguments vs. Parameters

```
function add(x, y) {
   return x + y;
}

add(100,200);
```

parameters are what you specify in the function declaration whereas.
the arguments are what you pass into the function.

## JavaScript Rest Parameters

## Destructuring

## ES6 Modules

[ES6 Module](https://www.javascripttutorial.net/es6/es6-modules/)

## ES6 Classes

## Arrow Functions

## Promises
