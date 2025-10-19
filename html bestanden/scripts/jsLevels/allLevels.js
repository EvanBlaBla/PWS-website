window.addEventListener('DOMContentLoaded', () => {
  const safeGet = (id) => document.getElementById(id);
  const toUitleg = safeGet('toUitlegBtn');
  const toOpdracht = safeGet('toOpdrachtBtn');
  const homeBtn = safeGet('toHomeBtn');

  
  const hide = (el) => el.style.display = 'none';
  const show = (el) => el.style.display = 'flex';

  toUitleg.addEventListener("click",() => {
    show(safeGet('uitlegVDOpdracht'));
    hide(safeGet('opdracht'));
  });
  toOpdracht.addEventListener("click", () => {
    show(safeGet('opdracht'));
    hide(safeGet('uitlegVDOpdracht'));
  });
  homeBtn.addEventListener("click", () => {
    window.location.href = 'main-menu.html';
  });

  //score en coins
  let score = parseInt(localStorage.getItem("score")) || 0;
  let coins = parseInt(localStorage.getItem("coins")) || 0;

  function saveScore(newScore) {
    score = newScore;
    localStorage.setItem("score", score);
    if (safeGet("punten")) safeGet("punten").textContent = score;
  }
  function saveCoins(newCoins) {
    coins = newCoins;
    localStorage.setItem("coins", coins);
    if (safeGet("coins")) safeGet("coins").textContent = coins;
  }
  function addScore(amount) { saveScore(score + amount); }
  function addCoins(amount) { saveCoins(coins + amount); }

/*
localstorage
-pas volgend level als goed
-hints

simpele verbeteringen
-pop up maken als goed ipv alert

levels maken
-level 2
-level 3
-level 4

overige
-piraat in shop equipen laten werken
-rondleiding van de piraat aan begin
-schat aan het einde


extras
-papegaai eruit laten vliegen als goed animatie

*/

});

