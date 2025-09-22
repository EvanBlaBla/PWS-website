function tekstLvl1() {
  // Speech-bubble tekst
  document.getElementById('speech-bubble').innerHTML = `
    <p style="margin: 0;">
      Je moet de papegaai bevrijden door opdrachten op te lossen met de balansmethode. 
      Geen zorgen, de papegaai heeft uitleg voor je om jou te helpen!
      <button class="next-tekst-button" onclick="document.getElementById('overlayLvl1').style.display = 'none'">
        next...
      </button>
    </p>
  `;

  // Uitlegtekst
  document.getElementById("uitlegVDOpdracht").innerHTML = `
    <p>
      De balansmethode is een methode die rekenregels gebruikt om vergelijkingen op te lossen.  
      In een vergelijking waarin meerdere x’en staan en voor de rest variabelen, 
      is het de bedoeling dat de x’en naar links worden verplaatst en de rest naar rechts. 
      De rekenregels zorgen hiervoor.
    </p>
    <div style="display: flex; flex-direction: row; gap: 20px;">
      <div style="display: flex; flex-direction: column; flex: 2;">
        <p><strong>Voorbeeld</strong></p>
        <p>Stap 1: Haal van beide kanten 8x af</p>
        <p>Stap 2: Voeg aan beide kanten 6 toe</p>
        <p>Stap 3: Deel beide kanten door -5</p>
        <p>Stap 4: Check je antwoord door -2 in te vullen voor x</p>
      </div>
      <div style="display: flex; flex-direction: column; flex: 1;">
        <p>3x - 6 = 8x + 4</p>
        <p>3x - 8x - 6 = 4</p>
        <p>-5x = 10</p>
        <p>x = -2</p>
        <p>3 * -2 - 6 = -12</p>
        <p>8 * -2 + 4 = -12</p>
        <p>-12 = -12 ✅</p>
      </div>
    </div>
  `;
  // Achtergrond
  document.getElementById('achtergrondOpdrachten').innerHTML = `
    <img src="pictures/boomlvl1.png" alt="">
    <div>
      <img src="pictures/papegaaiInKooi.png" alt="" class="papegaaiInKooi">
    </div>
  `;
}