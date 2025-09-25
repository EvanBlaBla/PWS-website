
let allesGoed1 = false;


function pwsVergelijkingenGelijkstellen1() {
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
  const computerAntwoord1 = `yLoek = -${c}t + ${a+b}, yJonas = -${d}t + ${b}`;
  const computerAntwoord2 = `-${d}t + ${b} > -${c}t + ${a+b}`;
  const computerAntwoord3 = `t > ${a/e}`;
  
  console.log(a, b, c, d, e, f, g, computerAntwoord1, computerAntwoord2, computerAntwoord3);
  //dit waren alle variabelen

  vraag1Genereren();

  function vraag1Genereren() {
    document.querySelector('.js-opdracht1').innerHTML = `1a <br> Loek mag van zijn vader ${a+b} euro van zijn creditcard gebruiken. Elke dag (t) koopt hij 1 nieuw spel van ${c} euro. Jonas heeft de creditcard van zijn moeder gekregen, waar hij ${b} euro op mag gebruiken. Hij geeft ${d} euro dagelijks uit aan snoep.<br><br>
    Stel de functies van Loek en Jonas op.`;
    let resultaat1 = '';
    window.checken1 = function () {
      let leerlingElement1 = document.querySelector('.js-antwoord1');
      let leerlingAntwoord1 = leerlingElement1.value;
      if (!leerlingElement1.value.trim()) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
        return;
      };
      let leerlingAntwoord1Correct = leerlingAntwoord1
      .toLowerCase()
      .replace(/\s+/g, '');
      let juistAntwoord1 = computerAntwoord1
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
        `yjonas=${b}-${d}t,yloek=${a+b}-${c}t`, '§'
      ];

      let resultaat1;
      if (correcteAntwoorden1.includes(leerlingAntwoord1Correct)) {
        resultaat1 = 'goed';
      } else {
        resultaat1 = 'fout';
      };
      const uitwerkingen1 = document.querySelector('.js-resultaat1');
      uitwerkingen1.innerHTML = `
      ${leerlingAntwoord1} <br>
      Jouw antwoord is ${resultaat1} <br><br>
      Uitwerkingen: <br>
      Loek begint met ${a+b} euro en geeft elke dag(t) ${c} euro uit. <br>
      yLoek = -${c}t + ${a+b} <br>
      Jonas begint met ${b} euro en geeft elke dag(t) ${d} euro uit. <br>
      yJonas = -${d}t + ${b} <br><br>
      ${computerAntwoord1} <br>`

      if (resultaat1 === 'goed') {
        document.querySelector('.js-uitwerkingen1').hidden = false;
        document.querySelector('.js-opdracht2').hidden = false;
        document.querySelector('.js-antwoord2').hidden = false;
        document.querySelector('.js-nakijken2').hidden = false;
      };
    };
    
    //de functies voor de uitwerkingen onzichtbaar maken
    window.uitwerkingen1 = function () {
    const r1 = document.querySelector('.js-resultaat1');

    if (r1.hidden === true) {
      r1.hidden = false;
    } else {
      r1.hidden = true;
    }
    };
    
    document.querySelector('.js-nakijken1')
    .addEventListener('click', checken1);
    document.querySelector('.js-uitwerkingen1').onclick = uitwerkingen1;
    
    vraag2Genereren();
    
  }; 

  function vraag2Genereren() {
    document.querySelector('.js-opdracht2').innerHTML = `1b <br> Stel een ongelijkheid op waarmee berekend kan worden na hoeveel dagen(t) Jonas meer geld heeft dan Loek.`;
    let resultaat2 = '';
    window.checken2 = function () {
      let leerlingElement2 = document.querySelector('.js-antwoord2');
      let leerlingAntwoord2 = leerlingElement2.value;
      if (!leerlingElement2.value.trim()) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
        return;
      };
      let leerlingAntwoord2Correct = leerlingAntwoord2
      .toLowerCase()
      .replace(/\s+/g, '');
      let juistAntwoord2 = computerAntwoord2
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
        `-${c}t+${a+b}>-${d}t+${b}`, '§'
      ];

      let resultaat2;
      if (correcteAntwoorden2.includes(leerlingAntwoord2Correct)) {
        resultaat2 = 'goed';
      } else {
        resultaat2 = 'fout';
      };
      const uitwerkingen2 = document.querySelector('.js-resultaat2');
      uitwerkingen2.innerHTML = `
      ${leerlingAntwoord2} <br>
      Jouw antwoord is ${resultaat2} <br><br>
      Uitwerkingen: <br>
      De vraag is na hoeveel dagen(t) heeft Jonas meer geld dan Loek? <br>
      Dus: yJonas > yLoek <br>
      ${computerAntwoord2} <br>`

      if (resultaat2 === 'goed') {
        document.querySelector('.js-uitwerkingen2').hidden = false;
        document.querySelector('.js-opdracht3').hidden = false;
        document.querySelector('.js-antwoord3').hidden = false;
        document.querySelector('.js-nakijken3').hidden = false;
      }
    };
    window.uitwerkingen2 = function () {
      const r2 = document.querySelector('.js-resultaat2');

      if (r2.hidden === false) {
        r2.hidden = true;
      } else {
        r2.hidden = false;
      }
    };
    
    document.querySelector('.js-nakijken2')
    .addEventListener('click', window.checken2);
    document.querySelector('.js-uitwerkingen2').onclick = uitwerkingen2;
    
    vraag3Genereren();
  };
  
  function vraag3Genereren() {
    document.querySelector('.js-opdracht3').innerHTML = ` 1c <br> Na hoeveel dagen(t) heeft Jonas meer geld dan Loek?`;
    let resultaat3 = '';

    window.checken3 = function () {
      let leerlingElement3 = document.querySelector('.js-antwoord3');
      let leerlingAntwoord3 = leerlingElement3.value;
      if (!leerlingElement3.value.trim()) {
        alert("Vul eerst een antwoord in voordat je nakijkt!");
        return;
      };
      let leerlingAntwoord3Correct = leerlingAntwoord3
      .toLowerCase()
      .replace(/\s+/g, ''); 
      let juistAntwoord3 = computerAntwoord3
      .toLowerCase()
      .replace(/\s+/g, '');
      const correcteAntwoorden3 = [
        `t>${a/e}`,
        `${a/e}<t`, '§'
      ];

      let resultaat3;
      if (correcteAntwoorden3.includes(leerlingAntwoord3Correct)) {
        resultaat3 = 'goed';
        allesGoed1 = true;
      } else {
        resultaat3 = 'fout';
        allesGoed1 = false;
      };
      const uitwerkingen3 = document.querySelector('.js-resultaat3');

      uitwerkingen3.innerHTML = `
      ${leerlingAntwoord3} <br>
      Jouw antwoord is ${resultaat3} <br><br>
      Uitwerkingen: <br>
      -${d}t + ${b} > -${c}t + ${a+b} <br>
      -${d}t + ${c}t > ${a+b} - ${b} <br>
      (${c}-${d})t > ${a} <br>
      ${e}t > ${a} <br>
      ${computerAntwoord3} <br>`
      if (resultaat3 === 'goed') {
        allesGoed1 = true;
        document.querySelector('.js-uitwerkingen3').hidden = false;
      }
    };
    window.uitwerkingen3 = function () {
      const r3 = document.querySelector('.js-resultaat3');

      if (r3.hidden === false) {
        r3.hidden = true;
      } else {
        r3.hidden = false;
      }
    };
    
    document.querySelector('.js-nakijken3')
    .addEventListener('click', window.checken3);
    document.querySelector('.js-uitwerkingen3').onclick = uitwerkingen3;
    
  };
};

