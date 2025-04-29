document.getElementById("weatherForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "83a03544ece14c2cb04174917252904";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  
    const resultDiv = document.getElementById("weatherResult");
    resultDiv.innerHTML = "Loading...";
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          resultDiv.innerHTML = `❌ Error: ${data.error.message}`;
          return;
        }
  
        const { location, current } = data;
        resultDiv.innerHTML = `
          <h3>${location.name}, ${location.country}</h3>
          <p><strong>${current.temp_c}°C</strong> | ${current.condition.text}</p>
          <img src="https:${current.condition.icon}" alt="${current.condition.text}">
          <p>Humidity: ${current.humidity}%</p>
          <p>Wind: ${current.wind_kph} kph</p>
        `;
      })
      .catch(error => {
        console.error("Error:", error);
        resultDiv.innerHTML = "⚠️ Unable to fetch data.";
      });
  });
  