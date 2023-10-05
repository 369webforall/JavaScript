const body = document.body;

let h1 = document.createElement('h1');
h1.innerText = 'This is heading one again';
body.append(h1);

// add h1 to the div with id demo

let div = document.getElementById('demo');

div.append(h1);

// html

div.innerHTML = '';
// attributes

let p = document.createElement('p');

p.textContent = 'This is a paragraph';

p.id = 'para';
p.setAttribute('class', 'para2');

p.removeAttribute('id');

body.append(p);

const readP = document.querySelector('.para2');

console.log(readP);