document.querySelector('.js-opnieuw1').addEventListener('click', () => {
    if (allesGoed1 === true) {
      // eerst het oude wissen
     // document.querySelector('.js-opdracht1').innerHTML = "";
      document.querySelector('.js-antwoord1').value = "";
      document.querySelector('.js-resultaat1').innerHTML = "";
      document.querySelector('.js-uitwerkingen1').hidden = true;
      document.querySelector('.js-resultaat1').hidden = false;

   //   document.querySelector('.js-opdracht2').innerHTML = "";
      document.querySelector('.js-antwoord2').value = "";
      document.querySelector('.js-resultaat2').innerHTML = "";
      document.querySelector('.js-uitwerkingen2').hidden = true;
      document.querySelector('.js-opdracht2').hidden = true;
      document.querySelector('.js-antwoord2').hidden = true;
      document.querySelector('.js-nakijken2').hidden = true;
      document.querySelector('.js-resultaat2').hidden = false;

      //document.querySelector('.js-opdracht3').innerHTML = "";
      document.querySelector('.js-antwoord3').value = "";
      document.querySelector('.js-resultaat3').innerHTML = "";
      document.querySelector('.js-uitwerkingen3').hidden = true;
      document.querySelector('.js-opdracht3').hidden = true;
      document.querySelector('.js-antwoord3').hidden = true;
      document.querySelector('.js-nakijken3').hidden = true;
      document.querySelector('.js-resultaat3').hidden = false;

      // en dan de functie opnieuw draaien
      pwsVergelijkingenGelijkstellen1();
      allesGoed1 = false;
    } else if (allesGoed1 === false) {
      alert("Je kunt pas opnieuw als je alle antwoorden goed hebt!");
    } return;
  });

/*
document.querySelector('.js-nakijken1')
.addEventListener('click', window.checken1);
document.querySelector('.js-uitwerkingen1')
.addEventListener('click', window.uitwerkingen1);

document.querySelector('.js-nakijken2')
.addEventListener('click', window.checken2);
document.querySelector('.js-uitwerkingen2')
.addEventListener('click', window.uitwerkingen2);

document.querySelector('.js-nakijken3')
.addEventListener('click', window.checken3);
document.querySelector('.js-uitwerkingen3')
.addEventListener('click', window.uitwerkingen3);
*/
pwsVergelijkingenGelijkstellen1();
