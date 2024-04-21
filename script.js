/*
$(window).keydown(function (event) {
    if (event.keyCode == 111) {
        event.preventDefault();
        return false;
    }
});
*/


function playSound(e) {

    if (event.keyCode == 111) {
        event.preventDefault();
        return false;
    }
  
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const curKey = document.querySelector(`.wkey[data-key="${e.keyCode}"],.bkey[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop the function from running altogether 
  audio.currentTime = 0; // rewind to the start

  audio.play();
  curKey.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if not transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.wkey, .bkey');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);