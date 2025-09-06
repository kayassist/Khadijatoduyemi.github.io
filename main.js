let currentSlide = 0;

function showSlide(index) {
  const track = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.cert-img');
  if (!track || !images.length) return;
  const slideWidth = images[0].clientWidth + 16;
  track.scrollLeft = index * slideWidth;
}

window.prevSlide = function() {
  currentSlide = Math.max(currentSlide - 1, 0);
  showSlide(currentSlide);
}

window.nextSlide = function() {
  const images = document.querySelectorAll('.cert-img');
  currentSlide = Math.min(currentSlide + 1, images.length - 1);
  showSlide(currentSlide);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') window.prevSlide();
  if (e.key === 'ArrowRight') window.nextSlide();
});
