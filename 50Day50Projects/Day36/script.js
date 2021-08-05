const container = document.getElementById('container');
const colors = [
  '#00ffff',
  '#6495ed',
  '#6a5acd',
  '#00ff7f',
  '#87ceeb',
  '#e74c3c',
  '#8e44ad',
  '#e67e22',
];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  container.appendChild(square);
}
