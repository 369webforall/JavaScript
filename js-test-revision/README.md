**1. What is JavaScript?**

- Answer: JavaScript is a high-level, interpreted programming language used for adding interactivity and dynamic behavior to web pages.

**2. How do you declare a variable in JavaScript?**

- Answer: You can declare a variable using `var`, `let`, or `const` followed by the variable name.

**3. What is the difference between `let`, `const`, and `var` for variable declaration?**

- Answer: `let` and `const` are block-scoped, while `var` is function-scoped. `const` variables cannot be reassigned, but `let` and `var` can.

**4. How do you comment in JavaScript?**

- Answer: You can use `//` for single-line comments and `/* */` for multi-line comments.

**5. What is a data type in JavaScript?**

- Answer: Data types in JavaScript define the type of data that can be stored in a variable. Examples include string, number, boolean, and object.

**6. How do you check the data type of a variable?**

- Answer: You can use the `typeof` operator, e.g., `typeof variableName`.

**7. What is a JavaScript operator? Give an example.**

- Answer: An operator performs operations on variables and values. Example: `+` for addition, `-` for subtraction.

**8. How do you concatenate strings in JavaScript?**

- Answer: You can use the `+` operator or template literals (backticks) like `${var1} ${var2}`.

**9. Explain the concept of scope in JavaScript.**

- Answer: Scope determines the visibility and accessibility of variables. JavaScript has function scope and block scope.

**10. What is a closure in JavaScript?** - Answer: A closure is a function that has access to its own scope and the outer (enclosing) function's scope.

**11. Describe the "hoisting" behavior in JavaScript.** - Answer: Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

**12. What is an arrow function in JavaScript?** - Answer: An arrow function is a concise way to write functions. It uses `=>` syntax.

**13. How do you create an object in JavaScript?** - Answer: You can create an object using object literals `{}` or the `new Object()` constructor.

**14. Explain the difference between `null` and `undefined` in JavaScript.** - Answer: `null` is an explicitly assigned value representing the absence of any object value, while `undefined` represents uninitialized variables or missing properties.

**15. How do you check if a variable is `null` or `undefined`?** - Answer: You can use strict equality (`===`) to check for both. For example: `variable === null` or `variable === undefined`.

**16. What is an array in JavaScript?** - Answer: An array is a data structure that stores a collection of elements, which can be of different data types.

**17. How do you add an element to the end of an array?** - Answer: You can use the `push()` method or the array's `length` property to add elements to the end of an array.

**18. Explain the difference between `==` and `===` in JavaScript.** - Answer: `==` performs type coercion and checks for equality, while `===` checks for strict equality without type coercion.

**19. What is a callback function in JavaScript?** - Answer: A callback function is a function passed as an argument to another function and is executed at a later time.

**20. How do you create a JavaScript function?** - Answer: You can declare a function using the `function` keyword, followed by the function name and parameters.

**21. What is the difference between function declarations and function expressions?** - Answer: Function declarations are hoisted, while function expressions are not.

**22. What is a JavaScript event?** - Answer: An event is an action or occurrence that can be detected by JavaScript, such as a user clicking a button.

**23. How do you add an event listener in JavaScript?** - Answer: You can use the `addEventListener()` method to attach an event handler to an element.

**24. What is the Document Object Model (DOM) in JavaScript?** - Answer: The DOM represents the structure of an HTML document and allows JavaScript to interact with and manipulate HTML elements.

**25. How do you access and modify HTML elements using JavaScript?** - Answer: You can use methods like `getElementById()`, `querySelector()`, and properties like `innerHTML` to access and modify HTML elements.

**26. What is AJAX in JavaScript?** - Answer: AJAX (Asynchronous JavaScript and XML) is a technique for making asynchronous HTTP requests to fetch or send data without refreshing the entire web page.

**27. Explain how to handle asynchronous code in JavaScript.** - Answer: You can use callbacks, promises, or async/await to handle asynchronous code in JavaScript.

**28. What is a promise in JavaScript?** - Answer: A promise represents a future value or an eventual result of an asynchronous operation and can be in one of three states: pending, fulfilled, or rejected.

