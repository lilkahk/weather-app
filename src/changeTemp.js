function changeTemp(data, unit) {
  const bigT = document.querySelector('.temp');
  const feels = document.querySelector('.feels');
  if (unit === 'celsius') {
    bigT.textContent = `${data.celsius.temp} °C`;
    feels.textContent = `Feels like ${data.celsius.feels} °C`;
  } else {
    bigT.textContent = `${data.farenheit.temp} °F`;
    feels.textContent = `Feels like ${data.farenheit.feels} °F`;
  }
}

function getUnitdata(data) {
  return {
    celsius: {
      temp: data.temperature.celsius,
      feels: data.temperature.feelslike_c,
      wind: data.weather.windkph,
    },
    farenheit: {
      temp: data.temperature.farenheit,
      feels: data.temperature.feelslike_f,
      wind: data.weather.windmph,
    },
  };
}

export { changeTemp, getUnitdata };
