//variaveis e selecões de elementos
const apiKey = "e0e858d4e63ead865a94767e73f57f72";
const apiCountry = "https://flagsapi.com/BR/flat/64.png";

const cityinput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const deskElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidity = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

// funcoes
const getweatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data);

} 

const showWeatherData = (city) => {
    getweatherData(city);
}


// eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityinput.value;

    showWeatherData(city);

    })
