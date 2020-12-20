import React, { useEffect, useState } from "react";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "147bed4fcf5c8d8214888518bf9fc5c3"; // add your API key here
let city ="Los Angeles, CA"; // replace this with your city

function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(api).then(response => response.json()).then(data => {
      setWeather(data);
    })
  }, []);

  return (
    <h2>It is currently {weather && weather.main.temp}° in {city}.</h2>
  );
}

export default Weather;