document.addEventListener('DOMContentLoaded', function () {
    fetchWeather();
});

function fetchWeather() {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = '4a744ee95dcff9f19732affedf807e81';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const feelsLike = data.main.feels_like;
            const pop = data.clouds.all; // Assuming probability of precipitation is represented by cloudiness percentage

            weatherInfo.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Feels Like: ${feelsLike}°C</p>
                <p>Probability of Precipitation: ${pop}%</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
