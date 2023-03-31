# DOM

## The HTML DOM (Document Object Model)

- When a web page is loaded, the browser creates a Document Object Model of the page.
- The HTML DOM model is constructed as a tree of Objects:

```
<!DOCTYPE html>
<html>
	<head>
		<title>The DOM</title>
	</head>
	<body>
		<h1>Document Object Model</h1>
		<p id="pr">Test Paragraph</p>
	</body>
</html>
```

![Tree Structure](./images/dom.png)

### With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

## What is the HTML DOM?

- The HTML DOM is a standard object model and programming interface for HTML. It defines:
- The HTML elements as objects
- The properties of all HTML elements
- The methods to access all HTML elements
- The events for all HTML elements
- The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

### The following example changes the content (the innerHTML) of the <p> element with id="demo":

```


<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>



```

### In the example above, getElementById is a method, while innerHTML is a property.

## The HTML DOM Document Object

- The document object represents your web page.

- If you want to access any element in an HTML page, you always start with accessing the document object.

### Finding HTML Elements

```
document.getElementById(id)	- Find an element by element id
document.getElementsByTagName(name)	- Find elements by tag name
document.getElementsByClassName(name)- 	Find elements by class name
document.querySelector() - Find elemet with id, class and tag name
document.querySelectorAll() - Find elemets with matching class or tag name
```

### Changing HTML Elements

```
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element

```

### Adding and Deleting Elements

```
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream

```

## Add Element to the body or to any other elements

```
const body = document.body;
body.append("hellow");
body.append(element)
body.appendChild(element)
```

## Create element and set text to our element ()

- createElement
- textContent
- innerText

```
const body = document.body;

const div = document.createElement('div')
div.textContent = "Hi i am dev"

body.append(div)

or

div.innerText = "Hi i am dev with innerText"

body.append(div)

```

## Render HTML Elements in your page

```
let body = document.body;

let div = document.createElement('div')

let elements = `
<h1>Heading one</h1>
<p>Some long text</p>
`
div.innerHTML = elements

body.append(div)

```

## JavaScript HTML DOM Events

- HTML DOM allow react to some event

- When a user clicks the mouse
- When a web page has loaded
- When an image has been loaded
- When the mouse moves over an element
- When an input field is changed
- When an HTML form is submitted
- When a user strokes a key

## HTML Event Attributes

-To assign events to HTML elements you can use event attributes.

```
<button onclick="displayDate()">Try it</button>

```

## Assign Events Using the HTML DOM

```
<script>
document.getElementById("myBtn").onclick = displayDate;
</script>
```

## The onchange Event

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
Enter your name: <input type="text" id="fname" onchange="upperCase()">
<p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

<script>
function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
</script>

</body>
</html>

```

### The onmouseover and onmouseout Events

```
<!DOCTYPE html>
<html>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)"
style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
Mouse Over Me</div>

<script>
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
</script>

</body>
</html>
```

### The onmousedown, onmouseup and onclick Events

```
<!DOCTYPE html>
<html>
<body>

<div onmousedown="mDown(this)" onmouseup="mUp(this)"
style="background-color:#D94A38;width:90px;height:20px;padding:40px;">
Click Me</div>

<script>
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}
</script>

</body>
</html>

```

## Projects

```

Project 1: Build a simple counter.

Requirements:
-Create a Github repository for this project.
-The count starts at 0
-Have two buttons on the screen, one to increase (+) the count by 1, and one button to lower (-) the count by 1.
-Pressing the plus button increases the count by 1, pressing the minus button decreases by 1
-Create a Github repository for this project and write Git commits as you go.

```

```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Problem 1</title>
  </head>
  <body>
    <h1 class="counter-display">(..)</h1>
    <button class="counter-minus">-</button>
    <button class="reset">Reset</button>
    <button class="counter-plus">+</button>

    <script src="./script.js"></script>
  </body>
</html>


// script

let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let reset = document.querySelector('.reset');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener('click', () => {
  count++;
  updateDisplay();
});

counterMinusElem.addEventListener('click', () => {
  count--;
  updateDisplay();
});

reset.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}


```

```

Project 2: Build a background color switcher.

Requirements:
-Create a Github repository for this project.
-Create an HTML select dropdown with at least 5 color options in it
-use the "onchange" attribute so that every time a user selects a color using the dropdown, it calls your JavaScript function that changes the background color of the BODY to the color selected in the dropdown

```

```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Problem 2</title>

    <style>

        body{
            transition: all 1.5s;
        }
    </style>
  </head>
  <body>

    <select onchange="color(this.value)">
        <option value="">Color</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="pink">Pink</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
    </select>


    <script>
        function color(value) {
            document.body.style.backgroundColor=value;

        }
    </script>
  </body>
