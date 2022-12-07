"use strict";
let show_nav = document.getElementById('show-nav');
let hide_nav = document.getElementById('hide-nav');
show_nav === null || show_nav === void 0 ? void 0 : show_nav.addEventListener('click', () => {
    show_nav.children[0].style.transform = "rotate(-180deg)";
    show_nav.nextElementSibling.style.left = "-440%";
});
hide_nav === null || hide_nav === void 0 ? void 0 : hide_nav.addEventListener('click', () => {
    show_nav.children[0].style.transform = "rotate(0)";
    show_nav.nextElementSibling.style.left = "350%";
});
//# sourceMappingURL=all-files.js.map