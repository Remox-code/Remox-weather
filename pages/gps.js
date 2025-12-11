(function () {
  const container = document.querySelector('.bg-balls');
  if (!container) return;

  const COUNT = 30; // تعداد نقاط — زیاد ولی خیلی کوچک، اذیت نمی‌کنه

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < COUNT; i++) {
    const el = document.createElement('span');
    el.className = 'ball';

    // اندازه خیلی کوچک
    const size = rand(20, 20) + 'px';

    // رنگ‌های سفید تا طوسی
    const grey = Math.floor(rand(180, 255));
    const color = `rgba(${grey}, ${grey}, ${grey}, 0.9)`;

    el.style.setProperty('--size', size);
    el.style.setProperty('--color', color);
    el.style.left = rand(0, 100) + '%';
    el.style.top = rand(0, 100) + '%';
    el.style.setProperty('--duration', rand(8, 20) + 's');
    el.style.setProperty('--delay', rand(-10, 0) + 's');

    container.appendChild(el);
  }
})();
const apiKey = "96cff9fd5eec36cb1d952f3c3322564f";

document.getElementById("getWeatherBtn").addEventListener("click", getLocation);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather, gpsError);
  } else {
    alert("مرورگر شما GPS ساپورت نمی‌کند");
  }
}

async function showWeather(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fa`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("weather").innerHTML = `
    <p> location: <strong>${data.name || "نامشخص"}</strong></p>
    <p> temp: <strong>${data.main.temp}°C</strong></p>
    <p> weather feels: <strong>${data.main.feels_like}°C</strong></p>
    <p> humidity: <strong>${data.main.humidity}%</strong></p>
    <p> wind speed: <strong>${data.wind.speed} m/s</strong></p>
    <p> weather: <strong>${data.weather[0].description}</strong></p>
  `;
}

function gpsError() {
  alert("اجازه GPS داده نشده یا خطا رخ داد");
}
