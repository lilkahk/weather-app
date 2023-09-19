import { getUnitdata } from './changeTemp';

// displayData(data, temp) displays the data from retrieveWeatherData while
//   conforming to the user's desired units (temp is for celisus or farenheit)
export default function displayData(data, temp = 'celsius') {
  // Set background colour
  const body = document.querySelector('body');
  // Remove previous classes
  body.classList.remove('night');
  body.classList.remove('over-thirty');
  body.classList.remove('twenty-thirty');
  body.classList.remove('ten-twenty');
  body.classList.remove('zero-ten');
  body.classList.remove('less-zero');
  // Add the right class
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

  // Change text content
  const state = document.querySelector('.title h4');
  state.textContent = data.conditions.state;
  const location = document.querySelector('.title h2');
  location.textContent = `${data.location.name}, ${data.location.country}`;
  // Temp specific
  if (temp === 'celsius') {
    const temperature = document.querySelector('.temp');
    temperature.textContent = `${data.temperature.celsius} °C`;
    const feels = document.querySelector('.feels');
    feels.textContent = `Feels like ${data.temperature.feelslike_c} °C`;
    const wind = document.querySelector('.wind');
    wind.textContent = `Wind: ${data.weather.windkph} km/h`;
  } else {
    const temperature = document.querySelector('.temp');
    temperature.textContent = `${data.temperature.farenheit} °F`;
    const feels = document.querySelector('.feels');
    feels.textContent = `Feels like ${data.temperature.feelslike_f} °F`;
    const wind = document.querySelector('.wind');
    wind.textContent = `Wind: ${data.weather.windmph} mi/h`;
  }
  const humidity = document.querySelector('.humidity');
  humidity.textContent = `Humidity: ${data.weather.humidity}%`;

  return getUnitdata(data);
}
