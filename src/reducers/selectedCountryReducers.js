import * as ACTION from '../constants';

const selectedCountryReducers = (state = {}, action) => {
  switch (action.type) {
    case ACTION.SELECT_COUNTRY:
      return action.payload;
    case ACTION.UNSELECT_COUNTRY: {
      if (state.name === action.payload) {
        return {};
      } else {return state}
    }

    default:
      return state;
  }
}

export default selectedCountryReducers;