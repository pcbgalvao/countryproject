import React from "react";
import { connect } from 'react-redux';
import { toogleCheckedCountry } from '../store/dataSlice';
import { selectCountry } from '../store/selectedCountrySlice';
import { unSelectCountry } from '../store/selectedCountrySlice';

import * as MODE from '../constants';

const CheckBox = ({
  mode,
  country,
  unSelectCountry,
  selectCountry,
  toogleCheckedCountry
}) => {

  const { name, checked } = country;

  let classNameButton;
  let labelButton;
  if (mode === MODE.READ) {
    classNameButton = "ui small button green";
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
      <div className="">
        {(mode === MODE.READ) &&
          <button onClick={() => {
            selectCountry(country);
          }} className={classNameButton}>
            <i className="icon" />
            {labelButton}
          </button>}
        {(mode === MODE.WRITE) &&
          <button onClick={() => {
            if (checked) {
              unSelectCountry(name)
            }
            toogleCheckedCountry(country);

          }} className={classNameButton}>
            <i className="icon" />
            {labelButton}
          </button>}

      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.country.name;
  return ({
    country_checked: state.data[name].checked
  })
}

export default connect(mapStateToProps, {
  unSelectCountry,
  selectCountry,
  toogleCheckedCountry
})(CheckBox);

