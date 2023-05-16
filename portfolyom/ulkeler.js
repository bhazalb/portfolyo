const API_KEY = 'a5852d7f9c9d5a3f6a108b491d42d88c';
        const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  
        function getWeather() {
          const city = document.querySelector('#city').value;
          const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  
          fetch(url)
            .then(response => response.json())
            .then(data => {
              const weather = data.weather[0].main;
              const temp = data.main.temp;
              const description = data.weather[0].description;
  
              document.querySelector('#weather').innerHTML = `
                <p><b>Hava Durumu:</b> ${weather}</p>
                <p><b>Sıcaklık:</b> ${temp} &#8451;</p>
                <p><b>Açıklama:</b> ${description}</p>
              `;
            })
            .catch(error => console.error(error));
        }