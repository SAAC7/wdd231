// fetch.js
// Importa el modal.js si quieres modularidad
import { openModal } from './modal.js';

const grid = document.getElementById('distroGrid');

// Función principal para cargar datos
async function loadDistros() {
  try {
    const res = await fetch('./data/distros.json'); // ruta relativa desde catalog.html
    if (!res.ok) throw new Error('Error loading JSON data');
    const distros = await res.json();

    // Generar tarjetas dinámicamente
    distros.forEach((distro, index) => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${distro.image}" alt="${distro.name}" loading="lazy">
        <div class="card-content">
          <h3>${distro.name}</h3>
          <p><strong>Base:</strong> ${distro.base}</p>
          <p><strong>Desktop:</strong> ${distro.desktop}</p>
          <p><strong>Level:</strong> ${distro.level}</p>
          <div class="buttons-grid">
            <a href="#" data-index="${index}" class="view-more">View More</a>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    // Añadir eventos para abrir modal
    document.querySelectorAll('.view-more').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = e.target.dataset.index;
        openModal(distros[idx]);
      });
    });

  } catch (error) {
    console.error('Failed to load distros:', error);
    grid.innerHTML = `<p style="color:red;">Failed to load Linux distros. Please try again later.</p>`;
  }
}

// Ejecutar
loadDistros();
