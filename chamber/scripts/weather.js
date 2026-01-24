
const apiKey = 'b1d147ac15cf37515b8603310bf721e2';

const locationEl = document.querySelector('#location');
const tempEl = document.querySelector('#temperature');
const descEl = document.querySelector('#description');


const lat = 14.8347;   // Quetzaltenango
const lon = -91.5181;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${apiKey}`;

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

//   console.log(data); // 👈 ESTO es lo que te piden revisar

  const temp = data.main.temp;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  console.log(icon);

  document.querySelector('#temp').textContent = `${Math.round(temp)} °C`;
  document.querySelector('#desc').textContent = description;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const img = document.querySelector('#weather-icon');
  img.setAttribute('src', iconUrl);
  img.setAttribute('alt', description);
}

getWeather();
