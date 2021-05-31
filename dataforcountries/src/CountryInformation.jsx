import { useEffect, useState } from "react";
import axios from "axios";

export const CountryInformation = ({ country }) => {
  const { name, capital, population, languages, flag } = country;

  const [capitalWeather, setCapitalWeather] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const wheaterApiUrl = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WHEATHER_API}&query=${capital}`;
    axios.get(wheaterApiUrl).then((response) => {
      setCapitalWeather(response.data.current);
      setIsLoading(false);
    });
  }, []);

  const renderLanguages = () =>
    languages.map((language) => <li>{language.name}</li>);

  const renderweatherTemplate = () => {
    if (capitalWeather) {
      console.log("capitalweather", capitalWeather);
      return (
        <div>
          <ul>
            <li>Temperature: {capitalWeather.temperature}</li>
            <li>Wind: {capitalWeather.wind_speed}</li>
            <li>
              <img
                src={capitalWeather.weather_icons}
                alt={`${capital} status weather`}
              />
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>Capital: {capital}</li>
        <li>Population: {population}</li>
      </ul>
      <h3>Languages</h3>
      <ul>{renderLanguages()}</ul>
      <div>
        <img src={flag} alt={`${name}s-flag`} width={250} />
      </div>
      <h3>Weather</h3>
      {isLoading && capitalWeather ? (
        <span>loading...</span>
      ) : (
        renderweatherTemplate()
      )}
    </div>
  );
};
