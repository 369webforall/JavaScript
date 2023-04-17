# Projects

- Libray app - constructor function
- Tic Tac Toe - Basic JavaScript
- Tic Tac Toe - Factory Function

# Youtube video

[OOP-YT](https://youtu.be/6hqAZfhPHw4)

# Organizing Your JavaScript Code Introduction

One of the most daunting parts of JavaScript is learning how to organize your code. The reason this subject can be so overwhelming is not because JavaScript is so much more complex than other languages, but because it is incredibly forgiving! Many languages force you into using specific patterns and data structures in your code, but that is not true in JavaScript.

In the beginning, this is a great thing! For example, if you just want to make a simple button on your webpage do something, you can set that up in a couple lines of code. However, as your program becomes more complex, it can become hard to maintain unless you take care to organize your code, and because JavaScript is such a flexible language, how you do that is entirely up to you. For many coders, making decisions about design patterns is crippling, so we’re here to help.

This lesson series is going to cover a few of the most common design patterns that occur in modern JavaScript code. We will discuss some pros and cons of each pattern and will give you a chance to practice using each pattern in a project.

The patterns we’ll be covering in this series are:

- Plain Old JavaScript Objects and Object Constructors
- Factory Functions and the Module Pattern
- Classes
- ES6 Modules

# Objects And Object Constructors

There are multiple ways to define objects but in most cases, it is best to use the object literal syntax as follows:

```
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
 }
}

```

There are also 2 ways to get information out of an object: dot notation and bracket notation.

```
// dot notation
myObject.property // 'Value!'

// bracket notation
myObject["obnoxious property"] // [Function]

```

# Explain about this key word

There are two default arguments to evey function call:arguments and this keyword.

```
console.log(this); // return global window object
function a(){
    console.log("hello") //print hello
    console.log(this) // print global window object
}

a();
```

when we excute function as the property of object then this key word refer to that object whose property is executing the function.
example.

```
let obj = {};

obj.foo = function(){
console.log('hello');

obj.foo(); //
}

```

when ever we execute the function using new keyword then the this key word refer to the newly created object.

```
function foo(){
    console.log('hello');
    console.log(this) // empty object
}

new foo();
```

# Constructor function

A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

example

```
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'

```

Exercise:

Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

Put a function into the constructor that can report the book info like so:

```
theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

console.log(theHobbit.info());
```

# The Prototype

All objects in JavaScript have a prototype. Stated simply, the prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.
[Prototype Video-1 ](https://www.youtube.com/watch?v=sOrtAjyk4lQ)

[Prototype Video-2 ](https://www.youtube.com/watch?v=fvmMxMGUEnQ)

```
function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() {
  console.log(this.name)
}
Student.prototype.goToProm = function() {
  console.log("Eh.. go to prom?")
}

```

If you’re using constructors to make your objects it is best to define functions on the prototype of that object. Doing so means that a single instance of each function will be shared between all of the Student objects. If we declare the function directly in the constructor, like we did when they were first introduced, that function would be duplicated every time a new Student is created. In this example, that wouldn’t really matter much, but in a project that is creating thousands of objects, it really can make a difference.

# Recommended Method for Prototypal Inheritance

So far you have seen several ways of making an object inherit the prototype from another object. At this point in history, the recommended way of setting the prototype of an object is Object.create (here is the documentation for that method). Object.create very simply returns a new object with the specified prototype and any additional properties you want to add. For our purposes, you use it like so:

```
function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8

```

# Don't do this

```
EighthGrader.prototype = Student.prototype
```

# Check your knowledge

- Write an object constructor and instantiate the object.
- Describe what a prototype is and how it can be used.
- Explain prototypal inheritance.
- Understand the basic do’s and don’t’s of prototypical inheritance.
- Explain what Object.create does.
- ow does this behave in different situations?

# Projects -

If you haven’t already, set up your project with skeleton HTML/CSS and JS files.

All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

```
let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}


```

Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. You will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default.

Implement CRUD operation.

Note: Project is similar to todo-app, this time we will use constructor function to create our object.

# Factory Function Introduction

The factory function pattern is similar to constructors, but instead of using new to create an object, factory functions simply set up and return the new object when you call the function. Check out this example:

```
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

```

# Object Shorthand

```
return {name: name, age: age, sayHello: sayHello};

// short hand for above code is

return {name, age, sayHello};

```

# JavaScript Immediately Invoked Function Expression

A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation. The following shows the syntax of defining an immediately invoked function expression:

```
let sum = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum);

```

we can also use use arrow function or ananomus function to create IIFE.

[ IIFE](https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/)

# Tic Tac Toe Game code

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Tic Tac Toe Game</title>
  </head>
  <body>
    <div class="grid">
      <div class="row">
        <div class="col" id="0" onclick="handleClick(this)"></div>
        <div class="col" id="1" onclick="handleClick(this)"></div>
        <div class="col" id="2" onclick="handleClick(this)"></div>
      </div>
      <div class="row">
        <div class="col" id="3" onclick="handleClick(this)"></div>
        <div class="col" id="4" onclick="handleClick(this)"></div>
        <div class="col" id="5" onclick="handleClick(this)"></div>
      </div>
      <div class="row">
        <div class="col" id="6" onclick="handleClick(this)"></div>
        <div class="col" id="7" onclick="handleClick(this)"></div>
        <div class="col" id="8" onclick="handleClick(this)"></div>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>

// css

.row {
  display: flex;
  width: 150px;
  margin: 0px auto;
}

.col {
  width: 40px;
  height: 40px;
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  cursor: pointer;
}

// script

let currentPlayer = 'X';
let arr = Array(9).fill(null);

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[5]) ||
    (arr[0] !== null && arr[0] === arr[5] && arr[5] === arr[8]) ||
    (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[6])
  ) {
    document.write(`Winner is ${currentPlayer} , good job`);
    return;
  }

  if (!arr.some((e) => e === null)) {
    document.write(`Draw, no one is winner`);
    return;
  }
}

