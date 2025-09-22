
function vraag1Genereren() {
  const a = Math.floor(Math.random() * (25 - 1 + 1)) + 1
  const b = Math.floor(Math.random() * (100 - 1 + 1)) + 1
  const c = Math.floor(Math.random() * (3 - 1 + 1)) + 1
  const d = Math.floor(Math.random() * (25 - 1 + 1)) + 1
  let computerAntwoord1 = '';
  let vraag1 = '';

  if (c === 1) {
    computerAntwoord1 = `lineair`  
    vraag1 = `f(x) = ${a + b}x + ${d}`;
  } else if (c === 2) {
    computerAntwoord1 = `kwadratisch` 
    vraag1 = `f(x) = ${a}x^${c} + ${b}x + ${d}`;
  } else {
    computerAntwoord1 = `niet kwadratisch en niet lineair` 
    vraag1 = `f(x) = ${a}x^${c} + ${b}x + ${d}`;
  }

  document.querySelector('.js-opdracht1').innerHTML = `Gegeven de functie ${vraag1}. Wat voor soort functie is dit? <br>
  Je kan kiezen uit de volgende antwoorden: lineair, kwadratisch, niet kwadratisch en niet lineair.`;

  let resultaat1 = '';


  function checken1() {
    let leerlingElement1 = document.querySelector('.js-antwoord1');
    let leerlingAntwoord1 = leerlingElement1.value;
    let leerlingAntwoord1Correct = leerlingAntwoord1
    .toLowerCase()
    .replace(/\s+/g, '');
    let juistAntwoord1 = computerAntwoord1
    .toLowerCase()
    .replace(/\s+/g, '');

    if (!leerlingElement1.value.trim()) {
    alert("Vul eerst een antwoord in voordat je nakijkt!");
    return;
  }

    let correcteAntwoorden1;
    if (c === 1) {
      correcteAntwoorden1 = [`lineair`, '§']
    } else if (c === 2) {
      correcteAntwoorden1 = [`kwadratisch`, '§']
    } else {
      correcteAntwoorden1 = [`niet kwadratisch en niet lineair`, 'Niet lineair en niet kwadratisch', '§']
    }

    let resultaat1;
    if (correcteAntwoorden1.includes(leerlingAntwoord1Correct)) {
      resultaat1 = 'goed';
    } else {
      resultaat1 = 'fout';
    }

    const uitwerkingen1 = document.querySelector('.js-resultaat1');
    uitwerkingen1.innerHTML = `
    ${leerlingAntwoord1} <br>
    Jouw antwoord is ${resultaat1} <br><br>
    Uitwerkingen: <br>
    De functie ${vraag1} is een ${computerAntwoord1} functie. De hoogste macht van x is ${c}<br><br>`
  }
  window.checken1 = checken1;
}