export default function displayData(data) {
  const state = document.querySelector('.title h4');
  state.textContent = data.conditions.text;
  const location = document.querySelector('.title h2');
  location.textContent = `${data.location.name}, ${data.location.country}`;
  const temp = document.querySelector('.temp');
  temp.textContent = `${data.temperature.celsius} °C`;
  const feels = document.querySelector('.feels');
  feels.textContent = `Feels like ${data.temperature.feelslike_c}`;
  const wind = document.querySelector('.wind');
  wind.textContent = `Wind: ${data.weather.windkph} km/h`;
  const humidity = document.querySelector('.humidity');
  humidity.textContent = `Humidity: ${data.weather.humidity}%`;
}
