document.addEventListener("DOMContentLoaded", function () {
  const API_KEY = "72ae55171510ddae2f85632a35d52e54";

  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:nth-child(3)");

        city.innerText = data.name + " / ";

        temp.innerHTML = ` <br/> Temperature: ${data.main.temp}°C <br/> Feels like: ${data.main.feels_like}°C`;

        const weatherDescription = data.weather[0].main;
        const iconCode = data.weather[0].icon;

        weather.innerText = weatherDescription;

        const weatherIcon = document.createElement("img");
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.alt = `${weatherDescription} Icon`;
        weatherIcon.style.width = "50px";
        weatherIcon.style.height = "50px";

        weather.appendChild(weatherIcon);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }

  function onGeoError() {
    alert("Can't find you. No weather for you");
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
