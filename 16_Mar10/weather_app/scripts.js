(function () {

    document.addEventListener('DOMContentLoaded', apiCall)

    const API_KEY = "a38730517a1758d371ecb1a094c36840";
    let city = "Helsinki";
    // let place = document.getElementById("cityCountry");
    // console.log(place);
    // place.textContent = "some place";
    // console.log(`place is: ${typeof(place)}`);

    async function apiCall() {
        const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const json = await resp.json();
            const temperature = json;
            console.log(temperature);
            
            let temperatureCelsius = Math.round(temperature.main.temp);
            console.log(temperature.main.temp);

            let temperatureCity = temperature.name;
            console.log(temperature.name);

            let temperatureCountry = temperature.sys.country;
            console.log(temperature.sys.country);

            let weatherDescription = temperature.weather[0].description;

            let weatherIcon = temperature.weather[0].icon;
            console.log(temperature.weather[0].icon)

            console.log(temperature.weather[0].description);
            return populateFields(temperatureCity,temperatureCountry, weatherDescription, temperatureCelsius, weatherIcon);
            }

    function populateFields(temperatureCity, temperatureCountry, weatherDescription, temperatureCelsius, weatherIcon) {
        
        console.log(`let's see if we can fetch here the city: ${temperatureCity}, ${temperatureCountry}, ${weatherDescription}, ${temperatureCelsius}, ${weatherIcon}`);

        document.querySelector("#cityCountry").innerText = `${temperatureCity}, ${temperatureCountry}`;
        document.querySelector("#tempCelsius").innerText = `${temperatureCelsius}°C`;
        document.querySelector("#description").innerText = `${weatherDescription}`;
        document.querySelector("#iconUrl").src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;


        // console.log(`Place variable is ${place});

    /*     place.textContent = `${temperatureCity}, ${temperatureCountry}`; */



    };

})();
