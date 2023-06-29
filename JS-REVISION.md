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
- call back function
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

## truthy and falsy

- Any things you write in js it mainly below to one of the type, either truty or falsy.

**falsy value**

- 0, null, undefined, false, NaN, document.all

**truthy value**

- if it doesn't belong to falsy then is truthy value.
