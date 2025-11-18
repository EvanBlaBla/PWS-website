let allesGoed2 = false;
let functieAnalyseren2Goed = JSON.parse(localStorage.getItem('functieAnalyseren2Goed')) || false;


function functieAnalyseren2() {

  let vraag2ABeantwoord = false;

  //let scores2 = getScores2();
  function getScores2() {
    return JSON.parse(localStorage.getItem('scores2')) || {
      a: { goed: 0, fout: 0 },
    };
  };
  function saveScores2(scores2) {
    localStorage.setItem('scores2', JSON.stringify(scores2));
  };
  // update alleen score-tekst in de DOM
  function updateScoreSpans2() {
    const s = getScores2();
    const sp2A = document.querySelector('.js-score2A');
    if (sp2A) sp2A.textContent = `Score: ${s.a.goed} goed, ${s.a.fout} fout`;
    /*
    if (!functieAnalyseren2Goed && s.a.goed > 0 ){
      functieAnalyseren2Goed = true;
      localStorage.setItem('functieAnalyseren2Goed', JSON.stringify(true));
    };
    */
  };
  updateScoreSpans2();

    const a2 = Math.floor(Math.random() * (25 - 2 + 2)) + 2
    const b2 = Math.floor(Math.random() * (200 - 2 + 2)) + 2
    const c2 = Math.floor(Math.random() * (3 - 2 + 2)) + 2
    const d2 = Math.floor(Math.random() * (25 - 2 + 2)) + 2

    let computerAntwoord2A = '';
    let vraag2A = '';

    if (c2 === 2) {
      computerAntwoord2A = `lineair`  
      vraag2A = `f(x) = ${a2 + b2}x + ${d2}`;
    } else if (c2 === 2) {
      computerAntwoord2A = `kwadratisch` 
      vraag2A = `f(x) = ${a2}x^${c2} + ${b2}x + ${d2}`;
    } else {
      computerAntwoord2A = `niet kwadratisch en niet lineair` 
      vraag2A = `f(x) = ${a2}x^${c2} + ${b2}x + ${d2}`;
    };

    vraag2AGenereren();
  function vraag2AGenereren() {
    document.querySelector('.js-opdracht2A').innerHTML = `Gegeven de functie ${vraag2A}. Wat voor soort functie is dit? <br>
    Je kan kiezen uit de volgende antwoorden: lineair, kwadratisch, niet kwadratisch en niet lineair.`;

    //let resultaat2A = '';


    window.checken2A = function () {
      const leerlingElement2A = document.querySelector('.js-antwoord2A');
      let leerlingAntwoord2A = leerlingElement2A.value;
      if (!leerlingElement2A.value.trim()) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
      return};

      let leerlingAntwoord2ACorrect = leerlingAntwoord2A
      .toLowerCase()
      .replace(/\s+/g, '');
      let juistAntwoord2A = computerAntwoord2A
      .toLowerCase()
      .replace(/\s+/g, '');

     

      let correcteAntwoorden2A;
      if (c2 === 1) {
        correcteAntwoorden2A = [`lineair`, '§', '#']
      } else if (c2 === 2) {
        correcteAntwoorden2A = [`kwadratisch`, '§', '#']
      } else {
        correcteAntwoorden2A = [`niet kwadratisch en niet lineair`, 'Niet lineair en niet kwadratisch', '§', '#']
      }

      let resultaat2A;
      if (correcteAntwoorden2A.includes(leerlingAntwoord2ACorrect)) {
        resultaat2A = 'goed';
      } else {
        resultaat2A = 'fout';
      }

      if (!vraag2ABeantwoord) {
          let scores2 = getScores2();
          if (resultaat2A === 'goed') scores2.a.goed++; else scores2.a.fout++;
          saveScores2(scores2);
          updateScoreSpans2();
          //saveScores2(scores2);
          vraag2ABeantwoord = true;
      };

      if (!functieAnalyseren2Goed && resultaat2A === 'goed') {
        console.log('goed');
        functieAnalyseren2Goed = true;
        localStorage.setItem('functieAnalyseren2Goed', JSON.stringify(true));
        //checkAllesGoed();
        console.log('functieAnalyseren2Goed is nu, :', functieAnalyseren2Goed);
      };

      if (resultaat2A === 'goed') {
        allesGoed2 = true;
        document.querySelector('.js-uitwerkingen2A').hidden = false;
        //document.querySelector('.js-opnieuw2').hidden = false;
        //addCoins(2);
        //addScore(2);
        

      } else {
        allesGoed2 = false;
      };

      const uitwerkingen2A = document.querySelector('.js-resultaat2A');
      uitwerkingen2A.innerHTML = `
      ${leerlingAntwoord2A} <br>
      Jouw antwoord is ${resultaat2A} <br><br>
      Uitwerkingen: <br>
      De functie ${vraag2A} is een ${computerAntwoord2A} functie. De hoogste macht van x is ${c2}<br><br>
      
      <button class="js-opnieuw2">Opnieuw</button>`;
      document.querySelector('.js-opnieuw2').hidden = false;
      document.querySelector('.js-opnieuw2').addEventListener('click', () => {
        if (allesGoed2 === true) {
          // eerst het oude wissen
        // document.querySelector('.js-opdracht2').innerHTML = "";
          document.querySelector('.js-antwoord2A').value = "";
          document.querySelector('.js-resultaat2A').innerHTML = "";
          document.querySelector('.js-uitwerkingen2A').hidden = true;
          document.querySelector('.js-resultaat2A').hidden = false;;

          const nakijk2A = document.querySelector('.js-nakijken2A');
          nakijk2A.replaceWith(nakijk2A.cloneNode(true));
          vraag2ABeantwoord = false;
          // en dan de functie opnieuw draaien
          functieAnalyseren2();
          allesGoed2 = false;
        } else if (allesGoed2 === false) {
          alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
        } return;
      });

      

      if (leerlingAntwoord2A === 'clean') {
        const resetScores = { a: { goed: 0, fout: 0 } };
        saveScores2(resetScores);
        localStorage.setItem('functieAnalyseren2Goed', JSON.stringify(false));
        functieAnalyseren2Goed = false;      
        alert("Scores en voortgang gereset 👑");
        updateScoreSpans2();
        localStorage.removeItem('scores');
        localStorage.setItem('functieAnalyseren2Goed', JSON.stringify(false));
        functieAnalyseren2Goed = false;
        allesGoed2 = false;

        console.log('waarde is nu gereset naar:', functieAnalyseren2Goed);


        document.querySelector('.js-antwoord2A').value = "";
        document.querySelector('.js-resultaat2A').innerHTML = "";
        document.querySelector('.js-uitwerkingen2A').hidden = true;
        document.querySelector('.js-resultaat2A').hidden = false;
        const nakijk2A = document.querySelector('.js-nakijken2A');
        nakijk2A.replaceWith(nakijk2A.cloneNode(true));
        vraag2ABeantwoord = false;
        functieAnalyseren2();
        return;
      };}

    window.uitwerkingen2A = function () {
        const r2A = document.querySelector('.js-resultaat2A');

        if (r2A.hidden === true) {
          r2A.hidden = false;
        } else {
          r2A.hidden = true;
        }
        };


       document.querySelector('.js-nakijken2A').onclick = checken2A;
       document.querySelector('.js-uitwerkingen2A').onclick = uitwerkingen2A;

  };
};
functieAnalyseren2();
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checken2A();
  }});

  /*
document.querySelector('.js-opnieuw2').addEventListener('click', () => {
    // eerst het oude wissen
    if (allesGoed2 === true) {
    document.querySelector('.js-opdracht2A').innerHTML = "";
    document.querySelector('.js-antwoord2A').value = "";
    document.querySelector('.js-resultaat2A').innerHTML = "";
    document.querySelector('.js-uitwerkingen2A').hidden = true;

    vraag2ABeantwoord = false;
    allesGoed2 = false;
    functieAnalyseren2();
    } else if (allesGoed2 === false) {
      alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
    } return;
});
 */

