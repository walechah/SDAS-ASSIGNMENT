import React from 'react';
import { Card as MUICard, CardContent, Typography } from '@mui/material';
import './Card.css';

function Card({ weatherData }) {
  const { main, weather, wind } = weatherData;
  const temperature = main.temp - 273.15; 
  const feelsLike = main.feels_like - 273.15;

  return (
    <div className="Card">
      <MUICard variant="outlined" className="card">
        <CardContent>
          <Typography variant="h5" component="h2">
            Weather in <span>{weatherData.name}</span>
          </Typography>
          <Typography variant="body1" component="p">
            Temperature: {temperature.toFixed(2)}°C
          </Typography>
          <Typography variant="body1" component="p">
            Feels Like: {feelsLike.toFixed(2)}°C
          </Typography>
          <Typography variant="body1" component="p">
            Humidity: {main.humidity}%
          </Typography>
          <Typography variant="body1" component="p">
            Wind Speed: {wind.speed} m/s
          </Typography>
          <Typography variant="body1" component="p">
            Weather: {weather[0].description}
          </Typography>
        </CardContent>
      </MUICard>
    </div>
  );
}

export default Card;
