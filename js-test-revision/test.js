// what is async

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: 'This is promise data' });
  }, 6000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise is resolved!!! 10000');
  }, 10000);
});

async function getData() {
  console.log('Hellow javascript');

  try {
    const val1 = await p1;
    console.log(val1);
  } catch (err) {
    console.log(err);
  }
}

getData();
