import axios from "axios";
import React, { useState, useEffect } from "react";
import CountriesData1 from "../data/contriesData";

const SearchCountryList = ({ region, countriesList, setCountriesList }) => {
  const [countryTerm, setCountryTerm] = useState("");
  const [regex, setRegex] = useState("");

  // Hooks
  //
  useEffect(() => {
    if (region) {
      const doGetCountry = async () => {
        const { data } = await axios.get(
          `https://restcountries.eu/rest/v2/region/${region}?fields=name;flag;capital;population;area`,
          {},
          {}
        );
        //const data = CountriesData1;
        setCountriesList(
          data.map((country) => {
            return { ...country, checked: false };
          })
        );
      };
      doGetCountry();
    }
  }, [region]);

  useEffect(() => {
    setRegex(new RegExp(countryTerm.toLowerCase()));
  }, [countryTerm, countriesList]);

  // Event Handlers
  //
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, checked } = event.target;

    setCountriesList(
      countriesList.map((country) => {
        if (country.name === name) {
          return { ...country, checked: !getCheckedValue(name) }; // checked }; //;
        } else {
          return country;
        }
      })
    );
  };

  const onInputChange = (event) => {
    event.preventDefault();
    setCountryTerm(event.target.value);
  };

  // Functions Helpers
  //
  const getCheckedValue = (name) => {
    let result = false;
    countriesList.map((country) => {
      if (country.name === name) {
        result = !!country.checked;
        console.log("getCheckedValue (name, checked)", name, country.checked);
      }
    });

    return result;
  };

  const renderedCountriesNames = countriesList
    .filter((country) => regex.test(country.name.toLowerCase()))
    .map((country) => {
      const { name } = country;
      const checked = getCheckedValue(name);
      return (
        <div key={name}>
          <div className="item">
            <div className="ui text">{name}</div>
            <div className="ui checkbox ">
              <label >
                <input
                  name={name}
                  type="checkbox"
                  checked={checked}
                  onChange={handleInputChange}
                  onClick={handleInputChange}
                />
              </label>
            </div>
          </div>
        </div>
      );
    });

  console.count("Search");
  return (
    <React.Fragment>
      <div className="ui container">
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
        <div>Countries Shown: {countriesList.length}</div>
        <div className="ui list">{renderedCountriesNames}</div>
      </div>
    </React.Fragment>
  );
};

export default SearchCountryList;
