// Countdown Timer
function updateCountdown() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    let d = parseInt(days.textContent);
    let h = parseInt(hours.textContent);
    let m = parseInt(minutes.textContent);
    let s = parseInt(seconds.textContent);

    s--;
    if (s < 0) {
        s = 59;
        m--;
        if (m < 0) {
            m = 59;
            h--;
            if (h < 0) {
                h = 23;
                d--;
                if (d < 0) {
                    d = 0;
                    h = 0;
                    m = 0;
                    s = 0;
                }
            }
        }
    }

    days.textContent = d.toString().padStart(2, '0');
    hours.textContent = h.toString().padStart(2, '0');
    minutes.textContent = m.toString().padStart(2, '0');
    seconds.textContent = s.toString().padStart(2, '0');
}

// Start countdown timer
setInterval(updateCountdown, 1000);

// Carousel functionality
let currentSlide = 0;
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Event listeners for carousel navigation
prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

// Auto-advance carousel every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);