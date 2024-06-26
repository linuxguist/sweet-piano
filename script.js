/*
$(window).keydown(function (event) {
    if (event.keyCode == 111) {
        event.preventDefault();
        return false;
    }
});
*/


function playSound(e) {

/*
    if (event.keyCode == 111) {
        event.preventDefault();
        document.getElementById('111').play();
        return false;
    }
*/    
  
  event.preventDefault();

  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const curKey = document.querySelector(`.wkey[data-key="${e.key}"],.bkey[data-key="${e.key}"]`);

  if (!audio) return; // stop the function from running altogether 
  audio.currentTime = 0; // rewind to the start

  audio.pause();
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