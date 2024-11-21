const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].offsetWidth + 40; // Slide width + margin
let currentIndex = 0;

// Update slider position and active class with curved effect
function updateSlider() {
  // Apply the cubic bezier curve effect for sliding (curved transition)
  slider.style.transition = "transform 1s cubic-bezier(0.2, 1, 0.3, 1)";
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

  // Remove "active" class from all slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Add "active" class to the current slide
  slides[currentIndex].classList.add("active");
}

// Move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the start
  updateSlider();
}

// Move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the end
  updateSlider();
}

// Set interval to automatically slide
setInterval(nextSlide, 3000);

// Initial setup
updateSlider();

// scroll to top on page load

document.addEventListener("DOMContentLoaded", function () {
  // Function to trigger animations on scroll
  const doAnimations = () => {
    const offset = window.scrollY + window.innerHeight;
    const animatables = document.querySelectorAll(".animatable");

    // Check each animatable element
    animatables.forEach((animatable) => {
      const animatableOffset =
        animatable.offsetTop + animatable.offsetHeight - 20;

      // If the element is in view, add 'animated' class and remove 'animatable'
      if (animatableOffset < offset) {
        animatable.classList.remove("animatable");
        animatable.classList.add("animated");
      }
    });

    // Unbind scroll listener if no animatables left
    if (document.querySelectorAll(".animatable").length === 0) {
      window.removeEventListener("scroll", doAnimations);
    }
  };

  // Trigger animations on scroll
  window.addEventListener("scroll", doAnimations);

  // Trigger the scroll event on page load to check elements immediately
  doAnimations();
});

// open a menu modal

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
