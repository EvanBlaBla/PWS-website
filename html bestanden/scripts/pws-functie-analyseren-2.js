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

  const a2 = Math.floor(Math.random() * (9)) + 1
  const b2 = Math.floor(Math.random() * (10)) + 1
  do {
    c2 = Math.floor(Math.random() * 10) + 1;   
  } while (c2 === b2);
  const d22 = [b2, c2]
  const d2Index = Math.floor(Math.random() * d22.length);
  const d2 = d22[d2Index];
    
  let computerAntwoord2A = '';

  if (d2Index === 0) {
    computerAntwoord2A = `lineaire`
  } else if (d2Index === 1) {
    computerAntwoord2A = `kwadratische`
  } else {
    computerAntwoord2A = `niet kwadratische of lineaire`
  };

  vraag2AGenereren();
  function vraag2AGenereren() {
    document.querySelector('.js-opdracht2A').innerHTML = `Gegeven de functie f(x) = ${b2}(x+${a2})² - ${d2}x². Wat voor soort functie is dit? <br>
    Je kan kiezen uit de volgende antwoorden: lineair, kwadratisch, niet kwadratisch en niet lineair.`;
    console.log(`b2 is: ${b2}, c2 is: ${c2}, d2 is: ${d2}, d2Index is: ${d2Index}`);

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
      if (d2Index === 0) {
        correcteAntwoorden2A = [`lineair`, '§', '#']
      } else if (d2Index === 1) {
        correcteAntwoorden2A = [`kwadratisch`, '§', '#']
      } else {
        correcteAntwoorden2A = [`nietkwadratischennietlineair`,'nietlineairennietkwadratisch', '§', '#']
      };

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
        checkAllesGoed();
        console.log('functieAnalyseren2Goed is nu, :', functieAnalyseren2Goed);
      };

     if (resultaat2A === 'goed' && allesGoed2 === false) {
        addCoins(2);
        addScore(10);
        console.log(coins);
      };
      if (resultaat2A === 'goed') {
        allesGoed2 = true;
      } else {
        allesGoed2 = false;
      };
      
      let uitwerkingenUitleg2A = '';
      if (d2Index === 0) {
        uitwerkingenUitleg2A = `f(x) = ${b2}(x+${a2})² - ${d2}x² kun je korter schrijven als <br> 
        f(x) = ${b2}x² + ${2*b2*a2}x + ${b2*a2*a2} - ${d2}x² <br>
        f(x) = ${2*b2*a2}x + ${b2*a2*a2} <br>
        De hoogste macht van x is 1, dus dit is een lineaire functie.`;
      } else if (d2Index === 1) {
        uitwerkingenUitleg2A = `f(x) = ${b2}(x+${a2})² - ${d2}x² kun je korter schrijven als <br> 
        f(x) = ${b2}x² + ${2*b2*a2}x + ${b2*a2*a2} - ${d2}x² <br>
        f(x) = ${b2 - d2}x² + ${2*b2*a2}x + ${b2*a2*a2} <br>
        De hoogste macht van x is 2, dus dit is een kwadratische functie.`;
      };

      const uitwerkingen2A = document.querySelector('.js-resultaat2A');
      uitwerkingen2A.innerHTML = `
      ${leerlingAntwoord2A} <br>
      Jouw antwoord is ${resultaat2A} <br><br>
      Uitwerkingen: <br>
      ${uitwerkingenUitleg2A}
      
      <button class="js-opnieuw2">Opnieuw</button>`;
      document.querySelector('.js-opnieuw2').hidden = false;
      document.querySelector('.js-opnieuw2').addEventListener('click', () => {
        if (allesGoed2 === true) {
          // eerst het oude wissen
        // document.querySelector('.js-opdracht2').innerHTML = "";
          document.querySelector('.js-antwoord2A').value = "";
          document.querySelector('.js-resultaat2A').innerHTML = "";
           ;
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
         ;
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
        ;

  };
};
functieAnalyseren2();

/*
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checken2A();
  }});
  */

  /*
document.querySelector('.js-opnieuw2').addEventListener('click', () => {
    // eerst het oude wissen
    if (allesGoed2 === true) {
    document.querySelector('.js-opdracht2A').innerHTML = "";
    document.querySelector('.js-antwoord2A').value = "";
    document.querySelector('.js-resultaat2A').innerHTML = "";
     ;

    vraag2ABeantwoord = false;
    allesGoed2 = false;
    functieAnalyseren2();
    } else if (allesGoed2 === false) {
      alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
    } return;
});
 */

