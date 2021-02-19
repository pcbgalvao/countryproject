import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import * as MODE from "../constants";

const ShowCountry = ({ mode, country }) => {
  const { name, flag } = country;

  if (mode === MODE.INFO) {
    console.log("stop");
  }

  const renderedCountryFields = Object.keys(country).map(field => {
    if (field !== 'name' && field !== 'checked' && field !== "flag") {
      return (
        <div key={field}>
          <div className="item">
            <b> {field}: </b> {country[field]}
          </div>
        </div>
      )
    }
  })

  //console.log('renderedCountryFields(country)-', renderedCountryFields(country));

  if (Object.keys(country).length === 0) {
    return null
  }

  return (
    <React.Fragment>
      <div className="content">
        <div className="ui left labeled button">

          {mode !== MODE.INFO ? (
            <CheckBox mode={mode} country={country} />
          ) : null}

        </div>
        <a className="ui verticaly centered basic">{name}</a>
        <div className="description">
          {mode === MODE.INFO ? (
            <div>
              <img className="ui avatar image" src={flag} />
              <div className="ui list">
                {renderedCountryFields}
              </div>
            </div>
          ) : null}

        </div>
      </div>

    </React.Fragment>
  );
};

export default ShowCountry;
