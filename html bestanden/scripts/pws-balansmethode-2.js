/** @type {boolean} */ let allesGoed2 = false;

let balansMethode2Goed = JSON.parse(localStorage.getItem('balansMethode2Goed')) || false;

function balansMethode2() {
  let vraag2ABeantwoord = false;
  let resultaat2A = '';
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
    const s2 = getScores2();
    const sp2A = document.querySelector('.js-score2A');
    if (sp2A) sp2A.textContent = `Score: ${s2.a.goed} goed, ${s2.a.fout} fout`;
    /*
    if (!balansMethode2Goed && s2.a.goed > 0 ){
      balansMethode2Goed = true;
      localStorage.setItem('balansMethode2Goed', JSON.stringify(true));
    };
    */
  };
  updateScoreSpans2();

  const a2 = Math.floor(Math.random() * 8) + 2;
  const b2 = Math.floor(Math.random() * 8) + 2;
  const c2 = a2*a2 + b2;
  const computerAntwoord2A = `x = ${a2} V x = -${a2}`;
  vraag2AGenereren();

  function vraag2AGenereren() {
    document.querySelector('.js-opdracht2A').innerHTML = `x^2 + ${b2} = ${c2}`;
    //let resultaat2A = '';

    window.checken2A = function () {
      let leerlingElement2A = document.querySelector('.js-antwoord2A');
      let leerlingAntwoord2A = leerlingElement2A.value;
      if (!leerlingElement2A.value.trim() ) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
      return};
      
      let leerlingAntwoord2ACorrect = leerlingAntwoord2A
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace('of', 'v');

      //let juistAntwoord2A = computerAntwoord2A
      //.toLowerCase()
      //.replace(/\s+/g, '');
      //Dit maakt het antwoord niet fout met een spatie teveel/te weinig

      const correcteAntwoorden2A = [
        `x=${a2}vx=-${a2}`,
        `x=-${a2}vx=${a2}`, 
        '§', '#'
      ];

      let resultaat2A; 
      if (correcteAntwoorden2A.includes(leerlingAntwoord2ACorrect)) {
        resultaat2A = 'goed';
      } else {
        resultaat2A = 'fout';
      }

      if (!vraag2ABeantwoord) {
          let s2 = getScores2();
          if (resultaat2A === 'goed') s2.a.goed++; else s2.a.fout++;
          saveScores2(s2);
          updateScoreSpans2();
          //saveScores2(scores2);
          vraag2ABeantwoord = true;
      };

      if (!balansMethode2Goed && resultaat2A === 'goed') {
        balansMethode2Goed = true;
        localStorage.setItem('balansMethode2Goed', JSON.stringify(true));
        checkAllesGoed();
        console.log('balansMethode2Goed is nu:', balansMethode2Goed);
      };

      if (resultaat2A === 'goed') {
        allesGoed2 = true;
        document.querySelector('.js-uitwerkingen2A').hidden = false;
        addCoins(1);
        addScore(1);
      } else {
        allesGoed2 = false;
      };

      const uitwerkingen2A = document.querySelector('.js-resultaat2A')
      uitwerkingen2A.innerHTML = `
      ${leerlingAntwoord2A} <br>
      Jouw antwoord is ${resultaat2A} <br><br>
      uitwerkingen: <br>
      x^2 + ${b2} = ${c2} <br>
      x^2 = ${a2*a2} <br>
      x = \u222A${a2*a2} V x = -\u222A${a2*a2} <br> 
      ${computerAntwoord2A} <br>
      <button class="js-opnieuw2">Opnieuw</button>
      `;
      document.querySelector('.js-opnieuw2').hidden = false;
      document.querySelector('.js-opnieuw2').addEventListener('click', () => {
        if (allesGoed2 === true) {
          // eerst het oude wissen
        // document.querySelector('.js-opdracht1').innerHTML = "";
          document.querySelector('.js-antwoord2A').value = "";
          document.querySelector('.js-resultaat2A').innerHTML = "";
          document.querySelector('.js-uitwerkingen2A').hidden = true;
          document.querySelector('.js-resultaat2A').hidden = false;;
          const nakijk2A = document.querySelector('.js-nakijken2A');
          nakijk2A.replaceWith(nakijk2A.cloneNode(true));
          vraag2ABeantwoord = false;
          // en dan de functie opnieuw draaien
          balansMethode2();
          allesGoed2 = false;
        } else if (allesGoed2 === false) {
          alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
        } return;
      });
      // \u222A is het wortelteken

      if (leerlingAntwoord2A.trim().toLowerCase() === 'clean') {
        const scores2 = {
          a: { goed: 0, fout: 0 },
        };
        saveScores2(scores2);
         localStorage.setItem('balansMethode1Goed', JSON.stringify(false));
        balansMethode2Goed = false;      
        alert("Scores en voortgang gereset 👑");
        updateScoreSpans2();
        localStorage.removeItem('scores');
        localStorage.setItem('balansMethode1Goed', JSON.stringify(false));
        balansMethode2Goed = false;
        allesGoed2 = false;

        console.log('waarde is nu gereset naar:', balansMethode2Goed);


        document.querySelector('.js-antwoord2A').value = "";
        document.querySelector('.js-resultaat2A').innerHTML = "";
        document.querySelector('.js-uitwerkingen2A').hidden = true;
        document.querySelector('.js-resultaat2A').hidden = false;
        const nakijk2A = document.querySelector('.js-nakijken2A');
        nakijk2A.replaceWith(nakijk2A.cloneNode(true));
        vraag2ABeantwoord = false;
        balansMethode2();
        return;
      };
    };

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
  }
}


balansMethode2();
/*
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checken2A();
    }});
*/
