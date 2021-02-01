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

  const checkCountry = () => {};

  //  const regexFiltered = _.filter(dataCountriesRegion, (country) =>
  //  regex.test(country.name.toLowerCase())
  const regexFiltered = dataCountriesRegion.filter((country) =>
    regex.test(country.name.toLowerCase())
  );
  const checkedCountryFiltered = regexFiltered;
  //const renderedCountriesNames = _.forIn(checkedCountryFiltered,
  const renderedCountriesNames = regexFiltered.map((country) => {
    const { name, flag, capital, area, population } = country;
    return (
      <div key={name}>
        <div className="ui relaxed divided list">
          <ShowCountry
            mode={mode}
            name={name}
            flag={flag}
            capital={capital}
            area={area}
            population={population}
            checkCountry={checkCountry}
          />
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
        <div>Countries Shown: {dataCountriesRegion.length}</div>
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
