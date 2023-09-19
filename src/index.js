async function getCurrentWeather(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=202d4f2a7784455d9f5183029231809&q=${location}&days=3&aqi=no&alerts=no`);
  const data = await response.json();
  console.log(data);
//   return {
//     location: {
//       name: data.location.name,
//       region: data.location.region,
//       country: data.location.country,
//     },
//     temperature: {
//       celsius: data.current.temp_c,
//       farenheit: data.current.temp_f,
//       feelslike_c: data.current.feelslike_c,
//       feelslike_f: data.current.feelslike_f,
//     },
//   };
}

getCurrentWeather('waterloo');
