const safeGet = (id) => document.getElementById(id);
window.addEventListener('DOMContentLoaded', () => {
  const toUitleg = safeGet('toUitlegBtn');
  const toOpdracht = safeGet('toOpdrachtBtn');
  const homeBtn = safeGet('toHomeBtn');

  
  const hide = (el) => el.style.display = 'none';
  const show = (el) => el.style.display = 'flex';


/* const div = document.createElement('div');
div.id = 'overlay';
div.classList.add('verteller');
div.innerHTML = `
  <div class="verteller-content">
    <div class="persoon" id="persoonImg"></div>
    <div class="tekst">
      <div id="speech-bubble">
        <span id="tekstInSpeechbubble"></span>
      </div>
    </div>
  </div>
`;
document.body.appendChild(div);

// Debug: kijken of de div er echt is
console.log("✅ Overlay toegevoegd aan DOM:", document.getElementById("overlay"));*/

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

  //local storage piraatx2
  const defaultState = {
    hoedEquipped: "pictures/piraatx2/defaulthoedAI.png",
    ooglapjeEquipped: "pictures/piraatx2/defaultooglapjeAI.png",
    zwaardEquipped: "pictures/piraatx2/defaultzwaardAI.png"
  };

  // Laad uit localStorage of gebruik default
  const savedState = JSON.parse(localStorage.getItem('pirateEquipped')) || defaultState;

  // Plaats de imgs in de persoonImg div (overlays)
  const persoonImg = safeGet('persoonImg');
  persoonImg.innerHTML = `
    <img id="hoedEquipped" src="${savedState.hoedEquipped}" style="height: 300px; width: auto; object-fit: contain;">
    <img id="ooglapjeEquipped" src="${savedState.ooglapjeEquipped}" style="height: 300px; width: auto; object-fit: contain;">
    <img id="zwaardEquipped" src="${savedState.zwaardEquipped}" style="height: 300px; width: auto; object-fit: contain;">
    <img id="kledingEquipped" src="pictures/piraatx2/piraatX2bodyAI.png" style="height: 300px; width: auto; object-fit: contain;">
  `;
/*
localstorage
maandag
-pas volgend level als goed

levels maken
vrijdag
-level 3
-level 4

overige
dinsdag
-rondleiding van de piraat aan begin
woensdag
-schat aan het einde


extras
-papegaai eruit laten vliegen als goed animatie

*/


}); 

//localstorage en functions die daarbij horen  
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




function unlockHint () {
     const hintlock = ['lock1', 'lock2', 'lock3', 'lock4', 'lock5', 'lock6', 'lock7'];
      hintlock.forEach(id => {
        const el = document.getElementById(id);
        console.log('werkt');
        if (el) {
          localStorage.setItem(id + '_locked', 'true');
        }
      });
    
};
