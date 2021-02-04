import React from "react";
import { connect } from 'react-redux';
import { checkCountry } from '../actions';
import { selectedCountry } from '../actions';
import { unSelectedCountry } from '../actions';

import * as MODE from './types';

const CheckBox = ({ mode, country, selectedCountry,
  checkCountry }) => {

  const { name, checked } = country;

  let classNameButton;
  let labelButton;
  if (mode === MODE.READ) {
    classNameButton = "ui small button blue";
    labelButton = "Show Info";
  } else if (mode === MODE.WRITE) {
    if (checked) {
      classNameButton = "ui small button red";
      labelButton = "Uncheck"
    } else {
      classNameButton = "ui small button blue";
      labelButton = "Check";
    }
  }

  if (!checked) {
    classNameButton = "ui small button blue";
    labelButton = mode === MODE.WRITE ? "Check" : "Uncheck";
  }

  return (
    <React.Fragment>
      <div className="ui checkbox">
        <div key={name}>
          {(mode === MODE.READ) &&
            <button onClick={() => {
              selectedCountry(country);
            }} className={classNameButton}>
              <i className="icon" />
              {labelButton}
            </button>}
          {(mode === MODE.WRITE) &&
            <button onClick={() => {
              checkCountry(name, !checked);
              if (checked) {
                unSelectedCountry(name)
              }
            }} className={classNameButton}>
              <i className="icon" />
              {labelButton}
            </button>}
        </div>
      </div>
    </React.Fragment>
  );
};


//export default connect(mapStateToProps, { fetchDataCountriesRegion })(SearchCountryList);
export default connect(null, {
  unSelectedCountry,
  selectedCountry,
  checkCountry
})(CheckBox);

