import displayData from './displayData';
import './layout.css';
import loadPage from './loadPage';
import getCurrentWeather from './retrieveWeatherData';

// Loads up the current weather for Waterloo
loadPage();

// Search function
const searchBar = document.querySelector('.search-box-input');
searchBar.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const searchValue = searchBar.value;
    const data = await getCurrentWeather(searchValue);
    displayData(data);
  }
});
