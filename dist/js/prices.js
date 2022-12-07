"use strict";
document.getElementById('prices').classList.add('active');
document.getElementById('prices-mob').classList.add('active');
let prices_cards = document.querySelectorAll('.card');
for (let i = 0; i < prices_cards.length; i++) {
    prices_cards[i].addEventListener('click', () => {
        let link = prices_cards[i].getAttribute('data-link');
        window.location.href = link;
    });
}
//# sourceMappingURL=prices.js.map