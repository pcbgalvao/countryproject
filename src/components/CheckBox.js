import React from "react";
import { connect } from 'react-redux';
import { checkCountry } from '../actions';

import * as MODE from './types';

const CheckBox = ({ mode, name, checked, checkCountry }) => {
  let classNameButton = "ui small button red";
  let labelButton = mode === MODE.WRITE ? "Uncheck" : "Check";
  if (!checked) {
    classNameButton = "ui small button blue";
    labelButton = mode === MODE.WRITE ? "Check" : "Uncheck";
  }
  return (
    <React.Fragment>
      <div className="ui checkbox">
        <div key={name}>
          <label>
            <button onClick={() => {
              checkCountry(name, !checked);
            }} className={classNameButton}>
              <i className="icon" />
              {labelButton}
            </button>
            <input
              type="checkbox"
              name={name}
              //{...checked ? 'checked=true':'checked=false'}
              //checked={checked!==undefined ? true:false}
              checked={checked}
              onClick={() => {
                checkCountry(name, !checked);
              }}
              onChange={() => {
                checkCountry(name, !checked);
              }}
            />
          </label>

        </div>
      </div>
    </React.Fragment>
  );
};


const mapStateToProps = (state) => {
  return null
};

//export default connect(mapStateToProps, { fetchDataCountriesRegion })(SearchCountryList);
export default connect(mapStateToProps, {
  checkCountry
})(CheckBox);

