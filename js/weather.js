function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const API_KEY = "8b3f8920d9cb41849d8a6efc1715dae1";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const city = document.querySelector(".weather span:first-child");
            const weather = document.querySelector(".weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)} °`;
            city.innerText = data.name;
    });
}
function onGeoFail() {
    alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);