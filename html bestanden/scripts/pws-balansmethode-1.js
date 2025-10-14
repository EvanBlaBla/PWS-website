let allesGoed1 = false;
let balansMethode1Goed = JSON.parse(localStorage.getItem('balansMethode1Goed')) || false;

function balansMethode1 () {
  let resultaat1A = '';
  let vraag1ABeantwoord = false;

  //let scores1 = getScores1();
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
    const s1 = getScores1();
    const sp1A = document.querySelector('.js-score1A');
    if (sp1A) sp1A.textContent = `Score: ${s1.a.goed} goed, ${s1.a.fout} fout`;

    /*
    if (!balansMethode1Goed && s.a.goed > 0 ){
      balansMethode1Goed = true;
      localStorage.setItem('balansMethode1Goed', JSON.stringify(true));
    };
*/

  };
  updateScoreSpans1();

  const a1 = Math.floor(Math.random() * 8) + 2;
  const b1 = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  const c1 = Math.floor(Math.random() * 8) + 2;
  const computerAntwoord1A = `x = ${a1}`;
  vraag1AGenereren();

  function vraag1AGenereren() {
    document.querySelector('.js-opdracht1A').innerHTML = `${c1}x + ${b1} = ${c1 * a1 + b1}`;
    //let resultaat1A = '';


    window.checken1A = function () {
      let leerlingElement1A = document.querySelector('.js-antwoord1A');
      let leerlingAntwoord1A = leerlingElement1A.value;
      if (!leerlingElement1A.value.trim() ) {
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
          let s1 = getScores1();
          if (resultaat1A === 'goed') s1.a.goed++; else s1.a.fout++;
          saveScores1(s1);
          updateScoreSpans1();
          //saveScores1(scores1);
          vraag1ABeantwoord = true;
      };

      if (!balansMethode1Goed && resultaat1A === 'goed') {
        balansMethode1Goed = true;
        localStorage.setItem('balansMethode1Goed', JSON.stringify(true));
        alert("Je hebt alle vragen goed beantwoord! Je kunt nu naar de volgende opdracht.");
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
      ${computerAntwoord1A} <br>`;


      if (leerlingAntwoord1A === 'clean') {
        const resetScores = { a: { goed: 0, fout: 0 } };
        saveScores1(resetScores);
        localStorage.setItem('balansMethode1Goed', JSON.stringify(false));
        balansMethode1Goed = false;      
        alert("Scores en voortgang gereset 👑");
        updateScoreSpans1();
        localStorage.removeItem('scores');
        localStorage.setItem('balansMethode1Goed', JSON.stringify(false));
        balansMethode1Goed = false;
        allesGoed1 = false;

        console.log('waarde is nu gereset naar:', balansMethode1Goed);


        document.querySelector('.js-antwoord1A').value = "";
        document.querySelector('.js-resultaat1A').innerHTML = "";
        document.querySelector('.js-uitwerkingen1A').hidden = true;
        document.querySelector('.js-resultaat1A').hidden = false;
        const nakijk1A = document.querySelector('.js-nakijken1A');
        nakijk1A.replaceWith(nakijk1A.cloneNode(true));
        vraag1ABeantwoord = false;
        balansMethode1();
        return;
      };}

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

balansMethode1();
/*
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checken1A();
  }});
*/
document.querySelector('.js-opnieuw1').addEventListener('click', () => {
  if (allesGoed1 === true) {
    // eerst het oude wissen
   // document.querySelector('.js-opdracht1').innerHTML = "";
    document.querySelector('.js-antwoord1A').value = "";
    document.querySelector('.js-resultaat1A').innerHTML = "";
    document.querySelector('.js-uitwerkingen1A').hidden = true;
    document.querySelector('.js-resultaat1A').hidden = false;;

    const nakijk1A = document.querySelector('.js-nakijken1A');
    nakijk1A.replaceWith(nakijk1A.cloneNode(true));
    vraag1ABeantwoord = false;
    // en dan de functie opnieuw draaien
    balansMethode1();
    allesGoed1 = false;
  } else if (allesGoed1 === false) {
    alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
  } return;
});