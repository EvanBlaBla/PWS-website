function opdr1A() {
  document.getElementById("opdracht1A").innerHTML = `
      <p class="js-head-1A">Opdracht 1</p>
      <p class="js-opdracht-1A"></p>
      <input placeholder="Antwoord" class="js-antwoord-1A">
      <button class="js-nakijken-1A" onclick="checken1A()">Nakijken</button>
      <p class="js-resultaat-1A"></p>
  `;
  const a1A = Math.floor(Math.random() * 8) + 2;
  const b1A = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  const c1A = Math.floor(Math.random() * 8) + 2;
  computerAntwoord1A = `x = ${a1A}`;

  document.querySelector('.js-opdracht-1A').innerHTML =
    `${c1A}x - ${b1A} = ${c1A * a1A + b1A}`;
  window.a1A = a1A;
  window.b1A = b1A;
  window.c1A = c1A;
}

function checken1A() {
  const leerlingElement1A = document.querySelector('.js-antwoord-1A');
  let leerlingAntwoord1A = leerlingElement1A.value;
  
  let leerlingAntwoord2_1A = leerlingAntwoord1A
    .toLowerCase()
    .replace(/\s+/g, '');

  const correcteAntwoorden1A = [
    `x=${a1A}`
  ];

  let resultaat1A;
  if (correcteAntwoorden1A.includes(leerlingAntwoord2_1A)) {
    resultaat1A = 'goed';
  } else {
    resultaat1A = 'fout';
  }

  const uitwerkingen1A = document.querySelector('.js-resultaat-1A');

  uitwerkingen1A.innerHTML = `
    ${leerlingAntwoord1A} <br>
    Jouw antwoord is ${resultaat1A} <br><br>
    Uitwerkingen: <br>
    ${c1A}x - ${b1A} = ${a1A * c1A + b1A} <br>
    ${c1A}x = ${a1A * c1A} <br>
    x = ${a1A} <br> 
    ${computerAntwoord1A} <br>
  `;
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checken1A();
  }
});
