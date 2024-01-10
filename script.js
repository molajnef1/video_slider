const slides = document.querySelectorAll('.slide-container');
let index = 0;

for (const slide of slides) {
  const videoEl = slide.querySelector('video');
  videoEl.addEventListener('ended', () => {
    next();
  });
}

function next() {
  slides[index].classList.remove('active');
  // Reset video to the beginning if it's the last slide
  const videoEl = slides[index].querySelector('video');
  if (videoEl) {
    videoEl.currentTime = 0;
  }
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}
