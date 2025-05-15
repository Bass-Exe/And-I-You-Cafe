const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.slides');


let currentIndex = 1;
let intervalId;

function showSlide(index) {
  carouselItems.forEach((item) => item.classList.remove('active'));
  carouselItems[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

function startAutoplay() {
    intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoplay() {
    clearInterval(intervalId);
}

// Initialize the carousel and start autoplay
showSlide(currentIndex);
startAutoplay();