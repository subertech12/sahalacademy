// For now, this file is for future JavaScript functionalities
// like the mobile menu toggle and more advanced animations.

document.addEventListener('DOMContentLoaded', function() {
    console.log("Website loaded and script is running.");

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('nav-active');
            hamburger.classList.toggle('is-active');
        });
    }

    // Slideshow
    let slideIndex = 0;
    let slideInterval;

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    function showSlides(n) {
        let i;
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex].style.display = "block";
        dots[slideIndex].className += " active";
    }

    function plusSlides(n) {
        clearTimeout(slideInterval);
        showSlides(slideIndex += n);
        slideInterval = setTimeout(autoShowSlides, 5000);
    }

    function currentSlide(n) {
        clearTimeout(slideInterval);
        showSlides(slideIndex = n);
        slideInterval = setTimeout(autoShowSlides, 5000);
    }

    function autoShowSlides() {
        slideIndex++;
        showSlides(slideIndex);
        slideInterval = setTimeout(autoShowSlides, 5000);
    }

    if (slides.length > 0) {
        showSlides(slideIndex);
        slideInterval = setTimeout(autoShowSlides, 5000);

        if (prev && next) {
            prev.addEventListener('click', () => plusSlides(-1));
            next.addEventListener('click', () => plusSlides(1));
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => currentSlide(i));
        });
    }
}); 