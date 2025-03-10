import Carousel from './carousalModule.js';

const carousel = new Carousel('carousel', 'data.json');
carousel.fetchData();

window.addEventListener('resize', () => {
    carousel.currentIndex = 0;
    carousel.renderCarousel();
});

document.querySelector('.btn-prev').addEventListener('click', () => carousel.moveCarousel(-1));
document.querySelector('.btn-next').addEventListener('click', () => carousel.moveCarousel(1));
