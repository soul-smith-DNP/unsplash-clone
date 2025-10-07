const hamMenu = document.querySelector('.ham-menu');
const nav = document.querySelector('nav');
hamMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});