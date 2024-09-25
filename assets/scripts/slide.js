let slideIndex = 0;
let autoSlideTimeout;

showSlide(slideIndex);
autoSlide();

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i=0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
}

function changeSlide(n) {
    clearTimeout(autoSlideTimeout);
    slideIndex += n;
    showSlide(slideIndex);
    autoSlide();
}

function autoSlide() {
    autoSlideTimeout = setTimeout(() => {
        slideIndex++;
        showSlide(slideIndex);
        autoSlide();
    }, 30000);
}