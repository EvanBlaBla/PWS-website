function opdr1A() {
  const a1A = Math.floor(Math.random() * 8) + 2;
  const b1A = Math.floor(Math.random() * 91) + 10;
  const c1A = Math.floor(Math.random() * 8) + 2;

  window.a1A = a1A;
  window.b1A = b1A;
  window.c1A = c1A;

  document.querySelector('.js-opdracht-1A').textContent =
    `${c1A}x - ${b1A} = ${c1A * a1A + b1A}`;
}

function checken1A() {
  const input = document.querySelector('.js-antwoord-1A').value;
  const norm = input.toLowerCase().replace(/\s+/g, '');
  const juist = `x=${a1A}`;
  const result = norm === juist ? "goed" : "fout";

  document.querySelector('.js-resultaat-1A').innerHTML = `
    Jouw antwoord: ${input} <br>
    Resultaat: ${result} <br><br>
    Uitwerking: <br>
    ${c1A}x - ${b1A} = ${a1A * c1A + b1A} <br>
    ${c1A}x = ${a1A * c1A} <br>
    x = ${a1A}
  `;
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-nakijken-1A")) {
    checken1A();
  }
});
