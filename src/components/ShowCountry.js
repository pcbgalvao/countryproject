import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import * as MODE from "./types";

const ShowCountry = ({ mode, name, flag, capital, area, population, checkCountry }) => {
  const [checked, setChecked] = useState(false);
  // const { name, flag, capital, area, population } = country;

  useEffect(() => {
    if (mode === MODE.WRITE) {
      checkCountry(name, !!checked);
    }
  }, [checked, mode]);

  return (
    <React.Fragment>
      <div className="item">
        <i className="icon">
          {mode === MODE.WRITE ? (
            <CheckBox name={name} checked={checked} checkCountry={checkCountry} />
          ) : null}
        </i>
        <div className="content">
          <a className="header">{name}</a>
          <div className="description">
            {mode === MODE.READ ? (
              <div>
                <img className="ui avatar image" src={flag} />
                <b> Capital: </b> {capital} <b> Area: </b> {area} {"sqr mts "}
                <b> Population: </b>
                {population}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowCountry;
