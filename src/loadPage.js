import getCurrentWeather from './retrieveWeatherData';
import displayData from './displayData';
import './background.css';

export default async function loadPage() {
  const data = await getCurrentWeather('Waterloo');
  displayData(data);
}
