import displayData from './displayData';
import './layout.css';
import loadPage from './loadPage';
import getCurrentWeather from './retrieveWeatherData';
import { changeTemp } from './changeTemp';

let chosenTempUnit = 'celsius';
let unitData = {};

// Loads up the current weather for Waterloo
(async () => {
  unitData = await loadPage();
})();

// Search function
const searchBar = document.querySelector('.search-box-input');
searchBar.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const searchValue = searchBar.value;
    searchBar.value = '';
    const data = await getCurrentWeather(searchValue);
    if (data === false) return;
    unitData = displayData(data, chosenTempUnit);
  }
});

// Celsius-Farenheit switch
const celFarDiv = document.querySelector('.cel-far');
celFarDiv.addEventListener('change', () => {
  const selectedTempDisplay = document.querySelector('.cel-far input[type="radio"]:checked');
  chosenTempUnit = selectedTempDisplay.value;
  changeTemp(unitData, chosenTempUnit);
});
