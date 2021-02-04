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
  fetchDataCountriesRegion
}) => {
  const [countryTerm, setCountryTerm] = useState("");
  const [regex, setRegex] = useState("");

  let countriesListLength = dataCountriesRegion.length;

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

  if (mode === MODE.READ) {
    countriesListLength = dataCountriesRegion.filter(country => country.checked).length;
    dataCountriesRegion = dataCountriesRegion
      .filter((country) =>
        regex.test(country.name.toLowerCase())
      ).filter((country, index) => {
        if (country.checked) {

          return true;
        }
        return false;
      })
  } else if (mode === MODE.WRITE) {
    dataCountriesRegion = dataCountriesRegion
      .filter((country, index) => {

        return regex.test(country.name.toLowerCase())
      })
      .sort((country1, country2) => {
        if (country1.name > country2.name) {
          return 1
        }
        return -1
      })
      .sort((country1, country2) => {
        if (country1.checked > country2.checked) {
          return -1
        }
        return 1
      })
  }

  const renderedCountriesNames = dataCountriesRegion.map((country) => {
    const { name } = country;
    return (
      <div key={name}>
        <div className="ui relaxed divided list">
          <ShowCountry
            mode={mode}
            country={country}
          />
        </div>
      </div>
    );
  });

  console.count("Search");

  return (
    <React.Fragment>
      <div className="ui float">
        <div className="ui list">
          {(mode !== MODE.INFO && countriesListLength > 1) ?
            <div className="ui form">
              <div className="field">
                <label>Enter Search country</label>
                <input
                  className="input"
                  value={countryTerm}
                  onChange={onInputChange}
                />
              </div>
              Number of countries: {countriesListLength}
            </div>            
            : null}            
        </div>
        <div className="ui list">{renderedCountriesNames}</div>
      </div>
    </React.Fragment>
  );

};

const mapStateToProps = (state, ownProps) => {
  let dataCountriesRegion
  if (ownProps.mode === "INFO") {
    dataCountriesRegion = Object.keys(state.selectedCountry).length > 0 ? [state.selectedCountry] : [];
  } else {
    dataCountriesRegion = state.dataCountriesRegion
  }
  return {
    region: state.region,
    dataCountriesRegion: dataCountriesRegion
  };
};

//export default connect(mapStateToProps, { fetchDataCountriesRegion })(SearchCountryList);
export default connect(mapStateToProps, {
  fetchDataCountriesRegion,
})(SearchCountryList);
