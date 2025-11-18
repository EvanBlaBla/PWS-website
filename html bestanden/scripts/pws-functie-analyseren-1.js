let allesGoed1 = false;
let functieAnalyseren1Goed = JSON.parse(localStorage.getItem('functieAnalyseren1Goed')) || false;


function functieAnalyseren1() {

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
    const s = getScores1();
    const sp1A = document.querySelector('.js-score1A');
    if (sp1A) sp1A.textContent = `Score: ${s.a.goed} goed, ${s.a.fout} fout`;
    /*
    if (!functieAnalyseren1Goed && s.a.goed > 0 ){
      functieAnalyseren1Goed = true;
      localStorage.setItem('functieAnalyseren1Goed', JSON.stringify(true));
    };
    */
  };
  updateScoreSpans1();

    const a1 = Math.floor(Math.random() * (25 - 1 + 1)) + 1
    const b1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    const c1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    const d1 = Math.floor(Math.random() * (25 - 1 + 1)) + 1
    let computerAntwoord1A = '';
    let vraag1A = '';

    if (c1 === 1) {
      computerAntwoord1A = `lineair`  
      vraag1A = `f(x) = ${a1 + b1}x + ${d1}`;
    } else if (c1 === 2) {
      computerAntwoord1A = `kwadratisch` 
      vraag1A = `f(x) = ${a1}x^${c1} + ${b1}x + ${d1}`;
    } else {
      computerAntwoord1A = `niet kwadratisch en niet lineair` 
      vraag1A = `f(x) = ${a1}x^${c1} + ${b1}x + ${d1}`;
    };

    vraag1AGenereren();
  function vraag1AGenereren() {
    document.querySelector('.js-opdracht1A').innerHTML = `Gegeven de functie ${vraag1A}. Wat voor soort functie is dit? <br>
    Je kan kiezen uit de volgende antwoorden: lineair, kwadratisch, niet kwadratisch en niet lineair.`;

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
      let juistAntwoord1A = computerAntwoord1A
      .toLowerCase()
      .replace(/\s+/g, '');

     

      let correcteAntwoorden1A;
      if (c1 === 1) {
        correcteAntwoorden1A = [`lineair`, '§', '#']
      } else if (c1 === 2) {
        correcteAntwoorden1A = [`kwadratisch`, '§', '#']
      } else {
        correcteAntwoorden1A = [`niet kwadratisch en niet lineair`, 'Niet lineair en niet kwadratisch', '§', '#']
      }

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

      if (!functieAnalyseren1Goed && resultaat1A === 'goed') {
        console.log('goed');
        functieAnalyseren1Goed = true;
        localStorage.setItem('functieAnalyseren1Goed', JSON.stringify(true));
        checkAllesGoed();
        console.log('functieAnalyseren1Goed is nu, :', functieAnalyseren1Goed);
      };

      if (resultaat1A === 'goed') {
        allesGoed1 = true;
        document.querySelector('.js-uitwerkingen1A').hidden = false;
        //document.querySelector('.js-opnieuw1').hidden = false;
        addCoins(1);
        addScore(1);
        

      } else {
        allesGoed1 = false;
      };

      const uitwerkingen1A = document.querySelector('.js-resultaat1A');
      uitwerkingen1A.innerHTML = `
      ${leerlingAntwoord1A} <br>
      Jouw antwoord is ${resultaat1A} <br><br>
      Uitwerkingen: <br>
      De functie ${vraag1A} is een ${computerAntwoord1A} functie. De hoogste macht van x is ${c1}<br><br>
      
      <button class="js-opnieuw1">Opnieuw</button>`;

      document.querySelector('.js-opnieuw1').hidden = false;
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
          functieAnalyseren1();
          allesGoed1 = false;
        } else if (allesGoed1 === false) {
          alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
        } return;
      });    
      

      if (leerlingAntwoord1A === 'clean') {
        const resetScores = { a: { goed: 0, fout: 0 } };
        saveScores1(resetScores);
        localStorage.setItem('functieAnalyseren1Goed', JSON.stringify(false));
        functieAnalyseren1Goed = false;      
        alert("Scores en voortgang gereset 👑");
        updateScoreSpans1();
        localStorage.removeItem('scores');
        localStorage.setItem('functieAnalyseren1Goed', JSON.stringify(false));
        functieAnalyseren1Goed = false;
        allesGoed1 = false;

        console.log('waarde is nu gereset naar:', functieAnalyseren1Goed);


        document.querySelector('.js-antwoord1A').value = "";
        document.querySelector('.js-resultaat1A').innerHTML = "";
        document.querySelector('.js-uitwerkingen1A').hidden = true;
        document.querySelector('.js-resultaat1A').hidden = false;
        const nakijk1A = document.querySelector('.js-nakijken1A');
        nakijk1A.replaceWith(nakijk1A.cloneNode(true));
        vraag1ABeantwoord = false;
        functieAnalyseren1();
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
functieAnalyseren1();
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checken1A();
  }});

  /*
document.querySelector('.js-opnieuw1').addEventListener('click', () => {
    // eerst het oude wissen
    if (allesGoed1 === true) {
    document.querySelector('.js-opdracht1A').innerHTML = "";
    document.querySelector('.js-antwoord1A').value = "";
    document.querySelector('.js-resultaat1A').innerHTML = "";
    document.querySelector('.js-uitwerkingen1A').hidden = true;

    vraag1ABeantwoord = false;
    allesGoed1 = false;
    functieAnalyseren1();
    } else if (allesGoed1 === false) {
      alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
    } return;
});
 */

