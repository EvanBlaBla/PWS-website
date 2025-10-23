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

  function checkAllesGoed () {
  if (allesGoed1){
    setTimeout(() => {
      
    }, 2000);
    createLevelCompleteOverlay({
      onNext: () => {
        window.location.href = "level-3.html";
      }
    });

    unlockHint();
  };
};
});