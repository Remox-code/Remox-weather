const input =document.querySelector("#input");
const button =document.querySelector("#button");
const info =document.querySelector("#info");

button.addEventListener("click" , getWeather);

async function getWeather() {
    const city = input.value.trim();
    if (!city) {
        alert("شهر وارد نشده");
        return;
    }

    localStorage.setItem("lastCity", city);   

    const apiKey = "96cff9fd5eec36cb1d952f3c3322564f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("شهر پیدا نشد");

        const data = await res.json();
        renderInfo(data);

    } catch (err) {
        info.innerHTML = `<li>${err.message}</li>`;
    }
}

window.addEventListener("load", () => {
    const savedCity = localStorage.getItem("lastCity");
    if (savedCity) {
        input.value = savedCity;
        getWeather();
    }
});


function renderInfo(data) {

    const icon = data.weather[0].icon;  
    info.innerHTML = `
        <li>city name : ${data.name}</li>
        <li>temp : ${Math.round(data.main.temp)}°C</li>
        <li>speed : ${data.wind.speed} m/s</li>
        <li>weather : ${data.weather[0].description}</li>
        <li>humidity : ${data.main.humidity}</li>
        <li>weather feels : ${data.main.feels_like }</li>
        <li>min temp : ${Math.round(data.main.temp_min)}</li>
        <li>max temp : ${Math.round(data.main.temp_max )}</li>

        <li>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
        </li>
    `;
}


   

// -------------------------------------------------------------------------------------------------------------

// Background

const container = document.querySelector(".bg-balls");
for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.className = "ball";

    const size = Math.random() * 80 + 80;
    b.style.width = size + "px";
    b.style.height = size + "px";

    b.style.left = Math.random() * 100 + "vw";
    b.style.top = Math.random() * 100 + "vh";

    b.style.animationDuration = Math.random() * 8 + 10 + "s";
    b.style.opacity = (Math.random() * 0.3 + 0.2);

    container.appendChild(b);
}

// -------------------------------------------------------------------------------------------------------------
const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
    localStorage.removeItem("lastCity");  // پاک کردن ذخیره
    input.value = "";                     // پاک کردن اینپوت
    info.innerHTML = "";                  // پاک کردن اطلاعات
});




















































