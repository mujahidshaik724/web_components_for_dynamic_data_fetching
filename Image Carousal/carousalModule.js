class Carousel {
    constructor(carouselId, dataUrl) {
        this.carousel = document.getElementById(carouselId);
        this.dataUrl = dataUrl;
        this.cardData = [];
        this.currentIndex = 0;
    }

    async fetchData() {
        const response = await fetch(this.dataUrl);
        this.cardData = await response.json();
        this.renderCarousel();
    }

    renderCarousel() {
        this.carousel.innerHTML = this.cardData.map(card => `
            <div class="carousel-item">
                <div class="card">
                    <img src="${card.image}" alt="${card.title}" />
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
            </div>
        `).join('');
    }

    moveCarousel(direction) {
        const cardWidth = document.querySelector('.carousel-item').offsetWidth; 
        const totalCards = this.cardData.length;
        const visibleCards = Math.floor(document.querySelector('.carousel-container').offsetWidth / cardWidth);
        const maxIndex = Math.max(0, totalCards - visibleCards);
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + direction, maxIndex));
        const offset = -this.currentIndex * cardWidth;
        this.carousel.style.transform = `translateX(${offset}px)`;
    }
}

export default Carousel;
