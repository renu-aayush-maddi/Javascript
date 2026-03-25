
async function getWeather() {
    let city = document.getElementById("city").value
    let result = document.getElementById("result")
    
    let geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    console.log(geo)
    let geoData = await geo.json()
    console.log(geoData)

    let lat = geoData.results[0].latitude
    let lon = geoData.results[0].longitude

    let weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    let weatherData = await weather.json()
    console.log(weatherData)

    let temp = weatherData.current_weather.temperature
    let wind = weatherData.current_weather.windspeed

    result.textContent =`Temperature:${temp}°C,Wind Speed:${wind} km/h`;
}