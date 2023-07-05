function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = '🧀';
      resolve(cheese);
    }, 3000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + '🧇';
      //   resolve(dough);
      reject('Bad cheese');
    }, 3000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + '🍕';
      resolve(pizza);
    }, 3000);
  });
}
// console.log(getCheese());

// getCheese()
//   .then((cheese) => {
//     console.log('here is cheese', cheese);
//     return makeDough(cheese);
//   })
//   .then((dough) => {
//     console.log('dough is ready', dough);
//     return bakePizza(dough);
//   })
//   .then((pizza) => {
//     console.log('Pizza is ready', pizza);
//   })
//   .catch((error) => {
//     console.log('sorry for pizza', error);
//   });

async function buyPizza() {
  try {
    let cheese = await getCheese();
    console.log('here is cheese', cheese);
    let dough = await makeDough(cheese);
    console.log('dough is ready', dough);
    let pizza = await bakePizza(dough);
    console.log('Pizza is ready', pizza);
  } catch (error) {
    console.log(error);
  }
}

buyPizza();
