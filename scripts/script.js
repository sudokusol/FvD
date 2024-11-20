const menuButton = document.querySelector('.menu button');
const closeButton = document.querySelector('nav button');
const navMenu = document.querySelector('nav');

// Eventlisteners voor openen en sluiten van het menu
menuButton.addEventListener('click', toonMenu);
closeButton.addEventListener('click', sluitMenu);

function toonMenu() {
  navMenu.classList.add("toonMenu");
}

function sluitMenu() {
  navMenu.classList.remove("toonMenu");
}
