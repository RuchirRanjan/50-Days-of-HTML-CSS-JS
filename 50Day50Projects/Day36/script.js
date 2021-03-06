const container = document.getElementById('container');
// Change the colors in given array below to change the color of the squares
const colors = [
  '#00ffff',
  '#6495ed',
  '#6a5acd',
  '#00ff7f',
  '#87ceeb',
  '#e74c3c',
  '#7fff00',
  '#e67e22',
];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}