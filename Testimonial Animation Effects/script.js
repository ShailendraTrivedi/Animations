// Initialize Swiper with various options
var swiper = new Swiper(".mySwiper", {
  // Set the effect to "coverflow" for the slide transition effect
  effect: "coverflow",

  // Set the grab cursor on the slides to indicate interactivity
  grabCursor: true,

  // Center the active slide in the viewport
  centeredSlides: true,

  // Automatically adjust the number of slides displayed based on the container width
  slidesPerView: "auto",

  // Configure the coverflow effect options
  coverflowEffect: {
    // Rotate angle of the slides in degrees
    rotate: 360,

    // Stretch factor of the slides (0% means no stretching, 100% stretches to fill)
    stretch: 100,

    // Depth of the slides (higher values bring the slides forward)
    depth: 100,

    // Modifier for the reflection/shadow effect
    modifier: 1,

    // Display slide shadows
    slideShadows: true,
  },

  // Configure pagination element
  pagination: {
    // Set the pagination element selector to ".swiper-pagination"
    el: ".swiper-pagination",
  },
});
