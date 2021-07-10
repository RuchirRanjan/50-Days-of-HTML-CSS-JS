const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = num.length - 1;

    num.addEventListener('animationed', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
      }
    });
  });
}
