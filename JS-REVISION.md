# Basic js concept

- word vs keyword - difference
- variables and constant - not a javascript but english word
- var const let - difference
- hoisting
- Difference between undefined and not defined
- data type
- types in js (primitive & reference)
- primitive - number, string, boolean, null, undefined
- reference - {}, [], ()
- conditionals (if, else if, else)
- loops (for, while)
- functions

[JS Revision class 1](https://youtu.be/kDj8pCA0TwE)

[JS Revision class 2](https://youtu.be/y1thzT9SnjE)

- execution context
- browser api (fetch, setTimeOut, document)
- event loop
- callback queue, micro task queue

  [JS Revision class 3 - part1](https://youtu.be/DlTnHUe3Xmc)

  [JS Revision class 3 - part2](https://youtu.be/unJ5UV295_M)

  - Promise, Async/Await

  [Promise,Async/Await](https://youtu.be/GUD2rPhA08A)

# Advance js concept

- Difference between var, let and const
- window object
- browser context api
- stack
- heap memory
- execution context
- lexical environment
- how to copy reference value
- truthy and falsy
- forEach and forin
- functions
- function decleration, function expression, function statement
- callback function
- higher order function
- first class citizen

**var, let and const difference (mainly there are 3 difference )**

- ES5 - var and ES6 - let and const
- var is function scoped and let and const is braces scoped

```javascript
function abcd() {
  for (var i = 0; i < 12; i++) {
    console.log(i);
  }
  console.log(i);
}
```

`var can be used in any place inside its parent function. because of function scoped`

```javascript
function abcd() {
  for (let i = 0; i < 12; i++) {
    console.log(i);
  }
  console.log(i);
}
```

`if we change the var to let then i is not allowed to use outside. because let braces scoped`

- var adds itself to the window object and let and const doesn't add to window object. let and const create seperate script scope which is outside of window object.

**What is window object. also called javascript global object.**

- The features which are not part of the Javascript engine but, we are using in our code then these features are coming from a browser object called window.

eg. alert(), prompt(), fetch(), setTimeOut(), console

var a = 12;

let b = 23;

Note: mainly borwser gives us there 3 things and we called it browser context API.

- window
- stack
- Heap memory

**Browser Context API:**
The Browser Context API is an interface provided by modern web browsers that allows developers to create isolated environments, known as browser contexts, within a single browser instance. Each browser context has its own set of resources, such as cookies, storage, and cache, providing a way to separate different web browsing sessions or applications within the same browser window or tab.

Browser contexts are useful in scenarios like automated testing, web scraping, or building applications that require multiple isolated instances of a browser. They enable you to manage and control multiple independent browser sessions simultaneously.

**Window:**
In the context of web browsers, the `window` object represents the global environment for a web page. It is the top-level object that provides access to various properties, methods, and objects related to the browser window or tab in which the page is loaded. The `window` object represents the interface between JavaScript code running on the web page and the browser itself.

For example, you can use the `window` object to manipulate the browser's location, open new windows or tabs, display alerts, access the document object representing the web page's content, and more. It serves as the entry point for interacting with the browser's functionality from JavaScript.

**Heap Memory:**
In programming, the heap is a region of memory used for dynamic memory allocation. It is a large pool of memory that stores objects and data structures created during the execution of a program. In the context of JavaScript running in a browser, the heap memory is where objects like variables, arrays, and objects are allocated and stored.

When you create variables or objects in JavaScript, memory is allocated from the heap to store their values. The memory allocation and deallocation in the heap are managed by the JavaScript engine, which takes care of allocating memory for new objects and freeing memory when objects are no longer needed.

**Stack:**
The stack is another region of memory used by programs, including JavaScript programs. It is a specialized data structure that stores information about function calls and the execution context of those functions. The stack operates in a Last-In-First-Out (LIFO) manner, meaning that the most recently added item is the first one to be removed.

In JavaScript, the stack is used to keep track of function calls and their associated variables and context. When a function is called, a new frame is added to the stack to store the function's local variables and execution context. When the function completes, its frame is removed from the stack, and the program continues execution from the previous point.

The stack is important for maintaining the order of function calls and managing memory efficiently. It ensures that functions can execute and return in the correct order without conflicts.

Both the heap and the stack are crucial components of memory management in programming languages, including JavaScript, but they serve different purposes. The heap is used for dynamic memory allocation and storage of objects, while the stack is used for managing the execution flow and function calls.

## Execution context

- when function is called it create imaginary container, where 3 things are stored

1.  varaibles
2.  child function
3.  lexical environment of that function

example:
function abcd(){
var a = 20;
fund add(){
let sum = 0;
sum += a
return sum;
}

}

**Lexical environment**

- lexical environment is like chat which store the address of local varaibles and function along with its parent lexicalenvironment.

**Execution context**

In JavaScript, an execution context is an internal data structure that holds information about the environment in which a piece of code is executed. It includes variables, functions, the value of the `this` keyword, and other relevant data needed for code execution. Understanding execution contexts is important for understanding how JavaScript code is executed.

1. **Global Execution Context**: The global execution context represents the default context that is created when the JavaScript engine starts running your code. It is associated with the global scope and contains any variables or functions defined in the global scope. The global execution context is accessible from any other execution context within your code.

2. **Function Execution Context**: Each time a function is invoked, a new function execution context is created. It represents the environment in which the function is executed. It includes the function's arguments, local variables, and references to the outer scope (such as the variables in the parent scope or the global scope). When the function completes, its execution context is destroyed.

Execution contexts are created and managed by the JavaScript engine as it interprets and executes your code. When a function is invoked, a new function execution context is pushed onto a call stack, known as the "execution stack." This stack keeps track of the order in which functions are called and helps the engine manage their execution.

The concept of execution contexts is closely related to the scope chain, which determines how variables are resolved during code execution. Each execution context has a reference to its outer (parent) execution context, creating a chain of scopes. This allows variables to be accessed from outer scopes, following the lexical scope rules.

Understanding execution contexts is crucial for understanding variable scoping, hoisting, closures, and how JavaScript manages memory during code execution.

**Points to be noted**

- Every things in javascript happens inside execution context.
- Assume execution context as a big box which has two part

1.  Memory component

- This is the place wehre all the functions and variables are stored as key value pair.
  key: value
  a: 10
  fn: {...}
- Memory component is also know as variable environment.

2.  Code component

- This is the place where code is executed line by line.
- Code component is also known as thread of execution.

**Note:**

- javascript is a synchronous single threaded language.
- runs one command at a time from top to bottom.
- once one line of code is finished executing then only more to next line of code.

## closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

## First-class Function

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

## Callback function

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

## truthy and falsy

- Any things you write in js it mainly below to one of the type, either truty or falsy.

**falsy value**

- 0, null, undefined, false, NaN, document.all

**truthy value**

- if it doesn't belong to falsy then is truthy value.

# JS Async

## callback function

- A callback is a function passed as an argument to another function.

// function

function greet(name, callback) {
console.log('Hi', ' ' + name);
callback();
}

function callMe(){
console.log('I am callback function);
}

// passing function as an argumenet.

greet('Robert', callMe)

## Built in Higher order function for array.

1. find() - returns the first value of an array element that passes the test.
2. findIndex() - returns the first index of an array element that passes the test.
3. forEach() - calls a function for each element
4. map() - returns a new array calling function for each array element.
5. filter() - returns a new array with all elements passes the test define by the given function.

6. every() - check wether all elements of the array satisy the give condition or not.
7. some() -check weather at list one of the elements of the array satisy the give condition or not.

## What is callback hell ?

Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other. The two common ways of escaping the callback heare are by using promises and async/await. Promises mainly have three stages such as resolved, rejected, and pending. It makes the code more maintainable and understandable.

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible"
		content="IE=edge">
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0">

	<title>Callback Hell</title>

	<style>
		* {
			padding: none;
			margin: none;
			box-sizing: border-box;
		}

		.word {
			color: #308d46;
			font-size: 4rem;
			transition: all .5s ease-in;
			margin: 0 5px;
			transform: translateY(3.8rem);
			opacity: 0;
		}

		body {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 95vw;
			height: 95vh;
		}

		.container {
			overflow: hidden;
			display: flex;
			flex-direction: row;
		}

		.animate {
			opacity: 1;
			transform: translateY(0);
		}
	</style>
</head>

<body>
	<div class="container">
		<h2 class="word">Rain in</h2>
		<h2 class="word">the</h2>
		<h2 class="word">forest</h2>
	</div>
</body>
<script>
	let words = document.querySelectorAll(".word");

	const animateAll = (animate) => {
		setTimeout(() => {
			animate(words[0]);
			setTimeout(() => {
				animate(words[1]);
				setTimeout(() => {
					animate(words[2]);
				}, 1000)
			}, 1000)
		}, 1000)
	}

	const animate = (word) => {
		word.classList.add("animate");
	}

	animateAll(animate);
</script>
</html>
```

**setTimeOut() Function**

setTimeOut(callback, millisecond)

setTimeOut(()=>{
console.log("hello world")
}, 3000)

```javascript
function getCheese(callback) {
  setTimeOut(() => {
    const cheese = '🧀';
    console.log('here is the cheese');
    callback(cheese);
  });
}

function makeDough(cheese, callback) {
  setTimeOut(() => {
    const dough = cheese + '🧇';
    console.log('here is the dough', dough);
    callback(dough);
  });
}

function makePizza(dough, callback) {
  setTimeOut(() => {
    const pizza = dough + '🍕';
    console.log('here is the pizza', pizza);
    callback(pizza);
  });
}

getCheese((cheese) => {
  console.log('here is the cheese', cheese);
  makeDough(cheese, (dough) => {
    console.log('here is the douhg', dough);
    makePizza(dough, (pizza) => {
      console.log('here is your pizza', pizza);
    });
  });
});
```

## Promise

In javascript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

A promise may have one of three states.

- Pending
- Fulfilled
- Rejected

**setp1-create promise**

**setep-2 use promise**

- then() method - is called when promise is fulfilled it takes callback function.
- catch() method - is called when promise is rejected or any error. it also take callback function

- finally() method
  The finally() method gets executed when the promise is either resolved successfully or rejected.

example

```javascript
const ticket = new Promise(function (resolve, reject) {
  const isBoarded = false;
  if (isBoarded) {
    resolve('You are in the flight now');
  } else {
    reject('Your flight is cancelled');
  }
});

ticket
  .then((data) => {
    console.log('wohoo', data);
  })
  .catch((data) => {
    console.log('oh no', data);
  });
```

example2

```javascript
function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = '🧀';
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + '🫓';
      // resolve(dough);
      reject('Bad cheese');
    }, 2000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + '🍕';
      resolve(pizza);
    }, 2000);
  });
}

getCheese()
  .then((cheese) => {
    console.log('here is the cheese', cheese);
    return makeDough(cheese);
  })
  .then((dough) => {
    console.log('here is the dough', dough);
    return bakePizza(dough);
  })
  .then((pizza) => {
    console.log('here is the pizza', pizza);
  })
  .catch((data) => {
    console.log('error occured', data);
  })
  .finally(() => {
    console.log('Process ended');
  });
```

## async / await

- The keyword async before a function makes the function return a promise:

- The await keyword can only be used inside an async function.

- The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

```javascript
function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = '🧀';
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + '🫓';
      // resolve(dough);
      reject('Bad cheese');
    }, 2000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + '🍕';
      resolve(pizza);
    }, 2000);
  });
}

async function orderPizza() {
  try {
    const cheese = await getCheese();
    console.log('here is the cheese', cheese);

    const dough = await makeDough(cheese);
    console.log('here is the dough', dough);

    const pizza = await bakePizza(dough);
    console.log('here is the pizza', pizza);
  } catch (err) {
    console.log('error occured', err);
  }
  console.log('Process ended');
}

orderPizza();
```
