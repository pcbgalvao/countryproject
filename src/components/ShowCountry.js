import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import * as MODE from "./types";

const ShowCountry = ({ mode, country }) => {
  const { name, flag} = country;

  const renderedCountryFields = (country) => Object.keys(country).map(field => {
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

  return (
    <React.Fragment>
      <div className="item">
        <i className="icon">
          {mode !== MODE.INFO ? (
            <CheckBox mode={mode} country={country} />
          ) : null}
        </i>

        <div className="content">
          <a className="header">{name}</a>
          <div className="description">
            {mode === MODE.INFO ? (
              <div>
                <img className="ui avatar image" src={flag} />
                <div className="ui list">
                  {renderedCountryFields(country)}
                </div>
              </div>
            ) : null}

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowCountry;
