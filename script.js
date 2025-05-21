// Funktion zum Abspielen der Musik
const playButton = document.getElementById("playMusic");
const song = document.getElementById("birthdaySong");

playButton.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playButton.textContent = "⏸️ Musik pausieren";
  } else {
    song.pause();
    playButton.textContent = "🎵 Musik abspielen";
  }
});

// Funktion zur Personalisierung via URL-Parameter
function getNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("name") || "Freund/in";
}

function personalizePage() {
  const name = getNameFromURL();
  const headline = document.getElementById("headline");
  const message = document.getElementById("personalMessage");

  headline.textContent = `Alles Gute zum Geburtstag, ${name}! 🎈`;
  message.textContent = `${name}, Heute ist dein Tag 🎉\nBleib gesund, glücklich und lass dich feiern! 🥳`;
}

personalizePage();
