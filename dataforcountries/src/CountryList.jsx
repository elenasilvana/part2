export const CountryList = ({ countries, handleShowCountry }) => {
  const renderCountryList = () =>
    countries.map((country) => (
      <li>
        {country.name}{" "}
        <button onClick={() => handleShowCountry(country)}>Show</button>
      </li>
    ));

  return (
    <div style={{ padding: "10px 0px" }}>
      {countries.length > 0 && countries.length < 11 ? (
        <ul>{renderCountryList()}</ul>
      ) : (
        <span>Please type a country</span>
      )}
    </div>
  );
};
