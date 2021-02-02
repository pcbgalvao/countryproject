//import {chain, find, merge} from 'lodash';
import _ from "lodash";

import * as ACTION from "../actions/types";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION.FETCH_COUNTRIES_INFO:
      //      return {...action.payload};
      return [...action.payload];
    case ACTION.CHECK_COUNTRY:
      return [...state.map((country) => {
        if (country.name === action.payload.name) {
          return { ...country, checked: action.payload.check };
        }
        return {...country};
      })];
    //  if (country.name === name) {
    //return { ...country, checked: checked }; // checked }; //;
    case ACTION.COUNTRY_CHECKED:
      return state.map((country) => {
        if (country.name === action.payload.name) {
          return country.checked;
        }        
      });
    //  if (country.name === name) {
    //return { ...country, checked: checked }; // checked }; //;
    default:
      return state;
  }
};

export default dataReducer;
