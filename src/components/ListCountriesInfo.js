import React, { useState, useEffect } from "react";

const ListCountries = ({ activateSearchCI, countriesList }) => {
  const [listedCountries, setListedCountries] = useState([]);
  const [countryTerm, setCountryTerm] = useState("");

  useEffect(() => {
    setListedCountries(countriesList);
  }, [countriesList]);

  useEffect(() => {
    const regex = new RegExp(countryTerm.toLowerCase());
    const resultList = countriesList.filter((country) =>
      regex.test(country.name.toLowerCase())
    );

    setListedCountries(resultList);
  }, [countryTerm, countriesList]);

  const onInputChange = (event) => {
    event.preventDefault();
    setCountryTerm(event.target.value);
  };

  const renderedCountriesInfo = listedCountries
    .filter((country) => country.checked)
    .map((country) => {
      const { name, flag, area, population, capital } = country;
      return (
        <div key={name}>
          <div className="ui segment">
            <div className="item">
              <img className="ui avatar image" src={flag} />
              <div className="content">
                <a className="header">{name}</a>
                <div className="description">
                  <b> Area: </b> {area} Km
                  <b> Capital: </b>
                  {capital}
                  <b> Population: </b>
                  {population}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  console.count("ListCountriesInfo");
  return (
    <div>
      {activateSearchCI && (
        <div className="ui form">
          <div className="field">
            <label>Enter Search country</label>
            <input
              className="input"
              value={countryTerm}
              onChange={onInputChange}
            />
          </div>
        </div>
      )}

      <div className="ui  list">{renderedCountriesInfo}</div>
    </div>
  );
};

export default ListCountries;
