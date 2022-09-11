const API_KEY = "25bc0bfa5c079c7fe6bcb432d31e2e4e";

//유저 위치를 알아냈을 때 실행 되는 코드
function onGeoSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
    });
}

//유저의 위치를 못 알아냈을 때 실행 되는 코드
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);
