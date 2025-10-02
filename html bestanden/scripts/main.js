// Sidebar animatie
const sidebarItem = document.getElementsByClassName('sidebarItem')[0];
const leftSidebar = document.getElementsByClassName('leftSidebar')[0];
const hints = document.getElementById('hints');
hints.addEventListener('click', () => {
  sidebarItem.style.animationPlayState = "running";
  leftSidebar.style.animationPlayState = "running";
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
