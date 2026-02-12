// modal.js

// Crear modal en el body
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <div class="modal-content">
    <button class="modal-close" aria-label="Close modal">&times;</button>
    <h2 id="modal-name"></h2>
    <p id="modal-description"></p>
    <p><strong>Base:</strong> <span id="modal-base"></span></p>
    <p><strong>Desktop:</strong> <span id="modal-desktop"></span></p>
    <p><strong>Level:</strong> <span id="modal-level"></span></p>
    <p><a id="modal-website" href="#" target="_blank">Official Website</a></p>
  </div>
`;

document.body.appendChild(modal);

// Selección de elementos dentro del modal
const modalCloseBtn = modal.querySelector('.modal-close');
const modalName = document.getElementById('modal-name');
const modalDescription = document.getElementById('modal-description');
const modalBase = document.getElementById('modal-base');
const modalDesktop = document.getElementById('modal-desktop');
const modalLevel = document.getElementById('modal-level');
const modalWebsite = document.getElementById('modal-website');

// Función para abrir modal con datos
export function openModal(distro) {
  modalName.textContent = distro.name;
  modalDescription.textContent = distro.description;
  modalBase.textContent = distro.base;
  modalDesktop.textContent = distro.desktop;
  modalLevel.textContent = distro.level;
  modalWebsite.href = distro.website;
  modalWebsite.textContent = "Official Website";

  modal.classList.add('active');
}

// Función para cerrar modal
function closeModal() {
  modal.classList.remove('active');
}

// Eventos de cierre
modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
