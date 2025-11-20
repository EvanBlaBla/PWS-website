let allesGoed4 = false;
let vergelijkingenGelijkstellen1Goed = JSON.parse(localStorage.getItem('vergelijkingenGelijkstellen1Goed')) || false;

function pwsVergelijkingenGelijkstellen1() {
  let resultaat1A = '';
  let resultaat1B = '';
  let resultaat1C = '';
  let vraag1ABeantwoord = false;
  let vraag1BBeantwoord = false;
  let vraag1CBeantwoord = false;

  //let s = getScores1();
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
    const s1 = getScores();
    const sp1A = document.querySelector('.js-score1A');
    const sp1B = document.querySelector('.js-score1B');
    const sp1C = document.querySelector('.js-score1C');
    if (sp1A) sp1A.textContent = `Score: ${s1.a.goed} goed, ${s1.a.fout} fout`;
    if (sp1B) sp1B.textContent = `Score: ${s1.b.goed} goed, ${s1.b.fout} fout`;
    if (sp1C) sp1C.textContent = `Score: ${s1.c.goed} goed, ${s1.c.fout} fout`;
    
    /*
    if (!vergelijkingenGelijkstellen1Goed && s1.a.goed > 0 && s1.b.goed > 0 && s1.c.goed > 0) {
      vergelijkingenGelijkstellen1Goed = true;
      localStorage.setItem('vergelijkingenGelijkstellen1Goed', JSON.stringify(true));
    };
    */
  };
  updateScoreSpans();

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
  const computerAntwoord1C = `${a/e} dagen`;
  
  //console.log(a, b, c, d, e, f, g, computerAntwoord1A, computerAntwoord1B, computerAntwoord1C, vergelijkingenGelijkstellen1Goed);
  //dit waren alle variabelen

  vraag1AGenereren();

  function vraag1AGenereren() {
    document.querySelector('.js-tekst' ).innerHTML = `
    
    <br> Loek mag van zijn vader ${a+b} euro van zijn creditcard gebruiken. Elke dag (t) koopt hij 1 nieuw spel van ${c} euro. Jonas heeft de creditcard van zijn moeder gekregen, waar hij ${b} euro op mag gebruiken. Hij geeft dagelijks ${d} euro uit aan snoep.<br><br>`
    document.querySelector('.js-opdracht1A').innerHTML = `
    <span class="js-score1A"></span>
    <p style= "margin: 0;">A) Stel de functies van Loek en Jonas op. Schrijf in de vorm: </p>
    <p>yLoek = , yJonas =</p>`;
    //let resultaat1A = '';
    window.checken1A = function () {
      console.log("checken1A draait");
      //console.log(allesGoed4, vergelijkingenGelijkstellen1Goed);
      //let s = getScores1();
      //let resultaat1A = '';   
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
      const correcteAntwoorden1A = [
        `yloek=-${c}t+${a+b},yjonas=-${d}t+${b}`,
        `yloek=-${c}t+${a+b},yjonas=${b}-${d}t`,
        `yloek=${a+b}-${c}t,yjonas=-${d}t+${b}`,
        `yloek=${a+b}-${c}t,yjonas=${b}-${d}t`,
        `yjonas=-${d}t+${b},yloek=-${c}t+${a+b}`,
        `yjonas=${b}-${d}t,yloek=-${c}t+${a+b}`,
        `yjonas=-${d}t+${b},yloek=${a+b}-${c}t`,
        `yjonas=${b}-${d}t,yloek=${a+b}-${c}t`, '§', `#`
      ];

      //let resultaat1A;
      if (correcteAntwoorden1A.includes(leerlingAntwoord1ACorrect)) {
        resultaat1A = 'goed';
      } else {
        resultaat1A = 'fout';
      }

      if (!vraag1ABeantwoord) {
        let s1 = getScores();
        if (resultaat1A === 'goed') s1.a.goed++; else s1.a.fout++;
        saveScores(s1);
        updateScoreSpans();
        //saveScores1(scores1);
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


      if (resultaat1A === 'goed' && vraag1ABeantwoord === false) {
        addCoins(1);
        addScore(10);
        console.log(coins);
      };

      if (resultaat1A === 'goed') {
        document.querySelector('#opdracht1B').hidden = false
         ;
        document.querySelector('.js-opdracht1B').hidden = false;
        document.querySelector('.js-antwoord1B').hidden = false;
        document.querySelector('.js-nakijken1B').hidden = false;
        //addCoins(1);
        //addScore(10);
        vraag1ABeantwoord = true;
      };
      vraag1ABeantwoord = true;

      if (leerlingElement1A.value.trim().toLowerCase() === 'clean') {
        const resetScores = {
          a: { goed: 0, fout: 0 },
          b: { goed: 0, fout: 0 },
          c: { goed: 0, fout: 0 }
        };
        saveScores(resetScores);
        localStorage.setItem('vergelijkingenGelijkstellen1Goed', JSON.stringify(false));
        vergelijkingenGelijkstellen1Goed = false;
        alert("Scores en voortgang gereset 👑");
        updateScoreSpans(); 
        //localStorage.clear();
        //console.log('waarde = '+ vergelijkingenGelijkstellen1Goed)
        localStorage.removeItem('scores');
        localStorage.setItem('vergelijkingenGelijkstellen1Goed', JSON.stringify(false));
        vergelijkingenGelijkstellen1Goed = false;
        allesGoed4 = false;

        console.log('waarde is nu gereset naar:', vergelijkingenGelijkstellen1Goed);


        document.querySelector('.js-antwoord1A').value = "";
        document.querySelector('.js-resultaat1A').innerHTML = "";
         ;
        document.querySelector('.js-resultaat1A').hidden = false;

    //   document.querySelector('.js-opdracht1B').innerHTML = "";
        document.querySelector('.js-antwoord1B').value = "";
        document.querySelector('.js-resultaat1B').innerHTML = "";
      
        document.querySelector('.js-opdracht1B').hidden = true;
        document.querySelector('.js-antwoord1B').hidden = true;
        document.querySelector('.js-nakijken1B').hidden = true;
        document.querySelector('.js-resultaat1B').hidden = false;

        //document.querySelector('.js-opdracht1C').innerHTML = "";
        document.querySelector('.js-antwoord1C').value = "";
        document.querySelector('.js-resultaat1C').innerHTML = "";
        document.querySelector('.js-opdracht1C').hidden = true;
        document.querySelector('.js-antwoord1C').hidden = true;
        document.querySelector('.js-nakijken1C').hidden = true;
        document.querySelector('.js-resultaat1C').hidden = false;

        //oude eventlisteners verwijderen
        const nakijk1A = document.querySelector('.js-nakijken1A');
        const nakijk1B = document.querySelector('.js-nakijken1B');
        const nakijk1C = document.querySelector('.js-nakijken1C');
        nakijk1A.replaceWith(nakijk1A.cloneNode(true));
        nakijk1B.replaceWith(nakijk1B.cloneNode(true));
        nakijk1C.replaceWith(nakijk1C.cloneNode(true));


        vraag1ABeantwoord = false;
        vraag1BBeantwoord = false;
        vraag1CBeantwoord = false;
        // en dan de functie opnieuw draaien
        pwsVergelijkingenGelijkstellen1();
        allesGoed4 = false;
        return;
      };
      
      updateScoreSpans();
      console.log ('1:' + resultaat1A, '2:' + resultaat1B, '3:' + resultaat1C, 'waarde = '+ vergelijkingenGelijkstellen1Goed);
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

    
    vraag1BGenereren();
    
  }; 

  function vraag1BGenereren() {
    console.log('resultaat1A' + resultaat1A);
    document.querySelector('.js-opdracht1B').innerHTML = `
      <span class="js-score1B"></span>
     <p style="margin: 0;">B) Stel een ongelijkheid op waarmee berekend kan worden na hoeveel dagen(t) Jonas meer geld heeft dan Loek.</p>`;
    //let resultaat1B = '';
    window.checken1B = function () {
      console.log("checken1B draait");
     //console.log(allesGoed4, vergelijkingenGelijkstellen1Goed);
      //let s1 = getScores1();

      let leerlingElement1B = document.querySelector('.js-antwoord1B');
      let leerlingAntwoord1B = leerlingElement1B.value;
      if (!leerlingElement1B.value.trim()) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
        return;
      };

      let juistAntwoord1B = computerAntwoord1B
      .toLowerCase()
      .replace(/\s+/g, '');

      let leerlingAntwoord1BCorrect = leerlingAntwoord1B
      .toLowerCase()
      .replace(/\s+/g, '');
      const correcteAntwoorden1B = [
        `-${d}t+${b}>-${c}t+${a+b}`,
        `${b}-${d}t>-${c}t+${a+b}`,
        `-${d}t+${b}>${a+b}-${c}t`,
        `${b}-${d}t>${a+b}-${c}t`,
        `${a+b}-${c}t<${b}-${d}t`,
        `${a+b}-${c}t<-${d}t+${b}`,
        `-${c}t+${a+b}<${b}-${d}t`,
        `-${c}t+${a+b}<-${d}t+${b}`, '§', `#`
      ];

      if (correcteAntwoorden1B.includes(leerlingAntwoord1BCorrect)) {
        resultaat1B = 'goed';
      } else {
        resultaat1B = 'fout';
      };

     
      if (!window.vraag1BBeantwoord) {
        let s1 = getScores();
        if (resultaat1B === 'goed') s1.b.goed++; else s1.b.fout++;
        saveScores(s1);
        updateScoreSpans();
        //saveScores1(scores1);
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

      if (resultaat1B === 'goed' && vraag1BBeantwoord === false) {
        addCoins(2);
        addScore(10);
        console.log(coins);
      };

      if (resultaat1B === 'goed') {
        document.querySelector('.js-opdracht1C').hidden = false;
        document.querySelector('.js-antwoord1C').hidden = false;
        document.querySelector('.js-nakijken1C').hidden = false;
        //addCoins(2);
        //addScore(10);
        vraag1BBeantwoord = true;
      }
      vraag1BBeantwoord = true;
      updateScoreSpans();
      console.log ('1:' + resultaat1A, '2:' + resultaat1B, '3:' + resultaat1C, 'waarde = '+ vergelijkingenGelijkstellen1Goed);
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

    
    vraag1CGenereren();
  };
  
  function vraag1CGenereren() {
    document.querySelector('.js-opdracht1C').innerHTML = ` 
      <span class="js-score1C"></span>
      <p style="margin:0;">C) Op welke dag(t) heeft Jonas meer geld dan Loek? Schrijf in de vorm: </p>
      <p style="margin:0;"git>Op dag...</p>
      `;
    //let resultaat1C = '';

    window.checken1C = function () {
      console.log("checken1C draait");
      setTimeout(() => {
  console.log('na timeout localStorage waarde:', localStorage.getItem('vergelijkingenGelijkstellen1Goed'));
}, 100);

     // console.log(allesGoed4, vergelijkingenGelijkstellen1Goed);

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
      const correcteAntwoorden1C = [
        `t>${a/e}`,
        `${a/e}<t`, 
        `na${a/e}dagen`,
        `meerdan${a/e}dagen`,
        `${a/e}dagen`,
        `t=${a/e}`,
        `t>${a/e+1}`,
        `${a/e+1}<t`, 
        `bij${a/e+1}dagen`,
        `opdag${a/e+1}`,
        `${a/e+1}dagen`,
        `t=${a/e+1}`,
        '§', '#'
      ];

      //let resultaat1C;
      if (correcteAntwoorden1C.includes(leerlingAntwoord1CCorrect)) {
        resultaat1C = 'goed';
        allesGoed4 = true;
      } else {
        resultaat1C = 'fout';
        allesGoed4 = false;
      };
      

      if (!window.vraag1CBeantwoord) {
        let s1 = getScores();
        if (resultaat1C === 'goed') s1.c.goed++; else s1.c.fout++;
        saveScores(s1);
        updateScoreSpans();
        //saveScores1(scores1);
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
      Na t = ${a/e} hebben Jonas en Loek precies even veel geld. Dus bij ${a/e+1} dagen heeft Jonas meer geld dan Loek. <br>
      Dus op dag ${a/e+1}<br>`
      
      if (resultaat1C === 'goed' && vraag1CBeantwoord === false) {
        addCoins(3);
        addScore(10);
        console.log(coins);
      };

      if (resultaat1C === 'goed') {
        allesGoed4 = true;
        //addCoins(2);
        //addScore(1);
      }
      vraag1CBeantwoord = true;
      updateScoreSpans();
      console.log ('1:' + resultaat1A, '2:' + resultaat1B, '3:' + resultaat1C, 'waarde = '+ vergelijkingenGelijkstellen1Goed);

      
      if (!vergelijkingenGelijkstellen1Goed && 
        [resultaat1A, resultaat1B, resultaat1C].every(r => r === 'goed')) {
        vergelijkingenGelijkstellen1Goed = true;
        allesGoed4 = true;
        localStorage.setItem('vergelijkingenGelijkstellen1Goed', JSON.stringify(true));
        //alert("Je hebt alle vragen goed beantwoord! Je kunt nu naar de volgende opdracht.");
        //addCoins(3);
        //addScore(10);
        checkAllesGoed();
        
        console.log(allesGoed4);
      } return;
       
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
uitwerkingen1C;
  };

};

document.querySelector('.js-opnieuw1A').addEventListener('click', () => {
    if (allesGoed4 === true) {
      // eerst het oude wissen
     // document.querySelector('.js-opdracht1A').innerHTML = "";
      document.querySelector('.js-antwoord1A').value = "";
      document.querySelector('.js-resultaat1A').innerHTML = "";
       ;
      document.querySelector('.js-resultaat1A').hidden = false;

   //   document.querySelector('.js-opdracht1B').innerHTML = "";
      document.querySelector('.js-antwoord1B').value = "";
      document.querySelector('.js-resultaat1B').innerHTML = "";
 
      document.querySelector('.js-opdracht1B').hidden = true;
      document.querySelector('.js-antwoord1B').hidden = true;
      document.querySelector('.js-nakijken1B').hidden = true;
      document.querySelector('.js-resultaat1B').hidden = false;

      //document.querySelector('.js-opdracht1C').innerHTML = "";
      document.querySelector('.js-antwoord1C').value = "";
      document.querySelector('.js-resultaat1C').innerHTML = "";
      document.querySelector('.js-opdracht1C').hidden = true;
      document.querySelector('.js-antwoord1C').hidden = true;
      document.querySelector('.js-nakijken1C').hidden = true;
      document.querySelector('.js-resultaat1C').hidden = false;

      vraag1ABeantwoord = false;
      vraag1BBeantwoord = false;
      vraag1CBeantwoord = false;
      // en dan de functie opnieuw draaien
      pwsVergelijkingenGelijkstellen1();
      allesGoed4 = false;
    } else if (allesGoed4 === false) {
      alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
    } return;
});

pwsVergelijkingenGelijkstellen1();
