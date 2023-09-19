import getCurrentWeather from './retrieveWeatherData';
import './background.css';

export default async function loadPage() {
  const data = await getCurrentWeather('Waterloo');
  console.log(data);

  // Set background colour
  const body = document.querySelector('body');
  if (data.conditions.isDay === 0) {
    body.classList.add('night');
  } else {
    const { celsius } = data.temperature;
    if (celsius >= 30) {
      body.classList.add('over-thirty');
    } else if (celsius >= 20) {
      body.classList.add('twenty-thirty');
    } else if (celsius >= 10) {
      body.classList.add('ten-twenty');
    } else if (celsius >= 0) {
      body.classList.add('zero-ten');
    } else {
      body.classList.add('less-zero');
    }
  }

  // Get weather container
  const weatherContainer = document.querySelector('.weather-container');
  const icon = document.createElement('img');
  icon.src = `https:${data.conditions.icon}`;
  weatherContainer.appendChild(icon);
  const city = document.createElement('h2');
  city.textContent = data.location.name;
  weatherContainer.appendChild(city);
  const country = document.createElement('h4');
  country.textContent = data.location.country;
  weatherContainer.appendChild(country);
}
