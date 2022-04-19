function displayTemperature(response) {
  let temperatureElement = document.querySelector("#big-temp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].main;

  let humidityElement = document.querySelector(".humidity");
  humidityElement.innerHTML = `Humidity: ${Math.round(
    response.data.main.humidity
  )}%`;

  let windElement = document.querySelector(".wind");
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} m/h`;

  let cityElement = document.querySelector(".weather-heading");
  cityElement.innerHTML = `${response.data.name} Weather Conditions`;
}

let apiKey = "b1b855fb121f5178057b1006a42c2d0b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
