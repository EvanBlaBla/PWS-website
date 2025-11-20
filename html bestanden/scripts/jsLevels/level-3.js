window.addEventListener('DOMContentLoaded', () => {

  // Debug: wat zit er in localStorage?
  console.log("lock3_locked =", localStorage.getItem('lock3_locked'));

  if (localStorage.getItem('lock3_locked') !== 'true') {
    console.log(" Overlay zou nu moeten verschijnen!");
    if (overlay) {overlay.style.display = 'flex'; console.log('zichtbaar');}
    if (tekst) {
      tekst.innerHTML = `
        <button class="next-tekst-button" id="nextToMenuBtn">next...</button>
      `;
    }
  } else {
    console.log("lock3_locked = true → overlay blijft verborgen");
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
  if (functieAnalyseren1Goed && functieAnalyseren2Goed) {
    addCoins(2);
    addScore(10);
    setTimeout(() => {
      
    }, 2000);
    createLevelCompleteOverlay({
      onNext: () => {
        window.location.href = "main-menu.html";
      }
    });

    unlockHint();
  };
};

