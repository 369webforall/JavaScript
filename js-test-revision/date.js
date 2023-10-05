// Create a Date object representing the current date and time
const currentDate = new Date();

// Get various date and time components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(
  `Current Date and Time: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
);

// Create a Date object for a specific date
const customDate = new Date('2023-12-25T12:00:00');

// Get the day of the week for the custom date
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

console.log(customDate.getDay());
const dayOfWeek = daysOfWeek[customDate.getDay()];

console.log(`Custom Date: ${dayOfWeek}, ${customDate.toLocaleDateString()}`);

// Format the date as MM/DD/YYYY
const formattedDate = `${month}/${day}/${year}`;
console.log(`Formatted Date (MM/DD/YYYY): ${formattedDate}`);

// Format the date as DD/MM/YYYY
const formattedDate2 = `${day}/${month}/${year}`;
console.log(`Formatted Date (DD/MM/YYYY): ${formattedDate2}`);
