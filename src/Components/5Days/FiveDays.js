import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import './FiveDays.css';

function FiveDays({ forecastData }) {
  const formatTemp = (temp) => (temp - 273.15).toFixed(2); 

  const forecastByDay = forecastData.list.reduce((acc, item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  return (
    <div className="five-days">
      {Object.keys(forecastByDay).map((date) => (
        <Card key={date} variant="outlined" className="day-forecast">
          <CardContent>
            <Typography variant="h6" component="h3">
              {date}
            </Typography>
            {forecastByDay[date].map((item) => (
              <div key={item.dt} className="forecast-item">
                <Typography variant="body1" component="p">
                  Time: <span>{item.dt_txt.split(' ')[1]}</span>
                </Typography>
                <Typography variant="body1" component="p">
                  Temp: <span>{formatTemp(item.main.temp)}°C</span>
                </Typography>
                <Typography variant="body1" component="p">
                  Weather: <span>{item.weather[0].description}</span>
                </Typography>
                <Typography variant="body1" component="p">
                  Precipitation: <span>{(item.pop * 100).toFixed(0)}%</span>
                </Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default FiveDays;
