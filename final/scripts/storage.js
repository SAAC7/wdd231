// storage.js

const distroGrid = document.getElementById('distroGrid');
// Obtener favoritos de localStorage
function getFavorites() {
  const favs = localStorage.getItem('favorites');
  return favs ? JSON.parse(favs) : [];
}

// Guardar favoritos en localStorage
function setFavorites(favs) {
  localStorage.setItem('favorites', JSON.stringify(favs));
}

// Actualizar la visualización de favoritos
function updateFavoritesUI() {
  const favs = getFavorites();
  document.querySelectorAll('.card').forEach(card => {
    const name = card.querySelector('h3').textContent;
    const favBtn = card.querySelector('.fav-btn');
    if (favs.includes(name)) {
      favBtn.textContent = '★ Favorito';
      favBtn.classList.add('active');
    } else {
      favBtn.textContent = '☆ Favorito';
      favBtn.classList.remove('active');
    }
  });
}

// Añadir botones de favoritos a cada tarjeta
function addFavoriteButtons() {
  document.querySelectorAll('.card').forEach(card => {
    if (!card.querySelector('.fav-btn')) {
      const btn = document.createElement('button');
      btn.classList.add('fav-btn');
      btn.type = 'button';
      btn.addEventListener('click', () => {
        const name = card.querySelector('h3').textContent;
        let favs = getFavorites();
        if (favs.includes(name)) {
          favs = favs.filter(f => f !== name);
        } else {
          favs.push(name);
        }
        setFavorites(favs);
        updateFavoritesUI();
      });
      card.querySelector('.buttons-grid').appendChild(btn);
    }    
  });

  updateFavoritesUI();
}

// Inicializar favoritos cuando el DOM esté cargado
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(addFavoriteButtons, 500);
});
