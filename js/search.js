const searchBar = document.querySelector("#search-bar");
const searchInput = document.querySelector("#search-bar input");

function handleSearchBarSubmit(event) {
    event.preventDefault();
    location.href=`https://www.google.com/search?q=${searchInput.value}`;
}

searchBar.addEventListener("submit", handleSearchBarSubmit);