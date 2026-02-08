import { discoverItems } from "../data/discover.mjs";

// ===== CARDS =====
const grid = document.querySelector("#discoverGrid");

discoverItems.forEach((item, index) => {
  const card = document.createElement("article");
  card.classList.add("discover-card");
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}" loading="lazy">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;

  grid.appendChild(card);
});

// ===== VISIT MESSAGE =====
const message = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  // ✔ First visit
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    // ✔ Less than a day
    message.textContent = "Back so soon! Awesome!";
  } else {
    // ✔ n days / 1 day grammar
    message.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);