function handleClick(el) {
  let id = Number(el.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  console.log(arr);
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}


```

# Library-app code (working progress)

```
// html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My School library</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <form id="libraryForm">
      <label for="title">Title: <input type="text" id="title" /></label>
      <label for="author">Author: <input type="text" id="author" /></label>
      <div>
        <h3>Type of Book</h3>
        <label for="type"
          ><input type="radio" id="computer" name="book" value="computer" />
          Computer</label
        >

        <label for="type">
          <input type="radio" id="science" name="book" value="science" />
          Science</label
        >
        <label for="type">
          <input type="radio" id="fiction" name="book" value="fiction" />
          Fiction</label
        >
      </div>

      <div>
        <button id="btn">Add Book</button>
      </div>
    </form>

    <div id="display"></div>
    <script src="./script.js"></script>
  </body>
</html>

// script

let myLibrary = [];

function Book(title, author, type) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.type = type;
}

function Display() {}

Display.prototype.render = function () {
  console.log('render');
  let htmlUi = '';
  myLibrary.map((book) => {
    htmlUi += `
  <h2> Book Title: ${book.title}</h2>
  <p>Author: ${book.author}</p>
  <p>Type: ${book.type}</p>
  `;
  });

  let display = document.getElementById('display');
  display.innerHTML = htmlUi;
};

Display.prototype.clear = function () {
  const libraryForm = document.getElementById('libraryForm');
  libraryForm.reset();
};
const libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(e) {
  // do stuff here
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let type;
  let computer = document.getElementById('computer');
  let science = document.getElementById('science');
  let fiction = document.getElementById('fiction');
  console.log(computer);
  console.log(science);
  console.log(fiction);
  if (computer.checked) {
    type = computer.value;
  }
  if (science.checked) {
    type = science.value;
  }
  if (fiction.checked) {
    type = fiction.value;
  }

  let book = new Book(title, author, type);

  myLibrary.push(book);
  console.log(myLibrary);

  let display = new Display();
  display.render();

  display.clear();

  e.preventDefault();
}

// const book = new Book('Java', 'Mz', 'programming');
// myLibrary.push(book);
// console.log(myLibrary);


