let slideIndex = 0;
const slides = Array.from(document.querySelectorAll('.image-box')); // Convert NodeList to Array
const slidesToShow = 3;

function showSlides() {
    slides.forEach((slide, index) => {
        if (index >= slideIndex && index < slideIndex + slidesToShow) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - slidesToShow;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

// Event listeners for buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Initialize the slideshow
showSlides();