
const a = Math.floor(Math.random() * 8) + 2;
const b = Math.floor(Math.random() * 8) + 2;
const c = a*a + b;
const computerAntwoord = `x = ${a} V x = -${a}`

document.querySelector('.js-opdracht').innerHTML = `x^2 + ${b} = ${c}`;
let resultaat = '';

function checken (){
  if (document.querySelector('.js-antwoord').value.trim() === '') {
    alert("Vul eerst een antwoord in voordat je nakijkt!");
    return;
  }

  const leerlingElement = document.querySelector('.js-antwoord');
  let leerlingAntwoord = leerlingElement.value;
  
  let leerlingAntwoord2 = leerlingAntwoord
  .toLowerCase()
  .replace(/\s+/g, '')
  .replace('of', 'v');

  let juistAntwoord = computerAntwoord
  .toLowerCase()
  .replace(/\s+/g, '');
  //Dit maakt het antwoord niet fout met een spatie teveel/te weinig

  const correcteAntwoorden = [
    `x=${a}vx=-${a}`,
    `x=-${a}vx=${a}`
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
  x² + ${b} = ${c} <br>
  x² = ${a*a} <br>
  x = \u221A${a*a} V x = -\u221A${a*a} <br> 
  ${computerAntwoord} <br>
  `
  // \u221A is het wortelteken
}

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checken();
    }})