import React from "react";
import ShowCountry from "./ShowCountry";

const ListCountries = ({ region, countriesList, setCountriesList }) => {
  
  const onInputSelectCountry = (checked, name) => {
    console.log("onInputSelectCountry.event.checked-", checked);
    console.log("onInputSelectCountry.event.name", name);
    setCountriesList(
      countriesList.map((country, i) => {
        if (country.name === name) {
          return { ...country, checked: checked };
        } else {
          return country;
        }
      })
    );
    console.log("onInputSelectCountry.countriesList-", countriesList[0]);
  };

  const renderedCountriesNames = countriesList.map((country) => {
    const { checked, name } = country;
    return (
      <div key={name}>
        <ShowCountry
          country={country}
          onInputSelectCountry={onInputSelectCountry}
        />
      </div>
    );
  });

  console.count("ListCountries");
  return (
    <div className="ui container">
      <div className="ui list">{renderedCountriesNames}</div>
    </div>
  );
};

export default ListCountries;
