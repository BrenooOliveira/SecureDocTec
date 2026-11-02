const slides = Array.from(document.querySelectorAll('.slide'));
const progressFill = document.getElementById('progress-fill');
const indicator = document.getElementById('slide-indicator');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentIndex = 0;

function updateSlide(index) {
  currentIndex = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === currentIndex);
  });

  const percent = ((currentIndex + 1) / slides.length) * 100;
  progressFill.style.width = `${percent}%`;
  indicator.textContent = `Slide ${currentIndex + 1} / ${slides.length}`;

  prevButton.disabled = currentIndex === 0;
  prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
  nextButton.textContent = currentIndex === slides.length - 1 ? 'Fim' : 'Próximo';
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    updateSlide(currentIndex + 1);
  }
}

function previousSlide() {
  if (currentIndex > 0) {
    updateSlide(currentIndex - 1);
  }
}

function goToFirstSlide() {
  updateSlide(0);
}

prevButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', () => {
  if (currentIndex === slides.length - 1) {
    goToFirstSlide();
    return;
  }

  nextSlide();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
    event.preventDefault();
    nextSlide();
  }

  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    previousSlide();
  }

  if (event.key === 'Home') {
    goToFirstSlide();
  }
});

document.querySelectorAll('[data-next-slide]').forEach((button) => {
  button.addEventListener('click', nextSlide);
});

document.querySelectorAll('[data-first-slide]').forEach((button) => {
  button.addEventListener('click', goToFirstSlide);
});

updateSlide(0);
