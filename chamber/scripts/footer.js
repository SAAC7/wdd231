/* =======================
   MOBILE MENU TOGGLE
======================= */
const menuBtn = document.querySelector('#menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
  navigation.classList.toggle('open');

  // Cambiar icono ☰ ↔ ×
  if (navigation.classList.contains('open')) {
    menuBtn.innerHTML = '&#215;'; // ×
  } else {
    menuBtn.innerHTML = '&#9776;'; // ☰
  }
});


document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
