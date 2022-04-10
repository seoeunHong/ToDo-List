//const API_KEY = "0c4d8daaf167c4f224b9b6b29ff18f66";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    })
  );
}

function onGeoErr() {
  alert("Cannot find your location. No weather info for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoErr);
