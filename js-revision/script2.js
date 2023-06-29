// function abcd() {
//   for (var i = 1; i < 12; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// abcd();

// var a = 25;

// let b = 35;

// let c = 3.674;

// {
//   let d = 100;
//   let e = 200;
// }

// alert('this is alert');

function foo() {
  let a = 5;
  function hi() {
    let b = 20;
    console.log(a);

    function last() {
      console.log(a);
      console.log(b);
    }
    last();
  }

  hi();
}

foo();
