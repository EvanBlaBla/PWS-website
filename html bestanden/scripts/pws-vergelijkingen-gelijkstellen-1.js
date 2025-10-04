let allesGoed1 = false;
let vergelijkingenGelijkstellen1Goed = false;

function pwsVergelijkingenGelijkstellen1() {

  let vraag1ABeantwoord = false;
  let vraag1BBeantwoord = false;
  let vraag1CBeantwoord = false;

  let scores = getScores();
  function getScores() {
    return JSON.parse(localStorage.getItem('scores')) || {
      a: { goed: 0, fout: 0 },
      b: { goed: 0, fout: 0 },
      c: { goed: 0, fout: 0 }
    };
  };
  function saveScores(scores) {
    localStorage.setItem('scores', JSON.stringify(scores));
  };

  // update alleen score-tekst in de DOM
  function updateScoreSpans() {
    const s = getScores();
    const sp1A = document.querySelector('.js-score1A');
    const sp1B = document.querySelector('.js-score1B');
    const sp1C = document.querySelector('.js-score1C');
    if (sp1A) sp1A.textContent = `Score: ${s.a.goed} goed, ${s.a.fout} fout`;
    if (sp1B) sp1B.textContent = `Score: ${s.b.goed} goed, ${s.b.fout} fout`;
    if (sp1C) sp1C.textContent = `Score: ${s.c.goed} goed, ${s.c.fout} fout`;
    if (!vergelijkingenGelijkstellen1Goed && s.a.goed > 0 && s.b.goed > 0 && s.c.goed > 0) {
      vergelijkingenGelijkstellen1Goed = true;
      localStorage.setItem('vergelijkingenGelijkstellen1Goed', JSON.stringify(true));
    };
  };

  let a, b, c, d, e, f, g;
  do {
    e = Math.floor(Math.random() * 6) + 1;   // 1 t/m 6
    d = Math.floor(Math.random() * 6) + 1;   // 1 t/m 6
    f = Math.floor(Math.random() * (10 - 4 + 1)) + 4; // 4 t/m 10
    g = Math.floor(Math.random() * (10 - 4 + 1)) + 4; // 4 t/m 10
    a = e * f;
    b = e * g;
    c = e + d;
  } while ((a < 20 || a > 60) || (b < 20 || b > 40) ||a === b);
  const computerAntwoord1A = `yLoek = -${c}t + ${a+b}, yJonas = -${d}t + ${b}`;
  const computerAntwoord1B = `-${d}t + ${b} > -${c}t + ${a+b}`;
  const computerAntwoord1C = `t > ${a/e}`;
  
  console.log(a, b, c, d, e, f, g, computerAntwoord1A, computerAntwoord1B, computerAntwoord1C, vergelijkingenGelijkstellen1Goed);
  //dit waren alle variabelen

  vraag1AGenereren();

  function vraag1AGenereren() {
    document.querySelector('.js-opdracht1A').innerHTML = `
    <span class="js-score1A"></span>
    1a <br> Loek mag van zijn vader ${a+b} euro van zijn creditcard gebruiken. Elke dag (t) koopt hij 1 nieuw spel van ${c} euro. Jonas heeft de creditcard van zijn moeder gekregen, waar hij ${b} euro op mag gebruiken. Hij geeft ${d} euro dagelijks uit aan snoep.<br><br>
    Stel de functies van Loek en Jonas op.`;
    //let resultaat1A = '';
    window.checken1A = function () {
      //let scores = getScores();

      let leerlingElement1A = document.querySelector('.js-antwoord1A');
      let leerlingAntwoord1A = leerlingElement1A.value;
      if (!leerlingElement1A.value.trim()) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
        return;
      };
      let leerlingAntwoord1ACorrect = leerlingAntwoord1A
      .toLowerCase()
      .replace(/\s+/g, '');
      let juistAntwoord1A = computerAntwoord1A
      .toLowerCase()
      .replace(/\s+/g, '');
      const correcteAntwoorden1 = [
        `yloek=-${c}t+${a+b},yjonas=-${d}t+${b}`,
        `yloek=-${c}t+${a+b},yjonas=${b}-${d}t`,
        `yloek=${a+b}-${c}t,yjonas=-${d}t+${b}`,
        `yloek=${a+b}-${c}t,yjonas=${b}-${d}t`,
        `yjonas=-${d}t+${b},yloek=-${c}t+${a+b}`,
        `yjonas=${b}-${d}t,yloek=-${c}t+${a+b}`,
        `yjonas=-${d}t+${b},yloek=${a+b}-${c}t`,
        `yjonas=${b}-${d}t,yloek=${a+b}-${c}t`, '§', `#`
      ];

      let resultaat1A;
      if (correcteAntwoorden1.includes(leerlingAntwoord1ACorrect)) {
        resultaat1A = 'goed';
      } else {
        resultaat1A = 'fout';
      }

      if (!vraag1ABeantwoord) {
        let scores = getScores();
        if (resultaat1A === 'goed') scores.a.goed++; else scores.a.fout++;
        saveScores(scores);
        updateScoreSpans();
        //saveScores(scores);
        window.vraag1ABeantwoord = true;
      };


      
      const uitwerkingen1A = document.querySelector('.js-resultaat1A');
      uitwerkingen1A.innerHTML = `
      ${leerlingAntwoord1A} <br>
      Jouw antwoord is ${resultaat1A} <br><br>
      Uitwerkingen: <br>
      Loek begint met ${a+b} euro en geeft elke dag(t) ${c} euro uit. <br>
      yLoek = -${c}t + ${a+b} <br>
      Jonas begint met ${b} euro en geeft elke dag(t) ${d} euro uit. <br>
      yJonas = -${d}t + ${b} <br><br>
      ${computerAntwoord1A} <br>`

      if (resultaat1A === 'goed') {
        document.querySelector('.js-uitwerkingen1A').hidden = false;
        document.querySelector('.js-opdracht1B').hidden = false;
        document.querySelector('.js-antwoord1B').hidden = false;
        document.querySelector('.js-nakijken1B').hidden = false;
      };
      vraag1ABeantwoord = true;

      if (leerlingElement1A.value.trim().toLowerCase() === 'koningloek') {
        const scores = {
          a: { goed: 0, fout: 0 },
          b: { goed: 0, fout: 0 },
          c: { goed: 0, fout: 0 }
        };
        saveScores(scores);
        updateScoreSpans();
        return; 
      };
    };
    
    //de functies voor de uitwerkingen onzichtbaar maken
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
    
    vraag1BGenereren();
    
  }; 

  function vraag1BGenereren() {
    document.querySelector('.js-opdracht1B').innerHTML = `
      <span class="js-score1B"></span>
    1b <br> Stel een ongelijkheid op waarmee berekend kan worden na hoeveel dagen(t) Jonas meer geld heeft dan Loek.`;
    //let resultaat1B = '';
    window.checken1B = function () {
     
      //let scores = getScores();

      let leerlingElement1B = document.querySelector('.js-antwoord1B');
      let leerlingAntwoord1B = leerlingElement1B.value;
      if (!leerlingElement1B.value.trim()) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
        return;
      };
      let leerlingAntwoord1BCorrect = leerlingAntwoord1B
      .toLowerCase()
      .replace(/\s+/g, '');
      let juistAntwoord1B = computerAntwoord1B
      .toLowerCase()
      .replace(/\s+/g, '');
      const correcteAntwoorden2 = [
        `-${d}t+${b}>-${c}t+${a+b}`,
        `${b}-${d}t>-${c}t+${a+b}`,
        `-${d}t+${b}>${a+b}-${c}t`,
        `${b}-${d}t>${a+b}-${c}t`,
        `${c}t- ${d}t<${a+b}- ${b}`,
        `-${c}t+${a+b}<-${d}t+${b}`,
        `${c}t- ${d}t>${a+b}- ${b}`,
        `-${c}t+${a+b}>-${d}t+${b}`, '§', '#'
      ];

      let resultaat1B;
      if (correcteAntwoorden2.includes(leerlingAntwoord1BCorrect)) {
        resultaat1B = 'goed';
      } else {
        resultaat1B = 'fout';
      };

     
      if (!window.vraag1BBeantwoord) {
        let scores = getScores();
        if (resultaat1B === 'goed') scores.b.goed++; else scores.b.fout++;
        saveScores(scores);
        updateScoreSpans();
        //saveScores(scores);
        window.vraag1BBeantwoord = true;
      };

      const uitwerkingen1B = document.querySelector('.js-resultaat1B');
      uitwerkingen1B.innerHTML = `
      ${leerlingAntwoord1B} <br>
      Jouw antwoord is ${resultaat1B} <br><br>
      Uitwerkingen: <br>
      De vraag is na hoeveel dagen(t) heeft Jonas meer geld dan Loek? <br>
      Dus: yJonas > yLoek <br>
      ${computerAntwoord1B} <br>`

      if (resultaat1B === 'goed') {
        document.querySelector('.js-uitwerkingen1B').hidden = false;
        document.querySelector('.js-opdracht1C').hidden = false;
        document.querySelector('.js-antwoord1C').hidden = false;
        document.querySelector('.js-nakijken1C').hidden = false;
      }
      vraag1BBeantwoord = true;
    };
    window.uitwerkingen1B = function () {
      const r1B = document.querySelector('.js-resultaat1B');

      if (r1B.hidden === false) {
        r1B.hidden = true;
      } else {
        r1B.hidden = false;
      }
    };
    
    document.querySelector('.js-nakijken1B').onclick = checken1B;
    document.querySelector('.js-uitwerkingen1B').onclick = uitwerkingen1B;
    
    vraag1CGenereren();
  };
  
  function vraag1CGenereren() {
    document.querySelector('.js-opdracht1C').innerHTML = ` 
      <span class="js-score1C"></span>
      c <br> Na hoeveel dagen(t) heeft Jonas meer geld dan Loek?
      `;
    //let resultaat1C = '';

    window.checken1C = function () {

      let leerlingElement1C = document.querySelector('.js-antwoord1C');
      let leerlingAntwoord1C = leerlingElement1C.value;
      if (!leerlingElement1C.value.trim()) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
        return;
      };
      let leerlingAntwoord1CCorrect = leerlingAntwoord1C
      .toLowerCase()
      .replace(/\s+/g, ''); 
      let juistAntwoord1C = computerAntwoord1C
      .toLowerCase()
      .replace(/\s+/g, '');
      const correcteAntwoorden3 = [
        `t>${a/e}`,
        `${a/e}<t`, '§', '#'
      ];

      let resultaat1C;
      if (correcteAntwoorden3.includes(leerlingAntwoord1CCorrect)) {
        resultaat1C = 'goed';
        allesGoed1 = true;
      } else {
        resultaat1C = 'fout';
        allesGoed1 = false;
      };
      

      if (!window.vraag1CBeantwoord) {
        let scores = getScores();
        if (resultaat1C === 'goed') scores.c.goed++; else scores.c.fout++;
        saveScores(scores);
        updateScoreSpans();
        //saveScores(scores);
        window.vraag1CBeantwoord = true;
      };
      const uitwerkingen1C = document.querySelector('.js-resultaat1C');
      uitwerkingen1C.innerHTML = `
      ${leerlingAntwoord1C} <br>
      Jouw antwoord is ${resultaat1C} <br><br>
      Uitwerkingen: <br>
      -${d}t + ${b} > -${c}t + ${a+b} <br>
      -${d}t + ${c}t > ${a+b} - ${b} <br>
      (${c}-${d})t > ${a} <br>
      ${e}t > ${a} <br>
      ${computerAntwoord1C} <br>`
      if (resultaat1C === 'goed') {
        allesGoed1 = true;
        document.querySelector('.js-uitwerkingen1C').hidden = false;
      }
      vraag1CBeantwoord = true;
    };
    window.uitwerkingen1C = function () {
      const r1C = document.querySelector('.js-resultaat1C');

      if (r1C.hidden === false) {
        r1C.hidden = true;
      } else {
        r1C.hidden = false;
      }
    };
    
    document.querySelector('.js-nakijken1C').onclick = checken1C;
    document.querySelector('.js-uitwerkingen1C').onclick = uitwerkingen1C;
    
  };
