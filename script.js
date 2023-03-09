const link = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

const key = '912c622485ebcccfe6e75ebb3dc2de10'
const searchField = document.getElementById('cityField');
const searchBtn = document.getElementById('cityBtn')


const getWeather = async () => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchField.value}&appid=${key}`);
    
        const data = await res.json()
    
        weatherInfo(data)

    } catch (error){
        console.log(`Wystąpił błąd: ${error}`)
        weatherInfo("")
    }

}
const toCelsius = (val) => {
    return (val - 273.15).toFixed(2)
}
const weatherInfo = (data) => {
    const cityName = document.querySelector('#city');
    const cityTemp = document.querySelector('#temp');
    const cityFelt = document.querySelector('#tempFelt');
    const cityPressure = document.querySelector('#pressure');
    const cityHumidity = document.querySelector('#humidity')
    const cityWindspeed = document.querySelector('#windspeed')


    if(!data){
        cityName.textContent = '';
        cityTemp.textContent = '';
        cityFelt.textContent =  ''
        cityPressure.textContent = ''
        cityHumidity.textContent = ''
        cityWindspeed.textContent = ''
        return
    }

    cityName.textContent = data.name;
    cityTemp.textContent = toCelsius(data.main.temp) + "°C";
    cityFelt.textContent =  data.main.feels_like
    cityPressure.textContent = data.main.pressure
    cityHumidity.textContent = data.main.humidity
    cityWindspeed.textContent = data.wind.speed

}
searchBtn.addEventListener('click', () => {

    getWeather()
})