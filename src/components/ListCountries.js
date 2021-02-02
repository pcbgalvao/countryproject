import _ from "lodash";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataCountriesRegion, checkCountry } from "../actions";
import ShowCountry from "./ShowCountry";
import * as MODE from "./types";

const SearchCountryList = ({
  mode,
  region,
  dataCountriesRegion,
  fetchDataCountriesRegion,
  //  checkCountry,
}) => {
  const [countryTerm, setCountryTerm] = useState("");
  const [regex, setRegex] = useState("");

  useEffect(() => {
    if (region && mode === MODE.WRITE) {
      fetchDataCountriesRegion(region);
    }
  }, [mode, region]);

  useEffect(() => {
    setRegex(new RegExp(countryTerm.toLowerCase()));
  }, [countryTerm, dataCountriesRegion]);

  const onInputChange = (event) => {
    setCountryTerm(event.target.value);
  };

  //  const regexFiltered = _.filter(dataCountriesRegion, (country) =>
  //  regex.test(country.name.toLowerCase())

  //const renderedCountriesNames = _.forIn(checkedCountryFiltered,
  let countriesListLength = 0;
  if (mode === MODE.READ) {
    dataCountriesRegion = dataCountriesRegion
      .filter((country) =>
        regex.test(country.name.toLowerCase())
      ).filter((country, index) => {
        if (country.checked) {
          countriesListLength = index;
          return true;
        }
        return false;
      })
  } else { // MODE.WRITE
    dataCountriesRegion = dataCountriesRegion
      .filter((country, index) => {
        countriesListLength = index;
        return regex.test(country.name.toLowerCase())
      })
      .sort((country1, country2) => {
        if (country1.checked > country2.checked) {
          return -1
        }
        return 1
      })

  }

  const renderedCountriesNames = dataCountriesRegion.map((country) => {
    const { name, flag, capital, area, population, checked } = country;
    return (
      <div key={name}>
        <div className="ui relaxed divided list">
          <ShowCountry
            mode={mode}
            name={name}
            flag={flag}
            capital={capital}
            area={area}
            checked={checked}
            population={population}
          />
        </div>
      </div>
    );
  });

  console.count("Search");

  return (
    <React.Fragment>
      <div className="ui container">
        {(mode === MODE.WRITE || (mode === MODE.READ && countriesListLength > 0)) ?
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
          : null}        
        <div className="ui list">{renderedCountriesNames}</div>
      </div>
    </React.Fragment>
  );

};

const mapStateToProps = (state) => {
  return {
    region: state.region,
    dataCountriesRegion: state.dataCountriesRegion,
  };
};

//export default connect(mapStateToProps, { fetchDataCountriesRegion })(SearchCountryList);
export default connect(mapStateToProps, {
  fetchDataCountriesRegion,
})(SearchCountryList);