/*
  if (vergelijkingenGelijkstellen1Goed === true) {
    alert("Je hebt alle vragen goed beantwoord! Je kunt nu naar de volgende opdracht.");
  } return;
   */
};

document.querySelector('.js-opnieuw1A').addEventListener('click', () => {
    if (allesGoed1 === true) {
      // eerst het oude wissen
     // document.querySelector('.js-opdracht1A').innerHTML = "";
      document.querySelector('.js-antwoord1A').value = "";
      document.querySelector('.js-resultaat1A').innerHTML = "";
      document.querySelector('.js-uitwerkingen1A').hidden = true;
      document.querySelector('.js-resultaat1A').hidden = false;

   //   document.querySelector('.js-opdracht1B').innerHTML = "";
      document.querySelector('.js-antwoord1B').value = "";
      document.querySelector('.js-resultaat1B').innerHTML = "";
      document.querySelector('.js-uitwerkingen1B').hidden = true;
      document.querySelector('.js-opdracht1B').hidden = true;
      document.querySelector('.js-antwoord1B').hidden = true;
      document.querySelector('.js-nakijken1B').hidden = true;
      document.querySelector('.js-resultaat1B').hidden = false;

      //document.querySelector('.js-opdracht1C').innerHTML = "";
      document.querySelector('.js-antwoord1C').value = "";
      document.querySelector('.js-resultaat1C').innerHTML = "";
      document.querySelector('.js-uitwerkingen1C').hidden = true;
      document.querySelector('.js-opdracht1C').hidden = true;
      document.querySelector('.js-antwoord1C').hidden = true;
      document.querySelector('.js-nakijken1C').hidden = true;
      document.querySelector('.js-resultaat1C').hidden = false;

      vraag1ABeantwoord = false;
      vraag1BBeantwoord = false;
      vraag1CBeantwoord = false;
      // en dan de functie opnieuw draaien
      pwsVergelijkingenGelijkstellen1();
      allesGoed1 = false;
    } else if (allesGoed1 === false) {
      alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
    } return;
});

pwsVergelijkingenGelijkstellen1();
