// what is the job of event loop -
// event loop constantly monitor call stack, and call stack queue, micro task queue

// Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

console.log('start');

setTimeout(() => {
  console.log('CBF from settime out');
}, 5000);

let btn = document.getElementById('btn');
btn.addEventListener('click', function hc() {
  console.log('i am from event listner');
});

async function getData() {
  let response = await fetch('https://fakestoreapi.com/products');
  let data = await response.json();
  console.log(data);
}

getData();

console.log('end');
