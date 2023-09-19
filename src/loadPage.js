import getCurrentWeather from './retrieveWeatherData';
import displayData from './displayData';
import './background.css';
import { getUnitdata } from './changeTemp';

export default async function loadPage() {
  const data = await getCurrentWeather('Waterloo');
  displayData(data);
  return getUnitdata(data);
}
