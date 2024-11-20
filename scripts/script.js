console.log(closeButton);

const menuButton = document.querySelector('.menu button');
const closeButton = document.querySelector('nav button');
const navMenu = document.querySelector('nav');

// Eventlisteners toevoegen
menuButton.addEventListener('click', toonMenu);
closeButton.addEventListener('click', sluitMenu);

// Functie om het menu te tonen
function toonMenu() {
    navMenu.classList.add('toonMenu'); // Toon het menu
}

// Functie om het menu te sluiten
function sluitMenu() {
    navMenu.classList.remove('toonMenu'); // Sluit het menu
}