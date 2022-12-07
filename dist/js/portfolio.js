"use strict";
document.getElementById('portfolio').classList.add('active');
document.getElementById('portfolio-mob').classList.add('active');
let cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        let link = cards[i].getAttribute('data-link');
        window.open(link, '_blank');
    });
}
//# sourceMappingURL=portfolio.js.map