const butterfly = document.querySelector('.butterfly');
const flyMessage = document.getElementById('flyMessage');

butterfly.addEventListener('click', () => {
  if (butterfly.classList.contains('flying')) return;

  const isHidden = window.getComputedStyle(butterfly).opacity === '0';

  if (isHidden) {
    butterfly.style.opacity = '1';
    flyMessage.classList.remove('visible');
  }

  butterfly.classList.add('flying');

  // Mostrar mensaje a los 1.2 segundos
  setTimeout(() => {
    flyMessage.classList.add('visible');
  }, 1200);

  // Animación termina a los 2 segundos
  setTimeout(() => {
    butterfly.style.opacity = '0';
    butterfly.classList.remove('flying');
  }, 2000);
});

// Al hacer clic en el mensaje, ocultar mensaje y mostrar mariposa quieta
flyMessage.addEventListener('click', () => {
  flyMessage.classList.remove('visible');
  butterfly.style.opacity = '1';
  butterfly.classList.remove('flying');
});

// --- PANTALLA DE BIENVENIDA ---

const emotions = {
  alegre: "¡Qué bueno verte alegre! Sigue así.",
  triste: "Está bien estar triste, aquí estoy para ti.",
  molesto: "Respira profundo, calma tu mente.",
  ansioso: "Toma un momento para relajarte y ordenar tus ideas.",
  perdido: "No estás solo, encontraremos el camino juntos."
};

const items = document.querySelectorAll('.emotion-item');
const faceDisplay = document.querySelector('.face-display');
const motivationText = document.querySelector('.motivation-text');

const welcomeScreen = document.getElementById('welcome-screen');
const continueBtn = document.getElementById('continue-btn');

let selectedEmotion = null;

items.forEach(item => {
  item.addEventListener('click', () => {
    // Quitar clase selected a todos
    items.forEach(i => i.classList.remove('selected'));
    // Marcar seleccionado
    item.classList.add('selected');

    // Cambiar texto motivacional según emoción
    const emotion = item.getAttribute('data-emotion');
    motivationText.textContent = emotions[emotion] || "Selecciona cómo te sientes";

    // Cambiar icono en face-display
    switch (emotion) {
      case 'alegre': faceDisplay.textContent = '😊'; break;
      case 'triste': faceDisplay.textContent = '😢'; break;
      case 'molesto': faceDisplay.textContent = '😠'; break;
      case 'ansioso': faceDisplay.textContent = '😰'; break;
      case 'perdido': faceDisplay.textContent = '😕'; break;
      default: faceDisplay.textContent = '😊';
    }

    selectedEmotion = emotion;
    continueBtn.disabled = false; // Habilitar botón tras seleccionar emoción
  });
});

// Al hacer clic en continuar, ocultar pantalla de bienvenida SIN mostrar mensaje
continueBtn.addEventListener('click', () => {
  if (!selectedEmotion) return; // No hacer nada si no hay selección

  welcomeScreen.style.display = 'none';
  // No mostrar mensaje ni cambiar texto al continuar
});

// Inicialización al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  welcomeScreen.style.display = 'flex';
  continueBtn.disabled = true;
  motivationText.textContent = "Selecciona cómo te sientes";
  faceDisplay.textContent = '😊';
});
