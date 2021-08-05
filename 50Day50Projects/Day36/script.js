const container = document.getElementById('container');
const colors = [
  '#00ffff',
  '#6495ed',
  '#6a5acd',
  '#00ff7f',
  '#87ceeb',
  '#e74c3c',
  '#e67e22',
];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseover', () => setColor(square));

  container.appendChild(square);
}
