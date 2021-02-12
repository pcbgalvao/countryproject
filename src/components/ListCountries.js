import _ from "lodash";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toogleCheckedCountry } from "../actions";
import { fetchDataCountriesRegion } from "../actions";
import ShowCountry from "./ShowCountry";
import * as CONSTS from "../constants";

const ListCountries = ({
  mode,
  selectedRegion,
  dataLength,
  dataCountries,
  fetchDataCountriesRegion
}) => {
  const [countryTerm, setCountryTerm] = useState("");
  const [regex, setRegex] = useState("");

  useEffect(() => {
    if (selectedRegion && mode === CONSTS.WRITE) {
      fetchDataCountriesRegion(selectedRegion);
    }
  }, [mode, selectedRegion]);

  useEffect(() => {
    setRegex(new RegExp(countryTerm.toLowerCase()));
  }, [countryTerm, dataCountries]);


  if (mode === CONSTS.READ) {
    dataCountries = Object.values(dataCountries)
      .filter((country) => country.checked)
      .filter((country) =>
        regex.test(country.name.toLowerCase())
      )

  } else if (mode === CONSTS.WRITE) {
    dataCountries = Object.values(dataCountries)
      .filter((country) =>
        regex.test(country.name.toLowerCase())
      )
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

  const renderedCountriesNames = Object.values(dataCountries).map((country) => {
    const { name } = country;
    return (
      <div className="ui segment">
        <div key={name}>
          <div className="item">
            <ShowCountry
              mode={mode}
              country={country}
            />
          </div>
        </div>
      </div>
    );
  });

  console.count("Search");
  console.log('mode-', mode);
  console.log('dataLength-', dataLength);

  return (
    <React.Fragment>
      {(dataLength > 1) ?
        <div className="ui form">
          <div className="field">
            <label>Search country</label>
            <input
              className="input"
              value={countryTerm}
              onChange={(event) => { setCountryTerm(event.target.value) }}
            />
          </div>
              Number of countries: {dataLength}
        </div>
        : null}

      {(dataLength > 0) ?
        <div className="ui list">{renderedCountriesNames}</div>
        : null
      }
    </React.Fragment >
  );

};

const mapStateToProps = (state, ownProps) => {
  const mode = ownProps.mode;
  if (Object.keys(state.dataCountries).length === 0) {
    return ({
      dataLength: 0,
      dataCountries: {}
    })
  }
  switch (mode) {
    case CONSTS.WRITE:
      return ({
        dataLength: _.size(state.dataCountries),
        dataCountries: state.dataCountries
      })
    case CONSTS.READ: {
      const tempListCountries = Object.values(state.dataCountries).filter(country => country.checked);
      return ({
        dataLength: tempListCountries.length,
        dataCountries: tempListCountries
      })
    }
    case CONSTS.INFO:
      return ({
        dataLength: _.size(state.selectedCountry) > 0 ? 1 : 0,
        dataCountries: [state.selectedCountry]
      })
  }
};

export default connect(mapStateToProps, { fetchDataCountriesRegion })(ListCountries);
// export default connect(mapStateToProps, null)(SearchCountryList);
