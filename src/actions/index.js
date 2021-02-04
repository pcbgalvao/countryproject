import _ from "lodash";

import apiData from "./../data/contriesData";
import * as ACTION from "./types";

export const fetchDataCountriesRegion = (region) => async (dispatch) => {
  const url = `/${region}?fields=name;flag;capital;population;area;callingCodes;latlng;demonym;numericCode`;
  const response = await apiData.get(url);
  const payload = response.data.map(country=>{
    return{
      ...country,
      checked: false
    }
  });

  dispatch({ type: ACTION.FETCH_COUNTRIES_INFO, payload: payload });
};
export const selectedCountry = country => {
  return {
    type: ACTION.SELECTED_COUNTRY,
    payload: country
  }
}

export const unSelectedCountry = name => {
  return {
    type: ACTION.UNSELECTED_COUNTRY,
    payload: name
  }
}

export const selectedRegion = (region) => {
  return {
    type: ACTION.SELECTED_REGION,
    payload: region,
  };
};

export const checkCountry = (name, check) => {
  return {
    type: ACTION.CHECK_COUNTRY,
    payload: { name, check },
  };
};

export const isCountryChecked = (name) => {
  return {
    type: ACTION.COUNTRY_CHECKED,
    payload: { name },
  };
};