</html>

```

```
Project 3: Build a number-guessing game.

Requirements:

-Create a Github repository for this project.
-A user has three tries to guess the number, between 1-100, that the computer picked.
-Whenever they guess, let them know if their guess is too high, or too low.
-After their third guess, reveal the number the computer chose to them, and let them know if they got it right or wrong.
-Use an HTML form to create an input input field for the user to enter their guess
-Add a "Submit" button to the form, and use the "onsubmit" attribute to call your JavaScript function.

```

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number gussing game</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="game-board">
    <p>Please enter the number between 1 to 100</p>
    <label for="num">Enter your guess: <input type="text" id="userNumber"></label>
    <button id="btn">Submit</button>

    <p id="lastGuess"></p>
    <p id="lowHigh"></p>
    <h3 id="win"></h3>

</div>


    <script src="./script.js"></script>
</body>
</html>

//css

body {
    display: flex;
    align-items: center;
    justify-content: center;
   margin-top: 30px;
}

.game-board{
    background-color: aquamarine;
    padding: 20px;
}

button{
    padding: 8px 16px;
    background-color: steelblue;
    color: white;
    border-radius:8px;
    cursor: pointer;
    border: none;
}

input {
    padding: 6px;
}

// script

let btn = document.getElementById('btn');
console.log(btn);

let computerGuess = Math.floor(Math.random() * 100 + 1);

let lastGuess = document.getElementById('lastGuess');
let lowHigh = document.getElementById('lowHigh');
let win = document.getElementById('win');

let counter = 1;
let message = '';

let maxTry = 5;

btn.addEventListener('click', guessNumber);

function guessNumber() {
  console.log(counter);
  let userGuess = parseInt(document.getElementById('userNumber').value);
  if (counter === 1) {
    message += 'Previous number ';
    lastGuess.innerText = message
  }

  message += userGuess + ' ';

  if (counter !== maxTry) {
    lastGuess.innerText = message;
    if (userGuess === computerGuess) {
      win.textContent = `You guess the correct number and you win ${userGuess}`;
    }

    if (userGuess < computerGuess) {
      lowHigh.innerText = 'Please guess the higher number';
    }
    if (userGuess > computerGuess) {
      lowHigh.innerText = 'Please guess the lower number';
    }
    counter++;
  } else {
    win.innerText = `Computer win the game and the computer guess is ${computerGuess}`;
  }
}

``
```

Project 4: Build a rock, paper, scissors game.

Requirements:
-Create a Github repository for this project.
-The user plays against the computer, so give them three buttons (rock, paper, scissors) to click
-Every time the user plays/clicks a button, display the winner
-A user can play as many times as they want

```

```

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8" />

<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>Rock papper scrissor game</title>

<link rel="stylesheet" href="./style.css" />

</head>

<body>

<div class="container">

<h2>Computer Choice: <span id="computerChoice">Paper</span></h2>

<h2>Your Choice: <span id="yourChoice">Rock</span></h2>

<h2>Result: <span id="result">Result</span></h2>

<button id="rock">Rock</button>

<button id="paper">Paper</button>

<button id="scissor">scissor</button>

</div>

<script src="./script.js"></script>

</body>

</html>

//css

.container {

background-color: steelblue;

color: white;

padding: 12px;

border-radius: 8px;

max-width: 600px;

margin: 0 auto;

}

button {

padding: 8px 16px;

cursor: pointer;

}

// script

```
let computerChoiceDisplay = document.getElementById('computerChoice');

let yourChoiceDisplay = document.getElementById('yourChoice');

let resultDisplay = document.getElementById('result');




let computerChoice;

let yourChoice;

let result;




let btn = document.querySelectorAll('button');

btn.forEach((btn) => {

  btn.addEventListener('click', () => {

    if (btn.id === 'rock') {

      yourChoice = 'rock';

    }

    if (btn.id === 'paper') {

      yourChoice = 'paper';

    }

    if (btn.id === 'scissor') {

      yourChoice = 'scissor';

    }

    yourChoiceDisplay.innerHTML = yourChoice;

    getComputerChoice();

    getResult();

  });

});




function getComputerChoice() {

  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {

    computerChoice = 'rock';

  }

  if (randomNumber === 2) {

    computerChoice = 'paper';

  }

  if (randomNumber === 3) {

    computerChoice = 'scissor';

  }

  computerChoiceDisplay.innerHTML = computerChoice;

}




function getResult() {

  if (computerChoice === yourChoice) {

    result = "It's a draw";

  }

  if (computerChoice === 'rock' && yourChoice === 'paper') {

    result = 'You win';

  } else if (computerChoice === 'rock' && yourChoice === 'scissor') {

    result = 'Computer Win';

  } else if (computerChoice === 'paper' && yourChoice === 'scissor') {

    result = 'You Win';

  } else if (computerChoice === 'paper' && yourChoice === 'rock') {

    result = 'Computer Win';

  } else if (computerChoice === 'scissor' && yourChoice === 'paper') {

    result = 'Computer Win';

  } else if (computerChoice === 'scissor' && yourChoice === 'rock') {

    result = 'You Win';

  }

  resultDisplay.innerHTML = result;

}

```

