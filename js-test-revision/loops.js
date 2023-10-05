//for

for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// for...in loop (for iterating over object properties):

const person = {
  name: 'John',
  age: 30,
  job: 'Engineer',
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// while loop:

// The while loop continues to execute as long as the condition count < 3 is true.

let count = 0;

while (count < 3) {
  console.log(`Count: ${count}`);
  count++;
}

// do...while loop:

// This loop is similar to the while loop, but it executes the code block at least once, even if the condition is false.

let num = 5;

do {
  console.log(`Number: ${num}`);
  num--;
} while (num > 0);

// break statement:
// The break statement is used to exit the loop prematurely. In this example, when i is equal to 3, the loop will terminate.

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(`Iteration ${i}`);
}

// continue statement:
// The continue statement is used to skip the current iteration and proceed to the next one. In this example, when i is equal to 2, it skips that iteration and continues with the next one.

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(`Iteration ${i}`);
}
