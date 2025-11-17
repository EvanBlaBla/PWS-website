window.addEventListener('DOMContentLoaded', () => {

  const safeGet = (id) => document.getElementById(id);
  const overlay = safeGet('overlay');
  const tekst = safeGet('tekstInSpeechbubble');

  // Debug: wat zit er in localStorage?
  console.log("lock1_locked =", localStorage.getItem('lock1_locked'));

  if (localStorage.getItem('lock1_locked') !== 'true') {
    console.log(" Overlay zou nu moeten verschijnen!");
    if (overlay) {overlay.style.display = 'flex'; console.log('zichtbaar');}
    if (tekst) {
      tekst.innerHTML = `
        <button class="next-tekst-button" id="nextToMenuBtn">next...</button>
      `;
    }
  } else {
    console.log("lock1_locked = true → overlay blijft verborgen");
  }

  // Event listener toevoegen (veiliger dan inline onclick)
  document.addEventListener('click', (e) => {
    if (e.target.id === 'nextToMenuBtn') {
      overlay.style.display = 'none';
      console.log("❌ Overlay gesloten");
    }
  });

  
});

window.checkAllesGoed = function  () {
  if (balansMethode2Goed && balansMethode1Goed && balansMethode3Goed){
    addCoins(3);
    addScore(1);
    setTimeout(() => {
      
    }, 2000);
    createLevelCompleteOverlay({
      onNext: () => {
        window.location.href = "level-2vergl-gelkst.html";
      }
    });

    unlockHint();
  };
};

