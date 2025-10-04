let allesGoed1 = false;
let balansMethode1Goed = false;

function balansmethode1 () {
  let vraag1ABeantwoord = false;

  let scores1 = getScores1();
  function getScores1() {
    return JSON.parse(localStorage.getItem('scores1')) || {
      a: { goed: 0, fout: 0 },
    };
  };
  function saveScores1(scores1) {
    localStorage.setItem('scores1', JSON.stringify(scores1));
  };
  // update alleen score-tekst in de DOM
  function updateScoreSpans1() {
    const s = getScores1();
    const sp1A = document.querySelector('.js-score1A');
    if (sp1A) sp1A.textContent = `Score: ${s.a.goed} goed, ${s.a.fout} fout`;
    if (!balansMethode1Goed && s.a.goed > 0 ){
      balansMethode1Goed = true;
      localStorage.setItem('balansMethode1Goed', JSON.stringify(true));
    };
  };

  const a1 = Math.floor(Math.random() * 8) + 2;
  const b1 = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  const c1 = Math.floor(Math.random() * 8) + 2;
  const computerAntwoord1A = `x = ${a1}`;
  vraag1AGenereren();

  function vraag1AGenereren() {
    document.querySelector('.js-opdracht1A').innerHTML = `${c1}x + ${b1} = ${c1 * a1 + b1}`;
    //let resultaat1A = '';


    window.checken1A = function () {
      const leerlingElement1A = document.querySelector('.js-antwoord1A');
      let leerlingAntwoord1A = leerlingElement1A.value;
      if (!leerlingElement1A.value.trim()) {

        alert("Vul eerst een antwoord in voordat je nakijkt!");
      return};

      let leerlingAntwoord1ACorrect = leerlingAntwoord1A
      .toLowerCase()
      .replace(/\s+/g, '');

      //let juistAntwoord1A = computerAntwoord1A
      //.toLowerCase();
      //Dit maakt het antwoord niet fout met een spatie teveel/te weinig

      const correcteAntwoorden1A = [
        `x=${a1}`,
        `§`, '#'
      ];

      let resultaat1A;
      if (correcteAntwoorden1A.includes(leerlingAntwoord1ACorrect)) {
        resultaat1A = 'goed';
      } else {
        resultaat1A = 'fout';
      }

      if (!vraag1ABeantwoord) {
          let scores1 = getScores1();
          if (resultaat1A === 'goed') scores1.a.goed++; else scores1.a.fout++;
          saveScores1(scores1);
          updateScoreSpans1();
          //saveScores1(scores1);
          vraag1ABeantwoord = true;
      };

      if (resultaat1A === 'goed') {
        allesGoed1 = true;
        document.querySelector('.js-uitwerkingen1A').hidden = false;
        document.querySelector('.js-opnieuw1').hidden = false;
      } else {
        allesGoed1 = false;
      };
      

      const uitwerkingen1A = document.querySelector('.js-resultaat1A')
      uitwerkingen1A.innerHTML = `
      ${leerlingAntwoord1A} <br>
      Jouw antwoord is ${resultaat1A} <br><br>
      Uitwerkingen: <br>
      ${c1}x + ${b1} = ${a1 * c1 + b1} <br>
      ${c1}x = ${a1 * c1} <br> 
      ${computerAntwoord1A} <br>`

  
      if (leerlingAntwoord1A.trim().toLowerCase() === 'koningloek') {
        const scores1 = {
          a: { goed: 0, fout: 0 },          
          b: { goed: 0, fout: 0 },
          c: { goed: 0, fout: 0}
        };
        saveScores1(scores1);
        updateScoreSpans1();
        return; 
      };
    };



    window.uitwerkingen1A = function () {
        const r1A = document.querySelector('.js-resultaat1A');

        if (r1A.hidden === true) {
          r1A.hidden = false;
        } else {
          r1A.hidden = true;
        }
        };
        
        document.querySelector('.js-nakijken1A').onclick = checken1A;
        document.querySelector('.js-uitwerkingen1A').onclick = uitwerkingen1A;
  };

};

balansmethode1();
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checken1A();
  }});

document.querySelector('.js-opnieuw1').addEventListener('click', () => {
  if (allesGoed1 === true) {
    // eerst het oude wissen
   // document.querySelector('.js-opdracht1').innerHTML = "";
    document.querySelector('.js-antwoord1A').value = "";
    document.querySelector('.js-resultaat1A').innerHTML = "";
    document.querySelector('.js-uitwerkingen1A').hidden = true;
    document.querySelector('.js-resultaat1A').hidden = false;;

    vraag1ABeantwoord = false;
    // en dan de functie opnieuw draaien
    balansmethode1();
    allesGoed1 = false;
  } else if (allesGoed1 === false) {
    alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
  } return;
});