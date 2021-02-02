import _ from "lodash";

import apiData from "./../data/contriesData";
import * as ACTION from "./types";

export const fetchDataCountriesRegion = (region) => async (dispatch) => {
  const url = `/${region}?fields=name;flag;capital;population;area`;
  const response = await apiData.get(url);
  const payload = response.data;

  dispatch({ type: ACTION.FETCH_COUNTRIES_INFO, payload: payload });
};

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
