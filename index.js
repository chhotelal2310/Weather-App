const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather_icon");
async function getWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=25ae6e42d5001105bf0d441c18a08b5b&units=metric`);
    if (res.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await res.json();
        console.log(data);
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.country_code').innerHTML=data.sys.country;
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed+ "km/h";
        var wther = data.weather[0].main;
        switch (wther) {
            case "Clouds":
                weatherIcon.src = 'clouds.png';
                break;
            case "Clear":
                weatherIcon.src = "clear.png";
                break;
            case "Rain":
                weatherIcon.src = "rain.png";
                break;
            case "Drizzler":
                weatherIcon.src = "drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "mist.png";
                break;
            case "Snow":
                weatherIcon.src = "snow.png";
                break;
            default:
                break;
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}
searchBtn.addEventListener('click', function (){
    getWeather(searchInput.value);
});

