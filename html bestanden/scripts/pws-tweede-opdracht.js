
const a = Math.floor(Math.random() * 8) + 2;
const b = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
const c = Math.floor(Math.random() * 8) + 2;
const computerAntwoord = `x = ${a}`;

document.querySelector('.js-opdracht').innerHTML = `${c}x - ${b} = ${c * a + b}`;
let resultaat = '';

function checken (){
  const leerlingElement = document.querySelector('.js-antwoord');
  let leerlingAntwoord = leerlingElement.value;
  
  let leerlingAntwoord2 = leerlingAntwoord
  .toLowerCase()
  .replace(/\s+/g, '');

  let juistAntwoord = computerAntwoord
  .toLowerCase();
  //Dit maakt het antwoord niet fout met een spatie teveel/te weinig

  const correcteAntwoorden = [
    `x=${a}`
  ];

  let resultaat;
  if (correcteAntwoorden.includes(leerlingAntwoord2)) {
    resultaat = 'goed';
  } else {
    resultaat = 'fout';
  }

  const uitwerkingen = document.querySelector('.js-resultaat')

  uitwerkingen.innerHTML = `
  ${leerlingAntwoord} <br>
  Jouw antwoord is ${resultaat} <br><br>
  Uitwerkingen: <br>
  ${c}x - ${b} = ${a * c + b} <br>
  ${c}x = ${a * c} <br>
  x = ${a} <br> 
  ${computerAntwoord} <br>
  `

}

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checken();
    }})