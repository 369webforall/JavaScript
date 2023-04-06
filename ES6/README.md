# ES6 Tutorial

ECMAScript 2015 or ES2015 is a significant update to the JavaScript programming language.
It is the first major update to the language since ES5 which was standardized in 2009.
Therefore, ES2015 is often called ES6.

# Section 1. New ES6 syntax

# Resources

[Freecode camp](https://www.freecodecamp.org/learn)

[ES6 -Tutorial](https://www.javascripttutorial.net/es6/)

[ES6 Modules](https://www.theodinproject.com/lessons/node-path-javascript-es6-modules)

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

# Projects - ES6

## Project 1

Add a new function to your ToDos app that initially loads ToDos data from an API.

Requirements:

- Update the ToDos app from the previous project to initially load the localStorage of ToDos by fetching the ToDos resources in the JSONPlaceholder API.
- fetch() function On the page load, if the Todos array is empty, load it with the Todos from this API. Otherwise, if it's not empty, it should load what's currently stored.

Resources:

https://jsonplaceholder.typicode.com/todos

## Project 2

- Create a Recipe App by integrating the "TheMealDB" API's random recipe endpoint.

Requirements:

- Create a Github repository for this project.
- When the page first loads, it should display a random recipe, complete with a picture of the meal, name of the meal, a button to watch the YouTube video, and the instructions of how to make the meal, along with the list of ingredients.
- When a user clicks a button called "new recipe", it should show a new random and update the content on the page using JavaScript.

Note: use fetch function to fetch the data.

Resources:

- https://www.themealdb.com/api.php

## Code

html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recipe finder</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="wrapper">
      <div class="grid">
        <header>
          <h1>Meal Finder</h1>
        </header>

        <main>
          <div class="form">
            <input type="text" placeholder="search meal" id="meal" />
            <button id="btn">Search Meal</button>
          </div>
          <div id="displayMeal" class="display"></div>
        </main>

        <footer>
          <p>This app belongs to ABC company, &copy;<span id="date"></span></p>
        </footer>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>

```

css

```
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}
img {
  width: 100%;
  object-fit: cover;
  height: 150px;
  border-radius: 8px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
}

h2 {
  font-size: 26px;
}

p {
  font-size: 18px;
}
.wrapper {
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

header {
  background-color: orange;
}

main {
}

.card {
  max-width: 200px;
  background-color: antiquewhite;
  padding: 5px;
  border-radius: 8px;
}

input {
  display: block;
  padding: 2px;
}

button {
  background-color: orange;
  border: none;

  cursor: pointer;
  border-radius: 12px;
  padding: 4px 8px;
  display: block;
}

.form {
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 12px;
}

.display {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

```

script.js

```
document.getElementById('date').innerText = new Date().getFullYear();

let btn = document.getElementById('btn');

btn.addEventListener('click', searchMeal);

async function searchMeal() {
  let searchText = document.getElementById('meal').value;
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  );
  let data = await response.json();
  console.log(data.meals);
  if (data.meals) {
    displayMeal(data.meals);
  } else {
    console.log('no data found');
  }
}

function displayMeal(meals) {
  let html = '';
  meals.map((meal) => {
    html += `
 <div class="card">
              <img
                src=${meal.strMealThumb}
              />
              <h2>Meal Name: ${meal.strMeal}</h2>
              <h3>Category: ${meal.strCategory}</h3>
              <p>
               ${meal.strInstructions.slice(0, 30)}
              </p>
              <a
                href=${meal.strYoutube}
                target="_blank"
                >You Tube video</a
              >
            </div>
`;
    let display = document.getElementById('displayMeal');
    display.innerHTML = html;
  });
}


```

## Project 3

- International Space Station Mapping

### Resources

- [Where the iss -Documentation](https://wheretheiss.at/w/developer)

- https://api.wheretheiss.at/v1/satellites/25544

- [map-leaflet](https://leafletjs.com/)

- [space station icon](https://www.svgrepo.com/svg/118233/space-station)

- get data from api link.

```
async function getData(){
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')

    const data = await response.json();
   const {latitude, longitude} = data;
   document.getElementById('lat').textContent = latitude;
   document.getElementById('long').textContent = longitude;
}

getData();

// index.html

<div>
<h2>
Latitude: <span id="lat"></span> <br/>
Longitude: <span id="long"></span>
</h2>
</div>
```

- Next step is to display the location in map.
- we will use leaflet an open-source JavaScript library
  for mobile-friendly interactive maps.

## Preparing your page

Before writing any code for the map, you need to do the following preparation steps on your page:

- Include Leaflet CSS file in the head section of your document:

```
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossorigin=""/>

```

- Include Leaflet JavaScript file after Leaflet’s CSS:

```
 <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
     integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
     crossorigin=""></script>
```

- Put a div element with a certain id where you want your map to be:

```
 <div id="issMap"></div>

```

- Make sure the map container has a defined height, for example by setting it in CSS:

```
#map { height: 180px; }
```

- now let's use the map object in code.

```
const map = L.map('issMap).setView([0,0],1)

const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

const tiles = L.tileLayer(tileUrl, {
   attribution
});

tiles.addTo(map);

//create marker icon

const issIcon =L.icon({
iconUrl: 'issImg.png',
iconSize: [50, 32],
iconAnchor: [25, 16]
});

const marker = L.marker([0,0], {icon: issIcon}).addTo(map);


async function getIssLocation(){
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')

    const data = await response.json();
   const {latitude, longitude} = data;
marker.setLatLng([latitude, longitude]);
   document.getElementById('lat').textContent = latitude;
   document.getElementById('long').textContent = longitude;
}

getIssLocation();

```
