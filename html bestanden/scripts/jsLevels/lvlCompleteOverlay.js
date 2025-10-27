function createLevelCompleteOverlay({
  levelColor = "#a57307ff",
  onNext = () => {},
} = {}) {
  // oude overlay verwijderen
  const old = document.getElementById("levelCompleteOverlay");
  if (old) old.remove();

  // coins & score ophalen uit localStorage
  const coins = Number(localStorage.getItem("coins") || 0);
  const score = Number(localStorage.getItem("score") || 0);

  // overlay HTML aanmaken
  const overlay = document.createElement("div");
  overlay.id = "levelCompleteOverlay";
  overlay.className = "overlay";

  overlay.innerHTML = `
    
    <div class="overlay-content">
      <h1>🎉 Level voltooid!</h1>
      <p>Goed gedaan, kapitein ${localStorage.getItem('playerName')}! Je hebt dit level gehaald.</p>

      <div class="scoreboard">
        <p>💰 Coins: <span class="coins">0</span></p>
        <p>⭐ Score: <span class="score">0</span></p>
      </div>

      <div class="buttons">
        <button id="closeOverlayBtn" class="close">Sluiten ✖</button>
        <button id="nextLevelBtn">Volgende Level →</button>
      </div>
      <canvas id="confettiCanvas"></canvas>
    </div>
  `;

  document.body.appendChild(overlay);

  // animatie tellers
  const coinEl = overlay.querySelector(".coins");
  const scoreEl = overlay.querySelector(".score");

  let currentCoin = 0;
  let currentScore = 0;

  const update = setInterval(() => {
    if (currentCoin < coins) {
      currentCoin += Math.ceil(coins / 60);
      coinEl.textContent = Math.min(currentCoin, coins);
    }
    if (currentScore < score) {
      currentScore += Math.ceil(score / 40);
      scoreEl.textContent = Math.min(currentScore, score);
    }
    if (currentCoin >= coins && currentScore >= score) clearInterval(update);
  }, 30);

  // confetti effect
  startConfetti();

  // knop: volgende level
  overlay.querySelector("#nextLevelBtn").addEventListener("click", () => {
    overlay.remove();
    onNext();
  });

  // knop: sluiten
  overlay.querySelector("#closeOverlayBtn").addEventListener("click", () => {
    overlay.remove();
  });

  return overlay;
}

// 🎊 Confetti effect
let confettiInterval;
function startConfetti() {
  const canvas = document.createElement("canvas");
  canvas.id = "confettiCanvas";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let particles = [];

  const colors = ["#FFD700", "#FF6B6B", "#4ECDC4", "#C7F464", "#FFB400"];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function createParticles(count = 100) {
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 10,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05,
        tiltAngle: 0,
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });
    updateParticles();
  }

  function updateParticles() {
  particles.forEach((p) => {
    p.tiltAngle += p.tiltAngleIncremental;

    // snelheid variëren: snel in het begin, langzaam naar het einde
    // 'life' gaat van 0 (net aangemaakt) naar 1 (bijna onder)
    const life = Math.min(1, (canvas.height + 50 - p.y) / canvas.height); 
    const speed = (Math.cos(p.d) + 8 + p.r / 2) / 1.2; // basis snelheid
    const easedSpeed = speed * (0.3 + 0.7 * life); // begin snel (life~0), eind langzaam (life~1)

    p.y += easedSpeed;
    p.x += Math.sin(p.d);
    p.tilt = Math.sin(p.tiltAngle) * 15;
  });

  // verwijder confetti die onder het scherm valt
  particles = particles.filter(p => p.y < canvas.height + 50);
}

  createParticles();

  // 🎯 Stop nieuwe confetti na 5 seconden
  const stopNewAfter = 3000;
  const startTime = Date.now();

  confettiInterval = setInterval(() => {
    drawParticles();

    // zolang er minder dan 5 sec voorbij zijn, af en toe nieuwe confetti maken
    if (Date.now() - startTime < stopNewAfter && Math.random() < 0.1) {
      createParticles(2); // kleine toevoeging af en toe
    }

    // als er geen confetti meer over is → stoppen
    if (particles.length === 0 && Date.now() - startTime > stopNewAfter + 2500) {
    }
  }, 20);
}



