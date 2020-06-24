

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


getWeatherData = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`;
const weatherPromise = fetch(URL);
return weatherPromise.then(response => response.json());

}


searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
    .then(response => showWeatherData(response))
    .catch(error => console.log(error))
}

showWeatherData = (weatherData) => {
  document.getElementById("weather-type").innerHTML = weatherData.weather[0].description;
  document.getElementById("city-name").innerHTML = weatherData.name;
  document.getElementById("temp").innerHTML = weatherData.main.temp;
  document.getElementById("min-temp").innerHTML = weatherData.main.temp_min;
  document.getElementById("max-temp").innerHTML = weatherData.main.temp_max;
}

