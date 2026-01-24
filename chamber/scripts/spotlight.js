const spotlightContainer = document.querySelector('#spotlight-container');
const membersUrl = 'data/members.json'; // ajusta la ruta si es necesario

async function loadSpotlights() {
  try {
    const response = await fetch(membersUrl);
    const data = await response.json();

    console.log(data); // 👈 para demostrar revisión en consola

    // 1️⃣ Filtrar solo Silver (2) y Gold (3)
    const qualifiedMembers = data.filter(
      member => member.membership >= 2
    );

    // 2️⃣ Mezclar aleatoriamente
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

    // 3️⃣ Seleccionar 2 o 3
    const spotlights = shuffled.slice(0, 3);

    // 4️⃣ Renderizar
    spotlights.forEach(member => {
      const card = document.createElement('article');
      card.classList.add('spotlight-card');

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name}">
        <p>${member.description}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.error('Error loading spotlights:', error);
  }
}

loadSpotlights();