Project 5: Build a clock using JavaScript.

Requirements:
-Create a Github repository for this project.
-Display the hours, minutes, and seconds.
-The clock should run by itself. (Hint: look at JavaScript setInterval function)

```
- clock
```

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8" />

<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>Digital Clock</title>

<link rel="stylesheet" href="./style.css" />

</head>

<body>

<!-- Project 5: Build a clock using JavaScript.

Requirements:

-Create a Github repository for this project.

-Display the hours, minutes, and seconds.

-The clock should run by itself. (Hint: look at JavaScript setInterval function) -->

<div id="clock" class="display">10:50:20 "AM"</div>

<script src="./script.js"></script>

</body>

</html>

//css

body {

background-color: rgb(11, 48, 36);

color: white;

height: 100vh;

border: 5px solid red;

display: flex;

justify-content: center;

align-items: center;

}

// script

let clock = document.getElementById('clock');

function displayTime() {

let date = new Date();

let hrs = date.getHours();

let mins = date.getMinutes();

let sec = date.getSeconds();

let ampm = 'AM';

if (hrs === 0) {

hrs = 12;

}

if (hrs > 12) {

hrs = hrs - 12;

ampm = 'PM';

}

let time = `${hrs} : ${mins} : ${sec} : ${ampm}`;

clock.innerHTML = time;

}

displayTime();

setInterval(displayTime, 1000);

```

```

Project 6: Build a three-question quiz.

Requirements:
-Create a Github repository for this project.
-Create an HTML form with a three-question quiz
-Each question should have four multiple-choice answers to choose from.
-When the user submits the quiz, add a message underneath each question letting them know if they got it right/wrong (give them the correct answer).

```
- Quiz app code

```

//html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container" id="quiz">
        <div class="header">
            <h2 id="question">Quation</h2>
            <ul>
                <li><input type="radio" id="a" name="answer" class="answer"><label for="a" id="a_answer">answer</label></li>
                <li><input type="radio" id="b" name="answer" class="answer"><label for="b" id="b_answer">answer</label></li>
                <li><input type="radio" id="c" name="answer" class="answer"><label for="c" id="c_answer">answer</label></li>
                <li><input type="radio" id="d" name="answer" class="answer"><label for="d" id="d_answer">answer</label></li>
            </ul>
        </div>
        <button id="btn">Submit Answer</button>
    </div>

    <script src="./script.js"></script>

</body>
</html>

//css

body {
background-color: lightsteelblue;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
}

.container {
width: 600px;
background-color: aliceblue;
padding: 40px;
border-radius: 8px;
}

button {
display: block;
padding: 6px 12px;
background-color: steelblue;
font-size: 24px;
border: none;
border-radius: 8px;
cursor: pointer;
color: white;
}

ul {
list-style: none;
}

label {
font-size: 18px;
}

// js

const quizData = [
{
question: 'What does HTML stand for?',
a: 'Hyperlinks and Text Markup Language',
b: 'Hyper Text Markup Language',
c: 'Home Tool Markup Language',
d: 'non of the above',
correct: 'b',
},
{
question: 'What does HTML stand for?',
a: 'Hyperlinks and Text Markup Language',
b: 'Hyper Text Markup Language',
c: 'Home Tool Markup Language',
d: 'non of the above',
correct: 'b',
},
{
question: 'What does HTML stand for?',
a: 'Hyperlinks and Text Markup Language',
b: 'Hyper Text Markup Language',
c: 'Home Tool Markup Language',
d: 'non of the above',
correct: 'b',
},
{
question: 'What does HTML stand for?',
a: 'Hyperlinks and Text Markup Language',
b: 'Hyper Text Markup Language',
c: 'Home Tool Markup Language',
d: 'non of the above',
correct: 'b',
},
{
question: 'What does HTML stand for?',
a: 'Hyperlinks and Text Markup Language',
b: 'Hyper Text Markup Language',
c: 'Home Tool Markup Language',
d: 'non of the above',
correct: 'b',
},
];

let quiz = document.getElementById('quiz');

let question = document.getElementById('question');

let a_answer = document.getElementById('a_answer');

let b_answer = document.getElementById('b_answer');

let c_answer = document.getElementById('c_answer');

let d_answer = document.getElementById('d_answer');

