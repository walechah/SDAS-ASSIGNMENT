import React from 'react';
import { Card as MUICard, CardContent, Typography, Grid } from '@mui/material';
import './Card.css';

function Card({ weatherData }) {
  const { main, weather, wind } = weatherData;
  const temperature = main.temp - 273.15;
  const feelsLike = main.feels_like - 273.15;

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
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
      </Grid>
    </Grid>
  );
}

export default Card;
