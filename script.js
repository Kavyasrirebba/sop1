const track = document.getElementById('track');
let index = 0;
let intervalId = null;

function slideCards() {
  const cards = document.querySelectorAll('.card');
  index++;

  if (index > cards.length - 3) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * (100 / 3)}%)`;
}

function startSlider() {
  if (!intervalId) {
    intervalId = setInterval(slideCards, 5000);
  }
}

function stopSlider() {
  clearInterval(intervalId);
  intervalId = null;
  if (track) {
    track.style.transform = 'none';
  }
}

// Initial load
function handleResize() {
  if (window.innerWidth > 992) {
    startSlider();
  } else {
    stopSlider();
  }
}

handleResize();
window.addEventListener('resize', handleResize);
