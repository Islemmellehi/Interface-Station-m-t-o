import React from 'react';
import './WeatherCard.css';
import TempHum from '../TempHum/TempHum';

export const VerticalWeatherCard = ({ weather }) => (
    <div className="weather-card vertical">
        <iconComponent />
        <TempHum />

    </div>
);

export const HorizontalWeatherCard = ({ weather }) => (
    <div className="weather-card horizontal">
        
    </div>
);
