
import React from "react";

const ListCountries = ({ countriesList }) => {  

  const renderedCountriesInfo = countriesList
    .filter((country) => country.checked)
    .map((country) => {
      return (
        <div className="ui segment">
          <div className="item">
            <img className="ui avatar image" src={country.flag} />
            <div className="content">
              <a className="header">{country.name}</a>
              <div className="description">
                <b> Area: </b> {country.area} Km
                <b> Capital: </b>
                {country.capital}
                <b> Population: </b>
                {country.population}
              </div>
            </div>
          </div>
        </div>
      );
    });

    console.count ("ListCountriesInfo");
  return (
    <div>
      <div className="ui  list">{renderedCountriesInfo}</div>
    </div>
  );
};

export default ListCountries;
