// scripts/main.js
window.addEventListener('DOMContentLoaded', () => {

  // kleine helper functies
  const safeGet = id => document.getElementById(id);
  const $ = sel => document.querySelector(sel);

  // --- DOM refs (safe)
  const sidebarItemBar = $('.sidebarItemBar');
  const sidebarItemBar2 = $('.sidebarItemBar2');
  const sidebarItemBar3 = $('.sidebarItemBar3');
  const leftSidebar = $('.leftSidebar') || safeGet('leftSidebar');
  const hintsContainer = $('.hints-container');
  const hints = safeGet('hints') || $('.hints-container button');
  const sidebarToggle = safeGet('sidebarToggle');
  const shopContainer = $('.shop-container');
  const shopButton = safeGet('shop');
  const piraatInShop = $('.piraatInShop');

  // --- small safety: if some elements are missing, don't crash
  function restartAnimation(element, animationName) {
    if (!element) return;
    element.style.animation = 'none';
    void element.offsetWidth; // force reflow
    element.style.animation = `${animationName} 3s forwards`;
  }

  // --- Sidebar open/close logic (original behavior preserved) ---
  if (hints) {
    hints.addEventListener('click', () => {
      const shopON = safeGet('shopON');
      if (shopON && shopON.style.display === 'block') {
        if (shopContainer) { shopContainer.style.animation = 'none'; shopContainer.style.transform = 'translateX(-68vw)'; }
        if (piraatInShop) { piraatInShop.style.animation = 'none'; piraatInShop.style.transform = 'translateX(100vw)'; }
        if (shopON) shopON.style.display = 'none';
      } else {
        restartAnimation(leftSidebar, 'background');
      }

      restartAnimation(sidebarItemBar, 'slide');
      restartAnimation(sidebarItemBar2, 'slide');
      restartAnimation(sidebarItemBar3, 'slide');
      restartAnimation(hintsContainer, 'slide');

      const hintsON = safeGet('hintsON');
      if (hintsON) hintsON.style.display = 'block';
      if (sidebarToggle) sidebarToggle.style.display = 'block';
    });
  }

  function closeSidebar() {
    const shopON = safeGet('shopON');
    const hintsON = safeGet('hintsON');

    if (shopON && shopON.style.display === 'block') {
      if (shopContainer) { shopContainer.style.animation = 'none'; shopContainer.style.transform = 'translateX(-68vw)'; }
      if (piraatInShop) { piraatInShop.style.animation = 'none'; piraatInShop.style.transform = 'translateX(100vw)'; }
      shopON.style.display = 'none';
    }

    if (hintsON && hintsON.style.display === 'block') {
      if (hintsContainer) { hintsContainer.style.animation = 'none'; hintsContainer.style.transform = 'translateX(-68vw)'; }
      hintsON.style.display = 'none';
    }

    if (leftSidebar) leftSidebar.style.animation = 'none';
    if (sidebarItemBar) { sidebarItemBar.style.animation = 'none'; sidebarItemBar.style.transform = 'translateX(-68vw)'; }
    if (sidebarItemBar2) { sidebarItemBar2.style.animation = 'none'; sidebarItemBar2.style.transform = 'translateX(-68vw)'; }
    if (sidebarItemBar3) { sidebarItemBar3.style.animation = 'none'; sidebarItemBar3.style.transform = 'translateX(-68vw)'; }

    if (sidebarToggle) sidebarToggle.style.display = 'none';
  }

  if (sidebarToggle) sidebarToggle.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebarToggle && sidebarToggle.style.display === 'block') {
      closeSidebar();
    }
  });

  if (shopButton) {
    shopButton.addEventListener('click', () => {
      const hintsON = safeGet('hintsON');
      if (hintsON && hintsON.style.display === 'block') {
        if (hintsContainer) { hintsContainer.style.animation = 'none'; hintsContainer.style.transform = 'translateX(-68vw)'; }
        hintsON.style.display = 'none';
      } else {
        restartAnimation(leftSidebar, 'background');
      }

      restartAnimation(shopContainer, 'slide');
      restartAnimation(sidebarItemBar, 'slide');
      restartAnimation(sidebarItemBar2, 'slide');
      restartAnimation(sidebarItemBar3, 'slide');
      restartAnimation(piraatInShop, 'slidepiraat');

      const shopON = safeGet('shopON');
      if (shopON) shopON.style.display = 'block';
      if (sidebarToggle) sidebarToggle.style.display = 'block';
    });
  }

  // --- Shop quick equip handlers (safe-get & attach only if present) ---
  //AI geleerd
  const equipMap = {
    shop1: { target: 'hoedEquipped', src: "pictures/piraatx2/defaulthoedAI.png" },
    shop2: { target: 'hoedEquipped', src: "pictures/piraatx2/cheaphoedAI.png" },
    shop3: { target: 'hoedEquipped', src: "pictures/piraatx2/durehoedAI.png" },
    shop4: { target: 'ooglapjeEquipped', src: "pictures/piraatx2/defaultooglapjeAI.png" },
    shop5: { target: 'ooglapjeEquipped', src: "pictures/piraatx2/cheapooglapjeAI.png" },
    shop6: { target: 'ooglapjeEquipped', src: "pictures/piraatx2/duurooglapjeAI.png" },
    shop7: { target: 'zwaardEquipped', src: "pictures/piraatx2/defaultzwaardAI.png" },
    shop8: { target: 'zwaardEquipped', src: "pictures/piraatx2/cheapzwaardAI.png" },
    shop9: { target: 'zwaardEquipped', src: "pictures/piraatx2/duurzwaardAI.png" }
  };

  Object.keys(equipMap).forEach(id => {
    const btn = safeGet(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const t = safeGet(equipMap[id].target);
      if (t) t.src = equipMap[id].src;
    });
  });

  // --- items and persistence


  // --- State: name, score, coins
  let playerName = localStorage.getItem("playerName") || "";
  let score = parseInt(localStorage.getItem("score")) || 0;
  let coins = parseInt(localStorage.getItem("coins")) || 0;

  // write initial UI where elements exist
  if (safeGet("player")) safeGet("player").textContent = playerName || "Onbekende Piraat";
  if (safeGet("punten")) safeGet("punten").textContent = score;
  if (safeGet("coins")) safeGet("coins").textContent = coins;

  // if a name is already stored, hide frontPage and show menu parts (only minimal changes)
  if (playerName && playerName.trim() !== '') {
    if (safeGet('frontPage')) safeGet('frontPage').style.display = 'none';
    if (safeGet('secondPage')) safeGet('secondPage').style.display = 'block';
    if (safeGet('top-bar')) safeGet('top-bar').style.display = 'grid';
    if (safeGet('leftSidebar')) safeGet('leftSidebar').style.display = 'flex';
  }

    const items = [
    { id: "buyItem2", cost: 50 },
    { id: "buyItem3", cost: 10 },
    { id: "buyItem5", cost: 5 },
    { id: "buyItem6", cost: 20 },
    { id: "buyItem8", cost: 20 },
    { id: "buyItem9", cost: 50 },
  ];
  items.forEach(item => {
    const el = safeGet(item.id);
    if (!el) return;
    if (localStorage.getItem(item.id + "_bought") === "true") {
      el.style.display = "none";
    }
    el.addEventListener("click", () => {
      if (coins >= item.cost) {
        addCoins(-item.cost);
        el.style.display = "none";
        localStorage.setItem(item.id + "_bought", "true");
      } else {
        alert("Niet genoeg coins!");
      }
    });
  });

  // --- Score/coins helpers
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

  // --- Name edit functions
  const editBtn = safeGet("editNameBtn");
  if (editBtn) editBtn.addEventListener("click", editName);



  //AI
  function editName() {
    const span = safeGet("player");
    const input = safeGet("editInput");
    if (!span || !input) return;
    span.style.display = "none";
    input.style.display = "inline";
    input.value = playerName || "";
    input.focus();
    input.onblur = function() { saveName(input, span); };
    input.addEventListener("keypress", function(e) { if (e.key === "Enter") input.blur(); });
  }

  function saveName(input, span) {
    if (input.value.trim() !== "") {
      playerName = input.value.trim();
      localStorage.setItem("playerName", playerName);
      if (span) span.textContent = playerName;
    }
    input.style.display = "none";
    span.style.display = "inline";
    showdevbutton();
  }

  // --- Start overlay / next button
  const startBtn = safeGet("startAvontuurBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const overlay = safeGet('overlay');
      const teks = safeGet('tekstInSpeechbubble');
      if (overlay) overlay.style.display = 'flex';
      if (teks) teks.innerHTML =
        `Hallo avonturier, mijn naam is PiraatX². Ik heb jou hulp nodig. De schat van mijn overgroot opa is gestolen door π-raat. Hij heeft de schat op de funky isands verstopt, maar ik kan hem niet alleen vinden. kun je mij helpen? Hoe heet je? 
         <input placeholder="Naam" id="nameInput" style="width: 100px;">
         <button class="next-tekst-button" id="nextToMenuBtn" onclick="nextToMenu()">next...</button>`;
    });
  }

  // --- nextToMenu (window global so inline onclick works)
  window.nextToMenu = function () {
    const inputElement = safeGet('nameInput');
    const inputValue = inputElement ? inputElement.value.trim() : '';
    if (inputValue === '') {
      alert("Vul eerst je naam in!");
      return;
    }
    playerName = inputValue;
    localStorage.setItem("playerName", playerName);
    if (safeGet("player")) safeGet("player").textContent = playerName;
    if (safeGet('overlay')) safeGet('overlay').style.display = 'none';
    if (safeGet('frontPage')) safeGet('frontPage').style.display = 'none';
    if (safeGet('leftSidebar')) safeGet('leftSidebar').style.display = 'flex';
    if (safeGet('top-bar')) safeGet('top-bar').style.display = 'grid';
    if (safeGet('secondPage')) safeGet('secondPage').style.display = 'block';
    showdevbutton();
  };

  // --- Levels openen


  const btnLinks = [
    {id: "btn-1", link:'level-1blns-mthde.html'},
    {id: "btn-2", link:'level-2.html'},
    {id: "btn-3", link:'level-3.html'},
    {id: "btn-4", link:'level-4.html'},
    {id: "btn-5", link:'level-5.html'},
    {id: "btn-6", link:'level-6.html'},
    {id: "btn-7", link:'level-7.html'},
  ];
  if (btnLinks) {
    btnLinks.forEach(item => {
      const btn = safeGet(item.id);
      if (btn) {
        btn.addEventListener("click", () => {
          window.location.href = item.link;
        });
      }
    });
      /*
      const teks = safeGet('tekstInSpeechbubble');
      if (teks) teks.innerHTML = '<button class="next-tekst-button" id="nextBtn">next...</button>';
      // attach event after insertion
      setTimeout(() => {
        const nextBtn = safeGet('nextBtn');
        if (nextBtn) nextBtn.addEventListener("click", () => { if (safeGet('overlay')) safeGet('overlay').style.display = 'none'; });
      }, 10);
      */  
  }

      /*
      const teks = safeGet('tekstInSpeechbubble');
      if (teks) teks.innerHTML = '<button class="next-tekst-button" id="nextBtn">next...</button>';
      // attach event after insertion
      setTimeout(() => {
        const nextBtn = safeGet('nextBtn');
        if (nextBtn) nextBtn.addEventListener("click", () => { if (safeGet('overlay')) safeGet('overlay').style.display = 'none'; });
      }, 10);
      */


  // --- Buttons uitleg/opdracht/home
  if (safeGet("toUitlegBtn")) safeGet("toUitlegBtn").addEventListener("click", () => {
    if (safeGet('uitlegVDOpdracht')) safeGet('uitlegVDOpdracht').style.display = 'flex';
    if (safeGet('opdracht')) safeGet('opdracht').style.display = 'none';
  });
  if (safeGet("toOpdrachtBtn")) safeGet("toOpdrachtBtn").addEventListener("click", () => {
    if (safeGet('uitlegVDOpdracht')) safeGet('uitlegVDOpdracht').style.display = 'none';
    if (safeGet('opdracht')) safeGet('opdracht').style.display = 'grid';
  });
  if (safeGet("toHomeBtn")) safeGet("toHomeBtn").addEventListener("click", () => {
    if (safeGet('opmaakOpdrachten')) safeGet('opmaakOpdrachten').style.display = 'none';
    if (safeGet('secondPage')) safeGet('secondPage').style.display = 'flex';
  });
  if (safeGet("closeOverlay")) safeGet("closeOverlay").addEventListener("click", () => {
    if (safeGet('overlay')) safeGet('overlay').style.display = 'none';
  });

  // --- dev button logic
  //AI
  function showdevbutton() {
    // remove old dev elements
    Array.from(document.querySelectorAll(".devDiv, .koningLoekDiv")).forEach(e => e.remove());

    if (["KoningLoek","Funkydev~","Stanleyboot","Koenraad"].includes(playerName)) {
      const specialDiv = document.createElement("div");
      specialDiv.textContent = "👑 Clear localstorage";
      specialDiv.classList.add("koningLoekDiv");
      Object.assign(specialDiv.style, { position: 'absolute', display: 'flex', right: 10, bottom: 10, zIndex: 9999, cursor: 'pointer' });
      document.body.appendChild(specialDiv);
      specialDiv.addEventListener("click", () => { localStorage.clear(); location.reload(); });

      const scoreDiv = document.createElement("div");
      scoreDiv.textContent = "👑 AddScore";
      scoreDiv.classList.add("devDiv1");
      Object.assign(scoreDiv.style, { position: 'absolute', display: 'flex', right: 10, bottom: 20, zIndex: 9999, cursor:'pointer' });
      document.body.appendChild(scoreDiv);
      scoreDiv.addEventListener("click", () => addScore(100));

      const coinsDiv = document.createElement("div");
      coinsDiv.textContent = "👑 AddCoins";
      coinsDiv.classList.add("devDiv2");
      Object.assign(coinsDiv.style, { position: 'absolute', display: 'flex', right: 10, bottom: 30, zIndex: 9999, cursor:'pointer' });
      document.body.appendChild(coinsDiv);
      coinsDiv.addEventListener("click", () => addCoins(100));
    }
  }

  // run once at load
  showdevbutton();

}); // end DOMContentLoaded



    