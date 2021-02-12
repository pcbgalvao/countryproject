//import {chain, find, merge} from 'lodash';
import _ from "lodash";

import * as ACTION from "../constants";

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION.FETCH_COUNTRIES_INFO:
      return {  ...action.payload, ...state }    

    case ACTION.TOOGLE_CHECKED_COUNTRY: {
      const { name, checked } = action.payload;
      return { ...state, ...state[name].checked = !checked }
    }
    case ACTION.COUNTRY_CHECKED:
      return (state[action.payload]);
    default:
      return state;
  }
};

export default dataReducer;