**29. How do you create a promise in JavaScript?** - Answer: You can create a promise using the `Promise` constructor and passing a callback function with `resolve` and `reject` parameters.

**30. What is the purpose of the `then()` method in promises?** - Answer: The `then()` method is used to handle the result of a promise when it's fulfilled.

**31. How do you catch errors in promise chains?** - Answer: You can use the `.catch()` method to handle errors in promise chains.

**32. Explain the concept of async/await in JavaScript.** - Answer: `async` functions allow you to write asynchronous code that looks like synchronous code. `await` is used inside `async` functions to pause execution until a promise is fulfilled.

**33. What is the difference between `localStorage` and `sessionStorage` in JavaScript?** - Answer: `localStorage` stores data with no expiration, while `sessionStorage` stores data for a single session (it's cleared when the session ends).

**34. How do you remove an item from an array in JavaScript?** - Answer: You can use methods like `splice()`, `pop()`, or `shift()` to remove items from an array.

**35. What is a callback hell (or pyramid of doom) in JavaScript?** - Answer: Callback hell occurs when you have multiple nested callback functions, making the code hard to read and maintain. This is often seen in asynchronous code.

**36. Explain the "this" keyword in JavaScript.** - Answer: `this` refers to the current execution context and can change based on how a function is called.

**37. What is event delegation in JavaScript?** - Answer: Event delegation is a technique

where you attach a single event listener to a parent element to handle events for its child elements.

**38. How do you prevent the default behavior of an event in JavaScript?** - Answer: You can use the `event.preventDefault()` method inside an event handler.

**39. What is a JavaScript constructor function?** - Answer: A constructor function is used to create and initialize objects. It is invoked with the `new` keyword.

**40. What is the purpose of the `prototype` property in JavaScript?** - Answer: The `prototype` property allows you to add methods and properties to objects created from a constructor function.

**41. How do you create an object with a specific prototype in JavaScript?** - Answer: You can use `Object.create(proto)` to create an object with a specified prototype.

**42. What is the JavaScript `map()` function used for?** - Answer: The `map()` function is used to create a new array by applying a function to each element of an existing array.

**43. Explain what a callback in the `map()` function does.** - Answer: The callback in `map()` is a function that is called for each element in the array and returns a new value that is included in the new array.

**44. What is the JavaScript `filter()` function used for?** - Answer: The `filter()` function is used to create a new array with all elements that pass a certain condition specified by a callback function.

**45. Explain what a callback in the `filter()` function does.** - Answer: The callback in `filter()` is a function that is called for each element in the array. If it returns `true`, the element is included in the new array; otherwise, it is excluded.

**46. What is the purpose of the `reduce()` function in JavaScript?** - Answer: The `reduce()` function is used to accumulate values in an array and return a single result.

**47. Explain what the `reduce()` callback function does.** - Answer: The `reduce()` callback function takes two arguments: an accumulator and the current element. It combines these values and updates the accumulator for each element in the array.

**48. What is the difference between the `localStorage` and `sessionStorage` in JavaScript?** - Answer: `localStorage` stores data with no expiration date, while `sessionStorage` stores data for a single session (it's cleared when the session ends).

**49. How do you add and retrieve data from `localStorage` in JavaScript?** - Answer: You can use `localStorage.setItem(key, value)` to add data and `localStorage.getItem(key)` to retrieve it.

**50. What is the purpose of the `JSON.stringify()` and `JSON.parse()` functions in JavaScript?** - Answer: `JSON.stringify()` is used to convert an object to a JSON string, and `JSON.parse()` is used to parse a JSON string into an object.

**51. What is a callback function?** - Answer: A callback function is a function passed as an argument to another function and is executed at a later time, often asynchronously.

**52. How can you handle errors in JavaScript?** - Answer: You can use try-catch blocks to catch and handle errors, or you can use error event listeners for asynchronous code.

**53. Explain the concept of promises in JavaScript.** - Answer: Promises are objects representing the eventual completion or failure of an asynchronous operation. They have states (pending, resolved, rejected) and can have success and error handlers.

**54. How do you use the `fetch()` API to make HTTP requests in JavaScript?** - Answer: You can use the `fetch()` function to make HTTP requests. It returns a promise that resolves to the response from the server.

**55. What is the purpose of the `async` and `await` keywords in JavaScript?** - Answer: `async` defines an asynchronous function, and `await` pauses the execution of an async function until a promise is settled.

**56. Explain the concept of callback chaining in JavaScript.** - Answer: Callback chaining is a pattern where multiple asynchronous operations are executed in sequence by nesting callbacks or using promise chaining.

**57. How do you create and manipulate cookies in JavaScript?** - Answer: You can create and manipulate cookies using the `document.cookie` property.

**58. What is the Event Loop in JavaScript, and how does it work?** - Answer: The Event Loop is a mechanism in JavaScript that handles asynchronous operations. It continuously checks the call stack and the message queue to execute tasks.

**59. How do you prevent the default behavior of an HTML form submission in JavaScript?** - Answer: You can use the `event.preventDefault()` method in an event handler for the form submission event.

**60. How can you check if an element has a specific class using JavaScript?** - Answer: You can use the `classList` property and the `contains()` method to check if an element has a specific class.

**61. What is a JavaScript promise and how do you use it?** - Answer: A promise is an object representing the eventual completion or failure of an asynchronous operation. You use promises with `then()` and `catch()` to handle success and error cases.

**62. How can you change the text content of an HTML element using JavaScript?** - Answer: You can use the `textContent` property of an HTML element to change its text content.

**63. What is event delegation in JavaScript, and why is it useful?** - Answer: Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements. It's useful for performance and for handling dynamically created elements.

**64. Explain the concept of callback hell and how to avoid it in JavaScript.** - Answer: Callback hell occurs when you have deeply nested callbacks, making the code hard to read. You can avoid it by using named functions, promises, or async/await.

**65. How can you clone an object in JavaScript?** - Answer: You can use the `Object.assign()` method, the spread operator (`{...}`), or `JSON.parse(JSON.stringify(obj))` to clone an object.

**66. Explain the purpose of the `localStorage` and `sessionStorage` in JavaScript.** - Answer: `localStorage` and `sessionStorage` are used to store key-value pairs in the browser. `localStorage` data persists across sessions, while `sessionStorage` data is session-specific.

**67. How do you handle exceptions in asynchronous code in JavaScript?** - Answer: In asynchronous code, you can use `.catch()` on a promise or try-catch inside an async function to handle exceptions.

**68. What are the benefits of using the `async` and `await` keywords in JavaScript?** - Answer: `async` and `await` make asynchronous code easier to read and maintain, as it resembles synchronous code flow.

**69. How can you check if an array contains a specific value in JavaScript?** - Answer: You can use the `includes()` method or the `indexOf()` method to check if an array contains a specific value.

**70. Explain the concept of "hoisting" in JavaScript.** - Answer: Hoisting is JavaScript's behavior of moving variable and function declarations

to the top of their containing scope during compilation.

**71. How do you use the `typeof` operator in JavaScript?** - Answer: You can use `typeof` to determine the data type of a variable or expression.

**72. What is the difference between null and undefined in JavaScript?** - Answer: `null` represents an intentional absence of any object value, while `undefined` represents uninitialized variables or missing properties.

**73. How do you remove an element from an array in JavaScript?** - Answer: You can use methods like `splice()`, `pop()`, `shift()`, or `filter()` to remove elements from an array.

**74. Explain the difference between `null`, `undefined`, and `NaN` in JavaScript.** - Answer: `null` represents an absence of value, `undefined` represents an uninitialized or missing value, and `NaN` represents "Not-a-Number" for invalid numeric operations.

**75. How do you convert a string to an integer in JavaScript?** - Answer: You can use functions like `parseInt()` or the `+` operator to convert a string to an integer.

**76. How do you convert a string to a floating-point number in JavaScript?** - Answer: You can use the `parseFloat()` function or the `parseFloat` method of the `Number` object to convert a string to a floating-point number.

**77. How do you convert a number to a string in JavaScript?** - Answer: You can use the `toString()` method or the `String()` constructor to convert a number to a string.

**78. What is a JavaScript callback function, and why are they useful?** - Answer: A callback function is a function passed as an argument to another function and executed later. They are useful for handling asynchronous tasks and for creating reusable code.

**79. Explain the difference between the `==` and `===` operators in JavaScript.** - Answer: `==` performs type coercion and checks for equality, while `===` checks for strict equality without type coercion.

**80. How can you create and handle custom events in JavaScript?** - Answer: You can use the `CustomEvent` constructor to create custom events and `addEventListener()` to handle them.

**81. How do you check if an object has a specific property in JavaScript?** - Answer: You can use the `hasOwnProperty()` method or the `in` operator to check if an object has a specific property.

**82. What is the purpose of the JavaScript `setTimeout()` function?** - Answer: `setTimeout()` is used to execute a function or code block after a specified time delay.

**83. How do you cancel a `setTimeout()` function in JavaScript?** - Answer: You can cancel a `setTimeout()` using the `clearTimeout()` function and passing the timer ID as an argument.

**84. What is the purpose of the JavaScript `setInterval()` function?** - Answer: `setInterval()` is used to repeatedly execute a function or code block at a specified interval.

**85. How do you cancel a `setInterval()` function in JavaScript?** - Answer: You can cancel a `setInterval()` using the `clearInterval()` function and passing the interval ID as an argument.

**86. How do you check if a variable is an array in JavaScript?** - Answer: You can use `Array.isArray(variable)` to check if a variable is an array.

**87. What is the `NaN` value in JavaScript, and how can you check for it?** - Answer: `NaN` stands for "Not-a-Number" and is a special value representing invalid numeric operations. You can use `isNaN()` to check if a value is `NaN`.

**88. How do you add a class to an HTML element in JavaScript?** - Answer: You can use the `classList` property's `add()` method to add a class to an HTML element.

**89. What is a JavaScript constructor function, and how do you define one?** - Answer: A constructor function is used to create and initialize objects. You define one using the `function` keyword and the `this` keyword to set properties.

**90. How do you extend an object in JavaScript?** - Answer: You can extend an object by adding properties and methods to it or by creating a new object with an existing object as its prototype.

**91. Explain the concept of prototypal inheritance in JavaScript.** - Answer: Prototypal inheritance is a way objects inherit properties and methods from other objects through their prototype chain.

**92. What is the JavaScript `Math` object, and how is it used?** - Answer: The `Math` object provides mathematical functions and constants in JavaScript, such as `Math.random()`, `Math.sqrt()`, and `Math.PI`.

**93. How do you round a number to a specific decimal place in JavaScript?** - Answer: You can use the `toFixed()` method to round a number to a specified decimal place and return it as a string.

**94. How do you break out of a loop early in JavaScript?** - Answer: You can use the `break` statement to exit a loop prematurely.

**95. How do you skip the current iteration of a loop in JavaScript?** - Answer: You can use the `continue` statement to skip the current iteration of a loop and move to the next one.

**96. What is the purpose of the JavaScript `Object.keys()` function?** - Answer: `Object.keys(obj)` is used to retrieve an array of an object's own enumerable property names.

**97. How do you merge two arrays in JavaScript?** - Answer: You can use the `concat()` method or the spread operator (`[...array1, ...array2]`) to merge two arrays.

**98. What is the purpose of the JavaScript `Array.prototype.map()` function?** - Answer: `map()` is used to create a new array by applying a function to each element of an existing array.

**99. How do you reverse an array in JavaScript?** - Answer: You can use the `reverse()` method to reverse the order of elements in an array.

**100. What is the JavaScript `localStorage` API used for, and how does it differ from cookies?** - Answer: The `localStorage` API is used to store key-value pairs in a web browser with a more user-friendly and powerful interface than cookies. Unlike cookies, `localStorage` data is not sent to the server with every HTTP request, making it more efficient for client-side storage.

These questions and answers should help you prepare for a JavaScript exam or test your knowledge of JavaScript concepts. Feel free to review them and use them as a study resource.
