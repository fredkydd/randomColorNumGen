'use strict';
const number = document.querySelector('span'), generate = document.querySelector('button');

const randomNumColorGen = () => {
  // *GENERATE RGB COLORS
  const r = ('0' + ((Math.random() * 256) | 0).toString(16)).slice(-2),
    g = ('0' + ((Math.random() * 256) | 0).toString(16)).slice(-2),
    b = ('0' + ((Math.random() * 256) | 0).toString(16)).slice(-2),
    randomColor = '#' + r + g + b;
  console.log(`This's the randomColor ${randomColor}`);

  // *GENERATE NUMBER
  const randomNumber = Math.floor(Math.random() * 100000) + 1;

  // *APPLY
  number.innerHTML = randomNumber;
  number.style.color = randomColor;
  generate.style.backgroundColor = randomColor;
  generate.style.color = "#fff";
  document.body.style.backgroundColor = randomColor;
  console.log(`This's the randomNum ${randomNumber}`);
};
generate.addEventListener('click', randomNumColorGen);