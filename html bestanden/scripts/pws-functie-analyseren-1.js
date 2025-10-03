function pwsFunctieAnalyseren1() {
  function vraag1AGenereren() {
    const a = Math.floor(Math.random() * (25 - 1 + 1)) + 1
    const b = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    const c = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    const d = Math.floor(Math.random() * (25 - 1 + 1)) + 1
    let computerAntwoord1 = '';
    let vraag1A = '';

    if (c === 1) {
      computerAntwoord1 = `lineair`  
      vraag1A = `f(x) = ${a + b}x + ${d}`;
    } else if (c === 2) {
      computerAntwoord1 = `kwadratisch` 
      vraag1A = `f(x) = ${a}x^${c} + ${b}x + ${d}`;
    } else {
      computerAntwoord1 = `niet kwadratisch en niet lineair` 
      vraag1A = `f(x) = ${a}x^${c} + ${b}x + ${d}`;
    }

    document.querySelector('.js-opdracht1A').innerHTML = `Gegeven de functie ${vraag1A}. Wat voor soort functie is dit? <br>
    Je kan kiezen uit de volgende antwoorden: lineair, kwadratisch, niet kwadratisch en niet lineair.`;

    let resultaat1 = '';


    function checken1() {
      let leerlingElement1 = document.querySelector('.js-antwoord1A');
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

      const uitwerkingen1 = document.querySelector('.js-resultaat1A');
      uitwerkingen1.innerHTML = `
      ${leerlingAntwoord1} <br>
      Jouw antwoord is ${resultaat1} <br><br>
      Uitwerkingen: <br>
      De functie ${vraag1A} is een ${computerAntwoord1} functie. De hoogste macht van x is ${c}<br><br>`
    }
    document.querySelector('.js-nakijken1A')
    .addEventListener('click', checken1);
    document.querySelector('.js-uitwerkingen1A')
    .addEventListener('click', uitwerkingen1);

  };
};
document.querySelector('.js-opnieuw1A').addEventListener('click', () => {
    // eerst het oude wissen
    document.querySelector('.js-opdracht1A').innerHTML = "";
    document.querySelector('.js-antwoord1A').value = "";
    document.querySelector('.js-resultaat1A').innerHTML = "";
    document.querySelector('.js-uitwerkingen1A').hidden = true;
});
  vraag1AGenereren();
  
  document.querySelector('.js-nakijken1A').addEventListener('click', function() { 
    checken1();
    if (resultaat1 === 'goed') {
      document.querySelector('.js-uitwerkingen1A').hidden = false;
      document.querySelector('.js-opdracht2').hidden = false;
      document.querySelector('.js-antwoord2').hidden = false;
      document.querySelector('.js-nakijken2').hidden = false;
    };
  });

