import { useState, useEffect } from 'react'
import './App.css'

import searchIcon from "./assets/search.png";
import clearIcon from "./assets/sun.png";
import cloudIcon from "./assets/cloudy.png";
import drizzleIcon from "./assets/drizzle.png";
import rainIcon from "./assets/rain.png";
import windIcon from "./assets/wind.png";
import snowIcon from "./assets/snow.png";
import humidityIcon from "./assets/weather.png";

const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
  return (
    <>
      <div className='image'>
        <img src={icon} alt="Image" />
      </div>
      <div className='temp'>{temp}°C</div>
      <div className='location'>{city}</div>
      <div className='country'>{country}</div>
      <div className='cord'>
        <div>
          <span className="lat">latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">longitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className='data-conatiner'>
        <div className='element'>
          <img src={humidityIcon} alt="humidity" className='icon' />
          <div className='data'>
            <div className='humidity-percent'>{humidity}%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={windIcon} alt="wind" className='icon' />
          <div className='data'>
            <div className='humidity-percent'>{wind}</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>

      </div>

    </>
  );

};

function App() {
  let api_key = "4c8e9a96d3ceddb626b13bd9e7e77633";
  const [text, setText] = useState("London")

  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("London");
  const [country, setCountry] = useState("GB");
  const [lat, setLat] = useState("0");
  const [log, setLog] = useState("0");
  const [humidity, setHumidity] = useState("0");
  const [wind, setWind] = useState("0");

  const [cityNotFound, setcityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  }

  const search = async () => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try {
      let res = await fetch(url)
      let data = await res.json();
      // console.log(data)
      if (data.cod === "404") {
        console.error("City not found");
        setcityNotFound(true);
        setLoading(false);
        return;
      }

      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country)
      setLat(data.coord.lat)
      setLog(data.coord.lon)

      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon);
      setcityNotFound(false);

    } catch (error) {
      console.error("An error occurred:", error.message);
      setError("An error occurred while fetching weather data.");

    } finally {
      setLoading(false);
    }

  };

  const handleCity = (e) => {

    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useState(function () {
    search();
  }, []);

  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type="text" className='cityInput' placeholder='Search City' onChange={handleCity} value={text}
            onKeyDown={handleKeyDown} />
          <div className='search-icon' onClick={() => search()}>
            <img src={searchIcon} alt="search" />
          </div>
        </div>

        {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log}
          humidity={humidity} wind={wind} />}

        {loading && <div className='loading-message'>Loading...</div>}
        {error && <div className='error-message'>{error}</div>}
        {cityNotFound && <div className='city-not-found'>City not found</div>}
      </div>
    </>
  )
}

export default App
