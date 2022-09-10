//never show API key on your js file
const API_KEY = `30af2c2940e9b673b84bb2d8c541589e`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = data => {

    setInnerText('weather', data.weather[0].main)
    setInnerText('temperature', data.main.temp);
}

const setInnerText = (id, text) => {
    const temperature = document.getElementById(id);

    temperature.innerText = text;

}


document.getElementById('btn-search').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    const city = document.getElementById('city');
    city.innerText = inputFieldValue;
    loadTemperature(inputFieldValue);
})

loadTemperature('dhaka');