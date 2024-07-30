import React from "react";

import iconHumidity from "../Image/icons8-hygrometer-48.png";
import iconWind from "../Image/icons8-wind-50.png";

export default function WeatherDetail({ weatherInfo }) {
  return (
    <div>
      <div className="weatherDetails">
        <div className="humidity">
          <img
            src={iconHumidity}
            alt="humidity-icon"
            width="30px"
            height="30px"
          />
          <div className="text">
            <span>{weatherInfo?.main?.humidity}%</span>
            <p>Humidity</p>
          </div>
        </div>
        <div className="wind">
          <img src={iconWind} alt="wind-icon" width="30px" height="30px" />
          <div className="text">
            <span>{weatherInfo?.wind?.speed} Km/h</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