```

# Factory function (tic-tac-toe game code)

index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe Game with factory function</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="container">
      <div class="form">
        <h1>Tic Tac Toe Game</h1>
        <p>Please Register to play the game</p>
        <label for="player1"
          >Player1 Name: <input type="text" id="player1"
        /></label>
        <label for="player2"
          >Player2 Name: <input type="text" id="player2"
        /></label>
        <button class="btn" id="start" onclick="game.start()">
          Game Start
        </button>
        <button class="btn" id="restart" onclick="game.restart()">
          Restart Game
        </button>
      </div>
      <div class="message"></div>
      <div id="board">
        <div class="row" id="board-row">
          <div class="board-cell" onclick="game.play('00')"></div>
          <div class="board-cell" onclick="game.play('01')"></div>
          <div class="board-cell" onclick="game.play('02')"></div>
        </div>
        <div class="row" id="board-row">
          <div class="board-cell" onclick="game.play('10')"></div>
          <div class="board-cell" onclick="game.play('11')"></div>
          <div class="board-cell" onclick="game.play('12')"></div>
        </div>
        <div class="row" id="board-row">
          <div class="board-cell" onclick="game.play('20')"></div>
          <div class="board-cell" onclick="game.play('21')"></div>
          <div class="board-cell" onclick="game.play('22')"></div>
        </div>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>


```

style.css

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
}

.form {
  max-width: 400px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  font-size: 21px;
}

label {
  font-size: 21px;
  margin-top: 16px;
}

p {
  font-size: 21px;
  margin-bottom: 12px;
}

.btn {
  background-color: steelblue;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  font-size: 21px;
}

#restart {
  display: none;
}

.message {
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: bold;
}
#board {
  max-width: 400px;
  margin: 0 auto;
  display: none;
}
.row {
  display: flex;
}

.board-cell {
  width: 40px;
  height: 40px;
  border: 2px solid blue;
  cursor: pointer;
}

```

script.js

```
const playerFactory = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;

  return { getName, getSymbol };
};

const gameFactory = () => {
  let boardArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  let player = [];
  let turn = 0;
  let status = 'pending';

  const renderBoard = () => {
    boardArray.forEach((row, rowIndex) => {
      row.forEach((cellValue, columnIndex) => {
        document
          .querySelector('#board')
          .querySelector(`#board-row:nth-child(${rowIndex + 1})`)
          .querySelector(
            `.board-cell:nth-child(${columnIndex + 1})`
          ).innerHTML = cellValue;
      });
    });
  };

  const message = (msg) => {
    document.querySelector('.message').innerHTML = msg;
  };

  const isWinner = () => {
    let win = false;
    const h = ['00-01-02', '10-11-12', '20-21-22'];
    const v = ['00-10-20', '01-11-21', '02-12-22'];
    const d = ['00-11-22', '02-11-20'];
    [...h, ...v, ...d].forEach((move) => {
      let line = move.split('-'); // [00, 01, 02]
      if (
        boardArray[line[0][0]][line[0][1]] ===
          boardArray[line[1][0]][line[1][1]] &&
        boardArray[line[1][0]][line[1][1]] ===
          boardArray[line[2][0]][line[2][1]] &&
        boardArray[line[0][0]][line[0][1]] !== ''
      ) {
        win = true;
      }
    });

    return win;
  };

  const isDraw = () => {
    return !boardArray.some((line) => line.includes(''));
  };

  const finish = (type) => {
    if (type === 'draw') {
      message(`Game end, it's draw....`);
    } else if (type === 'win') {
      message(`Game finished and the winner is ${player[turn].getName()}`);
    }
  };

  const play = (move) => {
    if (status !== 'running') {
      message('Please start the game first');
    } else if (boardArray[move[0]][move[1]] === '') {
      boardArray[move[0]][move[1]] = player[turn].getSymbol();
      renderBoard();
      if (isWinner()) {
        finish('win');
      } else if (isDraw()) {
        finish('draw');
      } else {
        turn = turn === 0 ? 1 : 0;
        message(`${player[turn].getName()} it's your turn`);
        console.log(turn);
      }
    }
  };

  const start = () => {
    status = 'running';
    player[0] = playerFactory(document.getElementById('player1').value, 'X'); // {"john", 'X'}
    player[1] = playerFactory(document.getElementById('player2').value, 'O');

    if (!player[0].getName() || !player[1].getName()) {
      message(`Please enter both name to play the game`);
    } else {
      document.getElementById('start').style.display = 'none';
      document.getElementById('restart').style.display = 'block';
      document.getElementById('board').style.display = 'block';
      renderBoard();
      message(`${player[turn].getName()} it's your turn`);
    }
  };

  const restart = () => {
    boardArray = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];

    document.getElementById('start').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('board').style.display = 'none';
    turn = 0;
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    document.querySelector('.message').innerHTML = '';
  };

  return { renderBoard, start, play, restart };
};

const game = gameFactory();
game.renderBoard();

```
