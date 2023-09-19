export default async function getCurrentWeather(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=202d4f2a7784455d9f5183029231809&q=${location}&days=3&aqi=no&alerts=no`, {
      mode: 'cors',
    });
    const data = await response.json();
    if (response.status === 200) {
      return {
        location: {
          name: data.location.name,
          region: data.location.region,
          country: data.location.country,
        },
        temperature: {
          celsius: data.current.temp_c,
          farenheit: data.current.temp_f,
          feelslike_c: data.current.feelslike_c,
          feelslike_f: data.current.feelslike_f,
        },
        conditions: {
          state: data.current.condition.text,
          icon: data.current.condition.icon,
          isDay: data.current.is_day,
        },
        weather: {
          precipitationmm: data.current.precip_mm,
          precipitationin: data.current.precip_in,
          windkph: data.current.wind_kph,
          windmph: data.current.wind_mph,
          humidity: data.current.humidity,
        },
      };
    }
    const searchBar = document.querySelector('.search-box-input');
    searchBar.setAttribute('placeholder', 'City not found');
    return false;
  } catch (error) {
    return false;
  }
}
