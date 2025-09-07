
const navToggle = document.querySelector(".nav-toggle");
const subNav = document.querySelector(".sub-nav");
const up = document.querySelector(".up");
const mid = document.querySelector(".mid");
const down = document.querySelector(".down");

navToggle.addEventListener('click', () => {
  subNav.classList.toggle('nav-open');
  up.classList.toggle('rotate-down');
  mid.classList.toggle('fade-out');
  down.classList.toggle('rotate-up');
});

const observer = new IntersectionObserver(handleIntersection, { 
  threshold: 0.2,
}); //threshold is used to see how far till it in the viewer sight lower the faster

const fadeInSectionElements = document.querySelectorAll(".hidden");
fadeInSectionElements.forEach((element) => {
  observer.observe(element); // Start observing each element
});

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible"); // Add the class when in view
      observer.unobserve(entry.target); // Stop observing once triggered
    }
  });
}

const pushToTopButton = document.querySelector(".push-to-top");
pushToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Carousel functionality

const carouselContainer = document.querySelector(".carousel-container");
const carouselContainerEvents = document.querySelector(".carousel-container-event");
const carouselItems = document.querySelectorAll(".slides");
const carouselItemsEvents = document.querySelectorAll(".slides-event");

let currentIndex = 1;
let intervalId;

function showSlide(index) {
  carouselItems.forEach((item) => item.classList.remove("active"));
  carouselItems[index].classList.add("active");
  carouselItemsEvents.forEach((item) => item.classList.remove("active"));
  carouselItemsEvents[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
  
}

function prevSlide() {
  currentIndex =
  (currentIndex - 1 + carouselItems.length) % carouselItems.length;
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