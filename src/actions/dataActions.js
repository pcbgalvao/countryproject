import _ from "lodash";

import apiData from "./../data/contriesData";
import * as ACTION from "../constants";

export const fetchDataCountriesRegion = (region) => async (dispatch) => {
  const url = `/${region}?fields=name;flag;capital;population;area;callingCodes;latlng;demonym;numericCode`;
  //const url = `/${region}?fields=name;flag;capital;population;area;demonym;numericCode`;
  const response = await apiData.get(url);

  const payload = response.data.reduce((accu, country) =>
    ({ ...accu, [country.name]: { ...country, checked: false } }), {});

  dispatch({ type: ACTION.FETCH_COUNTRIES_INFO, payload: payload });
};

export const toogleCheckedCountry = (country) => {
  return {
    type: ACTION.TOOGLE_CHECKED_COUNTRY,
    payload: country,
  };
};

export const countryChecked = (name) => {
  return {
    type: ACTION.COUNTRY_CHECKED,
    payload: name
  }
};