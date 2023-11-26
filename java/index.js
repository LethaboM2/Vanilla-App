function handleSearchSubmit (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search_input");
    let cityElement = document.querySelector("#current_city");
    cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);