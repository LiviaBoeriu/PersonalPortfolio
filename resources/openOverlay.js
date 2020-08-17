const openButton = document.querySelector('.overlay-open');
const closeButton = document.querySelector('.overlay-close');
const navList = document.querySelector('header nav ul.nav-list');

function openMenu() {
    openButton.classList.add('no-opacity');
    closeButton.classList.remove('no-opacity');
    navList.classList.add('open-navigation');
}

function closeMenu() {
    openButton.classList.remove('no-opacity');
    closeButton.classList.add('no-opacity');
    navList.classList.remove('open-navigation');
}

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);