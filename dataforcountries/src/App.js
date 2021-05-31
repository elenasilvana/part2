import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CountryList } from "./CountryList";
import { CountryInformation } from "./CountryInformation";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountryName, updateSearchName] = useState("");
  const [filteredContries, setFilteredCountries] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  useEffect(() => {
    if (searchCountryName) {
      const filteredData = countries.filter((country) =>
        country.name.toLowerCase().includes(searchCountryName.toLowerCase())
      );
      setFilteredCountries(filteredData);
    }
  }, [searchCountryName, countries]);

  const handleInputChange = (e) => {
    updateSearchName(e.target.value);
  };

  const handleShowCountry = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  return (
    <div className="App">
      <div>
        <span>Find countries:</span>
        <input value={searchCountryName} onChange={handleInputChange} />
      </div>
      <div>
        {selectedCountry ? (
          <CountryInformation country={selectedCountry} />
        ) : filteredContries.length === 1 ? (
          <CountryInformation country={filteredContries[0]} />
        ) : (
          <CountryList
            countries={filteredContries}
            handleShowCountry={handleShowCountry}
          />
        )}
      </div>
    </div>
  );
}

export default App;
