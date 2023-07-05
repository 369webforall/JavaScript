const ticket = new Promise(function (resolve, reject) {
  let isBoarded = false;
  if (isBoarded) {
    resolve('You have boarded the plane');
  } else {
    reject('Your flight is cancelled');
  }
}); // return object
console.log(ticket);

ticket
  .then((data) => {
    console.log('have safe flight', data);
  })
  .catch((error) => {
    console.log('fly tomorrow', error);
  });
