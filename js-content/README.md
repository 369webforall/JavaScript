- open developer tool - js console for testing code
- code editor - vscode editor
  `alert("hellow world")`

  ```javascript
  let js = 'awesome';
  if (js === 'awesome') alert('awesome');
  ```

- console.log("hellow world")
- we use console.log() to print data in console.

- The role of javascript in web development - html, css and javascipt together can make dynamic webpage.

- naming convensition - camelCase

let firstName = "Brham Dev"
let lastName = "Mahato"

or first_name / last_name

Not allowed

let 4name = "dev"

let me&myfriend = "go for swimming"

let new = "find more new currency" (resever key word not allowed)

function findSquare(x){
return x \* x
}

# DataType

// String, Number, Boolean, undefined, null, Array, Object

// typeof operator typeof true // typeof 45

- undefined - empty value,

let myName;

myName is undefined, typeof

console.log(typeof myName) // undefined

- null

console.log(typeof null) // object which is bug or error in Javascript and is never fixed

## varaibles

- let, const, var

Always use const to declare a variable, if value is changing then use let.

var - try to avoid. (var create memory in window object)

let and const is block scope and var is function scope

const are immutable
let is mutated

var can be mutated but is is function scoped

## operators -

- operator is used to perform some operation (Math, comperrison)

`+, -, *, /, , **, %`

// % return remainder
// ** exponent
eg. console.log(2**3)
//2*2*2

// Operators Precedence

console.log(10 -2 > 5 + 6)

console.log(30-20-2) // ltr (left to right) // 10-2 = 8

console.log(2\**3 )// rtl (right to left) // 2*2*2 = 2*4 = 8

Assignment operator evalulation (rtl)

let n1, n2,
n1 = n2 = 30-20-2
first n2 = 18
second n1 = 18

## type conversion
