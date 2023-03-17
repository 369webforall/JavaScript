# JavaScript

JavaScript basic to advance
\*\*Welcome to JavaScript. JavaScript is the language of the web. I enjoy using and teaching JavaScript and I hope you will do so too.

In this step by step JavaScript challenge, you will learn JavaScript, the most popular programming language in the history of mankind.
JavaScript is used **_to add interactivity to websites, to develop mobile apps, desktop applications, games_** and nowadays JavaScript can be used for **_machine learning_** and **_AI_**.
**_JavaScript (JS)_** has increased in popularity in recent years and has been the leading
programming language for six consecutive years and is the most used programming language on
Github.

** complete these problems
**
[Github Link](https://github.com/dev1980/javascript-practice-exercises)
\*\*

[YTV-1-JS-Basic](https://youtu.be/hjZMuPSJbw8)

[YTV-2-JS-Basic](https://youtu.be/x-VgxF0WznY)

[YTV-3-JS-Basic](https://youtu.be/bxGxHIond90)

[YTV-4-JS-Basic-loop](https://youtu.be/r3y0isKyF9M)

[YTV-5-JS-Basic-loop](https://youtu.be/KDFjfgj1IcQ)

[YTV-6-JS-Basic-loop/array](https://www.youtube.com/watch?v=qIIIhq4UXgw)

[YTV-7-JS-Basic-array](https://youtu.be/kTYpOtNESrU)

[YTV-8-JS-Basic-array](https://youtu.be/n2lFeXmht3Y)

[YTV-9-JS-Basic-array/nesting](https://youtu.be/JsFZO9tUKs4)

[YTV-10-JS-Basic-array/nesting](https://youtu.be/wjNCP3hyJhM)

[YTV-11-JS-Basic-array/nesting/object](https://youtu.be/zNmoSdTwnq4)

[YTV-12-JS-Basic-object](https://youtu.be/8PY8nfJR83E)

# JavaScript Advance concept.

## How JavaScript Works & Execution Context

Everything in javascript happen inside Execution context. Just assume that EC is a big container where code execute.
So in EC two things happen, a. Memory creation and b. Code execution
Memory creation is also known as Variable Environment and Code execution is also called as thread of execution.
JavaScript is synchronous single-threaded programming language.
![Execution Context](./images/ec1.png)

## How JavaScript Code is executed? & Call Stack

Once the memory creation phase is complete the code execute line by line.
As soon as javascript program run global execution context is created.
It has two phase, memory phase. It create memory for function and variable in global scope.

![Execution Context](./images/js-ce2.png)

## Hoisting in JavaScript (variables & functions)

Hoisting in javascript is the phenomenon where variables and function memory location is created first before the execution of any code. In case of variable value is stored as undefined and for function, the function definition is stored.
This is the reason we have access to the variable and function even before the value is assigned .

- let's understand the below code. we are trying to access the varaible and function before value is assigned.
  In case of function it log Robert Welker and log x print undefined. this phenoman is happend becuase of hoisting.

```
getName()
console.log(x);

var x = 10;

function getName() {
    console.log("Robert Welker")
}

```

## How functions work in JS & Variable Environment

GEC - Global Execution context is created. Then that move to call stack soon the code run.

GEC contain the memory space of variable and function from our code.

Once code start running, it will assign the value to the variables step by step as the control move to that location.

For function there is new execution context is created. And push the call stack, once the value is returned from the function the function execution context is also deleted from the call stack.

![Function Execution](./images/js3.png)

## Function

What is an anonymous function ?

What is difference between function Statement vs Function Expression vs Function Declaration ?

The main difference between function statement and function expression is the Hoisting.

## First class function ?

`First-Class Function:` A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
JavaScript treat function as a first-class-citizens. This means that functions are simply a value and are just another type of object.

```
const Arithmetics = {
	add:(a, b) => {
		return `${a} + ${b} = ${a+b}`;
	},
	subtract:(a, b) => {
		return `${a} - ${b} = ${a-b}`
	},
	multiply:(a, b) => {
		return `${a} * ${b} = ${a*b}`
	},
	division:(a, b) => {
		if(b!=0) return `${a} / ${b} = ${a/b}`;
		return `Cannot Divide by Zero!!!`;
	}

}

console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));
console.log(Arithmetics.multiply(5, 5));
console.log(Arithmetics.division(100, 5));


```

## What is Higher-Order Functions in Functional Programming ?

In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

## map, filter & reduce
