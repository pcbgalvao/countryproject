import _ from "lodash";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ShowCountry from "./ShowCountry";
import * as MODE from "../constants";
import { fetchData } from '../store/dataSlice';

const ListCountries = ({
  mode,
  selectedRegion,
  dataLength,
  data,
  fetchData
}) => {

  console.log('data-', data);
  console.log('dataLength-', dataLength);
  console.log('mode-', mode);

  const [countryTerm, setCountryTerm] = useState("");
  const [regex, setRegex] = useState("");

  useEffect(() => {
    if (selectedRegion && mode === MODE.WRITE) {
      fetchData(selectedRegion);
    }
  }, [mode, selectedRegion]);

  useEffect(() => {
    setRegex(new RegExp(countryTerm.toLowerCase()));
  }, [countryTerm, data]);


  // Helper Functions
  const sortByChecked = (country1, country2) => {
    if (country1.checked > country2.checked) { return -1 }
    else { return 1 }
  }

  const sortByCountry = (country1, country2) => {
    if (country1.name > country2.name) { return 1 }
    else {
      return -1
    }
  }

  if (mode === MODE.WRITE || mode === MODE.READ) {
    data = Object.values(data)
      .filter((country) => regex.test(country.name.toLowerCase()))
      .sort(sortByCountry)
      .sort(sortByChecked)

  }

  const renderedCountriesNames = Object.values(data).map((country) => {
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
  if (Object.keys(state.data).length === 0) {
    return ({
      dataLength: 0,
      data: {}
    })
  }
  switch (mode) {
    case MODE.WRITE:
      return ({
        dataLength: _.size(state.data),
        data: state.data
      })
    case MODE.READ: {
      const tempListCountries = Object.values(state.data).filter(country => country.checked);
      // Alternative code: 
      // const tempListCountries= _.filter(state.data, country=>country.checked)
      return ({
        dataLength: tempListCountries.length,
        data: tempListCountries
      })
    }
    case MODE.INFO:
      return ({
        dataLength: _.size(state.selectedCountry) > 0 ? 1 : 0,
        data: {[state.selectedCountry.name]: state.selectedCountry}
      })
  }
};

export default connect(mapStateToProps, { fetchData })(ListCountries);

