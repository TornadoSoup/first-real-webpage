// Konami Code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiCodeIndex = 0;

function konamiCodeHandler(event) {
  const key = event.code;

  if (key === konamiCode[konamiCodeIndex]) {
    konamiCodeIndex++;

    if (konamiCodeIndex === konamiCode.length) {
      // Konami Code entered successfully, display the game (you can customize this part)
      alert('Cheat code activated! Game unlocked!');
      konamiCodeIndex = 0; // Reset the code index for potential future use
    }
  } else {
    konamiCodeIndex = 0; // Reset the code index if the entered key is incorrect
  }
}

document.addEventListener('keydown', konamiCodeHandler);
