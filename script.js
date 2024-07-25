const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');

let currentIndex = 0;
showCarouselItem(0);
carouselInterval = setInterval(nextCarouselItem, 2000);

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function prevCarouselItem() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentIndex);
}

function nextCarouselItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}


carousel.addEventListener('mouseenter', stopCarousel);

carousel.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextCarouselItem, 2000);
});

let carouselInterval = setInterval(nextCarouselItem, 2000);
