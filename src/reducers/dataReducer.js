//import {chain, find, merge} from 'lodash';
import _ from "lodash";

import * as ACTION from "../actions/types";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION.FETCH_COUNTRIES_INFO:
      return _.unionWith(state, action.payload,
        (country1, country2) => country1.name === country2.name);

    case ACTION.CHECK_COUNTRY:
      return [...state.map((country) => {
        if (country.name === action.payload.name) {
          return { ...country, checked: action.payload.check };
        }
        return { ...country };
      })];

    case ACTION.COUNTRY_CHECKED:
      return state.map((country) => {
        if (country.name === action.payload.name) {
          return country.checked;
        }
      });

    default:
      return state;
  }
};

export default dataReducer;
