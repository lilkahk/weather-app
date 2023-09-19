import getCurrentWeather from './retrieveWeatherData';
import './background.css';
import displayData from './displayData';

export default async function loadPage() {
  const data = await getCurrentWeather('Waterloo');
  const body = document.querySelector('body');
  // Remove classes
  body.classList.remove('night');
  body.classList.remove('over-thirty');
  body.classList.remove('twenty-thirty');
  body.classList.remove('ten-twenty');
  body.classList.remove('zero-ten');
  body.classList.remove('less-zero');
  // Set background colour
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
  displayData();
}
