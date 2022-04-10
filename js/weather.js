function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      document.querySelector("#weather span:first-child").innerText = "It is";
      document.querySelector("#weather span:nth-child(3)").innerText = "in";
      const weather = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    })
  );
}

function onGeoErr() {
  alert("Cannot find your location. No weather info for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoErr);
