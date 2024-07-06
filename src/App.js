import React, { useState, useEffect } from "react";
import Header from "../src/Components/Header/Header";
import SearchBar from "../src/Components/SearchBar/SearchBar";
import Card from "../src/Components/Card/Card";
import FiveDays from "../src/Components/5Days/FiveDays";
import TemperatureChart from "../src/Components/TemperatureChart/TemperatureChart";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "b86ee5760eca2a0f95ee4a2664731108";

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === 200) {
            setWeatherData(data);
            setError(null);
          } else {
            setWeatherData(null);
            setError("City not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setError("Error fetching weather data");
        });

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === "200") {
            setForecastData(data);
            setError(null);
          } else {
            setForecastData(null);
            setError("City not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching forecast data:", error);
          setError("Error fetching forecast data");
        });
    }
  }, [city]);

  return (
    <>
      <Header />
      <SearchBar setCity={setCity} />
      {error && <p className="error">{error}</p>}
      {weatherData && weatherData.cod === 200 && (
        <Card weatherData={weatherData} />
      )}
      {forecastData && forecastData.cod === "200" && (
        <>
          <FiveDays forecastData={forecastData} />
          <TemperatureChart forecastData={forecastData} />
        </>
      )}
    </>
  );
}

export default App;
