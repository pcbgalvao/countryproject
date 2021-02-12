import _ from 'lodash';
import * as ACTION from '../constants';

const checkedCountriesReducers = (state = {}, action) => {
  switch (ACTION.type) {
    case ACTION.CHECKED_COUNTRIES:
      return {...state};
    case ACTION.TOOGLE_CHECKED_COUNTRY:
      return { ...state, ...action.payload }
    case ACTION.UNCHECK_COUNTRY:
      return { ..._.omit(state, action.payload)}
    case ACTION.COUNTRY_CHECKED:
      return (state[action.payload]);
    default:
      return state
  }
}

export default checkedCountriesReducers;