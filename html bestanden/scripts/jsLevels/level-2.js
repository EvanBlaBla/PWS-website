window.addEventListener('DOMContentLoaded', () => {



  const safeGet = (id) => document.getElementById(id);
  const overlay = safeGet('overlay');
  const tekst = safeGet('tekstInSpeechbubble')

  if (localStorage.getItem('lock2' + '_locked') !== 'true') {
    if (overlay) overlay.style.display = 'flex';
    if (tekst) tekst.innerHTML = `
        
      <button class="next-tekst-button" id="nextToMenuBtn" onclick="overlay.style.display = 'none'">next...</button>
    `
  };


});

  window.checkAllesGoed = function () {
    console.log(allesGoed4, vergelijkingenGelijkstellen1Goed, 'het werkt');
  if (vergelijkingenGelijkstellen1Goed === true){
    console.log('vergelijkingenGelijkstellen1Goed is true');
    setTimeout(() => {
            
    }, 2000);
    createLevelCompleteOverlay({
      onNext: () => {
        window.location.href = "level-3fncts-analysrn.html";
      }
    });

    unlockHint();
  };
};
