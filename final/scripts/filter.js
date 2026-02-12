// filter.js

const levelFilter = document.getElementById('levelFilter');
const distroGrid = document.getElementById('distroGrid');

// Guardar la selección en localStorage
function saveFilter(level) {
  localStorage.setItem('levelFilter', level);
}

// Cargar la selección guardada
function loadFilter() {
  const saved = localStorage.getItem('levelFilter');
  if (saved) {
    levelFilter.value = saved;
  }
}

// Filtrar tarjetas según nivel
function filterCards(level) {
  const cards = distroGrid.querySelectorAll('.card');
  cards.forEach(card => {
    const cardLevel = card.querySelector('.card-content p:nth-child(4)').textContent.replace('Level: ', '');
    if (level === 'All' || cardLevel === level) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Evento del select
levelFilter.addEventListener('change', (e) => {
  const selected = e.target.value;
  saveFilter(selected);
  filterCards(selected);
});

// Inicializar filtro
window.addEventListener('DOMContentLoaded', () => {
  loadFilter();
  filterCards(levelFilter.value);
});
