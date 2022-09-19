function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();

dateElement.innerHTML = formatDate(currentTime);

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  searchCity(cityInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function searchCity(city) {
  let apiKey = "c16135a5e580c33729cbd9b170c43741";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;

  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].main;
}
