// Sidebar animatie
const sidebarItemBar = document.querySelector('.sidebarItemBar');
const sidebarItemBar2 = document.querySelector('.sidebarItemBar2');
const sidebarItemBar3 = document.querySelector('.sidebarItemBar3');
const leftSidebar = document.querySelector('.leftSidebar');
const hintsContainer = document.querySelector('.hints-container');
const hints = document.getElementById('hints');
const hint1 = document.getElementsByClassName('hint1')[0];
const hint2 = document.getElementsByClassName('hint2')[0];
const hint3 = document.getElementsByClassName('hint3')[0];
const sidebarToggle = document.getElementById('sidebarToggle');
const shopContainer = document.querySelector('.shop-container');
const shopButton = document.getElementById('shop');
const piraatInShop = document.querySelector('.piraatInShop');

// Hulpfunctie om animatie opnieuw af te spelen
function restartAnimation(element, animationName) {
  element.style.animation = 'none';
  // Forceer browser om style opnieuw toe te passen
  void element.offsetWidth;
  element.style.animation = `${animationName} 3s forwards`;
}

// Open sidebar animatie
hints.addEventListener('click', () => {
  if (document.getElementById('shopON').style.display === 'block') {
    shopContainer.style.animation = 'none';
    shopContainer.style.transform = 'translateX(-68vw)';
    piraatInShop.style.animation = 'none';
    piraatInShop.style.transform = 'translateX(100vw)';
    document.getElementById('shopON').style.display = 'none';
  }
  //if (document.getElementById('parrotsON').style.display === 'block') {}
  else {restartAnimation(leftSidebar, 'background');}
  restartAnimation(sidebarItemBar, 'slide');
  restartAnimation(sidebarItemBar2, 'slide');
  restartAnimation(sidebarItemBar3, 'slide');
  restartAnimation(hintsContainer, 'slide');

  document.getElementById('hintsON').style.display = 'block';

  sidebarToggle.style.display = 'block';
});

// Sidebar toggle (sluiten/terugzetten)
sidebarToggle.addEventListener('click', () => {
  if (document.getElementById('shopON').style.display === 'block') {
    shopContainer.style.animation = 'none';
    shopContainer.style.transform = 'translateX(-68vw)';
    piraatInShop.style.animation = 'none';
    piraatInShop.style.transform = 'translateX(100vw)';
    
    document.getElementById('shopON').style.display = 'none';

  }
  if (document.getElementById('hintsON').style.display === 'block') {
    hintsContainer.style.animation = 'none';
    hintsContainer.style.transform = 'translateX(-68vw)';
    document.getElementById('hintsON').style.display = 'none';
  }
  


  leftSidebar.style.animation = 'none';
  sidebarItemBar.style.animation = 'none';
  sidebarItemBar.style.transform = 'translateX(-68vw)';
  sidebarItemBar2.style.animation = 'none';
  sidebarItemBar2.style.transform = 'translateX(-68vw)';
  sidebarItemBar3.style.animation = 'none';
  sidebarItemBar3.style.transform = 'translateX(-68vw)';

  sidebarToggle.style.display = 'none';

});

shopButton.addEventListener('click', () => {
  // Logica voor de shop-knop
  if (document.getElementById('hintsON').style.display === 'block') {
      hintsContainer.style.animation = 'none';
      hintsContainer.style.transform = 'translateX(-68vw)';
      document.getElementById('hintsON').style.display = 'none';
  }
  //if (document.getElementById('parrotsON').style.display === 'block') {}
  else {restartAnimation(leftSidebar, 'background');}

  restartAnimation(shopContainer, 'slide');
  restartAnimation(sidebarItemBar, 'slide');
  restartAnimation(sidebarItemBar2, 'slide');
  restartAnimation(sidebarItemBar3, 'slide');
  restartAnimation(piraatInShop, 'slidepiraat');

  document.getElementById('shopON').style.display = 'block';
  sidebarToggle.style.display = 'block';
});


// Naam + opslag
let playerName = localStorage.getItem("playerName") || "Onbekende Piraat";
document.getElementById("player").textContent = playerName;

// Score en coins
let score = parseInt(localStorage.getItem("score")) || 20;
let coins = parseInt(localStorage.getItem("coins")) || 5;
document.getElementById("punten").textContent = score;
document.getElementById("coins").textContent = coins;

function saveScore(newScore) {
  score = newScore;
  localStorage.setItem("score", score);
  document.getElementById("punten").textContent = score;
}
function saveCoins(newCoins) {
  coins = newCoins;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").textContent = coins;
}
function addScore(amount) { saveScore(score + amount); }
function addCoins(amount) { saveCoins(coins + amount); }

// Naam bewerken
document.getElementById("editNameBtn").addEventListener("click", editName);
function editName() {
  const span = document.getElementById("player");
  const input = document.getElementById("editInput");
  span.style.display = "none";
  input.style.display = "inline";
  input.value = playerName;
  input.focus();

  input.onblur = function() { saveName(input, span); };
  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") input.blur();
  });
}
function saveName(input, span) {
  if (input.value.trim() !== "") {
    playerName = input.value.trim();
    localStorage.setItem("playerName", playerName);
    span.textContent = playerName;
  }
  input.style.display = "none";
  span.style.display = "inline";
}

// Startscherm → overlay
document.getElementById("startAvontuurBtn").addEventListener("click", () => {
  document.getElementById('overlayFP').style.display = 'flex';
});

// Naam invullen en naar menu
document.getElementById("nextToMenuBtn").addEventListener("click", () => {
  const inputElement = document.getElementById('nameInput');
  const inputValue = inputElement.value.trim();
  if (inputValue === '') {
    alert("Vul eerst je naam in!");
    return;
  }
  playerName = inputValue;
  localStorage.setItem("playerName", playerName);
  document.getElementById("player").textContent = playerName;

  document.getElementById('overlayFP').style.display = 'none';
  document.getElementById('frontPage').style.display = 'none';
  document.getElementById('secondPage').style.display = 'block';
});

// Level 1 openen
document.getElementById("btn-1").addEventListener("click", () => {
  showLvlLayout();
  tekstLvl1();
  opdr1A();
  opdr1B();
});

document.getElementById("btn-3").addEventListener("click", () => {
  showLvlLayout();
  tekstLvl3();
  opdr2?.(); // optioneel, als er een opdr2 bestaat
});

function showLvlLayout() {
  document.getElementById('secondPage').style.display = 'none';
  document.getElementById('lvl1').style.display = 'flex';
  document.getElementById('opmaakOpdrachten').style.display = 'flex';
  document.getElementById('overlayLvl1').style.display = 'flex';
  document.getElementById('opdracht').style.display = 'none';
}

// Buttons uitleg / opdracht / home
document.getElementById("toUitlegBtn").addEventListener("click", () => {
  document.getElementById('uitlegVDOpdracht').style.display = 'flex';
  document.getElementById('opdracht').style.display = 'none';
});
document.getElementById("toOpdrachtBtn").addEventListener("click", () => {
  document.getElementById('uitlegVDOpdracht').style.display = 'none';
  document.getElementById('opdracht').style.display = 'grid';
});
document.getElementById("toHomeBtn").addEventListener("click", () => {
  document.getElementById('opmaakOpdrachten').style.display = 'none';
  document.getElementById('secondPage').style.display = 'flex';
});

document.getElementById("closeOverlayLvl1").addEventListener("click", () => {
  document.getElementById('overlayLvl1').style.display = 'none';
});

function tekstLvl1() {
  // TODO: Voeg hier de uitleg/tekst voor level 1 toe
}
