import React from "react";

export default function WeatherBox({ weatherInfo }) {
  return (
    <div>
      <div className="weatherBox">
        <img
          src={
            weatherInfo
              ? `https://openweathermap.org/img/wn/${weatherInfo?.weather[0]?.icon}@2x.png`
              : ""
          }
          alt={""}
        />
        <p className="temperature">
          {parseInt(weatherInfo?.main?.temp)} <span>℃</span>
        </p>
        <p className="description">
          {weatherInfo ? weatherInfo?.weather[0]?.description : ""}
        </p>
      </div>
    </div>
  );
}
