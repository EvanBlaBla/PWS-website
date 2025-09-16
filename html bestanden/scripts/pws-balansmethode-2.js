function opdr1B() {
  document.getElementById("opdracht1B").innerHTML = `
      <p>Opdracht 2</p>
      <p class="js-opdracht-1B"></p>
      <input placeholder="Antwoord" class="js-antwoord-1B">
      <button class="js-nakijken-1B" onclick="checken1B()">Nakijken</button>
      <p class="js-resultaat-1B"></p>
  `;
  const a1B = Math.floor(Math.random() * 8) + 2;
  const b1B = Math.floor(Math.random() * 8) + 2;
  const c1B = a1B * a1B + b1B;
  computerAntwoord1B = `x = ${a1B} V x = -${a1B}`;

  document.querySelector('.js-opdracht-1B').innerHTML =
    `x² + ${b1B} = ${c1B}`;
  window.a1B = a1B;
  window.b1B = b1B;
  window.c1B = c1B;
}

function checken1B() {
  const leerlingElement1B = document.querySelector('.js-antwoord-1B');
  const uitwerkingen1B = document.querySelector('.js-resultaat-1B');

  if (!leerlingElement1B.value.trim()) {
    alert("Vul eerst een antwoord in voordat je nakijkt!");
    return;
  }

  let leerlingAntwoord1B = leerlingElement1B.value;

  let leerlingAntwoord2_1B = leerlingAntwoord1B
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace('of', 'v');

  let juisteAntwoorden1B = [
    `x=${a1B}vx=-${a1B}`,
    `x=-${a1B}vx=${a1B}`
  ];

  let resultaat1B = juisteAntwoorden1B.includes(leerlingAntwoord2_1B) ? 'goed' : 'fout';

  uitwerkingen1B.innerHTML = `
    Jouw antwoord: ${leerlingAntwoord1B} <br>
    Resultaat: <strong>${resultaat1B}</strong> <br><br>
    Uitwerkingen: <br>
    x² + ${b1B} = ${c1B} <br>
    x² = ${a1B*a1B} <br>
    x = √${a1B*a1B} V x = -√${a1B*a1B} <br> 
    ${computerAntwoord1B} <br>
  `;
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checken1B();
  }
});
