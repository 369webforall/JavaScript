//If there's no match in any of the case values, the code inside the default block is executed.

// The switch statement is useful when you have a single expression with multiple possible values to compare, making your code cleaner and more readable compared to using multiple if...else if...else statements.

let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log("It's the start of the workweek.");
    break;
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log("It's a workday.");
    break;
  case 'Friday':
    console.log("It's Friday, almost the weekend!");
    break;
  default:
    console.log("It's the weekend!");
}
