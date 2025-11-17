let allesGoed3 = false;

let balansMethode3Goed = JSON.parse(localStorage.getItem('balansMethode3Goed')) || false;

function balansMethode3() {
  let vraag3ABeantwoord = false;
  //let resultaat3A = '';
  //let scores3 = getScores3();
  function getScores3() {
    return JSON.parse(localStorage.getItem('scores3')) || {
      a: { goed: 0, fout: 0 },
    };
  };
  function saveScores3(scores3) {
    localStorage.setItem('scores3', JSON.stringify(scores3));
  };
  // update alleen score-tekst in de DOM
  function updateScoreSpans3() {
    const s3 = getScores3();
    const sp3A = document.querySelector('.js-score3A');
    if (sp3A) sp3A.textContent = `Score: ${s3.a.goed} goed, ${s3.a.fout} fout`;
    /*
    if (!balansMethode3Goed && s3.a.goed > 0 ){
      balansMethode3Goed = true;
      localStorage.setItem('balansMethode3Goed', JSON.stringify(true));
    };
    */
  };
  updateScoreSpans3();

  let a3 = Math.floor(Math.random() * 21) + 10; 
  let b3 = Math.floor(Math.random() * 10) + 1;
  let c3 = Math.floor(Math.random() * 19) + 11;
  let e3 = Math.floor(Math.random() * 10) + 1; 
  if (e3 === 0) e3 = 1; 
  let d3 = Math.floor(Math.random() * e3*b3) + 1
  let f3 = (e3*b3) - d3;

  
  const computerAntwoord3A = `x = ${a3}`;
  vraag3AGenereren();

  function vraag3AGenereren() {
    
    document.querySelector('.js-opdracht3A').innerHTML = `Bereken de waarde van x <br>
    <sup>${d3}</sup>&frasl;<sub>${e3}</sub>x + ${b3*c3} = ${b3*(a3+c3)} - <sup>${f3}</sup>&frasl;<sub>${e3}</sub>x`;
    //let resultaat3A = '';
    console.log('a = '+ a3, 'b = '+b3, 'c = '+c3, 'd = '+d3, 'e = '+e3, 'f = '+f3, 'antwoord: '+computerAntwoord3A);

    window.checken3A = function () {
      let leerlingElement3A = document.querySelector('.js-antwoord3A');
      let leerlingAntwoord3A = leerlingElement3A.value;
      if (!leerlingElement3A.value.trim() ) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
      return};
      
      let leerlingAntwoord3ACorrect = leerlingAntwoord3A
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace('of', 'v');

      //let juistAntwoord3A = computerAntwoord3A
      //.toLowerCase()
      //.replace(/\s+/g, '');
      //Dit maakt het antwoord niet fout met een spatie teveel/te weinig

      const correcteAntwoorden3A = [
        `x=${a3}`, 
        '§', '#'
      ];

      let resultaat3A; 
      if (correcteAntwoorden3A.includes(leerlingAntwoord3ACorrect)) {
        resultaat3A = 'goed';
      } else {
        resultaat3A = 'fout';
      }

      if (!vraag3ABeantwoord) {
          let s3 = getScores3();
          if (resultaat3A === 'goed') s3.a.goed++; else s3.a.fout++;
          saveScores3(s3);
          updateScoreSpans3();
          saveScores3(scores3);
          vraag3ABeantwoord = true;
      };

      if (!balansMethode3Goed && resultaat3A === 'goed') {
        balansMethode3Goed = true;
        localStorage.setItem('balansMethode3Goed', JSON.stringify(true));
        //checkAllesGoed();
        console.log('balansMethode3Goed is nu:', balansMethode3Goed);
      };

      if (resultaat3A === 'goed') {
        allesGoed3 = true;
        document.querySelector('.js-uitwerkingen3A').hidden = false;
        addCoins(1);
        addScore(1);
      } else {
        allesGoed3 = false;
      };

      const uitwerkingen3A = document.querySelector('.js-resultaat3A')
      uitwerkingen3A.innerHTML = `
      ${leerlingAntwoord3A} <br>
      Jouw antwoord is ${resultaat3A} <br><br>
      uitwerkingen: <br>
      <sup>${d3}</sup>&frasl;<sub>${e3}</sub>x + ${b3*c3} = ${b3*(a3+c3)} - $<sup>${f3}</sup>&frasl;<sub>${e3}</sub>x<br>
      <sup>${b3 * e3}</sup>&frasl;<sub>${e3}</sub>x + ${b3*c3} = ${b3*(a3+c3)} <br>
      ${b3}x + ${b3*c3} = ${b3*(a3+c3)} <br>
      ${b3}x = ${b3*a3} <br>
      x = ${a3}<br><br>
      ${computerAntwoord3A} <br>
      <button class="js-opnieuw3">Opnieuw</button>
      `;
      document.querySelector('.js-opnieuw3').hidden = false;
      document.querySelector('.js-opnieuw3').addEventListener('click', () => {
        if (allesGoed3 === true) {
          // eerst het oude wissen
        // document.querySelector('.js-opdracht1').innerHTML = "";
          document.querySelector('.js-antwoord3A').value = "";
          document.querySelector('.js-resultaat3A').innerHTML = "";
          document.querySelector('.js-uitwerkingen3A').hidden = true;
          document.querySelector('.js-resultaat3A').hidden = false;;
          const nakijk3A = document.querySelector('.js-nakijken3A');
          nakijk3A.replaceWith(nakijk3A.cloneNode(true));
          vraag3ABeantwoord = false;
          // en dan de functie opnieuw draaien
          balansMethode3();
          allesGoed3 = false;
        } else if (allesGoed3 === false) {
          alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
        } return;
      });
    

      if (leerlingAntwoord3A.trim().toLowerCase() === 'clean') {
        const scores3 = {
          a: { goed: 0, fout: 0 },
        };
        saveScores3(scores3);
         localStorage.setItem('balansMethode1Goed', JSON.stringify(false));
        balansMethode3Goed = false;      
        alert("Scores en voortgang gereset 👑");
        updateScoreSpans3();
        localStorage.removeItem('scores');
        localStorage.setItem('balansMethode1Goed', JSON.stringify(false));
        balansMethode3Goed = false;
        allesGoed3 = false;

        console.log('waarde is nu gereset naar:', balansMethode3Goed);


        document.querySelector('.js-antwoord3A').value = "";
        document.querySelector('.js-resultaat3A').innerHTML = "";
        document.querySelector('.js-uitwerkingen3A').hidden = true;
        document.querySelector('.js-resultaat3A').hidden = false;
        const nakijk3A = document.querySelector('.js-nakijken3A');
        nakijk3A.replaceWith(nakijk3A.cloneNode(true));
        vraag3ABeantwoord = false;
        balansMethode3();
        return;
      };
    };

    window.uitwerkingen3A = function () {
        const r3A = document.querySelector('.js-resultaat3A');

        if (r3A.hidden === true) {
          r3A.hidden = false;
        } else {
          r3A.hidden = true;
        }
        };
        
        document.querySelector('.js-nakijken3A').onclick = checken3A;
        document.querySelector('.js-uitwerkingen3A').onclick = uitwerkingen3A;
  }
}


balansMethode3();
/*
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checken3A();
    }});
*/