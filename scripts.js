// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animations on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollY;
        const isVisible = elementTop < scrollY + windowHeight - 150;  // Trigger the animation before fully in view

        if (isVisible) {
            element.classList.add('animated');
        }
    });
});

// Lightbox for gallery images
document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', function () {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = this.src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', function () {
            lightbox.remove();
        });
    });
});
