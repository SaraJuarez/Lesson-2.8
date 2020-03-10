'use strict';

const happyFace = document.querySelector('.mouth');
happyFace.innerHTML = ')';

const clickHead = document.querySelector('.head');

function winckFace() {
  const winkEyes = document.querySelector('.eyes');
  winkEyes.innerHTML = ';';
}

clickHead.addEventListener('click', winckFace);
