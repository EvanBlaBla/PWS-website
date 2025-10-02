function opdr1B() {
  const a1B = Math.floor(Math.random() * 8) + 2;
  const b1B = Math.floor(Math.random() * 8) + 2;
  const c1B = a1B * a1B + b1B;

  window.a1B = a1B;
  window.b1B = b1B;
  window.c1B = c1B;

  document.querySelector('.js-opdracht-1B').textContent =
    `x² + ${b1B} = ${c1B}`;
}

function checken1B() {
  const input = document.querySelector('.js-antwoord-1B').value.trim();
  if (!input) {
    alert("Vul eerst een antwoord in!");
    return;
  }

  const norm = input.toLowerCase().replace(/\s+/g, '').replace('of','v');
  const juist = [`x=${a1B}vx=-${a1B}`, `x=-${a1B}vx=${a1B}`];
  const result = juist.includes(norm) ? "goed" : "fout";

  document.querySelector('.js-resultaat-1B').innerHTML = `
    Jouw antwoord: ${input} <br>
    Resultaat: ${result} <br><br>
    Uitwerking: <br>
    x² + ${b1B} = ${c1B} <br>
    x² = ${a1B*a1B} <br>
    x = ±${a1B}
  `;
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-nakijken-1B")) {
    checken1B();
  }
});
