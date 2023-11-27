function refreshWeather(response) {
    console.log
}

function searchCity (city) {
    let apiKey ="ed6ft86f6oebcb23b5103ba6e7e43f72";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=ed6ft86f6oebcb23b5103ba6e7e43f72&units=metric';
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search_input");
    let cityElement = document.querySelector("#current_city");
    cityElement.innerHTML = searchInput.value;
    searchCity (searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);