let answer = document.querySelectorAll('.answer');

let btn = document.getElementById('btn');

btn.addEventListener('click', checkAnswer);

let quizIndex = 0;

let score = 0;

function loadQuestion() {
deselectAnswer();
let currentQuiz = quizData[quizIndex];
question.textContent = currentQuiz.question;
a_answer.textContent = currentQuiz.a;
b_answer.textContent = currentQuiz.b;
c_answer.textContent = currentQuiz.c;
d_answer.textContent = currentQuiz.d;
}

loadQuestion();

function getAnswer() {
let selectedAnswer = undefined;
answer.forEach((answerEach) => {
if (answerEach.checked) {
selectedAnswer = answerEach.id;
}
});
return selectedAnswer;
}

function deselectAnswer() {
answer.forEach((answerEach) => {
answerEach.checked = false;
});
}

function checkAnswer() {
let answer = getAnswer();

if (answer) {
if (answer === quizData[quizIndex].correct) {
score += 1;
}

    quizIndex += 1;
    if (quizIndex < quizData.length) {
      loadQuestion();
    } else {
      quiz.innerHTML = `<h1> You scoured ${score} / out of ${quizData.length} </h1>`;
    }

}
}

```

```

Project 7: Build a tip calculator.

Requirements:
-Create a Github repository for this project.
-You should have a form where a user is able to input the cost of the meal.
-The form should also let the user choose the percentage tip they want to give.
-When they submit the form, show them the total with tip added.
-Display the total tip amount as well so they know how much they're tipping.

```

```

Project 8: Build a ToDo App

Requirements:
-Create a Github repository for this project.
-A user must be able to add, edit, and delete a todo item.
-Hint: use JavaScript localStorage to store the todos

```
- todo-app code
```

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Things todo</title>
  </head>
  <body>
    <h1>Things to do</h1>
    <div class="todo">
      <input type="text" id="title" placeholder="enter todo" />
      <input type="date" id="date" />
      <button id="btn">Add todo</button>
    </div>
    <hr />
    <div id="display"></div>
    <script src="./script.js"></script>
  </body>
</html>

// script

//MVC

// Model or data

let todos;

let getData = JSON.parse(localStorage.getItem('todos'));
if (Array.isArray(getData) && getData.length > 0) {
todos = getData;
} else {
todos = [
{ title: 'let go for walk', date: '2023-03-22', id: 1 },
{ title: 'Go for shopping', date: '2023-03-22', id: 2 },
{ title: 'go for driving', date: '2023-03-22', id: 3 },
];
saveToLocalStorage();
}

// controller

let btn = document.getElementById('btn');

btn.addEventListener('click', addTodo);

function saveToLocalStorage() {
localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
let title = document.getElementById('title').value;
let date = document.getElementById('date').value;
let id = new Date().getTime();
todos.push({ title, date, id });
document.getElementById('title').value = '';
document.getElementById('date').value = '';
saveToLocalStorage();
render();
}

function deleteTodo(e) {
console.log(e);
let deleteId = Number(e.target.id);
console.log(deleteId);
todos = todos.filter((todo) => {
console.log(todo);
return todo.id !== deleteId;
});
saveToLocalStorage();
render();
}

let index;

function updateTodo(e) {
let targetId = Number(e.target.id);

todos.map((todo, i) => {
if (todo.id === targetId) {
index = i;
document.getElementById('title').value = todo.title;
document.getElementById('btn').style = 'display: none';
let btnUpdate = document.createElement('button');
btnUpdate.innerText = 'Update';
btnUpdate.setAttribute('id', 'btnU');
btnUpdate.onclick = updateData;
console.log(btnUpdate);
let todoUpdate = document.querySelector('.todo');
todoUpdate.append(btnUpdate);
}
});
}

function updateData() {
let obj = todos[index];
let title = document.getElementById('title').value;

let newObj = { ...obj, title };
todos[index] = newObj;
saveToLocalStorage();
document.getElementById('title').value = '';
document.getElementById('btnU').remove();
document.getElementById('btn').style = 'display: block';
render();
}
// veiw

function render() {
document.getElementById('display').innerHTML = '';

todos.map((todo) => {
let div = document.createElement('div'); // <div></div>
div.innerText = todo.title + ' ' + todo.date;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.id = todo.id;
    deleteBtn.style = 'margin-left: 12px; margin-bottom: 12px; cursor:pointer;';
    deleteBtn.onclick = deleteTodo;
    div.append(deleteBtn);

    let updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update';
    updateBtn.id = todo.id;
    updateBtn.onclick = updateTodo;

    div.append(updateBtn);
    let display = document.getElementById('display');
    console.log(display);
    display.append(div);

});
}

render();

```

```
