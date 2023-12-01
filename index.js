function refreshWeather(response) {
  // Get DOM elements
  let temperatureElement = document.querySelector("#temperature");
  let currentCityElement = document.querySelector("#currentCity");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");

  // Update DOM with weather data
  currentCityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(new Date(response.data.time * 1000));
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = `${response.data.condition.temperature}℃`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  
  // Round temperature to nearest whole number
  let temperature = Math.round(response.data.temperature.current);
  
  temperatureElement.innerHTML = temperature;
  
   // Display weather icon
   iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
   // Format date as "Day HH:MM"
   let minutes = date.getMinutes();
   let hours = date.getHours();
   let days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
   ];
   
   let day = days[date.getDay()];

   if (minutes < 10) {
     minutes = `0${minutes}`;
   }

   return `${day} ${hours}:${minutes}`;
}

function searchCity(currentCity) {
    // API key and URL for fetching weather data
    let apiKey = "ed6ft86f6oebcb23b5103ba6e7e43f72";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${apiKey}&units=metric`;
    
    // Fetch weather data and call refreshWeather function
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  
  // Get search input value
  let searchInput = document.querySelector("#search_input");
  
  // Update current city element with search input value
  let currentCityElement = document.querySelector("#currentCity");
  currentCityElement.innerHTML = searchInput.value;

  // Call searchCity function with the search input value
  searchCity(searchInput.value);
}

// Add event listener to the search form submit event
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

// Initial weather display for Cape Town
searchCity("Cape Town");