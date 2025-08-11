const main = document.querySelector('.main')
const inputfield = document.querySelector('.input-field')
const temp = document.querySelector('.temperature')
const error = document.querySelector('.error')
const cityname = document.querySelector('.name')
const humidity = document.querySelector('.humidity-h2')
const wind = document.querySelector('.windspeed')
const searchbtn = document.querySelector('.search')
const weathericon = document.querySelector('.weather-icon')
const apiKey = 'YOUR_API_KEY_HERE'; // ← Replace with your OpenWeatherMap API key

searchbtn.addEventListener('click', () => {
    if (inputfield.value != '') {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputfield.value}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then((res) => {
                inputfield.value = ''
                return res.json()
            }).then((data) => {
                error.innerText = ''
                temp.innerText = Math.floor(data.main.temp) + ' °C';
                cityname.innerText = data.name
                humidity.innerText = data.main.humidity + '%'
                wind.innerText = data.wind.speed + 'Km/h'
                console.log(data.weather[0].main);
                if (data.weather[0].main == 'Clear') {
                    weathericon.src = './images/clear.png'
                }
                else if (data.weather[0].main == 'Rain') {
                    weathericon.src = './images/rain.png'
                }
                else if (data.weather[0].main == 'Clouds') {
                    weathericon.src = './images/clouds.png'
                }
                else if (data.weather[0].main == 'Snow') {
                    weathericon.src = './images/snow.png'
                }
                else if (data.weather[0].main == 'Drizzle') {
                    weathericon.src = './images/drizzle.png'
                }
                else if (data.weather[0].main == 'Mist') {
                    weathericon.src = './images/mist.png'
                }
                return data
            }).catch((err) => {
                error.innerText = 'no match found'
                main.style.display = 'none';
            })
    }
    else {
        error.innerText = 'enter city or country name'
    }
    main.style.display = 'unset';
})

