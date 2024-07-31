const pianoKeys = document.querySelectorAll('.key')

function playSound (newUrl) {
    console.log(newUrl)
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = './media/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})

// Selecciona el contenedor de las notas
const notesContainer = document.getElementById('notes-container');

// Función para generar una nota musical en una posición aleatoria
function generateNote() {
  const note = document.createElement('img');
  const noteNumber = Math.floor(Math.random() * 3) + 1;
  note.src = `./images/nota${noteNumber}.png`;
  note.style.position = 'absolute';
  note.style.left = `${Math.random() * 100}%`;
  note.style.top = `${Math.random() * 100}%`;
  note.style.width = '80px';
  note.style.height = '80px';
  note.style.pointerEvents = 'none'; // Asegúrate de que los eventos de clic pasen a través de la nota
  notesContainer.appendChild(note);

  // Elimina la nota después de unos segundos
  setTimeout(() => {
    notesContainer.removeChild(note);
  }, 3000);
}

// Event listener para las teclas del piano
document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', generateNote);
});
