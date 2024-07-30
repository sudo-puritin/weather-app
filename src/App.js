import React, { useState, useEffect } from "react";

import "./style.css";
import SearchBox from "./Components/SearchBox";
import NotFound from "./Components/NotFound";
import WeatherBox from "./Components/WeatherBox";
import WeatherDetail from "./Components/WeatherDetail";

const api = {
  key: "4c160fd4e67b8668d6f6b316163f1ee9",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!searchCity) return;
      setLoading(true);
      try {
        const url = `${api.base}weather?q=${searchCity}&units=metric&appid=${api.key}`;

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setWeatherInfo(data);
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    fetchWeatherData();
  }, [searchCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCity(searchInput);
  };

  return (
    <div className="container">
      <SearchBox
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSubmit={handleSubmit}
      />
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          {errorMessage ? (
            <NotFound errorMessage={errorMessage} />
          ) : (
            <>
              {!!weatherInfo && (
                <>
                  <WeatherBox weatherInfo={weatherInfo} />
                  <WeatherDetail weatherInfo={weatherInfo} />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
