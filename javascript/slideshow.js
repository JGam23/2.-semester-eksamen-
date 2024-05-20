const slideshow = document.querySelector('.slideshow');
const imageBoxes = document.querySelectorAll('.image-box');
let currentIndex = 0;

function showImage(index) {
    imageBoxes.forEach((box, i) => {
        box.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imageBoxes.length;
    showImage(currentIndex);
}

// Start slideshow
showImage(currentIndex);
setInterval(nextImage, 3000);