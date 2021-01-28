import React from "react";
import ShowCountry from "./ShowCountry";

const ListCountries = ({ countriesList, setCountriesList }) => {
  
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
    const { name } = country;
    return (
      <div>
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
