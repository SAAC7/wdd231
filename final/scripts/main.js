// main.js
// Control del menú responsive

// Selecciona elementos
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Función para alternar menú
function toggleMenu() {
  navLinks.classList.toggle('active');
}

// Evento click
hamburger.addEventListener('click', toggleMenu);

// Cerrar menú al hacer click en un enlace (opcional)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if(navLinks.classList.contains('active')){
      navLinks.classList.remove('active');
    }
  });
});
